import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AddWorkspaceModal } from './AddWorkspaceModal';

const workspaces = [
  { id: 'kowalski', name: 'Rodzina Kowalskich', emoji: '🌳' },
  { id: 'nowak', name: 'Rodzina Nowaków', emoji: '🌲' },
  { id: 'wisniewski', name: 'Rodzina Wiśniewskich', emoji: '🌴' },
];

export const WorkspaceSelector: React.FC = () => {
  const [workspaceList, setWorkspaceList] = useState(workspaces);
  const [selectedWorkspace, setSelectedWorkspace] = useState(() => {
    const saved = localStorage.getItem('selectedWorkspace');
    if (saved) {
      const parsed = JSON.parse(saved);
      return workspaceList.find(w => w.id === parsed.id) || workspaceList[0];
    }
    return workspaceList[0];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const filteredWorkspaces = workspaceList.filter(workspace =>
    workspace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const maxVisible = 8;
  const totalHeight = filteredWorkspaces.length * 40; // 40px per item
  const containerHeight = maxVisible * 40;
  const scrollableHeight = Math.max(0, totalHeight - containerHeight);
  const scrollPercentage = scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;

  const handleWorkspaceChange = (workspace: typeof workspaceList[0]) => {
    setSelectedWorkspace(workspace);
    localStorage.setItem('selectedWorkspace', JSON.stringify(workspace));
  };

  useEffect(() => {
    const savedList = localStorage.getItem('workspaceList');
    if (savedList) {
      const parsed = JSON.parse(savedList);
      setWorkspaceList(parsed);
    }
  }, []);

  const handleAddWorkspace = (newWorkspace: { name: string; emoji: string; description: string }) => {
    const id = newWorkspace.name.toLowerCase().replace(/\s+/g, '-');
    const workspace = {
      id,
      name: newWorkspace.name,
      emoji: newWorkspace.emoji,
      description: newWorkspace.description,
    };
    
    const updatedList = [...workspaceList, workspace];
    setWorkspaceList(updatedList);
    setSelectedWorkspace(workspace);
    localStorage.setItem('selectedWorkspace', JSON.stringify(workspace));
    localStorage.setItem('workspaceList', JSON.stringify(updatedList));
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setScrollPosition(target.scrollTop);
  };

  return (
    <>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center gap-1.5 px-3 rounded-md transition-all hover:bg-amber-4"
          style={{
            backgroundColor: 'var(--amber-2)',
            border: '1px solid var(--amber-6)',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
            <span style={{ fontSize: '16px' }}>{selectedWorkspace?.emoji}</span>
          <span 
            className="text-xs font-medium"
            style={{ 
              color: 'var(--brown-11)',
              maxWidth: '150px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {selectedWorkspace?.name}
          </span>
          <ChevronDownIcon style={{ color: 'var(--brown-10)', width: '12px', height: '12px' }} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="dropdown-content"
          sideOffset={5}
          style={{
            minWidth: '220px',
            backgroundColor: 'var(--sand-1)',
            borderRadius: '8px',
            padding: '4px',
            boxShadow: '0 10px 38px -10px rgba(0, 0, 0, 0.35), 0 10px 20px -15px rgba(0, 0, 0, 0.2)',
            border: `1px solid var(--amber-6)`,
            zIndex: 100,
            maxHeight: '320px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
            <DropdownMenu.Label
              style={{
                padding: '8px 12px',
                fontSize: '11px',
                fontWeight: '600',
                color: 'var(--brown-10)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}
            >
              Wybierz rodzinę
            </DropdownMenu.Label>

            {/* Input do wyszukiwania */}
            <div className="px-3 py-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: 'var(--brown-9)' }} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Wyszukaj rodzinę..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--sand-2)',
                    borderColor: 'var(--amber-6)',
                    color: 'var(--brown-12)',
                    fontSize: '13px',
                  }}
                />
              </div>
            </div>

            <DropdownMenu.Separator
              style={{
                height: '1px',
                backgroundColor: 'var(--amber-5)',
                margin: '4px 0',
              }}
            />

            {/* Lista workspace z scrollem */}
            <div 
              className="flex-1 overflow-y-auto"
              onScroll={handleScroll}
              style={{
                maxHeight: '240px',
              }}
            >
              {filteredWorkspaces.map((workspace) => (
            <DropdownMenu.Item
              key={workspace.id}
              onSelect={() => handleWorkspaceChange(workspace)}
              style={{
                padding: '8px 12px',
                fontSize: '13px',
                borderRadius: '4px',
                cursor: 'pointer',
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: selectedWorkspace?.id === workspace.id ? 'var(--amber-4)' : 'transparent',
                color: 'var(--brown-12)',
              }}
              onMouseEnter={(e) => {
                if (selectedWorkspace?.id !== workspace.id) {
                  e.currentTarget.style.backgroundColor = 'var(--amber-3)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedWorkspace?.id !== workspace.id) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
                <span style={{ fontSize: '18px' }}>{workspace.emoji}</span>
              <span style={{ fontWeight: selectedWorkspace?.id === workspace.id ? '600' : '400' }}>
                {workspace.name}
              </span>
              {selectedWorkspace?.id === workspace.id && (
                <span style={{ marginLeft: 'auto', color: 'var(--amber-11)' }}>✓</span>
              )}
            </DropdownMenu.Item>
              ))}
            </div>

            {/* Slider wskaźnik */}
            {scrollableHeight > 0 && (
              <div className="px-2 py-1">
                <div className="w-full bg-amber-3 rounded-full h-1">
                  <div 
                    className="bg-amber-8 h-1 rounded-full transition-all duration-150"
                    style={{ width: `${scrollPercentage}%` }}
                  />
                </div>
              </div>
            )}

            <DropdownMenu.Separator
              style={{
                height: '1px',
                backgroundColor: 'var(--amber-5)',
                margin: '4px 0',
              }}
            />

          <DropdownMenu.Item
            onSelect={() => setIsModalOpen(true)}
            style={{
              padding: '8px 12px',
              fontSize: '13px',
              borderRadius: '4px',
              cursor: 'pointer',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--amber-11)',
              fontWeight: '500',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--amber-3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>➕</span>
            <span>Dodaj nową rodzinę</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>

    <AddWorkspaceModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onAddWorkspace={handleAddWorkspace}
    />
  </>
  );
};
