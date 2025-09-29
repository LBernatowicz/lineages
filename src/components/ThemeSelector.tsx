import React, { useState } from 'react';
import { useTheme, ColorPalette } from '../contexts/ThemeContext';

export const ThemeSelector: React.FC = () => {
  const { currentPalette, setPalette, availablePalettes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handlePaletteChange = (palette: ColorPalette) => {
    setPalette(palette);
    setIsOpen(false);
  };

  const currentPaletteInfo = availablePalettes.find(p => p.id === currentPalette);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        aria-label="Wybierz paletę kolorów"
      >
        <div 
          className="w-4 h-4 rounded-full border-2 border-white"
          style={{ backgroundColor: currentPaletteInfo?.primaryColor }}
        />
        <span className="font-medium">{currentPaletteInfo?.name}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-secondary-800 rounded-xl shadow-2xl border border-secondary-200 dark:border-secondary-700 z-20 overflow-hidden">
            <div className="p-4 border-b border-secondary-200 dark:border-secondary-700">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                Wybierz paletę kolorów
              </h3>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                Dostosuj wygląd aplikacji do swoich preferencji
              </p>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {availablePalettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => handlePaletteChange(palette.id)}
                  className={`w-full flex items-center gap-4 p-4 text-left hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors duration-150 ${
                    currentPalette === palette.id 
                      ? 'bg-primary-50 dark:bg-primary-900/20 border-r-4 border-primary-500' 
                      : ''
                  }`}
                >
                  <div 
                    className="w-8 h-8 rounded-lg border-2 border-secondary-200 dark:border-secondary-600 flex-shrink-0"
                    style={{ backgroundColor: palette.primaryColor }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-secondary-900 dark:text-white">
                        {palette.name}
                      </span>
                      {currentPalette === palette.id && (
                        <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                      {palette.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
