import React from 'react';

interface NavMenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

export const NavMenuItem: React.FC<NavMenuItemProps> = ({
  icon,
  label,
  isActive,
  isCollapsed,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 relative group"
      style={{
        backgroundColor: isActive ? 'var(--amber-4)' : 'transparent',
        color: isActive ? 'var(--amber-11)' : 'var(--brown-10)',
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'var(--amber-3)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
    >
      {/* Icon */}
      <div className="flex-shrink-0">
        {icon}
      </div>

      {/* Label */}
      {!isCollapsed && (
        <span className="text-sm font-medium truncate">
          {label}
        </span>
      )}

      {/* Active indicator */}
      {isActive && (
        <div
          className="absolute left-0 top-1/2 w-1 h-6 rounded-r"
          style={{
            backgroundColor: 'var(--amber-9)',
            transform: 'translateY(-50%)',
          }}
        />
      )}

      {/* Tooltip for collapsed state */}
      {isCollapsed && (
        <div
          className="absolute left-full ml-2 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
          style={{
            backgroundColor: 'var(--brown-12)',
            color: 'var(--sand-1)',
            fontSize: '12px',
          }}
        >
          {label}
        </div>
      )}
    </button>
  );
};

