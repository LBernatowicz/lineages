import React from 'react';
import { useTheme } from '../ThemeToggle/ThemeToggle';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

export const TopBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div 
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-3 z-50"
      style={{
        height: '36px',
        backgroundColor: 'var(--amber-3)',
        borderBottom: `1px solid var(--amber-6)`,
        WebkitAppRegion: 'drag',
      }}
    >
      {/* Left side - App name (na środku przycisków systemowych) */}
      <div 
        className="flex items-center gap-2 ml-16"
        style={{ WebkitAppRegion: 'no-drag' }}
      >
        <h1 
          className="text-sm font-bold"
          style={{ 
            color: 'var(--amber-11)',
            lineHeight: '36px',
          }}
        >
          Lineages
        </h1>
        <div 
          className="px-2 py-0.5 rounded text-xs font-medium"
          style={{
            backgroundColor: 'var(--brown-4)',
            color: 'var(--brown-11)',
            fontSize: '10px',
          }}
        >
          Drzewo Genealogiczne
        </div>
      </div>

      {/* Right side - Theme toggle switch */}
      <button
        onClick={toggleTheme}
        className="relative transition-all"
        style={{
          width: '44px',
          height: '24px',
          borderRadius: '12px',
          backgroundColor: theme === 'light' ? 'var(--amber-6)' : 'var(--brown-8)',
          border: `1px solid ${theme === 'light' ? 'var(--amber-8)' : 'var(--brown-9)'}`,
          WebkitAppRegion: 'no-drag',
          cursor: 'pointer',
        }}
        aria-label="Toggle theme"
      >
        <div
          className="absolute top-0.5 transition-all duration-300 rounded-full flex items-center justify-center"
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'var(--sand-1)',
            left: theme === 'light' ? '2px' : '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          {theme === 'light' ? (
            <SunIcon className="w-3 h-3" style={{ color: 'var(--amber-10)' }} />
          ) : (
            <MoonIcon className="w-3 h-3" style={{ color: 'var(--brown-10)' }} />
          )}
        </div>
      </button>
    </div>
  );
};