# System Palet Kolorów - Dokumentacja

## Przegląd

Ten projekt zawiera kompleksowy system palet kolorów dla aplikacji React + Tailwind CSS. System umożliwia łatwe przełączanie między różnymi paletami kolorów w czasie rzeczywistym, z automatycznym zapisywaniem wyboru użytkownika.

## Dostępne Palety

### 1. **Domyślna** (default)
- **Opis**: Ciemna paleta z niebieskimi akcentami
- **Kolor główny**: #0ea5e9 (niebieski)
- **Zastosowanie**: Idealna dla aplikacji biznesowych i profesjonalnych

### 2. **Jasna** (light)
- **Opis**: Jasna paleta z zielonymi i żółtymi akcentami
- **Kolor główny**: #22c55e (zielony)
- **Zastosowanie**: Aplikacje związane z naturą, zdrowiem, ekologią

### 3. **Oceaniczna** (ocean)
- **Opis**: Paleta inspirowana oceanem z turkusowymi tonami
- **Kolor główny**: #0ea5e9 (turkusowy)
- **Zastosowanie**: Aplikacje morskie, podróżnicze, relaksacyjne

### 4. **Zachód słońca** (sunset)
- **Opis**: Ciepła paleta z pomarańczowymi i różowymi tonami
- **Kolor główny**: #f97316 (pomarańczowy)
- **Zastosowanie**: Aplikacje kreatywne, artystyczne, energetyczne

### 5. **Nocna** (night)
- **Opis**: Ciemna paleta z fioletowymi akcentami
- **Kolor główny**: #a855f7 (fioletowy)
- **Zastosowanie**: Aplikacje nocne, gaming, technologiczne

### 6. **Monochromatyczna** (mono)
- **Opis**: Elegancka paleta w odcieniach szarości
- **Kolor główny**: #64748b (szary)
- **Zastosowanie**: Aplikacje minimalistyczne, profesjonalne

## Palety Statusu

Każda paleta zawiera również kolory statusu, które są spójne we wszystkich paletach:

### **Error** (Błąd)
- **Kolor główny**: #ef4444 (czerwony)
- **Zastosowanie**: Komunikaty błędów, walidacja, ostrzeżenia o problemach

### **Warning** (Ostrzeżenie)
- **Kolor główny**: #f59e0b (pomarańczowy)
- **Zastosowanie**: Ostrzeżenia, uwagi, informacje wymagające uwagi

### **Success** (Sukces)
- **Kolor główny**: #22c55e (zielony)
- **Zastosowanie**: Komunikaty o sukcesie, potwierdzenia, pozytywne akcje

### **Info** (Informacja)
- **Kolor główny**: #0ea5e9 (niebieski)
- **Zastosowanie**: Informacje ogólne, podpowiedzi, komunikaty neutralne

## Struktura Projektu

```
src/
├── contexts/
│   └── ThemeContext.tsx          # Kontekst React do zarządzania paletami
├── components/
│   ├── ThemeSelector.tsx         # Komponent do przełączania palet
│   ├── ColorPaletteDemo.tsx      # Demonstracja palet kolorów
│   └── ComponentShowcase.tsx     # Przykłady komponentów
├── App.tsx                       # Główny komponent aplikacji
└── index.css                     # Style CSS z CSS custom properties
```

## Użycie

### Podstawowe Użycie

```tsx
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  );
}

function YourComponent() {
  const { currentPalette, setPalette } = useTheme();
  
  return (
    <div>
      <p>Aktualna paleta: {currentPalette}</p>
      <button onClick={() => setPalette('ocean')}>
        Przełącz na oceaniczną
      </button>
    </div>
  );
}
```

### Używanie Klas Tailwind

```tsx
// Używaj klas Tailwind z prefiksami palet
<div className="bg-primary-500 text-white">
  Tło w kolorze głównym
</div>

<button className="bg-accent-600 hover:bg-accent-700">
  Przycisk z akcentem
</button>

<div className="text-secondary-700 dark:text-secondary-300">
  Tekst z kolorami drugorzędnymi
</div>

// Kolory statusu
<div className="bg-error-500 text-white">
  Komunikat błędu
</div>

<div className="bg-warning-500 text-white">
  Ostrzeżenie
</div>

<div className="bg-success-500 text-white">
  Komunikat sukcesu
</div>

<div className="bg-info-500 text-white">
  Informacja
</div>
```

### CSS Custom Properties

System automatycznie aktualizuje CSS custom properties:

```css
:root {
  --color-primary-500: #0ea5e9;
  --color-secondary-500: #64748b;
  --color-accent-500: #d946ef;
  --color-error-500: #ef4444;
  --color-warning-500: #f59e0b;
  --color-success-500: #22c55e;
  --color-info-500: #0ea5e9;
}
```

## Konfiguracja Tailwind

Plik `tailwind.config.js` zawiera wszystkie palety kolorów:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        primary: { /* 50-950 */ },
        secondary: { /* 50-950 */ },
        accent: { /* 50-950 */ },
        error: { /* 50-950 */ },
        warning: { /* 50-950 */ },
        success: { /* 50-950 */ },
        info: { /* 50-950 */ },
        // ... inne palety
      }
    }
  }
}
```

## Funkcje

### ✅ Automatyczne Zapisywanie
- Wybór palety jest automatycznie zapisywany w `localStorage`
- Przy ponownym załadowaniu aplikacji paleta zostaje przywrócona

### ✅ Płynne Przejścia
- Wszystkie zmiany kolorów mają płynne animacje
- CSS transitions zapewniają gładkie przejścia

### ✅ Responsywność
- Wszystkie komponenty są w pełni responsywne
- Obsługa trybu ciemnego i jasnego

### ✅ TypeScript
- Pełne wsparcie dla TypeScript
- Typowane interfejsy i konteksty

## Uruchamianie

```bash
# Instalacja zależności
bun install

# Uruchomienie w trybie deweloperskim
bun run dev

# Budowanie aplikacji
bun run build

# Podgląd zbudowanej aplikacji
bun run preview
```

## Rozszerzanie

### Dodawanie Nowej Palety

1. Dodaj paletę do `ThemeContext.tsx`:

```typescript
const paletteMap = {
  // ... istniejące palety
  newPalette: {
    '--color-primary-50': '#...',
    // ... pozostałe kolory
  }
};
```

2. Dodaj informacje do `availablePalettes`:

```typescript
{
  id: 'newPalette' as ColorPalette,
  name: 'Nowa Paleta',
  description: 'Opis nowej palety',
  primaryColor: '#hex',
}
```

3. Zaktualizuj typ `ColorPalette`:

```typescript
export type ColorPalette = 'default' | 'light' | 'ocean' | 'sunset' | 'night' | 'mono' | 'newPalette';
```

### Dodawanie Nowych Kolorów

1. Dodaj kolory do `tailwind.config.js`
2. Zaktualizuj `ThemeContext.tsx` z nowymi CSS custom properties
3. Użyj nowych klas w komponentach

## Najlepsze Praktyki

1. **Konsystencja**: Używaj tej samej palety w całej aplikacji
2. **Kontrast**: Zawsze sprawdzaj kontrast między tekstem a tłem
3. **Dostępność**: Upewnij się, że kolory są dostępne dla użytkowników z zaburzeniami widzenia
4. **Testowanie**: Testuj wszystkie palety na różnych urządzeniach i w różnych warunkach

## Wsparcie

System jest w pełni kompatybilny z:
- React 19+
- Tailwind CSS 4+
- TypeScript
- Vite
- Bun

## Licencja

Ten projekt jest dostępny na licencji MIT.
