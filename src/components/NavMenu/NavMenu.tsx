import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavMenuItem } from './components/NavMenuItem';
import { 
  GearIcon,
  PlusIcon,
  FileTextIcon,
  Link2Icon,
} from '@radix-ui/react-icons';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface NavMenuProps {
  onCollapseChange?: (isCollapsed: boolean) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onCollapseChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onCollapseChange?.(newCollapsedState);
  };

  const menuItems: MenuItem[] = [
    {
      id: 'tree',
      label: 'Drzewo',
      icon: <Link2Icon className="w-5 h-5" />,
      path: '/',
    },
    {
      id: 'notes',
      label: 'Notatki',
      icon: <FileTextIcon className="w-5 h-5" />,
      path: '/notes',
    },
  ];

  const bottomItems: MenuItem[] = [
    {
      id: 'settings',
      label: 'Ustawienia',
      icon: <GearIcon className="w-5 h-5" />,
      path: '/settings',
    },
  ];

  return (
    <div
      className="fixed left-0 top-9 bottom-0 flex flex-col transition-all duration-300 z-40"
      style={{
        width: isCollapsed ? '60px' : '240px',
        backgroundColor: 'var(--amber-2)',
        borderRight: `1px solid var(--amber-6)`,
      }}
    >
      {/* Header z przyciskiem collapse */}
      <div 
        className="flex items-center justify-between p-4 border-b"
        style={{ borderColor: 'var(--amber-6)' }}
      >
        {!isCollapsed && (
          <h2 
            className="text-sm font-semibold"
            style={{ color: 'var(--brown-11)' }}
          >
            Menu
          </h2>
        )}
        <button
          onClick={handleToggleCollapse}
          className="p-1 rounded hover:bg-amber-4 transition-colors"
          style={{ color: 'var(--amber-11)' }}
        >
          <svg
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Main menu items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="space-y-1 px-2">
          {menuItems.map((item) => (
            <NavMenuItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={location.pathname === item.path}
              isCollapsed={isCollapsed}
              onClick={() => navigate(item.path)}
            />
          ))}
        </div>

        {/* Separator */}
        <div 
          className="my-4 mx-4 h-px"
          style={{ backgroundColor: 'var(--amber-6)' }}
        />

        {/* Add new button */}
        <div className="px-2">
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:scale-105"
            style={{
              backgroundColor: 'var(--amber-9)',
              color: 'var(--sand-1)',
            }}
          >
            <PlusIcon className="w-5 h-5" />
            {!isCollapsed && <span className="text-sm font-medium">Nowa osoba</span>}
          </button>
        </div>
      </nav>

      {/* Bottom items */}
      <div 
        className="border-t p-2"
        style={{ borderColor: 'var(--amber-6)' }}
      >
        {bottomItems.map((item) => (
          <NavMenuItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.path}
            isCollapsed={isCollapsed}
            onClick={() => navigate(item.path)}
          />
        ))}
      </div>
    </div>
  );
};
