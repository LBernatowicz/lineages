import React from 'react';

export const SettingsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 
        className="text-4xl font-bold mb-4"
        style={{ color: 'var(--amber-11)' }}
      >
        Ustawienia
      </h1>
      <p 
        className="text-lg mb-6"
        style={{ color: 'var(--brown-10)' }}
      >
        Konfiguracja aplikacji.
      </p>

      <div 
        className="p-4 rounded-lg"
        style={{ 
          backgroundColor: 'var(--amber-3)',
          border: `1px solid var(--amber-6)`,
        }}
      >
        <h2 
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--brown-11)' }}
        >
          Wygląd
        </h2>
        <p style={{ color: 'var(--brown-10)' }}>
          Użyj przycisku w prawym górnym rogu aby zmienić motyw (jasny/ciemny).
        </p>
      </div>
    </div>
  );
};

