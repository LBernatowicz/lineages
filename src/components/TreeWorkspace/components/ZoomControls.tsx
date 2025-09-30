import React from 'react';
import { PlusIcon, MinusIcon, ResetIcon } from '@radix-ui/react-icons';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
}

export const ZoomControls: React.FC<ZoomControlsProps> = ({
  onZoomIn,
  onZoomOut,
  onReset,
}) => {
  const handleZoomIn = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onZoomIn();
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onZoomOut();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onReset();
  };

  return (
    <div
      className="absolute bottom-8 right-8 z-50 flex flex-col gap-2 p-2 rounded-lg shadow-xl"
      style={{
        backgroundColor: 'var(--amber-3)',
        border: `1px solid var(--amber-7)`,
        pointerEvents: 'auto',
      }}
    >
      {/* Zoom In */}
      <button
        onClick={handleZoomIn}
        onMouseDown={(e) => e.stopPropagation()}
        className="p-2 rounded hover:scale-110 transition-all"
        style={{
          backgroundColor: 'var(--amber-4)',
          color: 'var(--amber-11)',
        }}
        title="Przybliż"
      >
        <PlusIcon className="w-5 h-5" />
      </button>

      {/* Zoom Out */}
      <button
        onClick={handleZoomOut}
        onMouseDown={(e) => e.stopPropagation()}
        className="p-2 rounded hover:scale-110 transition-all"
        style={{
          backgroundColor: 'var(--amber-4)',
          color: 'var(--amber-11)',
        }}
        title="Oddal"
      >
        <MinusIcon className="w-5 h-5" />
      </button>

      {/* Reset */}
      <button
        onClick={handleReset}
        onMouseDown={(e) => e.stopPropagation()}
        className="p-2 rounded hover:scale-110 transition-all"
        style={{
          backgroundColor: 'var(--amber-9)',
          color: 'var(--sand-1)',
        }}
        title="Resetuj widok"
      >
        <ResetIcon className="w-5 h-5" />
      </button>
    </div>
  );
};
