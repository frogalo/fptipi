# FPTiTI - Fizyczne Podstawy Technologii i Teleinformatyki

Materiały egzaminacyjne i wizualizacje fizyczne na podstawie podręcznika A. Szymańskiej (luty 2026). Projekt zawiera wzorcowe odpowiedzi na 28 pytań egzaminacyjnych, ściągę powtórkową, zadania obliczeniowe z rozwiązaniami krok po kroku oraz interaktywne wizualizacje fizyki półprzewodników, techniki światłowodowej i fal elektromagnetycznych.

## Instalacja i uruchomienie

Wymagania:
- Node.js (w wersji v16 lub nowszej)
- npm (menedżer pakietów)

### Krok 1: Klonowanie repozytorium
```bash
git clone https://github.com/frogalo/fptipi.git
cd Fizyka
```

### Krok 2: Instalacja zależności
```bash
npm install
```

### Krok 3: Uruchomienie serwera deweloperskiego
```bash
npm run dev
```
Aplikacja zostanie uruchomiona lokalnie pod adresem: `http://localhost:5173/` (lub innym wskazanym w konsoli).

### Krok 4: Budowanie wersji produkcyjnej
```bash
npm run build
```
Zbudowane pliki trafią do katalogu `dist/` w głównym folderze projektu.

---

## Struktura projektu

Projekt został zbudowany przy użyciu **React**, **Vite**, **TypeScript** oraz **TailwindCSS**. Poniżej opisano strukturę katalogów i przeznaczenie najważniejszych plików:

```text
Fizyka/
├── dist/                   # Zbudowane pliki produkcyjne (generowane automatycznie)
├── node_modules/           # Zależności projektu
├── src/                    # Folder źródłowy aplikacji
│   ├── assets/             # Statyczne zasoby (obrazy, wykresy z podręcznika)
│   ├── components/         # Globalne komponenty wielokrotnego użytku (np. FloatingNav, SearchOverlay, Footer, MosfetSimulator)
│   ├── data/               # Folder z danymi (katalog `exams` z plikami JSON dla arkuszy)
│   ├── features/           # Moduły funkcjonalne specyficzne dla obszarów aplikacji
│   │   ├── egzaminy/       # Obsługa renderowania zadań, selektorów i stanów pustych dla egzaminów
│   │   └── wizualizacje/   # Moduły wizualizacyjne (np. równania Maxwella)
│   ├── hooks/              # Własne hooki Reacta (np. usePageSections)
│   ├── lib/                # Biblioteki narzędziowe i statyczne bazy indeksowe (np. searchIndex.json)
│   ├── pages/              # Widoki stron aplikacji
│   │   ├── teoria/         # Odpowiedzi podzielone tematycznie oraz ściąga powtórkowa
│   │   ├── wizualizacje/   # Interaktywne ekrany wizualizacyjne i symulatory
│   │   ├── zadania/        # Zadania obliczeniowe podzielone na części
│   │   ├── Egzaminy.tsx    # Ekran główny bazy egzaminacyjnej
│   │   └── Home.tsx        # Strona główna ze spisem treści
│   ├── router/             # Konfiguracja tras React Router (routes.tsx)
│   ├── styles/             # Globalne pliki stylów (globals.css)
│   ├── App.tsx             # Główny komponent wejściowy aplikacji
│   ├── main.tsx            # Inicjalizacja Reacta i renderowanie aplikacji
│   └── vite-env.d.ts       # Deklaracje typów Vite
├── index.html              # Główny plik HTML (entry point)
├── package.json            # Konfiguracja skryptów i zależności NPM
├── tsconfig.json           # Konfiguracja TypeScript
├── tailwind.config.js      # Konfiguracja stylów TailwindCSS
└── vite.config.js          # Konfiguracja serwera i kompilacji Vite
```

---

## Udział w projekcie

Znalazłeś błąd w odpowiedziach lub zadaniach obliczeniowych? Chcesz dodać nowe rozwiązania egzaminów?

Możesz zgłosić błąd na dwa sposoby:
1. **Utwórz zgłoszenie błędu (Issue)** bezpośrednio w repozytorium GitHub [frogalo/fptipi](https://github.com/frogalo/fptipi) — jest to najszybsza i najwygodniejsza metoda, jeśli nie chcesz samodzielnie modyfikować kodu.
2. **Prześlij Pull Request**:
   - Sklonuj repozytorium.
   - Wprowadź poprawki w kodzie lub plikach danych.
   - Utwórz **Pull Request** na GitHubie do repozytorium [frogalo/fptipi](https://github.com/frogalo/fptipi).

---

## Licencja

Projekt jest udostępniany na warunkach licencji [MIT](LICENSE).

