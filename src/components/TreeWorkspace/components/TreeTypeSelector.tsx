import React from 'react';
import { DownloadIcon, DrawingPinIcon, MixIcon } from '@radix-ui/react-icons';

export type TreeType = 'horizontal' | 'vertical' | 'radial';

interface TreeTypeSelectorProps {
  selectedType: TreeType;
  onTypeChange: (type: TreeType) => void;
}

export const TreeTypeSelector: React.FC<TreeTypeSelectorProps> = ({
  selectedType,
  onTypeChange,
}) => {
  const types: { value: TreeType; label: string; icon: React.ReactNode }[] = [
    {
      value: 'horizontal',
      label: 'Poziome',
      icon: <MixIcon className="w-4 h-4" />,
    },
    {
      value: 'vertical',
      label: 'Pionowe',
      icon: <DownloadIcon className="w-4 h-4" />,
    },
    {
      value: 'radial',
      label: 'Radialne',
      icon: <DrawingPinIcon className="w-4 h-4" />,
    },
  ];

  return (
    <div
      className="absolute top-4 right-4 z-50 rounded-lg shadow-xl overflow-hidden"
      style={{
        backgroundColor: 'var(--amber-3)',
        border: `1px solid var(--amber-7)`,
      }}
    >
      {/* Header */}
      <div
        className="px-3 py-2 text-xs font-semibold border-b"
        style={{
          color: 'var(--brown-11)',
          borderColor: 'var(--amber-6)',
        }}
      >
        Typ drzewa
      </div>

      {/* Options */}
      <div className="p-1">
        {types.map((type) => (
          <button
            key={type.value}
            onClick={() => onTypeChange(type.value)}
            className="w-full flex items-center gap-2 px-3 py-2 rounded transition-all text-left"
            style={{
              backgroundColor:
                selectedType === type.value ? 'var(--amber-9)' : 'transparent',
              color:
                selectedType === type.value
                  ? 'var(--sand-1)'
                  : 'var(--brown-11)',
            }}
            onMouseEnter={(e) => {
              if (selectedType !== type.value) {
                e.currentTarget.style.backgroundColor = 'var(--amber-4)';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedType !== type.value) {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {type.icon}
            <span className="text-sm">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

