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
├── src/                    # Folder źródłowy aplikacji (ustawiony jako root w Vite)
│   ├── assets/             # Statyczne zasoby (obrazy, wykresy z podręcznika)
│   ├── components/         # Komponenty wielokrotnego użytku
│   │   ├── FloatingNav.tsx     # Pływające menu nawigacyjne
│   │   ├── Footer.tsx          # Stopka strony ze stopą błędów / zgłoszeniami PR
│   │   ├── MathBlocks.tsx      # Komponenty do renderowania pojęć matematycznych (wzory, objaśnienia)
│   │   ├── SearchOverlay.tsx   # Wyszukiwarka pytań i haseł
│   │   └── TheoryComponents.tsx# Nagłówki i sekcje teorii
│   ├── data/               # Pliki danych JSON (np. baza egzaminów examsData.json)
│   ├── pages/              # Widoki (strony) aplikacji odpowiadające trasom
│   │   ├── teoria/         # Odpowiedzi podzielone na części (1–5) oraz Ściąga
│   │   ├── wizualizacje/   # Interaktywne animacje zjawisk fizycznych i nośników
│   │   ├── zadania/        # Trzy części zadań obliczeniowych z rozwiązaniami
│   │   ├── Egzaminy.tsx    # Baza pytań i arkuszy z ubiegłych lat (2024-2026)
│   │   └── Home.tsx        # Strona główna ze spisem treści
│   ├── App.tsx             # Główny komponent konfigurujący routing (React Router)
│   ├── index.html          # Główny plik HTML (entry point)
│   └── main.tsx            # Inicjalizacja Reacta i renderowanie aplikacji
├── package.json            # Konfiguracja skryptów i zależności NPM
├── tsconfig.json           # Konfiguracja TypeScript
├── tailwind.config.js      # Konfiguracja stylów TailwindCSS
└── vite.config.js          # Konfiguracja serwera i kompilacji Vite
```

---

## Udział w projekcie

Znalazłeś błąd w odpowiedziach lub zadaniach obliczeniowych? Chcesz dodać nowe rozwiązania egzaminów?
1. Sklonuj repozytorium.
2. Wprowadź poprawki.
3. Utwórz **Pull Request** na GitHubie do repozytorium [frogalo/fptipi](https://github.com/frogalo/fptipi).

---

## Licencja

Projekt jest udostępniany na warunkach licencji [MIT](LICENSE).

