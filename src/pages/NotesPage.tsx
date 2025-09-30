import React from 'react';

export const NotesPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 
        className="text-4xl font-bold mb-4"
        style={{ color: 'var(--amber-11)' }}
      >
        Notatki
      </h1>
      <p 
        className="text-lg"
        style={{ color: 'var(--brown-10)' }}
      >
        Tutaj będą Twoje notatki i dokumenty.
      </p>
    </div>
  );
};

