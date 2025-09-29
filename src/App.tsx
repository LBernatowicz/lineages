import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeSelector } from "./components/ThemeSelector";
import { ColorPaletteDemo } from "./components/ColorPaletteDemo";
import { ComponentShowcase } from "./components/ComponentShowcase";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-secondary-900 dark:text-white mb-2">
                System Palet Kolorów
              </h1>
              <p className="text-secondary-600 dark:text-secondary-400">
                Demonstracja różnych palet kolorów w aplikacji React + Tailwind CSS
              </p>
            </div>
            <ThemeSelector />
          </div>

          {/* Main content */}
          <div className="space-y-12">
            <ColorPaletteDemo />
            <ComponentShowcase />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-secondary-200 dark:border-secondary-700">
            <div className="text-center text-secondary-500 dark:text-secondary-400">
              <p>Przełączaj palety kolorów używając selektora w prawym górnym rogu</p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}