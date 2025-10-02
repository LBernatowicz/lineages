import React, { useState } from 'react';
import { Cross2Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import * as Dialog from '@radix-ui/react-dialog';

interface AddWorkspaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddWorkspace: (workspace: { name: string; emoji: string; description: string }) => void;
}

const emojiOptions = [
  '🌳', '🌲', '🌴', '🌿', '🍀', '🌱', '🌾', '🌵',
  '🏠', '🏡', '🏘️', '🏚️', '🏛️', '🏗️', '🏢', '🏬',
  '👨‍👩‍👧‍👦', '👪', '👨‍👩‍👦', '👨‍👩‍👧', '👨‍👧‍👦', '👩‍👧‍👦',
  '👨‍👨‍👦', '👨‍👨‍👧', '👩‍👩‍👦', '👩‍👩‍👧',
  '👴', '👵', '👨‍🦳', '👩‍🦳', '👨‍🦲', '👩‍🦲',
  '👶', '🧒', '👦', '👧', '👨', '👩', '👱‍♂️', '👱‍♀️'
];

export const AddWorkspaceModal: React.FC<AddWorkspaceModalProps> = ({
  isOpen,
  onClose,
  onAddWorkspace,
}) => {
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('🌳');
  const [description, setDescription] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  // Obliczenia dla slidera ikon
  const totalIcons = emojiOptions.length;
  const iconsPerRow = 8;
  const rowsVisible = 4; // Maksymalnie 4 rzędy widoczne
  const totalRows = Math.ceil(totalIcons / iconsPerRow);
  const scrollableRows = Math.max(0, totalRows - rowsVisible);
  const rowHeight = 48; // Wysokość jednego rzędu (40px button + 8px gap)
  const containerHeight = rowsVisible * rowHeight;
  const scrollableHeight = scrollableRows * rowHeight;
  const scrollPercentage = scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    setScrollPosition(target.scrollTop);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && emoji && description.trim()) {
      onAddWorkspace({
        name: name.trim(),
        emoji,
        description: description.trim(),
      });
      setName('');
      setEmoji('🌳');
      setDescription('');
      setScrollPosition(0);
      onClose();
    }
  };

  const handleClose = () => {
    setName('');
    setEmoji('🌳');
    setDescription('');
    setScrollPosition(0);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black/50 z-50"
          style={{ zIndex: 1000 }}
        />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-6 shadow-2xl z-50"
          style={{
            backgroundColor: 'var(--sand-1)',
            border: '1px solid var(--amber-6)',
            borderRadius: '24px',
            zIndex: 1001,
            maxHeight: '90vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title
              className="text-xl font-bold"
              style={{ color: 'var(--brown-12)' }}
            >
              Dodaj nową rodzinę
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="p-2 rounded-full hover:bg-amber-3 transition-all duration-200"
                style={{ color: 'var(--brown-10)' }}
                aria-label="Zamknij"
              >
                <Cross2Icon className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 flex-1 overflow-hidden flex flex-col">
            {/* Nazwa rodziny z ikoną */}
            <div>
              <label
                className="block text-sm font-semibold mb-3"
                style={{ color: 'var(--brown-11)' }}
              >
                Nazwa rodziny *
              </label>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-lg"
                  style={{
                    backgroundColor: 'var(--sand-2)',
                    borderColor: 'var(--amber-8)',
                  }}
                >
                  {emoji}
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="np. Rodzina Kowalskich"
                  className="flex-1 px-4 py-3 rounded-2xl border transition-all duration-200 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--sand-2)',
                    borderColor: 'var(--amber-6)',
                    color: 'var(--brown-12)',
                    focusRingColor: 'var(--amber-8)',
                  }}
                  required
                />
              </div>
            </div>

            {/* Ikona */}
            <div className="flex-1 flex flex-col">
              <label
                className="block text-sm font-semibold mb-3"
                style={{ color: 'var(--brown-11)' }}
              >
                Ikona *
              </label>

              {/* Paleta ikon */}
              <div 
                className="grid grid-cols-8 gap-2 flex-1 overflow-y-auto p-2 rounded-xl" 
                style={{ 
                  backgroundColor: 'var(--sand-2)',
                  maxHeight: `${containerHeight}px`,
                }}
                onScroll={handleScroll}
              >
                {emojiOptions.map((emojiOption) => (
                  <button
                    key={emojiOption}
                    type="button"
                    onClick={() => setEmoji(emojiOption)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-200 ${
                      emoji === emojiOption ? 'ring-4 ring-offset-2' : 'hover:scale-110'
                    }`}
                    style={{
                      backgroundColor: emoji === emojiOption ? 'var(--amber-4)' : 'var(--sand-3)',
                      ringColor: 'var(--amber-8)',
                      ringOffsetColor: 'var(--sand-1)',
                    }}
                    title={emojiOption}
                  >
                    {emojiOption}
                  </button>
                ))}
              </div>

              {/* Slider wskaźnik dla ikon */}
              {scrollableHeight > 0 && (
                <div className="mt-2 px-2">
                  <div className="w-full bg-amber-3 rounded-full h-1">
                    <div 
                      className="bg-amber-8 h-1 rounded-full transition-all duration-150"
                      style={{ width: `${scrollPercentage}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="mt-3 text-sm" style={{ color: 'var(--brown-10)' }}>
                Wybrana ikona: <span className="text-lg">{emoji}</span>
              </div>
            </div>

            {/* Opis */}
            <div>
              <label
                className="block text-sm font-semibold mb-3"
                style={{ color: 'var(--brown-11)' }}
              >
                Krótki opis *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="np. Rodzina z Krakowa, 3 pokolenia"
                rows={3}
                className="w-full px-4 py-3 rounded-2xl border transition-all duration-200 resize-none focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'var(--sand-2)',
                  borderColor: 'var(--amber-6)',
                  color: 'var(--brown-12)',
                  focusRingColor: 'var(--amber-8)',
                }}
                required
              />
            </div>

            {/* Przyciski */}
            <div className="flex gap-4 pt-4 flex-shrink-0">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--sand-3)',
                  color: 'var(--brown-11)',
                  border: '1px solid var(--amber-6)',
                }}
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-2xl font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: 'var(--amber-9)',
                  color: 'var(--sand-1)',
                }}
              >
                Dodaj rodzinę
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
