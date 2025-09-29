import React from 'react';

export const ColorPaletteDemo: React.FC = () => {
  const colorGroups = [
    {
      name: 'Primary',
      colors: [
        { name: '50', class: 'bg-primary-50 text-primary-900' },
        { name: '100', class: 'bg-primary-100 text-primary-900' },
        { name: '200', class: 'bg-primary-200 text-primary-900' },
        { name: '300', class: 'bg-primary-300 text-primary-900' },
        { name: '400', class: 'bg-primary-400 text-white' },
        { name: '500', class: 'bg-primary-500 text-white' },
        { name: '600', class: 'bg-primary-600 text-white' },
        { name: '700', class: 'bg-primary-700 text-white' },
        { name: '800', class: 'bg-primary-800 text-white' },
        { name: '900', class: 'bg-primary-900 text-white' },
        { name: '950', class: 'bg-primary-950 text-white' },
      ],
    },
    {
      name: 'Secondary',
      colors: [
        { name: '50', class: 'bg-secondary-50 text-secondary-900' },
        { name: '100', class: 'bg-secondary-100 text-secondary-900' },
        { name: '200', class: 'bg-secondary-200 text-secondary-900' },
        { name: '300', class: 'bg-secondary-300 text-secondary-900' },
        { name: '400', class: 'bg-secondary-400 text-white' },
        { name: '500', class: 'bg-secondary-500 text-white' },
        { name: '600', class: 'bg-secondary-600 text-white' },
        { name: '700', class: 'bg-secondary-700 text-white' },
        { name: '800', class: 'bg-secondary-800 text-white' },
        { name: '900', class: 'bg-secondary-900 text-white' },
        { name: '950', class: 'bg-secondary-950 text-white' },
      ],
    },
    {
      name: 'Accent',
      colors: [
        { name: '50', class: 'bg-accent-50 text-accent-900' },
        { name: '100', class: 'bg-accent-100 text-accent-900' },
        { name: '200', class: 'bg-accent-200 text-accent-900' },
        { name: '300', class: 'bg-accent-300 text-accent-900' },
        { name: '400', class: 'bg-accent-400 text-white' },
        { name: '500', class: 'bg-accent-500 text-white' },
        { name: '600', class: 'bg-accent-600 text-white' },
        { name: '700', class: 'bg-accent-700 text-white' },
        { name: '800', class: 'bg-accent-800 text-white' },
        { name: '900', class: 'bg-accent-900 text-white' },
        { name: '950', class: 'bg-accent-950 text-white' },
      ],
    },
    {
      name: 'Error',
      colors: [
        { name: '50', class: 'bg-error-50 text-error-900' },
        { name: '100', class: 'bg-error-100 text-error-900' },
        { name: '200', class: 'bg-error-200 text-error-900' },
        { name: '300', class: 'bg-error-300 text-error-900' },
        { name: '400', class: 'bg-error-400 text-white' },
        { name: '500', class: 'bg-error-500 text-white' },
        { name: '600', class: 'bg-error-600 text-white' },
        { name: '700', class: 'bg-error-700 text-white' },
        { name: '800', class: 'bg-error-800 text-white' },
        { name: '900', class: 'bg-error-900 text-white' },
        { name: '950', class: 'bg-error-950 text-white' },
      ],
    },
    {
      name: 'Warning',
      colors: [
        { name: '50', class: 'bg-warning-50 text-warning-900' },
        { name: '100', class: 'bg-warning-100 text-warning-900' },
        { name: '200', class: 'bg-warning-200 text-warning-900' },
        { name: '300', class: 'bg-warning-300 text-warning-900' },
        { name: '400', class: 'bg-warning-400 text-white' },
        { name: '500', class: 'bg-warning-500 text-white' },
        { name: '600', class: 'bg-warning-600 text-white' },
        { name: '700', class: 'bg-warning-700 text-white' },
        { name: '800', class: 'bg-warning-800 text-white' },
        { name: '900', class: 'bg-warning-900 text-white' },
        { name: '950', class: 'bg-warning-950 text-white' },
      ],
    },
    {
      name: 'Success',
      colors: [
        { name: '50', class: 'bg-success-50 text-success-900' },
        { name: '100', class: 'bg-success-100 text-success-900' },
        { name: '200', class: 'bg-success-200 text-success-900' },
        { name: '300', class: 'bg-success-300 text-success-900' },
        { name: '400', class: 'bg-success-400 text-white' },
        { name: '500', class: 'bg-success-500 text-white' },
        { name: '600', class: 'bg-success-600 text-white' },
        { name: '700', class: 'bg-success-700 text-white' },
        { name: '800', class: 'bg-success-800 text-white' },
        { name: '900', class: 'bg-success-900 text-white' },
        { name: '950', class: 'bg-success-950 text-white' },
      ],
    },
    {
      name: 'Info',
      colors: [
        { name: '50', class: 'bg-info-50 text-info-900' },
        { name: '100', class: 'bg-info-100 text-info-900' },
        { name: '200', class: 'bg-info-200 text-info-900' },
        { name: '300', class: 'bg-info-300 text-info-900' },
        { name: '400', class: 'bg-info-400 text-white' },
        { name: '500', class: 'bg-info-500 text-white' },
        { name: '600', class: 'bg-info-600 text-white' },
        { name: '700', class: 'bg-info-700 text-white' },
        { name: '800', class: 'bg-info-800 text-white' },
        { name: '900', class: 'bg-info-900 text-white' },
        { name: '950', class: 'bg-info-950 text-white' },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Paleta kolorów
        </h2>
        <p className="text-secondary-600 dark:text-secondary-400">
          Zobacz jak wyglądają różne odcienie w aktualnie wybranej palecie
        </p>
      </div>

      <div className="grid gap-8">
        {colorGroups.map((group) => (
          <div key={group.name} className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
              {group.name}
            </h3>
            <div className="grid grid-cols-11 gap-2">
              {group.colors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div
                    className={`w-full h-16 rounded-lg shadow-sm border border-secondary-200 dark:border-secondary-700 ${color.class} flex items-center justify-center font-medium text-sm`}
                  >
                    {color.name}
                  </div>
                  <div className="text-xs text-center text-secondary-600 dark:text-secondary-400">
                    {color.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
