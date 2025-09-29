import React from 'react';

export const ComponentShowcase: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
          Przykłady komponentów
        </h2>
        <p className="text-secondary-600 dark:text-secondary-400">
          Zobacz jak komponenty wyglądają w aktualnej palecie kolorów
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
          Przyciski
        </h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors">
            Primary
          </button>
          <button className="px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors">
            Secondary
          </button>
          <button className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors">
            Accent
          </button>
          <button className="px-4 py-2 bg-error-500 hover:bg-error-600 text-white rounded-lg transition-colors">
            Error
          </button>
          <button className="px-4 py-2 bg-warning-500 hover:bg-warning-600 text-white rounded-lg transition-colors">
            Warning
          </button>
          <button className="px-4 py-2 bg-success-500 hover:bg-success-600 text-white rounded-lg transition-colors">
            Success
          </button>
          <button className="px-4 py-2 bg-info-500 hover:bg-info-600 text-white rounded-lg transition-colors">
            Info
          </button>
          <button className="px-4 py-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white rounded-lg transition-colors">
            Outline
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
          Karty
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6 border border-secondary-200 dark:border-secondary-700">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
              Szybkość
            </h4>
            <p className="text-secondary-600 dark:text-secondary-400">
              Nasza aplikacja jest zoptymalizowana pod kątem wydajności i szybkości działania.
            </p>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6 border border-secondary-200 dark:border-secondary-700">
            <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
              Niezawodność
            </h4>
            <p className="text-secondary-600 dark:text-secondary-400">
              Gwarantujemy stabilną pracę i ciągłą dostępność naszych usług.
            </p>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-lg p-6 border border-secondary-200 dark:border-secondary-700">
            <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-800 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
              Pasja
            </h4>
            <p className="text-secondary-600 dark:text-secondary-400">
              Tworzymy produkty z pasją, dbając o każdy szczegół i doświadczenie użytkownika.
            </p>
          </div>
        </div>
      </div>

      {/* Form elements */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
          Elementy formularza
        </h3>
        <div className="max-w-md space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
              Nazwa użytkownika
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
              placeholder="Wprowadź nazwę użytkownika"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
              Opis
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white"
              placeholder="Opisz swoje doświadczenia..."
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 dark:border-secondary-600 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-secondary-700 dark:text-secondary-300">
              Zapamiętaj moje ustawienia
            </label>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-secondary-800 dark:text-secondary-200">
          Powiadomienia
        </h3>
        <div className="space-y-3">
          <div className="bg-info-50 dark:bg-info-900/20 border border-info-200 dark:border-info-800 rounded-lg p-4">
            <div className="flex">
              <svg className="w-5 h-5 text-info-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-info-800 dark:text-info-200">
                  Informacja
                </h4>
                <p className="text-sm text-info-700 dark:text-info-300 mt-1">
                  To jest przykładowe powiadomienie informacyjne.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg p-4">
            <div className="flex">
              <svg className="w-5 h-5 text-warning-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-warning-800 dark:text-warning-200">
                  Ostrzeżenie
                </h4>
                <p className="text-sm text-warning-700 dark:text-warning-300 mt-1">
                  Uwaga! Ta akcja może mieć nieodwracalne konsekwencje.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800 rounded-lg p-4">
            <div className="flex">
              <svg className="w-5 h-5 text-error-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-error-800 dark:text-error-200">
                  Błąd
                </h4>
                <p className="text-sm text-error-700 dark:text-error-300 mt-1">
                  Wystąpił błąd podczas przetwarzania żądania.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg p-4">
            <div className="flex">
              <svg className="w-5 h-5 text-success-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="text-sm font-medium text-success-800 dark:text-success-200">
                  Sukces
                </h4>
                <p className="text-sm text-success-700 dark:text-success-300 mt-1">
                  Operacja została pomyślnie zakończona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
