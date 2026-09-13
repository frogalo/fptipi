export interface QuizQuestion {
  id: string;
  category: 'fale_em' | 'swiatlowody' | 'modulacja' | 'polprzewodniki' | 'pamieci' | 'zadania_wzory';
  categoryLabel: string;
  tier: 'tier1' | 'tier2';
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0..3
  explanation: string;
  flashcardFront: string;
  flashcardBack: string[];
  tips: [string, string, string];
  tip?: string;
  relatedRoute?: string;
}

export const QUIZ_CATEGORIES = [
  { id: 'all', label: 'Wszystkie działy', code: 'ALL' },
  { id: 'fale_em', label: 'Fale i propagacja EM', code: 'EM' },
  { id: 'swiatlowody', label: 'Światłowody i optyka', code: 'OPT' },
  { id: 'modulacja', label: 'Modulacja i multipleksacja', code: 'MOD' },
  { id: 'polprzewodniki', label: 'Półprzewodniki i złącze p-n', code: 'SEMI' },
  { id: 'pamieci', label: 'Pamięci, dyski i GMR', code: 'MEM' },
  { id: 'zadania_wzory', label: 'Wzory i reguły kciuka', code: 'MATH' }
] as const;

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    "id": "em-maxwell-1",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Wskaż poprawne sformułowanie I równania Maxwella (prawo indukcji Faradaya w postaci różniczkowej) oraz jego fizyczne znaczenie:",
    "options": [
      "\\(\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\) — zmienne w czasie pole magnetyczne wytwarza wirowe pole elektryczne; znak minus odzwierciedla regułę Lenza.",
      "\\(\\nabla\\times\\vec{B} = -\\mu_0\\varepsilon_0 \\frac{\\partial\\vec{E}}{\\partial t}\\) — zmienne pole elektryczne niszczy pole magnetyczne w próżni.",
      "\\(\\nabla\\cdot\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\) — dywergencja pola elektrycznego jest proporcjonalna do szybkości zaniku strumienia magnetycznego.",
      "\\(\\nabla\\times\\vec{E} = +\\sigma \\vec{B}\\) — natężenie wirowego pola elektrycznego zależy wyłącznie od przewodności właściwej ośrodka."
    ],
    "correctIndex": 0,
    "explanation": "I równanie Maxwella to uogólnione prawo indukcji elektromagnetycznej Faradaya: rotacja wektora natężenia pola elektrycznego \\(\\vec{E}\\) jest równa minus pochodnej cząstkowej indukcji magnetycznej \\(\\vec{B}\\) po czasie (\\(\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\)). Oznacza to, że każde zmienne pole magnetyczne indukuje w przestrzeni pole elektryczne o charakterze wirowym. Znak minus wynika bezpośrednio z reguły przekory (Lenza).",
    "flashcardFront": "I równanie Maxwella (Prawo indukcji Faradaya) — wzór i sens fizyczny:",
    "flashcardBack": [
      "Postać różniczkowa: \\(\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\)",
      "Sens fizyczny: Zmienne w czasie pole magnetyczne wytwarza WIROWE pole elektryczne.",
      "Znak minus: Reguła Lenza (pole indukowane przeciwdziała przyczynie, która je wywołała)."
    ],
    "tips": [
      "Przypomnij sobie zjawisko powstawania prądu w pętli pod wpływem zbliżania magnesu.",
      "Chodzi o pole wirowe (rotację) wywoływane przez zmianę innego pola w czasie.",
      "Znak minus przed pochodną czasową reprezentuje regułę przekory (Lenza)."
    ],
    "tip": "I równanie Maxwella: rotacja pola E równa się ujemnej pochodnej indukcji B po czasie.",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-maxwell-2",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Czym jest prąd przesunięcia wprowadzony przez Maxwella w II równaniu (prawie Ampère'a-Maxwella): \\(\\nabla\\times\\vec{H} = \\vec{j} + \\frac{\\partial\\vec{D}}{\\partial t}\\)?",
    "options": [
      "Składnikiem \\(\\frac{\\partial\\vec{D}}{\\partial t}\\) opisującym, że zmienne pole elektryczne wytwarza wirowe pole magnetyczne nawet w próżni lub idealnym izolatorze bez ruchu swobodnych ładunków.",
      "Prądem upływu stałego, który płynie przez niedoskonały dielektryk kondensatora pod wpływem napięcia stałego.",
      "Prądem konwekcyjnym wynikającym z mechanicznego ruchu naładowanych cząstek w próżni.",
      "Składową prądu przewodzenia płynącą wyłącznie w metalach ferromagnetycznych w obecności histerezy."
    ],
    "correctIndex": 0,
    "explanation": "W II równaniu Maxwella składnik \\(\\vec{j}_D = \\frac{\\partial\\vec{D}}{\\partial t}\\) to gęstość prądu przesunięcia. Maxwell zauważył, że zmienne pole elektryczne w dielektryku lub próżni wytwarza pole magnetyczne dokładnie tak samo, jak rzeczywisty przepływ ładunków elektrycznych (prąd przewodzenia \\(\\vec{j}\\)). Wprowadzenie tego członu zapewniło spełnienie zasady zachowania ładunku i przewidziało istnienie fal EM.",
    "flashcardFront": "Czym jest prąd przesunięcia w II równaniu Maxwella?",
    "flashcardBack": [
      "Wzór: \\(\\vec{j}_D = \\frac{\\partial\\vec{D}}{\\partial t} = \\varepsilon \\frac{\\partial\\vec{E}}{\\partial t}\\)",
      "Opisuje generowanie wirowego pola magnetycznego przez zmienne w czasie pole elektryczne.",
      "Nie wymaga ruchu ładunków — płynie także w próżni i izolatorach (np. między okładkami kondensatora)."
    ],
    "tips": [
      "Zastanów się, co „zamyka obwód” prądu zmiennego pomiędzy okładkami idealnego kondensatora.",
      "Pomiędzy okładkami nie ma swobodnych elektronów, jest tylko zmienne pole elektryczne.",
      "Prąd przesunięcia to pochodna czasowa indukcji elektrycznej D."
    ],
    "tip": "Prąd przesunięcia to zmiana pola elektrycznego w czasie, która indukuje pole magnetyczne w próżni.",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-maxwell-3",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Jakie jest fizyczne znaczenie III równania Maxwella (prawo Gaussa dla elektryczności): \\(\\nabla\\cdot\\vec{D} = \\rho\\)?",
    "options": [
      "Źródłem pola indukcji elektrycznej są ładunki elektryczne — pole elektryczne jest polem źródłowym o liniach zaczynających się i kończących na ładunkach.",
      "Pole elektryczne jest bezźródłowe i jego linie zawsze zamykają się same na sobie.",
      "Gęstość ładunku swobodnego \\(\\rho\\) w próżni musi być zawsze równa zeru niezależnie od obecności elektronów.",
      "Strumień indukcji magnetycznej przez dowolną zamkniętą powierzchnię jest proporcjonalny do objętościowej gęstości ładunku."
    ],
    "correctIndex": 0,
    "explanation": "III równanie Maxwella (\\(\\nabla\\cdot\\vec{D} = \\rho\\)) stwierdza, że dywergencja wektora indukcji elektrycznej jest równa gęstości objętościowej ładunku swobodnego \\(\\rho\\). Oznacza to, że ładunki elektryczne (dodatnie i ujemne) są fizycznymi źródłami i ujściami linii pola elektrycznego.",
    "flashcardFront": "III równanie Maxwella (Prawo Gaussa dla elektryczności) — sens fizyczny:",
    "flashcardBack": [
      "Wzór: \\(\\nabla\\cdot\\vec{D} = \\rho\\)",
      "Pole elektryczne jest polem ŹRÓDŁOWYM (dywergencja niezerowa).",
      "Skalarnym źródłem pola \\(\\vec{D}\\) są ładunki elektryczne (linie pola wypływają z ładunków dodatnich i zbiegają się na ujemnych)."
    ],
    "tips": [
      "Dywergencja opisuje, czy dane pole wypływa ze źródeł punktowych w przestrzeni.",
      "Po prawej stronie stoi rho — objętościowa gęstość ładunku.",
      "Oznacza to, że ładunki elektryczne stanowią początek i koniec linii pola."
    ],
    "tip": "Dywergencja pola D równa się gęstości ładunku rho: pole ma realne ładunkowe źródła.",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-maxwell-4",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Jakie jest fizyczne znaczenie IV równania Maxwella: \\(\\nabla\\cdot\\vec{B} = 0\\)?",
    "options": [
      "Pole magnetyczne jest bezźródłowe — linie pola są zawsze zamknięte i w przyrodzie nie istnieją swobodne monopole magnetyczne.",
      "Pole magnetyczne nie może ulegać zakrzywieniu w obecności przewodników prądu stałego.",
      "Wektor indukcji magnetycznej B jest zawsze tożsamościowo równy zeru w dielektryku idealnym.",
      "Zmienne w czasie pole elektryczne nie może wywołać pola magnetycznego w próżni."
    ],
    "correctIndex": 0,
    "explanation": "Równanie Gaussa dla magnetyzmu (\\(\\nabla\\cdot\\vec{B} = 0\\)) orzeka, że dywergencja wektora indukcji magnetycznej jest zawsze równa zero. Oznacza to brak pojedynczych ładunków magnetycznych (monopoli). Każdy magnes posiada parę biegunów (N i S), a linie pola magnetycznego zawsze zamykają się same na sobie.",
    "flashcardFront": "IV równanie Maxwella (Prawo Gaussa dla magnetyzmu) — sens fizyczny:",
    "flashcardBack": [
      "Wzór: \\(\\nabla\\cdot\\vec{B} = 0\\)",
      "Pole magnetyczne jest BEZŹRÓDŁOWE (brak monopolów magnetycznych).",
      "Linie pola magnetycznego są ZAWSZE zamknięte (nie mają ani początku, ani końca)."
    ],
    "tips": [
      "Zwróć uwagę na zero po prawej stronie dywergencji pola B.",
      "Dywergencja równa zero oznacza, że linie nigdzie się nie zaczynają i nigdzie nie kończą.",
      "W przyrodzie nie znaleziono pojedynczych biegunów magnetycznych (monopoli)."
    ],
    "tip": "Pole magnetyczne jest bezźródłowe: linie pola B są zamknięte, brak monopoli.",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-maxwell-units",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Wskaż zestawienie poprawnych jednostek w układzie SI dla wielkości z równań Maxwella: \\(\\vec{E}, \\vec{H}, \\vec{D}, \\vec{B}, \\vec{j}, \\rho\\):",
    "options": [
      "\\(\\vec{E}\\ [\\mathrm{V/m}]\\), \\(\\vec{H}\\ [\\mathrm{A/m}]\\), \\(\\vec{D}\\ [\\mathrm{C/m^2}]\\), \\(\\vec{B}\\ [\\mathrm{T} = \\mathrm{Wb/m^2}]\\), \\(\\vec{j}\\ [\\mathrm{A/m^2}]\\), \\(\\rho\\ [\\mathrm{C/m^3}]\\)",
      "\\(\\vec{E}\\ [\\mathrm{N/C}]\\), \\(\\vec{H}\\ [\\mathrm{T}]\\), \\(\\vec{D}\\ [\\mathrm{F/m}]\\), \\(\\vec{B}\\ [\\mathrm{A/m}]\\), \\(\\vec{j}\\ [\\mathrm{A}]\\), \\(\\rho\\ [\\mathrm{C}]\\)",
      "\\(\\vec{E}\\ [\\mathrm{V}]\\), \\(\\vec{H}\\ [\\mathrm{A}]\\), \\(\\vec{D}\\ [\\mathrm{C/m}]\\), \\(\\vec{B}\\ [\\mathrm{G}]\\), \\(\\vec{j}\\ [\\mathrm{A/s}]\\), \\(\\rho\\ [\\mathrm{C/m^2}]\\)",
      "\\(\\vec{E}\\ [\\mathrm{W/m^2}]\\), \\(\\vec{H}\\ [\\mathrm{V/m}]\\), \\(\\vec{D}\\ [\\mathrm{A\\cdot s}]\\), \\(\\vec{B}\\ [\\mathrm{H/m}]\\), \\(\\vec{j}\\ [\\mathrm{S/m}]\\), \\(\\rho\\ [\\mathrm{C/m^3}]\\)"
    ],
    "correctIndex": 0,
    "explanation": "Jednostki SI na egzaminie z równań Maxwella to absolutny wymóg: natężenie pola elektrycznego E w V/m, natężenie pola magnetycznego H w A/m, indukcja elektryczna D w C/m² (lub A·s/m²), indukcja magnetyczna B w teslach (T = Wb/m² = V·s/m²), gęstość prądu j w A/m², gęstość objętościowa ładunku rho w C/m³.",
    "flashcardFront": "Jednostki wielkości w równaniach Maxwella (egzaminacyjny pewniak):",
    "flashcardBack": [
      "\\(\\vec{E}\\): V/m (natężenie pola elektrycznego)",
      "\\(\\vec{H}\\): A/m (natężenie pola magnetycznego)",
      "\\(\\vec{D}\\): \\(\\mathrm{C/m^2} = \\mathrm{A\\cdot s/m^2}\\) (indukcja elektryczna)",
      "\\(\\vec{B}\\): \\(\\mathrm{T} = \\mathrm{Wb/m^2} = \\mathrm{V\\cdot s/m^2}\\) (indukcja magnetyczna)",
      "\\(\\vec{j}\\): \\(\\mathrm{A/m^2}\\) (gęstość prądu), \\(\\rho\\): \\(\\mathrm{C/m^3}\\) (gęstość ładunku)"
    ],
    "tips": [
      "Pamiętaj: natężenia (E, H) mają w mianowniku metr (V/m, A/m).",
      "Indukcje (D, B) to wielkości powierzchniowe — mają w mianowniku metr kwadratowy (C/m², Wb/m²).",
      "Gęstość ładunku rho jest objętościowa — C/m³."
    ],
    "tip": "E [V/m], H [A/m], D [C/m²], B [T = Wb/m²], j [A/m²], rho [C/m³].",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-maxwell-conclusions",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Jakie fundamentalne wnioski fizyczne wynikają bezpośrednio z układu równań Maxwella?",
    "options": [
      "Istnienie fali elektromagnetycznej rozchodzącej się z prędkością światła \\(v = 1/\\sqrt{\\varepsilon\\mu}\\), poprzeczność drgań \\(\\vec{E}\\perp\\vec{H}\\perp\\vec{v}\\), zgodność fazowa pól oraz zasada zachowania ładunku.",
      "Możliwość całkowitego rozdzielenia pola elektrycznego i magnetycznego w falach o częstotliwości radiowej.",
      "Konieczność istnienia materialnego eteru do przenoszenia zaburzeń pola w próżni.",
      "Stałość ładunku elektrycznego tylko w ośrodkach o nieskończonej przenikalności magnetycznej."
    ],
    "correctIndex": 0,
    "explanation": "Z równań Maxwella wynika, że zmienne pole elektryczne i magnetyczne wzajemnie się generują, tworząc samopodtrzymującą się falę EM. Fala ta w próżni porusza się z prędkością światła \\(c = 1/\\sqrt{\\varepsilon_0\\mu_0}\\). Wektory \\(\\vec{E}\\) i \\(\\vec{H}\\) drgają w tej samej fazie, są wzajemnie prostopadłe i prostopadłe do kierunku propagacji (fala poprzeczna). Z dywergencji II równania wynika także prawo zachowania ładunku: \\(\\nabla\\cdot\\vec{j} = -\\frac{\\partial\\rho}{\\partial t}\\).",
    "flashcardFront": "Co wynika z równań Maxwella? (Wnioski egzaminacyjne)",
    "flashcardBack": [
      "Istnienie fali elektromagnetycznej w próżni i dielektrykach.",
      "Prędkość fali: \\(v = 1/\\sqrt{\\varepsilon\\mu}\\) (w próżni \\(c = 1/\\sqrt{\\varepsilon_0\\mu_0} \\approx 3\\cdot 10^8\\ \\mathrm{m/s}\\)).",
      "Fala jest POPRZECZNA: \\(\\vec{E}\\perp\\vec{H}\\perp\\vec{k}\\), drgania \\(\\vec{E}\\) i \\(\\vec{H}\\) są w tej samej fazie.",
      "Prawo zachowania ładunku: \\(\\nabla\\cdot\\vec{j} = -\\partial\\rho/\\partial t\\)."
    ],
    "tips": [
      "Połącz I i II równanie Maxwella, biorąc rotację z rotacji — otrzymasz równanie falowe.",
      "Prędkość fali wynika z iloczynu przenikalności próżni.",
      "Pola E i H nie mogą istnieć rozłącznie w stanach zmiennych w czasie."
    ],
    "tip": "Z równań wynika istnienie fal EM, prędkość c = 1/√(ε0 μ0), poprzeczność fali i zachowanie ładunku.",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-mat-eq-1",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Wskaż równania materiałowe (związki konstytutywne) oraz ich znaczenie fizyczne:",
    "options": [
      "\\(\\vec{D} = \\varepsilon\\vec{E}\\), \\(\\vec{B} = \\mu\\vec{H}\\), \\(\\vec{j} = \\sigma\\vec{E}\\) — opisują one reakcję rzeczywistego ośrodka materialnego (polaryzację, namagnesowanie i przewodzenie) na przyłożone pola.",
      "\\(\\vec{E} = \\varepsilon\\vec{D}\\), \\(\\vec{H} = \\mu\\vec{B}\\), \\(\\vec{j} = \\rho\\vec{v}\\) — opisują niezmienniczość prędkości światła w ośrodkach z dyspersją.",
      "\\(\\vec{D} = \\mu\\vec{E}\\), \\(\\vec{B} = \\varepsilon\\vec{H}\\), \\(\\vec{j} = \\sigma\\vec{B}\\) — wiążą siłę Lorentza z indukcją elektrostatyczną.",
      "\\(\\nabla\\cdot\\vec{D} = \\varepsilon\\), \\(\\nabla\\times\\vec{B} = \\mu\\) — są to różniczkowe definicje stałych dielektrycznych i magnetycznych."
    ],
    "correctIndex": 0,
    "explanation": "Równania materiałowe wiążą wielkości polowe ze sobą poprzez parametry ośrodka: \\(\\vec{D} = \\varepsilon\\vec{E} = \\varepsilon_0 \\varepsilon_r \\vec{E}\\) (polaryzacja elektryczna dielektryka), \\(\\vec{B} = \\mu\\vec{H} = \\mu_0 \\mu_r \\vec{H}\\) (namagnesowanie ośrodka) oraz mikroskopowe prawo Ohma \\(\\vec{j} = \\sigma\\vec{E}\\) (przewodnictwo właściwe i ruch ładunków swobodnych). Zależność prędkości unoszenia od pola: \\(\\vec{v}_d = \\mu_n \\vec{E}\\).",
    "flashcardFront": "Równania materiałowe (związki konstytutywne) — wzory i sens:",
    "flashcardBack": [
      "\\(\\vec{D} = \\varepsilon\\vec{E} = \\varepsilon_0 \\varepsilon_r \\vec{E}\\) (polaryzacja dielektryczna)",
      "\\(\\vec{B} = \\mu\\vec{H} = \\mu_0 \\mu_r \\vec{H}\\) (namagnesowanie magnetyczne)",
      "\\(\\vec{j} = \\sigma\\vec{E}\\) (mikroskopowe prawo Ohma)",
      "Sens: Opisują makroskopową reakcję atomów i cząsteczek materiału na pole zewnętrzne."
    ],
    "tips": [
      "Pomyśl o stałych materiałowych: epsilon (przenikalność elektryczna), mi (magnetyczna), sigma (przewodność).",
      "Wzory wiążą indukcje D i B z natężeniami E i H.",
      "Prawo Ohma w postaci wektorowej: gęstość prądu j = sigma * E."
    ],
    "tip": "Równania materiałowe: D = ε E, B = μ H, j = σ E.",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-mat-eq-units",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Wskaż jednostki parametrów występujących w równaniach materiałowych: \\(\\varepsilon, \\mu, \\sigma, \\mu_n\\):",
    "options": [
      "\\(\\varepsilon\\ [\\mathrm{F/m}]\\), \\(\\mu\\ [\\mathrm{H/m}]\\), \\(\\sigma\\ [\\mathrm{S/m}]\\), \\(\\mu_n\\ [\\mathrm{m^2/(V\\cdot s)}]\\)",
      "\\(\\varepsilon\\ [\\mathrm{C/m}]\\), \\(\\mu\\ [\\mathrm{T/m}]\\), \\(\\sigma\\ [\\Omega\\cdot\\mathrm{m}]\\), \\(\\mu_n\\ [\\mathrm{m/s}]\\)",
      "\\(\\varepsilon\\ [\\mathrm{F}]\\), \\(\\mu\\ [\\mathrm{H}]\\), \\(\\sigma\\ [\\mathrm{S}]\\), \\(\\mu_n\\ [\\mathrm{m^2/s}]\\)",
      "\\(\\varepsilon\\ [\\mathrm{N/A^2}]\\), \\(\\mu\\ [\\mathrm{C^2/N}]\\), \\(\\sigma\\ [\\mathrm{V/A}]\\), \\(\\mu_n\\ [\\mathrm{cm^2/V}]\\)"
    ],
    "correctIndex": 0,
    "explanation": "W układzie SI: przenikalność elektryczna \\(\\varepsilon\\) wyraża się w faradach na metr (F/m), przenikalność magnetyczna \\(\\mu\\) w henrach na metr (H/m), przewodność właściwa (konduktancja właściwa) \\(\\sigma\\) w simensach na metr (S/m), a ruchliwość nośników \\(\\mu_n\\) w \\(\\mathrm{m^2/(V\\cdot s)}\\) lub \\(\\mathrm{cm^2/(V\\cdot s)}\\).",
    "flashcardFront": "Jednostki parametrów materiałowych (\\(\\varepsilon, \\mu, \\sigma, \\mu_n\\)):",
    "flashcardBack": [
      "\\(\\varepsilon\\): F/m (farad na metr — przenikalność elektryczna)",
      "\\(\\mu\\): H/m (henr na metr — przenikalność magnetyczna)",
      "\\(\\sigma\\): S/m (simens na metr — przewodność właściwa)",
      "\\(\\mu_n\\): \\(\\mathrm{m^2/(V\\cdot s)}\\) (ruchliwość nośników ładunku)"
    ],
    "tips": [
      "Pojemność kondensatora to farady, indukcyjność cewki to henry — na metr długości ośrodka.",
      "Odwrotność rezystywności [om·metr] to simens na metr [S/m].",
      "Ruchliwość to prędkość [m/s] podzielona przez pole elektryczne [V/m]."
    ],
    "tip": "ε [F/m], μ [H/m], σ [S/m], μn [m²/(V·s)].",
    "relatedRoute": "/teoria/fala-propagacja#q1"
  },
  {
    "id": "em-boundary-diel",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Jak brzmią warunki brzegowe pól na granicy dwóch idealnych dielektryków (bez ładunków swobodnych \\(\\rho_s = 0\\) i prądów powierzchniowych \\(j_s = 0\\))?",
    "options": [
      "Składowe styczne natężeń są ciągłe (\\(E_{1t} = E_{2t}, H_{1t} = H_{2t}\\)), a składowe normalne indukcji są ciągłe (\\(D_{1n} = D_{2n}, B_{1n} = B_{2n}\\)).",
      "Wszystkie składowe wektora E są równe zeru, a składowe wektora B podwajają swoją wartość.",
      "Składowe normalne natężeń są ciągłe (\\(E_{1n} = E_{2n}\\)), a składowe styczne ulegają skokowi o wartość \\(\\varepsilon_r\\).",
      "Składowe styczne indukcji są ciągłe, a składowe normalne natężeń znikają tożsamościowo."
    ],
    "correctIndex": 0,
    "explanation": "Z twierdzenia Stokesa i praw rotacyjnych wynika ciągłość składowych stycznych natężeń: \\(E_{1t} = E_{2t}\\) oraz \\(H_{1t} = H_{2t}\\) (ponieważ \\(j_s = 0\\)). Z twierdzenia Gaussa wynika ciągłość składowych normalnych indukcji: \\(D_{1n} = D_{2n}\\) (ponieważ \\(\\rho_s = 0\\)) oraz bezwzględnie \\(B_{1n} = B_{2n}\\) (brak monopoli magnetycznych). Reguła mnemotechniczna: styczne = natężenia (E, H), normalne = indukcje (D, B).",
    "flashcardFront": "Warunki brzegowe pól na granicy dielektryk — dielektryk:",
    "flashcardBack": [
      "Składowe STYCZNE natężeń są ciągłe: \\(E_{1t} = E_{2t}\\) oraz \\(H_{1t} = H_{2t}\\)",
      "Składowe NORMALNE indukcji są ciągłe: \\(D_{1n} = D_{2n}\\) oraz \\(B_{1n} = B_{2n}\\)",
      "Mnemotechnika: Styczne = Natężenia (E, H), Normalne = Indukcje (D, B)."
    ],
    "tips": [
      "Pomyśl o pętli Stokesa wzdłuż granicy — daje składowe styczne.",
      "Pudełko Gaussa w poprzek granicy obejmuje składowe prostopadłe (normalne).",
      "Styczne = litery E i H. Normalne = litery D i B."
    ],
    "tip": "Styczne natężenia ciągłe (E_t, H_t), normalne indukcje ciągłe (D_n, B_n).",
    "relatedRoute": "/teoria/fala-propagacja#q3"
  },
  {
    "id": "em-boundary-conductor",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Jakie warunki brzegowe panują na granicy dielektryka z idealnym przewodnikiem (\\(\\sigma \\to \\infty\\))?",
    "options": [
      "Wewnątrz przewodnika pola znikają; na granicy składowa styczna pola elektrycznego zeruje się (\\(E_t = 0\\)), a składowa normalna indukcji magnetycznej zeruje się (\\(B_n = 0\\)).",
      "Składowa normalna pola elektrycznego musi być równa zeru (\\(E_n = 0\\)), a pole magnetyczne wnika bez przeszkód w głąb przewodnika.",
      "Wszystkie składowe pola magnetycznego stają się prostopadłe do powierzchni przewodnika.",
      "Indukcja elektryczna wewnątrz przewodnika rośnie do nieskończoności proporcjonalnie do konduktancji."
    ],
    "correctIndex": 0,
    "explanation": "W idealnym przewodniku pole elektryczne i magnetyczne wewnątrz wynosi tożsamościowo zero (\\(E=0, B=0\\)). Z warunków ciągłości wynika, że na powierzchni granicznej: \\(E_t = 0\\) (linie pola elektrycznego padają ściśle PROSTOPADLE do metalu) oraz \\(B_n = 0\\) (linie indukcji magnetycznej układają się ściśle STYCZNIE do powierzchni). Składowe niezerowe to \\(D_n = \\rho_s\\) (ładunek powierzchniowy) oraz \\(H_t = j_s\\) (prąd powierzchniowy).",
    "flashcardFront": "Warunki brzegowe: Dielektryk — Idealny Przewodnik (\\(\\sigma\\to\\infty\\)):",
    "flashcardBack": [
      "Wewnątrz idealnego przewodnika: \\(\\vec{E} = 0\\) oraz \\(\\vec{B} = 0\\)",
      "Na powierzchni: \\(E_t = 0\\) (pole \\(\\vec{E}\\) jest ŚCIŚLE PROSTOPADŁE do powierzchni)",
      "Na powierzchni: \\(B_n = 0\\) (pole \\(\\vec{B}\\) jest ŚCIŚLE STYCZNE do powierzchni)",
      "Występują skoki: \\(D_n = \\rho_s\\) (ładunek powierzchniowy), \\(H_t = j_s\\) (prąd powierzchniowy)."
    ],
    "tips": [
      "Wewnątrz metalu ładunki natychmiast ekranują jakiekolwiek pole elektryczne.",
      "Linie pola E muszą wchodzić w metal pod kątem prostym (brak składowej równoległej Et = 0).",
      "Pole magnetyczne nie może przecinać powierzchni idealnego przewodnika (Bn = 0)."
    ],
    "tip": "Na granicy idealnego przewodnika: E_t = 0 (pole E prostopadłe), B_n = 0 (pole B styczne).",
    "relatedRoute": "/teoria/fala-propagacja#q3"
  },
  {
    "id": "em-poynting",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier2",
    "question": "Wektor Poyntinga \\(\\vec{S} = \\vec{E} \\times \\vec{H}\\) określa:",
    "options": [
      "Gęstość strumienia mocy fali elektromagnetycznej oraz kierunek jej propagacji, a jego jednostką w układzie SI jest \\(\\mathrm{W/m^2}\\).",
      "Całkowitą energię zmagazynowaną w polu elektrostatycznym dielektryka o jednostce dżul [J].",
      "Siłę działającą na jednostkowy ładunek poruszający się w polu magnetycznym o jednostce niuton [N].",
      "Wektor polaryzacji dielektrycznej o jednostce kulomb na metr kwadratowy [C/m²]."
    ],
    "correctIndex": 0,
    "explanation": "Iloczyn wektorowy \\(\\vec{S} = \\vec{E} \\times \\vec{H}\\) to wektor gęstości strumienia mocy promieniowania elektromagnetycznego. Wskazuje on kierunek przepływu energii fali, a jego wartość chwilowa lub średnia ma jednostkę wata na metr kwadratowy (\\(\\mathrm{[V/m] \\times [A/m] = [W/m^2]}\\)).",
    "flashcardFront": "Wektor Poyntinga \\(\\vec{S} = \\vec{E} \\times \\vec{H}\\) — definicja i jednostka:",
    "flashcardBack": [
      "Wzór: \\(\\vec{S} = \\vec{E} \\times \\vec{H}\\)",
      "Fizyczne znaczenie: Gęstość strumienia mocy fali EM oraz kierunek przepływu energii.",
      "Jednostka SI: \\(\\mathrm{W/m^2}\\) ([V/m] × [A/m] = [W/m²])."
    ],
    "tips": [
      "Zwróć uwagę na wymiary jednostek: wolty na metr razy ampery na metr.",
      "Wolt razy amper to wat — moc.",
      "Wat podzielony przez metr kwadratowy to powierzchniowa gęstość mocy."
    ],
    "tip": "S = E × H [W/m²] określa gęstość strumienia mocy i kierunek rozchodzenia się fali.",
    "relatedRoute": "/teoria/fala-propagacja#q2"
  },
  {
    "id": "em-prop-modes",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Omów mechanizmy propagacji fal powierzchniowych, troposferycznych i jonosferycznych oraz ich typowe zakresy:",
    "options": [
      "Powierzchniowe uginają się wzdłuż krzywizny Ziemi (LF/MF); troposferyczne rozchodzą się dzięki refrakcji i falowodom w troposferze (VHF/UHF); jonosferyczne odbijają się od jonosfery umożliwiając łączność dalekosiężną (HF 3–30 MHz).",
      "Powierzchniowe przenikają przez jądro Ziemi; troposferyczne odbijają się od pasów Van Allena; jonosferyczne stosowane są wyłącznie w światłowodach kwarcowych.",
      "Powierzchniowe wymagają polaryzacji poziomej w pasmie mikrofalowym; troposferyczne nie ulegają zjawisku refrakcji; jonosferyczne służą do łączności podwodnej.",
      "Wszystkie trzy typy fal mają identyczny zasięg ograniczony geometrycznym horyzontem optycznym."
    ],
    "correctIndex": 0,
    "explanation": "Fale powierzchniowe (przyziemne) uginają się wzdłuż krzywizny Ziemi przy pionowej polaryzacji (pasma LF/MF); są silnie tłumione przez rezystywność gruntu (nad morzem zasięg jest wielokrotnie większy). Fale troposferyczne uginają się ku Ziemi dzięki gradientowi współczynnika załamania powietrza (standardowa refrakcja \\(R_z' = \\frac{4}{3}R_z\\) w VHF/UHF). Fale jonosferyczne (przestrzenne) odbijają się od zjonizowanych warstw jonosfery (D, E, F1, F2), zapewniając łączność na tysiące kilometrów w paśmie fal krótkich (HF 3–30 MHz).",
    "flashcardFront": "Fale powierzchniowe, troposferyczne i jonosferyczne — porównanie:",
    "flashcardBack": [
      "Powierzchniowe (LF/MF): uginają się wzdłuż krzywizny Ziemi; wymagają polaryzacji pionowej; tłumione przez grunt (duży zasięg nad wodą).",
      "Troposferyczne (VHF/UHF): uginanie w troposferze na skutek refrakcji (zastępczy promień Ziemi \\(R_z' = \\frac{4}{3}R_z\\)).",
      "Jonosferyczne (HF 3–30 MHz): wielokrotne odbicia od warstw jonosfery i powierzchni Ziemi; łączność międzykontynentalna."
    ],
    "tips": [
      "Fale krótkie (HF) kojarz z jonosferą i dalekimi zasięgami globalnymi.",
      "Fale troposferyczne to telewizja naziemna i radio FM (VHF/UHF) z ugięciem refrakcyjnym 4/3 R_Z.",
      "Fale długie i średnie (LF/MF) płyną przy samej ziemi jako fala powierzchniowa."
    ],
    "tip": "Powierzchniowe (LF/MF, wzdłuż Ziemi), troposferyczne (VHF/UHF, refrakcja), jonosferyczne (HF, odbicia od jonosfery).",
    "relatedRoute": "/teoria/fala-propagacja#q4"
  },
  {
    "id": "em-prop-atmos-itur",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier1",
    "question": "Wskaż kluczowe zjawiska opisane na krzywej tłumienia atmosferycznego ITU-R P.676:",
    "options": [
      "Rezonansowe piki absorpcji cząsteczkowej pary wodnej \\(\\mathrm{H_2O}\\) (ok. 22,2 GHz i 183 GHz) oraz tlenu cząsteczkowego \\(\\mathrm{O_2}\\) (silny pik ok. 60 GHz); deszcz wywołuje drastyczny wzrost tłumienia powyżej 10 GHz.",
      "Całkowity brak tłumienia sygnałów radiowych w oknie 60 GHz ze względu na zjawisko nadprzewodnictwa powietrza.",
      "Liniowy spadek tłumienia wraz ze wzrostem częstotliwości aż do pasma promieniowania rentgenowskiego.",
      "Absorpcja fal radiowych zachodzi wyłącznie na jonach azotu w temperaturze poniżej zera stopni Celsjusza."
    ],
    "correctIndex": 0,
    "explanation": "Wykres ITU-R P.676 przedstawia tłumienie właściwe gazów atmosferycznych [dB/km]. Kluczowe cechy to rezonansowe piki absorpcji molekularnej: dipolowy rezonans pary wodnej (H2O) przy 22,2 GHz oraz magnetyczny rezonans tlenu cząsteczkowego (O2) przy 60 GHz (ponad 15 dB/km). Z tego powodu pasmo 60 GHz stosuje się w łącznościach bliskiego zasięgu (np. WiGig). Dla f > 10 GHz dodatkowo decydujący wpływ ma deszcz (krople wody o rozmiarze rzędu długości fali rozpraszają i pochłaniają energię fali).",
    "flashcardFront": "Tłumienie atmosferyczne (ITU-R P.676) — najważniejsze punkty:",
    "flashcardBack": [
      "Pik absorpcji pary wodnej (\\(\\mathrm{H_2O}\\)): ok. 22,2 GHz (oraz 183 GHz).",
      "Pik absorpcji tlenu (\\(\\mathrm{O_2}\\)): ok. 60 GHz (silne tłumienie > 15 dB/km, bezpieczna łączność lokalna).",
      "Wpływ opadów (deszcz, mgła): gwałtowny wzrost tłumienia dla częstotliwości powyżej 10 GHz (rozmiar kropel zbliżony do \\(\\lambda\\))."
    ],
    "tips": [
      "Przypomnij sobie dwa gazy odpowiedzialne za piki na wykresie: para wodna i tlen.",
      "Para wodna pochłania przy ok. 22 GHz, a tlen tworzy wielki szczyt tłumienia przy 60 GHz.",
      "Powyżej 10 GHz krople deszczu stają się porównywalne z długością fali."
    ],
    "tip": "Pik H2O przy 22,2 GHz, pik O2 przy 60 GHz. Deszcz dominuje powyżej 10 GHz.",
    "relatedRoute": "/teoria/fala-propagacja#q4"
  },
  {
    "id": "em-wave-phenomena",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier2",
    "question": "Czym różni się dyfrakcja od interferencji fali elektromagnetycznej?",
    "options": [
      "Dyfrakcja to ugięcie fali na przeszkodzie lub krawędzi o rozmiarach porównywalnych z długością fali (zasada Huygensa), a interferencja to nakładanie się spójnych fal dające przestrzenny rozkład wzmocnień i wygaszeń.",
      "Dyfrakcja zachodzi wyłącznie w próżni, a interferencja wymaga obecności ośrodka nieliniowego o wysokiej mocy.",
      "Dyfrakcja dotyczy tylko fal akustycznych, podczas gdy interferencja występuje wyłącznie w optyce kwantowej.",
      "Dyfrakcja powoduje bezpowrotne pochłanianie energii fali, a interferencja podwaja całkowitą moc promieniowania."
    ],
    "correctIndex": 0,
    "explanation": "Dyfrakcja to zjawisko ugięcia fali i jej wnikania w obszar cienia geometrycznego przy ominięciu przeszkody lub przejściu przez szczelinę o rozmiarze rzędu długości fali (wyjaśniane zasadą Huygensa-Fresnela). Interferencja to zjawisko nakładania się co najmniej dwóch fal spójnych (koherentnych), prowadzące do ich wzajemnego wzmocnienia (gdy różnica dróg wynosi \\(\\Delta s = m\\lambda\\)) lub wygaszenia (gdy \\(\\Delta s = (m + 1/2)\\lambda\\)).",
    "flashcardFront": "Dyfrakcja vs Interferencja fal elektromagnetycznych:",
    "flashcardBack": [
      "Dyfrakcja: Ugięcie fali wokół krawędzi przeszkody lub przez szczelinę porównywalną z \\(\\lambda\\) (zasada Huygensa-Fresnela).",
      "Interferencja: Nakładanie się fal spójnych (koherentnych).",
      "Warunek wzmocnienia (konstruktywna): różnica dróg \\(\\Delta s = m\\lambda\\).",
      "Warunek wygaszenia (destruktywna): różnica dróg \\(\\Delta s = (m + 1/2)\\lambda\\)."
    ],
    "tips": [
      "Ugięcie za róg budynku lub przeszkody to dyfrakcja.",
      "Powstawanie prążków jasnych i ciemnych z dwóch szczelin to interferencja.",
      "Interferencja wymaga fal koherentnych o stałej różnicy faz."
    ],
    "tip": "Dyfrakcja = ugięcie na przeszkodzie. Interferencja = nakładanie fal spójnych ze wzmocnieniem lub wygaszeniem.",
    "relatedRoute": "/teoria/fala-propagacja#q2"
  },
  {
    "id": "em-wave-freq-power",
    "category": "fale_em",
    "categoryLabel": "Fale i propagacja EM",
    "tier": "tier2",
    "question": "Wskaż poprawny podział zjawisk falowych obserwowanych w łączach na zależne od częstotliwości (liniowe) oraz zależne od mocy sygnału (nieliniowe):",
    "options": [
      "Zależne od częstotliwości: dyspersja chromatyczna, tłumienie molekularne i odcięcie modów falowodowych; zależne od mocy: mieszanie czterofalowe (FWM), automodulacja fazy (SPM) i modulacja skrośna (XPM).",
      "Zależne od częstotliwości: wyłącznie zjawisko Kerra i prąd unoszenia; zależne od mocy: polaryzacja próżni i dywergencja Gaussa.",
      "Zjawiska liniowe nie zależą od żadnego parametru, a zjawiska nieliniowe zależą wyłącznie od temperatury złącza.",
      "Zależne od mocy: dyspersja chromatyczna i odbicie Fresnela; zależne od częstotliwości: mieszanie czterofalowe."
    ],
    "correctIndex": 0,
    "explanation": "W łączach telekomunikacyjnych zjawiska liniowe zależą od częstotliwości sygnału (i długości fali): dyspersja materiałowa, rozpraszanie Rayleigha (\\(\\propto 1/\\lambda^4\\)), absorpcja w oknach atmosferycznych oraz warunek jednomodowości \\(V(\\lambda)\\). Zjawiska nieliniowe pojawiają się przy wysokich gęstościach mocy optycznej (efekt Kerra): FWM (mieszanie czterofalowe), SPM (automodulacja fazy), XPM (modulacja skrośna) oraz rozpraszanie Ramana i Brillouina.",
    "flashcardFront": "Zjawiska falowe: Zależne od częstotliwości vs zależne od mocy:",
    "flashcardBack": [
      "Zależne od CZĘSTOTLIWOŚCI (liniowe): Dyspersja chromatyczna, tłumienie Rayleigha (\\(1/\\lambda^4\\)), tłumienie atmosferyczne ITU-R, odcięcie modów.",
      "Zależne od MOCY (nieliniowe, optyka nieliniowa): Mieszanie czterofalowe (FWM), automodulacja fazy (SPM), modulacja skrośna (XPM), rozpraszanie SBS/SRS.",
      "Klucz: Nieliniowości gwałtownie rosną przy wzroście mocy lasera wejściowego!"
    ],
    "tips": [
      "Pomyśl, co się dzieje, gdy zmieniasz kolor lasera (długość fali/częstotliwość) — zmienia się tłumienie i dyspersja.",
      "Pomyśl, co się dzieje, gdy „podkręcasz” moc lasera z 1 mW do 40 mW — wchodzą nieliniowości FWM.",
      "Zjawiska mocy to optyka nieliniowa (efekt Kerra)."
    ],
    "tip": "Częstotliwość -> dyspersja, tłumienie, Rayleigh. Moc -> nieliniowości FWM, SPM, XPM.",
    "relatedRoute": "/teoria/fala-propagacja#q2"
  },
  {
    "id": "opt-tir-na",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Jaki jest podstawowy warunek propagacji fali we włóknie światłowodowym oraz czym jest apertura numeryczna (NA)?",
    "options": [
      "Warunkiem jest całkowite wewnętrzne odbicie (TIR) na granicy rdzeń-płaszcz (\\(n_1 > n_2\\)); apertura numeryczna to \\(\\mathrm{NA} = \\sin\\theta_{acc} = \\sqrt{n_1^2 - n_2^2}\\) określająca zdolność włókna do wprowadzania światła z powietrza.",
      "Warunkiem jest rezonans plazmowy w płaszczu przy \\(n_1 < n_2\\); NA to stosunek długości rdzenia do jego średnicy.",
      "Warunkiem jest polaryzacja kołowa fali padającej; NA określa tłumienie w decybelach na kilometr.",
      "Warunkiem jest idealne dopasowanie fazowe bez odbicia; NA to kąt Brewstera dla szkła kwarcowego."
    ],
    "correctIndex": 0,
    "explanation": "Światło jest prowadzone w rdzeniu dzięki zjawisku całkowitego wewnętrznego odbicia (TIR), które wymaga, aby współczynnik załamania rdzenia był większy niż płaszcza (\\(n_1 > n_2\\)). Kąt graniczny wynosi \\(\\sin\\theta_c = n_2/n_1\\). Apertura numeryczna \\(\\mathrm{NA} = \\sin\\theta_{acc} = \\sqrt{n_1^2 - n_2^2}\\) określa maksymalny kąt stożka akceptacji światła wpadającego z powietrza (\\(n_0=1\\)).",
    "flashcardFront": "Warunek propagacji i apertura numeryczna (NA) światłowodu:",
    "flashcardBack": [
      "Całkowite wewnętrzne odbicie (TIR): Wymóg \\(n_1 > n_2\\) (rdzeń gęstszy optycznie niż płaszcz).",
      "Kąt graniczny: \\(\\sin\\theta_c = n_2 / n_1\\).",
      "Apertura numeryczna: \\(\\mathrm{NA} = \\sin\\theta_{acc} = \\sqrt{n_1^2 - n_2^2}\\).",
      "Określa maksymalny kąt stożka wlotowego, pod jakim światło może być wprowadzone do rdzenia."
    ],
    "tips": [
      "Pomyśl o szkle i powietrzu: światło musi odbijać się wewnątrz gęstszego ośrodka.",
      "Współczynnik załamania rdzenia n1 musi przewyższać n2 płaszcza.",
      "Apertura numeryczna NA to pierwiastek z różnicy kwadratów współczynników załamania."
    ],
    "tip": "Warunek TIR: n1 > n2. Apertura numeryczna: NA = √(n1² - n2²) = sin(θ_acc).",
    "relatedRoute": "/teoria/swiatlowody#q8"
  },
  {
    "id": "opt-v-number",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Jak definiuje się znormalizowaną częstotliwość \\(V\\) oraz jaki jest warunek pracy włókna o profilu skokowym w reżimie jednomodowym?",
    "options": [
      "\\(V = \\frac{2\\pi a}{\\lambda}\\mathrm{NA} = \\frac{2\\pi a}{\\lambda}\\sqrt{n_1^2 - n_2^2}\\); włókno jest jednomodowe, gdy \\(V < 2,405\\) (propaguje wyłącznie mod podstawowy \\(\\mathrm{HE_{11}} / \\mathrm{LP_{01}}\\)).",
      "\\(V = \\frac{\\lambda}{2\\pi a \\mathrm{NA}}\\); włókno jest jednomodowe, gdy \\(V > 2,405\\).",
      "\\(V = 2\\pi a \\cdot (n_1 + n_2)\\); włókno jest jednomodowe dla \\(V = 0\\).",
      "\\(V = \\frac{c}{\\lambda}\\); włókno jest jednomodowe przy częstotliwości powyżej 193 THz."
    ],
    "correctIndex": 0,
    "explanation": "Znormalizowana częstotliwość (parametr V) określa właściwości falowodowe włókna: \\(V = \\frac{2\\pi a}{\\lambda}\\sqrt{n_1^2 - n_2^2}\\), gdzie \\(a\\) to promień rdzenia. Pierwszym pierwiastkiem funkcji Bessela \\(J_0(x)\\) jest liczba 2,405. Jeśli \\(V < 2,405\\), wszystkie wyższe mody są odcięte i propaguje wyłącznie jeden mod podstawowy \\(\\mathrm{HE_{11}}\\) (w ujęciu modów liniowo spolaryzowanych: \\(\\mathrm{LP_{01}}\\)).",
    "flashcardFront": "Parametr \\(V\\) i warunek światłowodu jednomodowego (SMF):",
    "flashcardBack": [
      "Wzór na znormalizowaną częstotliwość: \\(V = \\frac{2\\pi a}{\\lambda}\\mathrm{NA} = \\frac{2\\pi a}{\\lambda}\\sqrt{n_1^2 - n_2^2}\\)",
      "Warunek jednomodowości: \\(V < 2,405\\) (dla profilu skokowego).",
      "Propaguje wyłącznie mod podstawowy: \\(\\mathrm{HE_{11}}\\) (czyli \\(\\mathrm{LP_{01}}\\)).",
      "Dla \\(V \\ge 2,405\\) włókno staje się wielomodowe."
    ],
    "tips": [
      "Liczba 2,405 to najważniejsza stała liczbowa optyki światłowodowej.",
      "Jeśli V jest mniejsze niż 2,405 — światłowód prowadzi tylko jeden mod.",
      "Promień rdzenia a w światłowodach jednomodowych ma tylko ok. 4–5 mikrometrów."
    ],
    "tip": "V = (2π a / λ) · NA. Warunek pracy jednomodowej: V < 2,405 (tylko mod LP01).",
    "relatedRoute": "/teoria/swiatlowody#q9"
  },
  {
    "id": "opt-step-vs-grad",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Jak zmiana profilu współczynnika załamania ze skokowego na gradientowy wpływa na liczbę modów oraz szerokość impulsów?",
    "options": [
      "Liczba modów spada o połowę (ze skokowego \\(M \\approx V^2/2\\) na gradientowy \\(M \\approx V^2/4\\)), a poszerzenie impulsów maleje 100–1000 razy dzięki wyrównaniu czasów propagacji promieni biegnących różnymi torami.",
      "Liczba modów wzrasta dwukrotnie, a poszerzenie impulsów rośnie proporcjonalnie do kwadratu promienia rdzenia.",
      "Włókno staje się natychmiast światłowodem jednomodowym bez żadnej dyspersji chromatycznej.",
      "Szerokość impulsów nie ulega zmianie, ponieważ prędkość światła w osi włókna jest stała."
    ],
    "correctIndex": 0,
    "explanation": "We włóknie wielomodowym o profilu skokowym liczba modów wynosi \\(M \\approx V^2/2\\). W profilu paraboliczno-gradientowym (\\(\\alpha = 2\\)) wynosi \\(M \\approx V^2/4\\) (o połowę mniej). W profilu gradientowym współczynnik załamania maleje ku płaszczowi: promienie o dłuższej drodze poruszają się w ośrodku o mniejszym \\(n\\), czyli z większą prędkością (\\(v = c/n\\)). Czasy dotarcia wszystkich modów niemal się zrównują, co zmniejsza dyspersję modową z kilkudziesięciu ns/km do ułamków ns/km (redukcja 100–1000 razy!).",
    "flashcardFront": "Zmiana profilu ze skokowego na gradientowy (pytanie egzaminacyjne):",
    "flashcardBack": [
      "Liczba modów: maleje o połowę (skokowy: \\(M \\approx V^2/2\\), gradientowy: \\(M \\approx V^2/4\\)).",
      "Szerokość impulsu: poszerzenie międzymodowe spada 100–1000 razy!",
      "Fizyczna przyczyna: Promienie biegnące dalej od osi poruszają się w ośrodku o mniejszym \\(n\\), czyli szybciej (\\(v=c/n\\)), co wyrównuje czasy propagacji wszystkich modów."
    ],
    "tips": [
      "W profilu gradientowym szkło na zewnątrz jest „szybsze” optycznie (mniejsze n).",
      "Promienie zakrzywiają się sinusoidalnie i docierają do końca w tym samym czasie co promień osiowy.",
      "Wzory na liczbę modów: V²/2 w skokowym, V²/4 w gradientowym."
    ],
    "tip": "Profil gradientowy: mody V²/4 (spadek o 50%), poszerzenie impulsu mniejsze 100-1000 razy.",
    "relatedRoute": "/teoria/swiatlowody#q10"
  },
  {
    "id": "opt-attenuation-windows",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Wskaż trzy standardowe okna telekomunikacyjne w światłowodach kwarcowych i ich charakterystykę:",
    "options": [
      "I okno (850 nm, tłumienie ok. 2–3 dB/km); II okno (1310 nm, zerowa dyspersja materiałowa, tłumienie ok. 0,35 dB/km); III okno (1550 nm, globalne minimum tłumienia ok. 0,20 dB/km, pasmo wzmacniaczy EDFA).",
      "I okno (400 nm, ultrafiolet); II okno (650 nm, laser czerwony); III okno (10600 nm, laser CO2).",
      "I okno (1310 nm, minimum tłumienia); II okno (1550 nm, zerowa dyspersja); III okno (1625 nm, pomiary OTDR).",
      "I okno (900 MHz, GSM); II okno (2,4 GHz, Wi-Fi); III okno (5 GHz, sieci radiowe)."
    ],
    "correctIndex": 0,
    "explanation": "I okno (850 nm) stosowano w pierwszych sieciach GaAs z diodami LED (tłumienie 2–3 dB/km). II okno (1310 nm) charakteryzuje się naturalnie zerową dyspersją materiałową czystej krzemionki i niższym tłumieniem ok. 0,35 dB/km. III okno (1550 nm) oferuje bezwzględne minimum tłumienia szkła kwarcowego (ok. 0,18–0,20 dB/km) i pokrywa się z pasmem pracy optycznych wzmacniaczy domieszkowanych erbem (EDFA), co czyni je standardem dalekosiężnym.",
    "flashcardFront": "Okna telekomunikacyjne w światłowodach krzemionkowych:",
    "flashcardBack": [
      "I okno: 850 nm — tłumienie 2–3 dB/km (wczesne sieci LAN, diody LED / VCSEL).",
      "II okno: 1310 nm — tłumienie ok. 0,35 dB/km, ZEROWA dyspersja materiałowa krzemu.",
      "III okno: 1550 nm — MINIMUM tłumienia (ok. 0,20 dB/km), pasmo wzmacniaczy EDFA (C-band, daleki zasięg)."
    ],
    "tips": [
      "Zapamiętaj trzy długości fal: 850 nm, 1310 nm, 1550 nm.",
      "1310 nm to zerowa dyspersja materiałowa krzemionki.",
      "1550 nm to najmniejsze tłumienie na świecie (0,2 dB/km) i wzmacniacze EDFA."
    ],
    "tip": "850 nm (2-3 dB/km), 1310 nm (0,35 dB/km, D_mat=0), 1550 nm (0,20 dB/km, min. tłumienia, EDFA).",
    "relatedRoute": "/teoria/swiatlowody#q11"
  },
  {
    "id": "opt-attenuation-mechanisms",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Jakie mechanizmy fizyczne odpowiadają za tłumienie sygnału we włóknach światłowodowych?",
    "options": [
      "Rozpraszanie Rayleigha (\\(\\propto 1/\\lambda^4\\)), absorpcja własna materiału (UV elektronowa i IR oscylacyjna sieci Si-O) oraz absorpcja na zanieczyszczeniach (piki jonów \\(\\mathrm{OH^-}\\) ok. 1383 nm).",
      "Zjawisko naskórkowości w szkle oraz prądy wirowe w rdzeniu kwarcowym.",
      "Promieniowanie hamowania elektronów i rozpraszanie Comptona na płaszczu światłowodu.",
      "Wyłącznie mechaniczne zginanie kabla przy układaniu w kanalizacji teletechnicznej."
    ],
    "correctIndex": 0,
    "explanation": "Tłumienie we włóknie kwarcowym wynika z: 1. Rozpraszania Rayleigha na mikroskopowych fluktuacjach gęstości szkła (tłumienie maleje bardzo silnie z długością fali: \\(\\alpha_R \\propto \\lambda^{-4}\\)). 2. Absorpcji własnej szkła: w UV (przejścia elektronowe) i w dalekiej IR powyżej 1600 nm (drgania sieci krystalicznej cząsteczek Si-O). 3. Absorpcji domieszkowej: piki absorpcji jonów hydroksylowych OH- (tzw. water peak przy 1383 nm), redukowany we włóknach G.652.D.",
    "flashcardFront": "Mechanizmy tłumienia we włóknach światłowodowych:",
    "flashcardBack": [
      "Rozpraszanie Rayleigha: fluktuacje gęstości szkła; zależność \\(\\alpha_R \\propto 1/\\lambda^4\\) (dominuje przy krótkich falach).",
      "Absorpcja własna: w ultrafiolecie (UV, rezonans elektronowy) oraz w podczerwieni (IR, drgania cząsteczek \\(\\mathrm{SiO_2}\\)).",
      "Zanieczyszczenia (jony \\(\\mathrm{OH^-}\\)): piki pochłaniania wody, zwłaszcza przy 1383 nm (water peak)."
    ],
    "tips": [
      "Rozpraszanie Rayleigha tłumaczy też, dlaczego niebo jest niebieskie — zależy od 1/lambda^4.",
      "Dla długich fal wkracza absorpcja sieci krzemionkowej w podczerwieni (IR).",
      "Pomiędzy nimi jest pik resztek wody (jonów OH) przy 1383 nm."
    ],
    "tip": "Tłumienie: Rayleigh (1/λ⁴), absorpcja UV/IR oraz piki jonów OH⁻ (water peak 1383 nm).",
    "relatedRoute": "/teoria/swiatlowody#q11"
  },
  {
    "id": "opt-dispersion-def",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Czym jest zjawisko dyspersji w światłowodzie i jakie są jego negatywne skutki w transmisji cyfrowej?",
    "options": [
      "Jest to zależność prędkości propagacji sygnału od długości fali lub modu; powoduje poszerzenie impulsu świetlnego w czasie, nakładanie się sąsiednich bitów (ISI) i ograniczenie przepływności oraz zasięgu.",
      "Jest to zjawisko całkowitej utraty mocy sygnału w wyniku odbicia od czoła złącza światłowodowego.",
      "Jest to proces samorzutnego powstawania nowych częstotliwości nośnych w szkle przy zerowej mocy.",
      "Jest to przesunięcie fazowe wywołane wyłącznie przez efekt Dopplera w poruszającym się kablu."
    ],
    "correctIndex": 0,
    "explanation": "Dyspersja to zróżnicowanie prędkości propagacji poszczególnych składowych impulsu (falowych lub modowych). Skutkuje to poszerzaniem się impulsu w miarę pokonywania dystansu: \\(\\Delta\\tau = |D| \\cdot L \\cdot \\Delta\\lambda\\). W odbiorniku poszerzone impulsy nakładają się na siebie, co wywołuje interferencję międzysymbolową (ISI — Inter-Symbol Interference), zamyka wykres oka i drastycznie zwiększa stopę błędów (BER), ograniczając iloczyn przepływności i zasięgu (B·L).",
    "flashcardFront": "Definicja i skutki dyspersji w światłowodzie:",
    "flashcardBack": [
      "Definicja: Zależność prędkości fali (modu) od długości fali lub drogi w rdzeniu.",
      "Skutek bezpośredni: Poszerzenie impulsu optycznego w dziedzinie czasu (\\(\\Delta\\tau\\)).",
      "Skutek telekomunikacyjny: Nakładanie się kolejnych bitów (ISI — interferencja międzysymbolowa), degradacja oka i ograniczenie przepływności łącza."
    ],
    "tips": [
      "Pomyśl o biegaczach: gdy jedni biegną szybciej, a drudzy wolniej, zwarta grupa rozciąga się w czasie.",
      "Gdy impuls się rozciąga, „wylewa się” na sąsiednie bity (ISI).",
      "Ogranicza to maksymalną szybkość przesyłania danych i zasięg."
    ],
    "tip": "Dyspersja to zależność prędkości od λ lub modu -> poszerzenie impulsu Δτ -> interferencja ISI.",
    "relatedRoute": "/teoria/swiatlowody#q12"
  },
  {
    "id": "opt-dispersion-types",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Wymień rodzaje dyspersji występujące w łączach światłowodowych i wskaż, która z nich NIE występuje w światłowodzie jednomodowym (SMF):",
    "options": [
      "Dyspersja modowa (międzymodowa), dyspersja chromatyczna (materiałowa + falowodowa) oraz dyspersja polaryzacyjna (PMD); we włóknie jednomodowym całkowicie BRAK dyspersji modowej.",
      "Dyspersja jonosferyczna i dyfrakcyjna; we włóknie jednomodowym brak dyspersji chromatycznej.",
      "Dyspersja Rayleigha i Fresnela; we włóknie jednomodowym brak dyspersji polaryzacyjnej PMD.",
      "Dyspersja nieliniowa i akustyczna; we włóknie jednomodowym występuje wyłącznie dyspersja modowa."
    ],
    "correctIndex": 0,
    "explanation": "Wyróżnia się: 1. Dyspersję modową (międzymodową) — wynika z różnych dróg geometrycznych poszczególnych modów; w światłowodzie jednomodowym (SMF) jest RÓWNA ZERO, bo istnieje tam tylko jeden mod! 2. Dyspersję chromatyczną — sumę materiałowej \\(D_{mat}\\) i falowodowej \\(D_{fal}\\), obecną we wszystkich włóknach. 3. Dyspersję polaryzacyjną (PMD) — wynikającą z dwójłomności i niesymetrii rdzenia.",
    "flashcardFront": "Rodzaje dyspersji we włóknach światłowodowych:",
    "flashcardBack": [
      "1. Dyspersja MODOWA (międzymodowa): występuje TYLKO w MMF. W światłowodzie jednomodowym (SMF) wynosi ZERO!",
      "2. Dyspersja CHROMATYCZNA: suma dyspersji materiałowej (\\(D_{mat}\\)) i falowodowej (\\(D_{fal}\\)).",
      "3. Dyspersja POLARYZACYJNA (PMD): rozszczepienie modu na ortogonalne polaryzacje przez asymetrię rdzenia."
    ],
    "tips": [
      "Jeśli we włóknie jest tylko jeden mod, to mody nie mogą biec różnymi drogami.",
      "Dlatego dyspersja modowa w SMF wynosi dokładnie zero.",
      "Pozostaje dyspersja chromatyczna (kolorów) i polaryzacyjna (PMD)."
    ],
    "tip": "Dyspersja modowa = 0 w SMF! Występuje tam tylko chromatyczna (D = D_mat + D_fal) i PMD.",
    "relatedRoute": "/teoria/swiatlowody#q12"
  },
  {
    "id": "opt-dispersion-mat-fal",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Czym różni się dyspersja materiałowa (\\(D_{mat}\\)) od falowodowej (\\(D_{fal}\\)) i dla jakiej długości fali zeruje się dyspersja materiałowa czystej krzemionki?",
    "options": [
      "Materiałowa wynika z zależności \\(n(\\lambda)\\) szkła i zeruje się naturalnie przy ok. 1310 nm; falowodowa wynika z geometrii rdzenia i ma przeciwny znak, co pozwala profilowaniem przesunąć punkt zerowej dyspersji na 1550 nm (włókna DSF).",
      "Materiałowa zależy od promienia rdzenia i zeruje się przy 850 nm; falowodowa jest stałą uniwersalną próżni.",
      "Obie dyspersje są zawsze dodatnie i zerują się wyłącznie w temperaturze zera bezwzględnego.",
      "Materiałowa występuje tylko w obecności domieszek erbu, a falowodowa zeruje się przy 60 GHz."
    ],
    "correctIndex": 0,
    "explanation": "Całkowita dyspersja chromatyczna to \\(D = D_{mat} + D_{fal}\\). Dyspersja materiałowa wynika z nieliniowej zależności współczynnika załamania kwarcu od długości fali i zeruje się w krzemionce przy \\(\\lambda \\approx 1310\\ \\mathrm{nm}\\) (przy 1550 nm wynosi ok. +17 ps/(nm·km)). Dyspersja falowodowa wynika z faktu, że rozkład pola modu między rdzeniem a płaszczem zależy od \\(\\lambda\\); ma ona znak ujemny. Kształtując profil rdzenia, można zrównoważyć obie składowe przy 1550 nm (włókna DSF G.653 lub NZDSF G.655).",
    "flashcardFront": "Dyspersja materiałowa vs falowodowa (egzaminacyjny pewniak):",
    "flashcardBack": [
      "Dyspersja materiałowa (\\(D_{mat}\\)): zależy od szkła (\\(n(\\lambda)\\)); zeruje się naturalnie w krzemie przy 1310 nm; przy 1550 nm wynosi ok. +17 ps/(nm·km).",
      "Dyspersja falowodowa (\\(D_{fal}\\)): zależy od geometrii i profilu rdzenia; ma ujemny znak.",
      "Włókna DSF / NZDSF: odpowiedni profil rdzenia zwiększa \\(|D_{fal}|\\), co kompensuje \\(D_{mat}\\) w oknie 1550 nm!"
    ],
    "tips": [
      "Krzem sam z siebie ma dyspersję zerową w II oknie (1310 nm).",
      "W III oknie (1550 nm) dyspersja materiałowa wynosi ok. +17 ps/(nm·km).",
      "Geometria falowodu wprowadza ujemną dyspersję falowodową."
    ],
    "tip": "D_mat zeruje się przy 1310 nm. D_fal ma znak ujemny i zależy od profilu rdzenia.",
    "relatedRoute": "/teoria/swiatlowody#q12"
  },
  {
    "id": "opt-dispersion-compensation",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Wymień i opisz metody kompensacji dyspersji chromatycznej stosowane w telekomunikacji:",
    "options": [
      "Włókno kompensujące DCF (o dużej ujemnej dyspersji \\(D_{DCF} < 0\\), warunek: \\(D_{SMF}L_{SMF} + D_{DCF}L_{DCF} = 0\\)), chirpowana siatka Bragga (FBG) oraz kompensacja elektroniczna (EDC/DSP) w odbiornikach koherentnych.",
      "Zwiększenie mocy laserów nadawczych powyżej 1 W oraz podgrzewanie kabli światłowodowych.",
      "Zastąpienie światłowodów jednomodowych światłowodami wielomodowymi o profilu skokowym.",
      "Stosowanie wyłącznie złączy mechanicznych zamiast spawów termicznych."
    ],
    "correctIndex": 0,
    "explanation": "Główne metody kompensacji dyspersji to: 1. Włókno DCF (Dispersion Compensating Fiber) — odcinek światłowodu o wąskim rdzeniu i silnie ujemnej dyspersji (np. -80 do -100 ps/(nm·km)), który całkowicie znosi dodatnią dyspersję linii transmisyjnej SMF. 2. Chirpowana siatka Bragga (CFBG) — różne składowe spektralne odbijają się na różnych głębokościach siatki, odwracając opóźnienie falowe. 3. Elektroniczna kompensacja dyspersji (EDC) w procesorach DSP odbiorników koherentnych. 4. Włókna NZDSF o niskiej dyspersji.",
    "flashcardFront": "Metody kompensacji dyspersji chromatycznej:",
    "flashcardBack": [
      "1. Włókno DCF: włókno o ujemnym \\(D_{DCF}\\) (np. -80 ps/(nm·km)); warunek: \\(D_{SMF}L_{SMF} + D_{DCF}L_{DCF} = 0\\).",
      "2. Siatka Bragga o zmiennym skoku (Chirped FBG): odbija poszczególne barwy z różnym opóźnieniem.",
      "3. Kompensacja elektroniczna EDC/DSP: cyfrowa filtracja sygnału w odbiornikach koherentnych.",
      "4. Włókna NZDSF: włókna o fabrycznie zredukowanej dyspersji w oknie 1550 nm."
    ],
    "tips": [
      "DCF to klasyczny światłowód „odwrotny” — ma ujemną dyspersję.",
      "Siatka Bragga FBG to zwierciadło selektywne cofające opóźnione fale.",
      "Nowoczesne systemy robią to cyfrowo w DSP (EDC)."
    ],
    "tip": "Kompensacja: włókno DCF (D_SMF L_SMF + D_DCF L_DCF = 0), siatki FBG oraz cyfrowe EDC.",
    "relatedRoute": "/teoria/swiatlowody#q12"
  },
  {
    "id": "opt-dispersion-pros-cons",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier1",
    "question": "Jakie są wady i zalety występowania dyspersji w łączach telekomunikacyjnych (szczególnie DWDM)?",
    "options": [
      "Wada: poszerzenie impulsów i zniekształcenia ISI ograniczające zasięg i przepływność; kluczowa ZALETA: mała niezerowa dyspersja niszczy synchronizm fazowy i radykalnie tłumi groźne mieszanie czterofalowe (FWM).",
      "Wada: całkowity zanik mocy optycznej; zaleta: samorzutne powielanie liczby kanałów bez dodatkowych laserów.",
      "Wada: nadmierne nagrzewanie się płaszcza kabla; zaleta: automatyczne chłodzenie laserów nadawczych.",
      "Dyspersja ma wyłącznie wady i w systemach DWDM dąży się do idealnego zera dyspersji w każdym kanale."
    ],
    "correctIndex": 0,
    "explanation": "Wada dyspersji to zniekształcenia międzysymbolowe (ISI) i konieczność stosowania kosztownej kompensacji. Niezwykle ważną ZALETĄ dyspersji w systemach wielofalowych (DWDM) jest zapobieganie zjawiskom nieliniowym! Przy zerowej dyspersji (D = 0) fale o różnych częstotliwościach poruszają się z tą samą prędkością fazową, co zapewnia idealny synchronizm fazowy i maksymalną generację pasożytniczych produktów mieszania czterofalowego (FWM). Niewielka niezerowa dyspersja (np. we włóknach NZDSF G.655) tłumi FWM i ratuje transmisję DWDM.",
    "flashcardFront": "Wady i zalety dyspersji w telekomunikacji (zagadnienie egzaminacyjne):",
    "flashcardBack": [
      "WADA: Poszerzenie impulsów w czasie (\\(\\Delta\\tau = |D|L\\Delta\\lambda\\)), interferencja międzysymbolowa (ISI), ograniczenie zasięgu i przepływności.",
      "ZALETA: Mała niezerowa dyspersja (włókna NZDSF) uniemożliwia dopasowanie fazowe fal i DRATYCZNIE TŁUMI nieliniowe mieszanie czterofalowe (FWM) w łączach DWDM!",
      "Gdyby D = 0, FWM zniszczyłoby gęstą transmisję DWDM."
    ],
    "tips": [
      "Wada jest oczywista: rozmycie bitów i interferencja ISI.",
      "Zastanów się nad zaletą: co by się stało w DWDM przy D=0?",
      "Przy D=0 fale biegną razem w fazie, co maksymalizuje niszczące mieszanie czterofalowe (FWM)."
    ],
    "tip": "Wada: ISI i ograniczenie zasięgu. Zaleta: mała niezerowa dyspersja (NZDSF) tłumi nieliniowości FWM w DWDM!",
    "relatedRoute": "/teoria/swiatlowody#q12"
  },
  {
    "id": "opt-pmd",
    "category": "swiatlowody",
    "categoryLabel": "Światłowody i optyka",
    "tier": "tier2",
    "question": "Na czym polega zjawisko dyspersji polaryzacyjnej (PMD) we włóknach jednomodowych i jak zależy od długości łącza?",
    "options": [
      "Wynika z mikro-asymetrii rdzenia wywołującej dwójłomność i rozszczepienie modu na dwie prostopadłe polaryzacje biegnące z różną prędkością; poszerzenie rośnie proporcjonalnie do pierwiastka długości: \\(\\Delta\\tau_{PMD} = D_{PMD} \\sqrt{L}\\).",
      "Wynika z obrotu polaryzacji w polu grawitacyjnym i rośnie z kwadratem długości \\(L^2\\).",
      "Jest to zjawisko modulacji polaryzacji przez fale radiowe i zanika całkowicie przy długościach powyżej 10 km.",
      "Polega na absorpcji polaryzacji kołowej w płaszczu światłowodu i zależy liniowo od mocy lasera."
    ],
    "correctIndex": 0,
    "explanation": "Idealne włókno jednomodowe ma symetrię kołową. W rzeczywistości naprężenia mechaniczne i nieidealna kołowość rdzenia wprowadzają przypadkową dwójłomność (różne współczynniki załamania dla dwóch ortogonalnych osi polaryzacji). Mod podstawowy rozdziela się na dwie składowe poruszające się z różnymi prędkościami. Ze względu na losowe sprzęganie modów wzdłuż trasy, średnie opóźnienie rośnie z pierwiastkiem długości: \\(\\Delta\\tau = D_{PMD} \\sqrt{L}\\) (jednostka współczynnika: \\(\\mathrm{ps/\\sqrt{km}}\\)).",
    "flashcardFront": "Dyspersja polaryzacyjna (PMD) — istota i wzór:",
    "flashcardBack": [
      "Przyczyna: Nieidealna kołowość rdzenia i naprężenia mechaniczne (przypadkowa dwójłomność).",
      "Skutek: Dwa ortogonalne stany polaryzacji modu podstawowego poruszają się z różnymi prędkościami.",
      "Zależność od długości: \\(\\Delta\\tau_{PMD} = D_{PMD} \\sqrt{L}\\) (rośnie z PIERWIASTKIEM długości!).",
      "Jednostka współczynnika: \\(\\mathrm{ps/\\sqrt{km}}\\)."
    ],
    "tips": [
      "PMD dotyczy polaryzacji światła w pozornie jednomodowym włóknie.",
      "Z powodu braku idealnej kołowości rdzeń ma oś szybką i oś wolną.",
      "Pamiętaj o pierwiastku: opóźnienie rośnie z pierwiastkiem z długości kabla (ps/√km)."
    ],
    "tip": "PMD wynika z dwójłomności rdzenia: Δτ = D_PMD · √L [ps/√km].",
    "relatedRoute": "/teoria/swiatlowody#q12"
  },
  {
    "id": "mod-multiplex-def",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "Czym jest multipleksacja, do czego służy oraz jakie są jej podstawowe rodzaje?",
    "options": [
      "Jest to metoda łączenia wielu niezależnych strumieni sygnałów w jedno wspólne medium transmisyjne; rodzaje: TDM (czas), FDM (częstotliwość), WDM/CWDM/DWDM (długość fali), SDM (przestrzeń) i CDM (kod).",
      "Jest to technika modulacji amplitudy polegająca na całkowitym tłumieniu fali nośnej.",
      "Jest to proces zamiany sygnału optycznego na sygnał akustyczny w przetwornikach piezoelektrycznych.",
      "Jest to podwajanie napięcia zasilania w regeneratorach międzystacyjnych."
    ],
    "correctIndex": 0,
    "explanation": "Multipleksacja polega na jednoczesnym przesyłaniu wielu kanałów informacyjnych przez jedno fizyczne łącze transmisyjne (kabel miedziany, światłowód, łącze radiowe), co maksymalizuje wykorzystanie pasma i minimalizuje koszty infrastruktury. Główne techniki to: TDM (Time-Division Multiplexing — przydział szczelin czasowych), FDM (Frequency-Division — przydział pasm częstotliwości), WDM/DWDM (Wavelength-Division — zwielokrotnienie falowe w optyce), CDM (kodowe) oraz SDM (wielordzeniowe lub wielomodowe).",
    "flashcardFront": "Co to jest multipleksacja, do czego służy i jakie są rodzaje?",
    "flashcardBack": [
      "Definicja: Łączenie wielu kanałów w jedno medium transmisyjne w celu optymalnego wykorzystania pasma.",
      "TDM: Zwielokrotnienie w dziedzinie CZASU (szczeliny czasowe).",
      "FDM: Zwielokrotnienie w dziedzinie CZĘSTOTLIWOŚCI (osobne pasma radiowe).",
      "WDM / DWDM / CWDM: Zwielokrotnienie w dziedzinie DŁUGOŚCI FALI (optyczne kanały świetlne).",
      "SDM / CDM: Zwielokrotnienie przestrzenne (Spatial) / kodowe (Code)."
    ],
    "tips": [
      "Multipleksacja pozwala puścić setki rozmów telefonicznych lub strumieni wideo jednym kablem.",
      "Można dzielić czas (TDM), częstotliwość (FDM) lub barwę światła (WDM).",
      "W łączach światłowodowych dominuje technika WDM / DWDM."
    ],
    "tip": "Multipleksacja to łączenie kanałów: TDM (czas), FDM (częstotliwość), WDM/DWDM (długość fali), CDM (kod).",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q14"
  },
  {
    "id": "mod-dwdm-problems",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "Wymień główne problemy fizyczne występujące w łączach gęstego zwielokrotnienia falowego (DWDM):",
    "options": [
      "Nieliniowe mieszanie czterofalowe (FWM), modulacja skrośna (XPM), automodulacja fazy (SPM), przesłuchy międzykanałowe (crosstalk), niestabilność temperaturowa laserów (dryft falowy) oraz nierównomierne wzmocnienie EDFA.",
      "Zjawisko naskórkowości w dielektryku, korozja wtyków optycznych i promieniowanie rentgenowskie.",
      "Brak możliwości stosowania wzmacniaczy optycznych oraz konieczność zamiany światła na prąd stały w każdym węźle.",
      "Ucieczka elektronów z rdzenia światłowodu do atmosfery przy dużych prędkościach transmisji."
    ],
    "correctIndex": 0,
    "explanation": "W systemach DWDM (odstępy między kanałami rzędu 100 GHz, 50 GHz, 25 GHz lub 12,5 GHz) kluczowymi problemami są: 1. Nieliniowości optyczne (efekt Kerra): FWM (generacja pasożytniczych fal nakładających się na kanały), SPM i XPM (poszerzenie widma). 2. Przesłuchy optyczne (crosstalk) między bliskimi kanałami. 3. Nierównomierny profil wzmocnienia wzmacniaczy EDFA (konieczność spłaszczania pasma). 4. Wrażliwość laserów DFB na wahania temperatury (dryft długości fali rzędu 0,1 nm/°C wymaga chłodzenia TEC).",
    "flashcardFront": "Problemy występujące w łączach DWDM (egzaminacyjny pewniak):",
    "flashcardBack": [
      "Zjawiska nieliniowe (efekt Kerra): Mieszanie czterofalowe (FWM), modulacja skrośna (XPM), automodulacja fazy (SPM).",
      "Przesłuchy międzykanałowe (inter-channel crosstalk).",
      "Nierównomierne wzmocnienie wzmacniaczy EDFA w pasmie C (konieczność stosowania filtrów GFF).",
      "Dryft termiczny laserów nadawczych: zmiana temperatury o 1°C przesuwa długość fali o ok. 0,1 nm (wymaga modułów Peltiera TEC)."
    ],
    "tips": [
      "Przy gęsto upakowanych kanałach światła wchodzą nieliniowości szkła: FWM, SPM, XPM.",
      "Wzmacniacz EDFA nie wzmacnia wszystkich kolorów jednakowo.",
      "Lasery muszą być precyzyjnie chłodzone, żeby nie najeżdżały na sąsiednie kanały."
    ],
    "tip": "Problemy DWDM: FWM, SPM, XPM, przesłuchy, nierówne wzmocnienie EDFA i dryft termiczny laserów.",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q15"
  },
  {
    "id": "mod-dwdm-mitigation",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "W jaki sposób ogranicza się zjawiska nieliniowe (zwłaszcza FWM) oraz inne problemy w łączach DWDM?",
    "options": [
      "Stosowanie włókien o małej niezerowej dyspersji (NZDSF), nierównomiernych odstępów międzykanałowych (Unequal Channel Spacing), filtrów spłaszczających wzmocnienie (GFF) oraz stabilizacji termoelektrycznej (TEC).",
      "Zwiększanie mocy optycznej każdego kanału powyżej 100 mW oraz stosowanie idealnego zera dyspersji (D = 0).",
      "Całkowite wyłączenie wzmacniaczy EDFA i przejście na kable miedziane.",
      "Stosowanie wyłącznie profilu skokowego o bardzo dużej średnicy rdzenia."
    ],
    "correctIndex": 0,
    "explanation": "Ograniczanie problemów w DWDM: 1. Zastosowanie włókien NZDSF (ITU-T G.655) z małą, niezerową dyspersją chromatyczną (niszczy synchronizm fazowy fal FWM). 2. Nierówne odstępy kanałowe — produkty mieszania FWM wpadają w puste szczeliny międzykanałowe, nie zakłócając danych. 3. Filtry wyrównujące wzmocnienie GFF (Gain Flattening Filters) w EDFA. 4. Precyzyjne sterowniki termoelektryczne (moduły Peltiera TEC) stabilizujące lasery z dokładnością do 0,01°C. 5. Ograniczenie mocy wejściowej na kanał poniżej progu nieliniowości.",
    "flashcardFront": "Jak ograniczyć problemy w łączach DWDM?",
    "flashcardBack": [
      "Włókna NZDSF: Mała niezerowa dyspersja uniemożliwia dopasowanie fazowe FWM.",
      "Nierównomierne odstępy (Unequal Spacing): Produkty FWM wpadają w puste przerwy między kanałami.",
      "Filtry GFF (Gain Flattening Filters): Wyrównują pasmo wzmocnienia wzmacniaczy EDFA.",
      "Stabilizacja termoelektryczna (TEC / moduły Peltiera): Utrzymują stałą długość fali laserów DFB.",
      "Optymalizacja mocy: Ograniczenie mocy na kanał poniżej progu nieliniowości."
    ],
    "tips": [
      "Nierówne odstępy sprawiają, że fałszywe częstotliwości nie trafiają w kanały transmisyjne.",
      "Włókno NZDSF ma specjalnie dobraną małą dyspersję, aby rozsynchronizować fale FWM.",
      "Moduły Peltiera (TEC) zapobiegają pływaniu termicznemu laserów."
    ],
    "tip": "Ograniczanie w DWDM: włókna NZDSF, nierównomierny raster kanałowy, filtry GFF i stabilizacja TEC.",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q15"
  },
  {
    "id": "mod-fwm-nature",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "Na czym polega zjawisko mieszania czterofalowego (FWM — Four-Wave Mixing) w systemach DWDM?",
    "options": [
      "Trzy fale optyczne o częstotliwościach \\(f_i, f_j, f_k\\) oddziałują nieliniowo poprzez podatność \\(\\chi^{(3)}\\) kwarcu, generując czwartą częstotliwość pasożytniczą \\(f_{ijk} = f_i + f_j - f_k\\), która w regularnej siatce trafia wprost w kanał danych.",
      "Cztery lasery zderzają się ze sobą w sprzęgaczu, zamieniając całą energię w promieniowanie cieplne.",
      "Jest to zjawisko odbicia fali od czterech kolejnych złączy mechanicznych w torze optycznym.",
      "Jest to proces poczwórnego wzmocnienia sygnału we wzmacniaczach ramanowskich."
    ],
    "correctIndex": 0,
    "explanation": "FWM to nieliniowe zjawisko parametryczne trzeciego rzędu (efekt Kerra). Gdy w jednym włóknie propaguje się wiele fal optycznych, oddziałują one ze sobą, generując nowe składowe częstotliwościowe: \\(f_{ijk} = f_i + f_j - f_k\\). Dla N kanałów liczba produktów FWM wynosi \\(N^2(N-1)/2\\). Przy równomiernym rastrze ITU produkty FWM nakładają się dokładnie na sąsiednie kanały transmisyjne, wywołując nieodwracalne zniekształcenia i przesłuchy.",
    "flashcardFront": "Zjawisko mieszania czterofalowego (FWM):",
    "flashcardBack": [
      "Istota: Trzy fale o częstotliwościach \\(f_i, f_j, f_k\\) generują czwartą falę pasożytniczą: \\(f_{ijk} = f_i + f_j - f_k\\).",
      "Skutek w DWDM: Jeśli odstępy są równe, nowe częstotliwości nakładają się bezpośrednio na kanały transmisyjne!",
      "Warunek wystąpienia: Duża gęstość mocy laserów, mały odstęp międzykanałowy i bliska zeru dyspersja chromatyczna (dopasowanie fazowe)."
    ],
    "tips": [
      "FWM = Four-Wave Mixing (mieszanie czterofalowe). Trzy fale generują czwartą.",
      "Wzór na nową częstotliwość: f_ijk = f_i + f_j - f_k.",
      "Przy równej siatce produkt FWM ląduje dokładnie w innym kanale danych!"
    ],
    "tip": "FWM: f_ijk = f_i + f_j - f_k. Pasożytnicze fale trafiają w kanały przy równej siatce DWDM.",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q15"
  },
  {
    "id": "mod-quality-methods",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "Wymień i opisz metody mierzenia jakości zastosowanej modulacji cyfrowej:",
    "options": [
      "Wykres konstelacji (diagram I-Q), wielkość wektora błędu (EVM), stopa błędów binarnych (BER), współczynnik błędów modulacji (MER) oraz wykres oka (Eye Diagram).",
      "Pomiar masy falowodu, ciśnienia statycznego gazu w tubie oraz test twardości opony kabla.",
      "Wyłącznie pomiar napięcia stałego zasilacza buforowego stacji bazowej.",
      "Badanie promieniowania rentgenowskiego diody laserowej metodą scyntylacyjną."
    ],
    "correctIndex": 0,
    "explanation": "Do oceny jakości modulacji cyfrowej stosuje się: 1. Wykres konstelacji — prezentacja punktów symboli na płaszczyźnie zespolonej I-Q. 2. EVM (Error Vector Magnitude) — wektor błędu między idealnym a zmierzonym symbolem (w % lub dB). 3. BER (Bit Error Rate) — stosunek błędnie odebranych bitów do wszystkich bitów. 4. Wykres oka (Eye Diagram) — nakładanie się przebiegów bitowych na oscyloskopie. 5. MER / SNR — stosunek sygnału do szumu.",
    "flashcardFront": "Sposoby mierzenia jakości modulacji cyfrowej (egzamin):",
    "flashcardBack": [
      "Wykres konstelacji (I-Q Diagram): Rozkład punktów symboli na płaszczyźnie fazowej.",
      "EVM (Error Vector Magnitude): Odległość wektorowa między punktem zmierzonym a idealnym.",
      "BER (Bit Error Rate): Stopa błędów bitowych (np. \\(10^{-9}\\) lub \\(10^{-12}\\)).",
      "Wykres oka (Eye Diagram): Wizualizacja jakości przebiegu czasowego, marginesu szumu i jittera."
    ],
    "tips": [
      "Konstelacja I-Q pokazuje punkty symboli.",
      "EVM mierzy, jak daleko zmierzony punkt leży od idealnego punktu konstelacji.",
      "Wykres oka i stopa BER dają pełny obraz jakości sygnału."
    ],
    "tip": "Pomiary jakości: Diagram konstelacji I-Q, EVM, BER, MER oraz Wykres oka (Eye Diagram).",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q16"
  },
  {
    "id": "mod-eye-diagram",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "Wskaż poprawną interpretację parametrów wykresu oka (Eye Diagram):",
    "options": [
      "Pionowe rozwarcie oka określa margines odporności na szum; poziome rozwarcie określa margines na błędy synchronizacji (jitter); zamknięcie oka sygnalizuje silną interferencję międzysymbolową (ISI).",
      "Wysokość oka określa wyłącznie napięcie sieci elektroenergetycznej, a szerokość oznacza długość geograficzną kabla.",
      "Im bardziej oko jest zamknięte, tym wyższa jakość modulacji i mniejsza liczba błędów.",
      "Grubość wiązki na szczycie oka reprezentuje moc promieniowania mikrofalowego stacji bazowej."
    ],
    "correctIndex": 0,
    "explanation": "Wykres oka (Eye Diagram) powstaje przez nakładanie kolejnych okresów sygnału cyfrowego na oscyloskopie. Pionowa wysokość oka (Eye Height) w punkcie próbkowania wyznacza margines odporności na szum. Pozioma szerokość oka (Eye Width) reprezentuje przedział czasu wolny od błędów taktowania (odporność na timing jitter). Grubość przecięć osi czasu obrazuje jitter fazowy. Zamknięcie „oka” oznacza degradację sygnału przez dyspersję i silną interferencję międzysymbolową (ISI).",
    "flashcardFront": "Interpretacja wykresu oka (Eye Diagram):",
    "flashcardBack": [
      "Pionowe rozwarcie oka (Eye Height): Margines odporności na szum (Noise Margin).",
      "Poziome rozwarcie oka (Eye Width): Margines na jitter taktowania (Timing Jitter).",
      "Grubość linii na przecięciu zera: Jitter fazowy.",
      "Zamknięcie oka: Zniekształcenia impulsów, silna interferencja ISI i drastyczny wzrost BER."
    ],
    "tips": [
      "Im bardziej „otwarte” oko, tym lepszy i czystszy sygnał.",
      "Wysokość (pion) = napięcie = margines na szum.",
      "Szerokość (poziom) = czas = margines na jitter i błędy zegara."
    ],
    "tip": "Oko: rozwarcie pionowe = margines szumu, rozwarcie poziome = margines jittera, zamknięcie = ISI.",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q16"
  },
  {
    "id": "mod-evm-constellation",
    "category": "modulacja",
    "categoryLabel": "Modulacja i multipleksacja",
    "tier": "tier1",
    "question": "Czym jest wskaźnik EVM (Error Vector Magnitude) oraz o czym świadczy charakter zniekształceń na wykresie konstelacji?",
    "options": [
      "EVM to znormalizowana wartość wektora błędu między zmierzonym a idealnym punktem konstelacji; rozmycie punktów w kołowe obłoki świadczy o szumie gaussowskim (AWGN), a rozciągnięcie po łuku sygnalizuje szum fazowy oscylatora.",
      "EVM to stosunek liczby fotonów do elektronów w fotodiodzie lawinowej.",
      "Wskaźnik EVM mierzy wyłącznie straty mocy na złączach światłowodowych w decybelach.",
      "Obrót całej konstelacji oznacza obecność zanieczyszczeń jonami OH w kablu."
    ],
    "correctIndex": 0,
    "explanation": "Wektor błędu (Error Vector) to wektor różnicy pomiędzy punktem idealnym (referencyjnym dla danego stanu modulacji QAM/PSK) a punktem rzeczywiście odebranym w przestrzeni I-Q. EVM to stosunek wartości skutecznej wektora błędu do amplitudy symbolu maksymalnego lub średniego (wyrażany w % lub dB). Kształt chmur punktów pozwala diagnozować problem: rozmycie symetryczne to szum termiczny (AWGN), rozmycie wzdłuż okręgu to szum fazowy, a ściskanie punktów zewnętrznych to nieliniowość wzmacniacza (kompresja nasycenia).",
    "flashcardFront": "EVM (Error Vector Magnitude) i diagram konstelacji:",
    "flashcardBack": [
      "EVM: Wektorowa różnica między odebranym symbolem a punktem idealnym na płaszczyźnie I-Q.",
      "Kołowe obłoki punktów wokół stanu idealnego: Szum gaussowski (AWGN / szum termiczny).",
      "Punkty rozciągnięte wzdłuż łuku: Szum fazowy (drżenie fazy oscylatora lokalnego).",
      "Kompresja zewnętrznych punktów: Nieliniowość nasycenia wzmacniacza mocy."
    ],
    "tips": [
      "EVM mierzy jak bardzo rzeczywisty punkt chybił celu (punktu idealnego).",
      "Kształt „chmury” punktów zdradza rodzaj uszkodzenia w torze odbiorczym.",
      "Szum fazowy skręca punkty po łuku okręgu."
    ],
    "tip": "EVM to odległość punktu zmierzonego od idealnego. Koło = szum termiczny, łuk = szum fazowy.",
    "relatedRoute": "/teoria/modulacja-multipleksacja#q16"
  },
  {
    "id": "semi-eq-mass-action",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Jakie warunki charakteryzują koncentrację nośników w stanie równowagi termodynamicznej półprzewodnika?",
    "options": [
      "Brak zewnętrznych bodźców (oświetlenia, napięcia), w całej strukturze obowiązuje jeden wspólny poziom Fermiego \\(E_F\\) oraz spełnione jest prawo działania mas: \\(n_0 \\cdot p_0 = n_i^2\\).",
      "Koncentracja elektronów i dziur jest zawsze równa zeru w temperaturze pokojowej.",
      "Iloczyn koncentracji nośników zależy liniowo od przyłożonego zewnętrznego napięcia stałego.",
      "Poziom Fermiego rozszczepia się na nieskończenie wiele poziomów Landaua."
    ],
    "correctIndex": 0,
    "explanation": "W stanie równowagi termodynamicznej półprzewodnik nie jest poddany działaniu czynników zewnętrznych (światła, wstrzykiwania ładunków, pól elektrycznych). W całym krysztale lub złączu ustala się jeden stały poziom Fermiego \\(E_F\\), a tempo generacji cieplnej równoważy się z tempem rekombinacji. Obowiązuje wówczas fundamentalne prawo działania mas: iloczyn koncentracji równowagowych elektronów i dziur jest stały i zależy wyłącznie od temperatury i szerokości przerwy zabronionej: \\(n_0 \\cdot p_0 = n_i^2(T)\\).",
    "flashcardFront": "Koncentracja nośników w stanie RÓWNOWAGI termodynamicznej:",
    "flashcardBack": [
      "Prawo działania mas: \\(n_0 \\cdot p_0 = n_i^2\\) (iloczyn jest stały w danej temperaturze!).",
      "Poziom Fermiego: Istnieje JEDEN wspólny poziom Fermiego \\(E_F\\) w całym układzie.",
      "Brak zaburzeń: Szybkość generacji cieplnej jest ściśle równa szybkości rekombinacji."
    ],
    "tips": [
      "Równowaga termodynamiczna oznacza brak zewnętrznych baterii i brak oświetlenia.",
      "Pamiętaj o prawie działania mas: iloczyn n razy p wynosi zawsze n_i do kwadratu.",
      "Poziom Fermiego jest jeden i idealnie płaski."
    ],
    "tip": "Stan równowagi: n0 · p0 = ni², jeden wspólny poziom Fermiego EF w całej strukturze.",
    "relatedRoute": "/teoria/polprzewodniki#q18"
  },
  {
    "id": "semi-eq-doping",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "W półprzewodniku typu n domieszkowanym donorami o koncentracji \\(N_D\\) w stanie równowagi termodynamicznej koncentracje nośników wynoszą w przybliżeniu:",
    "options": [
      "\\(n_0 \\approx N_D\\) (nośniki większościowe) oraz \\(p_0 \\approx \\frac{n_i^2}{N_D}\\) (nośniki mniejszościowe).",
      "\\(n_0 = p_0 = n_i\\) niezależnie od koncentracji wprowadzonych donorów.",
      "\\(n_0 \\approx \\frac{n_i^2}{N_D}\\) oraz \\(p_0 \\approx N_D\\).",
      "\\(n_0 \\approx N_D^2\\) oraz \\(p_0 = 0\\)."
    ],
    "correctIndex": 0,
    "explanation": "W temperaturze pokojowej niemal wszystkie atomy domieszek donorowych (np. fosforu lub arsenu w krzemie) są zjonizowane. Dlatego koncentracja elektronów swobodnych (nośników większościowych) jest w przybliżeniu równa koncentracji donorów: \\(n_0 \\approx N_D\\). Z prawa działania mas \\(n_0 \\cdot p_0 = n_i^2\\) natychmiast wynika koncentracja dziur (nośników mniejszościowych): \\(p_0 \\approx n_i^2 / N_D\\).",
    "flashcardFront": "Koncentracja nośników w domieszkowanym krzemie (typ n):",
    "flashcardBack": [
      "Nośniki większościowe (elektrony): \\(n_0 \\approx N_D\\) (pełna jonizacja donorów w 300 K).",
      "Nośniki mniejszościowe (dziury): \\(p_0 \\approx \\frac{n_i^2}{N_D}\\).",
      "Im silniejsze domieszkowanie donorami, tym mniejsza koncentracja nośników mniejszościowych!"
    ],
    "tips": [
      "Donory (V grupa) oddają elektrony, więc elektronów jest tyle, ile domieszek N_D.",
      "Dziur jest bardzo mało — wyznaczasz je dzieląc n_i² przez N_D.",
      "Iloczyn elektronów i dziur zawsze musi dać n_i²."
    ],
    "tip": "Półprzewodnik typu n: n0 ≈ ND, p0 ≈ ni² / ND.",
    "relatedRoute": "/teoria/polprzewodniki#q18"
  },
  {
    "id": "semi-non-eq-generation",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Co definiuje stan NIERÓWNOWAGI termodynamicznej w półprzewodniku i jakie czynniki go wywołują?",
    "options": [
      "Działanie czynników zewnętrznych (oświetlenie \\(h\\nu \\ge E_g\\), iniekcja nośników przez złącze p-n, silne pole elektryczne), co prowadzi do wygenerowania nadmiarowych nośników ładunku: \\(n = n_0 + \\Delta n\\), \\(p = p_0 + \\Delta p\\).",
      "Schłodzenie próbki do temperatury zera bezwzględnego w całkowitej ciemności.",
      "Idealna kompensacja donorów przez akceptory dająca czysty półprzewodnik samoistny.",
      "Mechaniczne zgniecenie kryształu bez przepływu prądu i bez światła."
    ],
    "correctIndex": 0,
    "explanation": "Stan nierównowagi termodynamicznej zachodzi pod wpływem zewnętrznego dopływu energii: oświetlenia fotonami o energii przewyższającej przerwę zabronioną (generacja fotonowa), polaryzacji złącza p-n w kierunku przewodzenia (iniekcja nośników mniejszościowych) lub uderzeniowej jonizacji w silnym polu elektrycznym. Powstają wówczas nośniki nadmiarowe \\(\\Delta n\\) i \\(\\Delta p\\), zwiększając całkowite koncentracje ponad stan równowagi.",
    "flashcardFront": "Stan NIERÓWNOWAGI termodynamicznej w półprzewodniku:",
    "flashcardBack": [
      "Przyczyny: Zewnętrzne wymuszenia — oświetlenie (\\(h\\nu \\ge E_g\\)), iniekcja ładunku na złączu, silne pole elektryczne.",
      "Efekt: Generacja NADMIAROWYCH nośników ładunku: \\(n = n_0 + \\Delta n\\) oraz \\(p = p_0 + \\Delta p\\).",
      "Równowaga zostaje zaburzona — tempo generacji przewyższa tempo rekombinacji cieplnej."
    ],
    "tips": [
      "Pomyśl o oświetleniu baterii słonecznej lub diody LED — to stan nierównowagi.",
      "Pojawiają się dodatkowe nośniki nadmiarowe Delta n i Delta p.",
      "Całkowita liczba nośników to suma stanu równowagi i nadmiaru."
    ],
    "tip": "Nierównowaga: wymuszenie zewnętrzne (światło, iniekcja) -> nadmiar nośników n = n0 + Δn, p = p0 + Δp.",
    "relatedRoute": "/teoria/polprzewodniki#q19"
  },
  {
    "id": "semi-non-eq-violation",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Co dzieje się z prawem działania mas oraz poziomem Fermiego w stanie nierównowagi termodynamicznej?",
    "options": [
      "Prawo działania mas przestaje obowiązywać (\\(n \\cdot p \\neq n_i^2\\), ściślej \\(n \\cdot p > n_i^2\\)), a jeden wspólny poziom Fermiego rozszczepia się na dwa quasi-poziomy Fermiego: \\(E_{Fn}\\) dla elektronów i \\(E_{Fp}\\) dla dziur.",
      "Prawo działania mas zachowuje ważność, a poziom Fermiego przesuwa się poza pasmo przewodnictwa.",
      "Iloczyn \\(n \\cdot p\\) spada natychmiast do zera, a quasi-poziomy Fermiego łączą się z pasmem walencyjnym.",
      "Poziom Fermiego pozostaje nienaruszony, ponieważ opisuje wyłącznie stany kwantowe sieci krystalicznej."
    ],
    "correctIndex": 0,
    "explanation": "To kluczowe zagadnienie egzaminacyjne: w stanie nierównowagi termodynamicznej iloczyn koncentracji przewyższa wartość równowagową (\\(n \\cdot p > n_i^2\\)), więc prawo działania mas pęka! Ponieważ układ nie jest w równowadze, nie można opisać obsadzenia stanów jednym poziomem Fermiego. Wprowadza się dwa quasi-poziomy Fermiego: \\(E_{Fn}\\) dla elektronów i \\(E_{Fp}\\) dla dziur. Różnica ich energii odpowiada przyłożonemu napięciu lub energii wzbudzenia: \\(E_{Fn} - E_{Fp} = q U\\).",
    "flashcardFront": "Prawo działania mas i quasi-poziomy Fermiego w nierównowadze:",
    "flashcardBack": [
      "Załamanie prawa działania mas: \\(n \\cdot p \\neq n_i^2\\) (ściślej \\(n \\cdot p > n_i^2\\)!).",
      "Rozszczepienie poziomu Fermiego: Jeden poziom \\(E_F\\) pęka na DWA quasi-poziomy Fermiego:",
      "— \\(E_{Fn}\\) (dla elektronów w paśmie przewodnictwa)",
      "— \\(E_{Fp}\\) (dla dziur w paśmie walencyjnym)."
    ],
    "tips": [
      "W stanie nierównowagi n · p NIE RÓWNA SIĘ n_i²!",
      "Jeden poziom Fermiego zastępują DWA quasi-poziomy Fermiego (dla elektronów i dziur).",
      "To ulubione pytanie sprawdzające zrozumienie fizyki półprzewodników."
    ],
    "tip": "W nierównowadze: n · p ≠ ni² oraz rozszczepienie na dwa quasi-poziomy Fermiego EFn i EFp.",
    "relatedRoute": "/teoria/polprzewodniki#q19"
  },
  {
    "id": "semi-recombination-lifetime",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "W jaki sposób zanikają nadmiarowe nośniki ładunku po nagłym wyłączeniu zewnętrznego źródła wzbudzenia?",
    "options": [
      "Rekombinują wykładniczo w czasie zgodnie ze wzorem \\(\\Delta n(t) = \\Delta n(0) e^{-t/\\tau}\\), gdzie \\(\\tau\\) to czas życia nośników nadmiarowych (czas, po którym ich koncentracja spada ok. 2,72-krotnie do ~37%).",
      "Znikają natychmiastowo w czasie 0 sekund na skutek działania siły Lorentza.",
      "Zanikają liniowo ze stałą prędkością dryfu niezależnie od koncentracji początkowej.",
      "Przekształcają się w fotony rentgenowskie o nieskończonym czasie życia."
    ],
    "correctIndex": 0,
    "explanation": "Po usunięciu źródła wzbudzenia (np. zgaszeniu oświetlenia) generacja nadmiarowa ustaje, a proces rekombinacji dąży do przywrócenia równowagi termodynamicznej. Dla niskich poziomów iniekcji spadek nośników nadmiarowych ma charakter czysto wykładniczy: \\(\\Delta n(t) = \\Delta n(0) e^{-t/\\tau}\\). Stała czasowa \\(\\tau\\) to czas życia nośników nadmiarowych — czas, po którym nadmiar maleje \\(e\\)-krotnie (do ok. 36,8% wartości początkowej).",
    "flashcardFront": "Zanik nośników nadmiarowych (relaksacja do stanu równowagi):",
    "flashcardBack": [
      "Równanie zaniku: \\(\\Delta n(t) = \\Delta n(0) \\cdot e^{-t/\\tau}\\)",
      "Czas życia nośników nadmiarowych (\\(\\tau\\)): Czas, po którym nadmiar nośników spada \\(e\\)-krotnie (do ok. 37% wartości początkowej).",
      "Mechanizm: Rekombinacja elektronów i dziur (promienista lub bezpromienista przez pułapki Shockleya-Reada-Halla)."
    ],
    "tips": [
      "Zanik jest wykładniczy — jak rozładowanie kondensatora przez rezystor.",
      "Wzór to Delta n(0) razy exp(-t / tau).",
      "Tau to czas życia nośników nadmiarowych."
    ],
    "tip": "Zanik wykładniczy: Δn(t) = Δn(0) · exp(-t/τ), gdzie τ to czas życia nośników nadmiarowych.",
    "relatedRoute": "/teoria/polprzewodniki#q19"
  },
  {
    "id": "semi-bjt-structure",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Opisz budowę tranzystora bipolarnego (BJT) i wskaż kluczowe warunki technologiczne konieczne do jego poprawnego działania:",
    "options": [
      "Trzy naprzemienne warstwy półprzewodnika (NPN lub PNP) tworzące elektrody: Emiter (E), Baza (B), Kolektor (C); warunkiem koniecznym jest bardzo silne domieszkowanie emitera względem bazy (\\(N_E \\gg N_B\\)) oraz grubość bazy fizycznie znacznie mniejsza od drogi dyfuzji nośników (\\(W_B \\ll L_n\\)).",
      "Dwie identyczne warstwy metalu rozdzielone grubą warstwą tlenku krzemu SiO2.",
      "Baza musi być silniej domieszkowana i znacznie grubsza od emitera i kolektora.",
      "Pojedyncze złącze p-n z trzema wyprowadzeniami omowymi dołączonymi w tym samym punkcie."
    ],
    "correctIndex": 0,
    "explanation": "Tranzystor bipolarny składa się z dwóch złączy p-n w konfiguracji NPN lub PNP z elektrodami: Emiter (E), Baza (B) i Kolektor (C). Aby tranzystor działał z wysokim wzmocnieniem: 1. Emiter musi być bardzo silnie domieszkowany względem bazy (\\(N_E \\gg N_B\\)), co zapewnia wysoką wydajność iniekcji. 2. Baza musi być fizycznie skrajnie cienka — jej szerokość \\(W_B\\) musi być dużo mniejsza od drogi dyfuzji nośników mniejszościowych (\\(W_B \\ll L_n\\)), aby nośniki wstrzyknięte z emitera nie zrekombinowały w bazie, lecz dotarły do kolektora.",
    "flashcardFront": "Budowa tranzystora bipolarnego (BJT) — warunki technologiczne:",
    "flashcardBack": [
      "Struktura: NPN lub PNP; 3 elektrody: Emiter (E), Baza (B), Kolektor (C).",
      "Warunek 1: Emiter jest SILNIE domieszkowany względem bazy (\\(N_E \\gg N_B\\)) — wysoka wydajność iniekcji.",
      "Warunek 2: Baza jest BARDZO CIENKA (\\(W_B \\ll L_n\\)) — szerokość bazy jest dużo mniejsza od drogi dyfuzji nośników, by uniknąć rekombinacji w bazie!"
    ],
    "tips": [
      "Baza musi być tak cienka, aby elektrony przeleciały przez nią bez zderzenia i rekombinacji.",
      "Emiter musi mieć mnóstwo nośników (silne domieszkowanie), aby wstrzykiwać je do bazy.",
      "Trzy elektrody to E (emiter), B (baza), C (kolektor)."
    ],
    "tip": "BJT: N_E >> N_B (silnie domieszkowany emiter) oraz W_B << L_n (bardzo wąska baza).",
    "relatedRoute": "/teoria/polprzewodniki#q22"
  },
  {
    "id": "semi-bjt-active-mode",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Jak działa tranzystor bipolarny NPN w normalnym stanie aktywnym?",
    "options": [
      "Złącze B-E jest spolaryzowane w kierunku przewodzenia, a złącze B-C w kierunku zaporowym; nośniki większościowe z emitera są wstrzykiwane do bazy, dyfundują przez nią z minimalną rekombinacją i są wciągane przez pole elektryczne zaporowego złącza kolektora.",
      "Oba złącza są spolaryzowane w kierunku zaporowym, a prąd płynie dzięki przebiciu Zenera.",
      "Prąd płynie wyłącznie w obwodzie bazy, a złącze kolektora służy jedynie jako ekran uziemiający.",
      "Pole magnetyczne cewki wstrzykuje elektrony bezpośrednio z bazy do emitera."
    ],
    "correctIndex": 0,
    "explanation": "W stanie aktywnym normalnym tranzystora NPN: złącze Baza-Emiter ma polaryzację przewodzącą (\\(U_{BE} \\approx 0,7\\ \\mathrm{V}\\)), co obniża barierę potencjału i powoduje masową iniekcję elektronów z emitera do bazy. W bazie elektrony stają się nośnikami mniejszościowymi i dyfundują ku złączu B-C. Ponieważ złącze Kolektor-Baza jest spolaryzowane zaporowo (\\(U_{CB} > 0\\)), panuje tam silne pole elektryczne skierowane od kolektora do bazy, które natychmiast „zasysa” i przyspiesza elektrony docierające do krawędzi obszaru zubożonego, tworząc prąd kolektora \\(I_C\\).",
    "flashcardFront": "Zasada działania tranzystora bipolarnego w stanie aktywnym:",
    "flashcardBack": [
      "Polaryzacja: Złącze B-E w kierunku PRZEWODZENIA, złącze B-C w kierunku ZAPOROWYM.",
      "Iniekcja: Emiter wstrzykuje elektrony do bazy.",
      "Dyfuzja: Elektrony dyfundują przez ultracienką bazę (rekombinuje zaledwie ok. 1% tworząc prąd \\(I_B\\)).",
      "Ekstrakcja: Silne pole zaporowego złącza B-C przechwytuje elektrony do kolektora (duży prąd \\(I_C = \\beta I_B\\))."
    ],
    "tips": [
      "Pamiętaj: B-E przewodzi (otwarte), B-C jest zaporowe (wciąga elektrony).",
      "Baza jest cienka, więc 99% elektronów przelatuje prosto do kolektora.",
      "Mały prąd bazy steruje dużym prądem kolektora."
    ],
    "tip": "Stan aktywny: złącze B-E przewodzi, B-C zaporowe. Iniekcja z emitera, dyfuzja przez bazę, wychwyt do kolektora.",
    "relatedRoute": "/teoria/polprzewodniki#q22"
  },
  {
    "id": "semi-bjt-current-equations",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Wskaż fundamentalne równania prądowe i relacje współczynników wzmocnienia w tranzystorze bipolarnym:",
    "options": [
      "\\(I_E = I_B + I_C\\), \\(I_C = \\beta I_B\\) oraz \\(\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}\\) (dla \\(\\beta = 100\\) mamy \\(\\alpha \\approx 0,99\\)).",
      "\\(I_B = I_E + I_C\\), \\(I_C = \\alpha I_B\\) oraz \\(\\beta = \\alpha / (\\alpha + 1)\\).",
      "\\(I_C = I_B \\cdot I_E\\) oraz \\(\\beta = 1 - \\alpha\\).",
      "\\(I_E = \\beta I_C\\) oraz \\(\\alpha = \\beta \\cdot (\\beta - 1)\\)."
    ],
    "correctIndex": 0,
    "explanation": "Z I prawa Kirchhoffa dla węzła tranzystora wynika bilans prądów: \\(I_E = I_B + I_C\\). Współczynnik wzmocnienia prądowego w układzie ze wspólnym emiterem to \\(\\beta = I_C / I_B\\) (typowo 50–300). Współczynnik zwarciowy w układzie ze wspólną bazą to \\(\\alpha = I_C / I_E\\). Zależność między nimi: \\(\\alpha = \\frac{\\beta}{\\beta + 1}\\) oraz \\(\\beta = \\frac{\\alpha}{1 - \\alpha}\\). Dla \\(\\beta = 100\\): \\(\\alpha = 100 / 101 \\approx 0,99\\).",
    "flashcardFront": "Równania prądowe i współczynniki tranzystora bipolarnego:",
    "flashcardBack": [
      "Bilans prądów w węźle: \\(I_E = I_B + I_C\\)",
      "Wzmocnienie prądowe (układ OE): \\(I_C = \\beta I_B\\)",
      "Współczynnik transmisji emitera (układ OB): \\(\\alpha = \\frac{I_C}{I_E} = \\frac{\\beta}{\\beta + 1}\\)",
      "Przykładowe wartości: Jeśli \\(\\beta = 100\\), to \\(\\alpha = 100/101 \\approx 0,99\\)."
    ],
    "tips": [
      "Prąd emitera to suma prądu bazy i prądu kolektora: I_E = I_B + I_C.",
      "I_C = beta * I_B. Jeśli beta = 100, prąd kolektora jest 100 razy większy od prądu bazy.",
      "Alfa jest zawsze ciut mniejsza od 1: alfa = beta / (beta + 1)."
    ],
    "tip": "I_E = I_B + I_C, I_C = β I_B, α = β / (β + 1) ≈ 0,99.",
    "relatedRoute": "/teoria/polprzewodniki#q22"
  },
  {
    "id": "semi-bjt-characteristics",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Opisz charakterystykę wyjściową \\(I_C(U_{CE})\\) tranzystora bipolarnego w układzie OE:",
    "options": [
      "Składa się z trzech obszarów: nasycenia (stromy wzrost \\(I_C\\) od 0 do ok. 0,2 V), obszaru aktywnego (płaskie, równoległe poziome linie o nieznacznym nachyleniu wynikającym z efektu Early’ego) oraz obszaru przebicia lawinowego.",
      "Jest idealną parabolą symetryczną względem zera woltów.",
      "Charakteryzuje się ujemną rezystancją dynamiczną w całym zakresie pracy.",
      "Prąd kolektora rośnie liniowo z napięciem kolektora zgodnie z prostym prawem Ohma."
    ],
    "correctIndex": 0,
    "explanation": "Na charakterystyce wyjściowej \\(I_C = f(U_{CE})\\) przy parametrze \\(I_B = \\mathrm{const}\\) wyróżniamy: 1. Stan nasycenia (\\(U_{CE} < 0,2-0,3\\ \\mathrm{V}\\)) — oba złącza przewodzą, prąd gwałtownie narasta. 2. Stan aktywny normalny (\\(U_{CE} > 0,3\\ \\mathrm{V}\\)) — złącze B-C jest zaporowe, prąd \\(I_C\\) jest niemal stały i zależy wyłącznie od prądu bazy (\\(I_C = \\beta I_B\\)). Słabe nachylenie linii wynika ze zjawiska modulacji szerokości bazy (efekt Early’ego). 3. Obszar przebicia przy przekroczeniu dopuszczalnego napięcia \\(U_{CE\\,max}\\).",
    "flashcardFront": "Charakterystyka wyjściowa \\(I_C(U_{CE})\\) tranzystora bipolarnego:",
    "flashcardBack": [
      "Obszar nasycenia (\\(U_{CE} < 0,2\\ \\mathrm{V}\\)): stromy wzrost prądu, oba złącza spolaryzowane w kierunku przewodzenia.",
      "Obszar aktywny (pracy wzmacniającej): prąd \\(I_C\\) niemal nie zależy od \\(U_{CE}\\) (płaskie linie \\(I_C = \\beta I_B\\)).",
      "Efekt Early’ego: lekkie nachylenie linii w stanie aktywnym spowodowane zawężaniem bazy przy wzroście \\(U_{CE}\\).",
      "Obszar przebicia: gwałtowny lawinowy wzrost prądu przy dużych napięciach."
    ],
    "tips": [
      "Wyobraź sobie rodzinę poziomych linii — każda dla większego prądu bazy I_B.",
      "Na początku przy U_CE bliskim zera jest wąski obszar nasycenia.",
      "Delikatne nachylenie prostych w obszarze aktywnym to efekt Early'ego."
    ],
    "tip": "Wyjściowa IC(UCE): strome nasycenie (<0,2V), poziome linie aktywne (IC = β IB, efekt Early'ego) i przebicie.",
    "relatedRoute": "/teoria/polprzewodniki#q22"
  },
  {
    "id": "semi-bjt-name-origin",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Dlaczego tranzystor bipolarny nazywa się „bipolarny” (BJT)?",
    "options": [
      "Ponieważ w przewodzeniu prądu biorą udział oba rodzaje nośników ładunku: nośniki większościowe emitera stają się nośnikami mniejszościowymi dyfundującymi przez bazę.",
      "Ponieważ posiada dokładnie dwa bieguny magnetyczne N i S.",
      "Ponieważ może pracować wyłącznie przy napięciu zasilania o dwóch symetrycznych polaryzacjach (+15 V i -15 V).",
      "Ponieważ do jego budowy wymagane są dwa identyczne kryształy dielektryczne."
    ],
    "correctIndex": 0,
    "explanation": "Termin „bipolarny” (BJT — Bipolar Junction Transistor) odnosi się do faktu, że w zjawisku transportu prądu w tym elemencie uczestniczą nośniki OBYDWU znaków: elektrony oraz dziury. Na przykład w tranzystorze NPN nośniki większościowe emitera (elektrony) są wstrzykiwane do bazy, w której stają się nośnikami mniejszościowymi i dyfundują do kolektora, podczas gdy prąd bazy tworzą nośniki większościowe bazy (dziury). W tranzystorach polowych (FET) prąd przenoszą wyłącznie nośniki jednego rodzaju (stąd nazwa „unipolarne”).",
    "flashcardFront": "Dlaczego tranzystor bipolarny nazywa się „bipolarny”?",
    "flashcardBack": [
      "Fizyczne uzasadnienie: W transporcie prądu biorą udział OBA rodzaje nośników ładunku (elektrony i dziury).",
      "W tranzystorze NPN: elektrony (większościowe w emiterze) stają się nośnikami mniejszościowymi w bazie.",
      "Dla kontrastu: tranzystor polowy (FET) jest UNIPOLARNY — prąd w kanale płynie tylko za pośrednictwem jednego rodzaju nośników!"
    ],
    "tips": [
      "Bipolarny = dwa znaki nośników (elektrony i dziury).",
      "Nośniki większościowe z emitera stają się mniejszościowymi w bazie.",
      "Tranzystor polowy dla odmiany jest unipolarny."
    ],
    "tip": "Bipolarny = prąd przenoszą oba rodzaje nośników (większościowe emitera stają się mniejszościowymi w bazie).",
    "relatedRoute": "/teoria/polprzewodniki#q22"
  },
  {
    "id": "semi-fet-principle",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "Na czym polega zasada działania tranzystora polowego (FET / MOSFET)?",
    "options": [
      "Jest to element unipolarny, w którym przepływ prądu w kanale między źródłem (S) a drenem (D) jest sterowany polem elektrycznym wywołanym napięciem przyłożonym do bramki (G).",
      "Jest to element sterowany wyłącznie prądem bazy wstrzykiwanym do obszaru zubożonego.",
      "Działa na zasadzie emisji termoelektronowej z rozżarzonego włókna katody do anody.",
      "Prąd w kanale jest modulowany wyłącznie przez zewnętrzne pole magnetyczne cewki sterującej."
    ],
    "correctIndex": 0,
    "explanation": "Tranzystor polowy (FET — Field-Effect Transistor) to element unipolarny, w którym prąd płynie za pośrednictwem nośników tylko jednego rodzaju (większościowych w kanale). Elektrody to: Źródło (Source — S), Dren (Drain — D) i Bramka (Gate — G). Napięcie przyłożone do izolowanej bramki \\(U_{GS}\\) wytwarza pole elektryczne wnikające w półprzewodnik, które moduluje szerokość obszaru zubożonego lub indukuje kanał inwersyjny, regulując rezystancję i prąd drenu \\(I_D\\).",
    "flashcardFront": "Zasada działania tranzystora polowego (FET / MOSFET):",
    "flashcardBack": [
      "Typ elementu: UNIPOLARNY (prąd płynie tylko za pośrednictwem jednego rodzaju nośników).",
      "Elektrody: Źródło (Source), Dren (Drain), Bramka (Gate).",
      "Sterowanie: Napięciem bramki \\(U_{GS}\\) — pole elektryczne reguluje szerokość/przewodność kanału przewodzącego."
    ],
    "tips": [
      "Field-Effect = efekt polowy (sterowanie polem elektrycznym).",
      "Prąd płynie od źródła (Source) do drenu (Drain).",
      "Bramka (Gate) steruje prądem za pomocą napięcia U_GS."
    ],
    "tip": "Tranzystor polowy jest unipolarny — napięcie bramki U_GS steruje polem elektrycznym w kanale S-D.",
    "relatedRoute": "/teoria/polprzewodniki#q21"
  },
  {
    "id": "semi-fet-vs-bjt-advantages",
    "category": "polprzewodniki",
    "categoryLabel": "Półprzewodniki i złącze p-n",
    "tier": "tier1",
    "question": "W jakich aspektach tranzystory polowe (FET/MOSFET) mają zdecydowaną przewagę nad tranzystorami bipolarnymi (BJT)?",
    "options": [
      "Sterowanie beznapięciowe/beznapływowe (prąd bramki \\(I_G \\approx 0\\)), gigantyczna rezystancja wejściowa (\\(10^9 - 10^{14}\\ \\Omega\\)), mniejsze szumy własne, brak wtórnego przebicia termicznego i symetria źródło-dren.",
      "Mają znacznie większy prąd bazy i wymagają ciągłego chłodzenia ciekłym azotem.",
      "Przewodzą prąd wyłącznie przy zasilaniu napięciem zmiennym o wysokiej częstotliwości.",
      "Są całkowicie odporne na wyładowania elektrostatyczne (ESD) w przeciwieństwie do BJT."
    ],
    "correctIndex": 0,
    "explanation": "Główne zalety tranzystorów polowych nad bipolarnymi: 1. Sterowanie napięciowe — izolowana bramka nie pobiera prądu w stanie ustalonym (\\(I_G \\approx 0\\)), co eliminuje obciążenie źródła sygnału. 2. Ogromna rezystancja wejściowa (\\(10^9 - 10^{14}\\ \\Omega\\) w MOSFET). 3. Niższy poziom szumów (brak szumu śrutowego prądu bazy i rekombinacji). 4. Dodatni współczynnik temperaturowy rezystancji kanału — przy nagrzewaniu prąd maleje, co chroni przed przebiciem termicznym. 5. Symetria kanału pozwala na pracę jako dwukierunkowy klucz analogowy.",
    "flashcardFront": "Gdzie tranzystory polowe (FET) mają przewagę nad bipolarnymi (BJT)?",
    "flashcardBack": [
      "Sterowanie napięciowe: Zerowy pobór prądu przez bramkę w stanie ustalonym (\\(I_G \\approx 0\\)).",
      "Olbrzymia rezystancja wejściowa: \\(10^9 - 10^{14}\\ \\Omega\\) (brak obciążania źródła sygnału).",
      "Niższe szumy własne: brak fluktuacji rekombinacji nośników mniejszościowych.",
      "Brak wtórnego przebicia termicznego: ujemne sprzężenie temperaturowe.",
      "Symetria struktury: możliwość pracy jako dwukierunkowy łącznik sygnałów analogowych."
    ],
    "tips": [
      "BJT steruje się prądem, a FET steruje się napięciem.",
      "Bramka MOSFET-u jest odizolowana tlenkiem SiO2, więc ma gigantyczną rezystancję wejściową.",
      "Brak prądu bramki oznacza brak strat mocy w sterowaniu."
    ],
    "tip": "Przewaga FET: sterowanie napięciowe (IG ≈ 0), gigantyczna rezystancja (10⁹-10¹⁴ Ω), mniejsze szumy.",
    "relatedRoute": "/teoria/polprzewodniki#q21"
  },
  {
    "id": "mem-opt-disc-principle",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "Na jakiej zasadzie optycznej opiera się odczyt danych z płyt kompaktowych (CD, DVD, Blu-Ray)?",
    "options": [
      "Na zjawisku interferencji destruktywnej: dno zagłębienia (pitu) ma głębokość \\(h = \\frac{\\lambda}{4n}\\), dzięki czemu promień odbity od pitu i landu przebywa różnicę dróg \\(\\frac{\\lambda}{2n}\\) (przesunięcie w fazie o \\(\\pi\\)) i wygasza się na fotodiodzie.",
      "Na pomiarze przewodności elektrycznej wytłoczonych ścieżek za pomocą miniaturowej igły.",
      "Na zjawisku polaryzacji kołowej światła w warstwie ciekłokrystalicznej.",
      "Na zliczaniu fotonów emitowanych w wyniku zjawiska fotoluminescencji kropel poliwęglanu."
    ],
    "correctIndex": 0,
    "explanation": "Informacja na płycie wytłoczona jest w postaci zagłębień (pitów) i pól płaskich (landów). Światło lasera o długości fali w próżni \\(\\lambda\\) pada przez podłoże z poliwęglanu o współczynniku załamania \\(n \\approx 1,55\\). Głębokość pitu dobiera się ściśle jako \\(h = \\frac{\\lambda}{4n}\\). Promień odbity od dna pitu pokonuje drogę dłuższą o \\(2h = \\frac{\\lambda}{2n}\\), czyli dokładnie o pół fali w materiale. Następuje interferencja wygaszająca (destruktywna) — fotodioda odnotowuje spadek natężenia światła na krawędzi pitu.",
    "flashcardFront": "Zasada odczytu płyt optycznych (CD / DVD / Blu-Ray):",
    "flashcardBack": [
      "Głębokość pitu: \\(h = \\frac{\\lambda}{4n}\\) (gdzie \\(n\\) to współczynnik załamania poliwęglanu).",
      "Różnica dróg promieni: \\(\\Delta s = 2h = \\frac{\\lambda}{2n}\\) (dokładnie pół fali w materiale!).",
      "Zjawisko: INTERFERENCJA DESTRUKTYWNA (przesunięcie fazowe o \\(\\pi = 180^\\circ\\)).",
      "Detekcja: Fotodioda widzi zaciemnienie (spadek natężenia odbitego światła) na styku pitu i landu."
    ],
    "tips": [
      "Promień musi pokonać głębokość pitu dwa razy: w dół i w górę.",
      "Dlatego głębokość to lambda / (4n), aby różnica dróg wyniosła lambda / (2n).",
      "Różnica drogi o pół fali daje wygaszenie światła (interferencję destruktywną)."
    ],
    "tip": "Odczyt dysków: głębokość pitu h = λ/(4n) -> różnica dróg λ/(2n) -> interferencja destruktywna (faza π).",
    "relatedRoute": "/teoria/pamieci-nosniki#q24"
  },
  {
    "id": "mem-opt-disc-specs",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "Zestaw parametry lasera (długość fali \\(\\lambda\\) i apertura numeryczna NA) dla nośników CD, DVD i Blu-Ray:",
    "options": [
      "CD: \\(\\lambda = 780\\ \\mathrm{nm}\\) (podczerwień), \\(\\mathrm{NA} = 0,45\\); DVD: \\(\\lambda = 650\\ \\mathrm{nm}\\) (czerwony), \\(\\mathrm{NA} = 0,60\\); Blu-Ray: \\(\\lambda = 405\\ \\mathrm{nm}\\) (niebiesko-fioletowy), \\(\\mathrm{NA} = 0,85\\).",
      "CD: 1550 nm, NA = 0,1; DVD: 1310 nm, NA = 0,2; Blu-Ray: 850 nm, NA = 0,3.",
      "CD: 650 nm, NA = 0,85; DVD: 780 nm, NA = 0,60; Blu-Ray: 1064 nm, NA = 0,45.",
      "Wszystkie trzy nośniki używają identycznego lasera helowo-neonowego o długości 632,8 nm."
    ],
    "correctIndex": 0,
    "explanation": "Średnica plamki skupionej wiązki lasera ograniczona dyfrakcją wynosi w przybliżeniu \\(d \\approx \\frac{\\lambda}{\\mathrm{NA}}\\). Wzrost gęstości zapisu od CD (700 MB) przez DVD (4,7 GB) do Blu-Ray (25 GB) osiągnięto przez skrócenie długości fali oraz zwiększenie apertury obiektywu: CD (780 nm podczerwień, NA=0,45, plamka ~1,7 μm), DVD (650 nm czerwony, NA=0,60, plamka ~1,0 μm) oraz Blu-Ray (405 nm fioletowo-niebieski, NA=0,85, plamka ~0,48 μm).",
    "flashcardFront": "Ewolucja płyt optycznych: CD -> DVD -> Blu-Ray (parametry):",
    "flashcardBack": [
      "CD: \\(\\lambda = 780\\ \\mathrm{nm}\\) (podczerwień), \\(\\mathrm{NA} = 0,45\\) -> pojemność 700 MB.",
      "DVD: \\(\\lambda = 650\\ \\mathrm{nm}\\) (czerwony), \\(\\mathrm{NA} = 0,60\\) -> pojemność 4,7 GB.",
      "Blu-Ray: \\(\\lambda = 405\\ \\mathrm{nm}\\) (fioletowo-niebieski), \\(\\mathrm{NA} = 0,85\\) -> pojemność 25 GB.",
      "Zasada: Rozmiar plamki \\(d \\approx \\lambda / \\mathrm{NA}\\) maleje, co pozwala na gęstsze upakowanie pitów."
    ],
    "tips": [
      "CD: podczerwień 780 nm.",
      "DVD: czerwony 650 nm.",
      "Blu-Ray: niebiesko-fioletowy 405 nm o największej aperturze NA=0,85."
    ],
    "tip": "CD (780 nm, NA=0,45), DVD (650 nm, NA=0,60), BD (405 nm, NA=0,85). Średnica plamki d ≈ λ/NA.",
    "relatedRoute": "/teoria/pamieci-nosniki#q24"
  },
  {
    "id": "mem-opt-disc-recording",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "W jaki sposób realizowany jest zapis informacji na dyskach optycznych w wersji tłoczonej (ROM) oraz wielokrotnego zapisu (RW)?",
    "options": [
      "W płytach ROM stosuje się tłoczenie mechaniczne matrycą niklową w prasie wtryskowej; w płytach wielokrotnego zapisu (RW) laser podgrzewa warstwę stopu chalkogenidkowego, zmieniając odwracalnie jej fazę między krystaliczną (odbijającą) a amorficzną (rozpraszającą).",
      "W płytach ROM bity wycina się diamentowym rylcem; w płytach RW dane zapisuje się magnetycznie głowicą indukcyjną.",
      "Płyty ROM są naświetlane promieniami gamma; płyty RW wykorzystują mikroskopijne pęcherzyki powietrza w poliwęglanie.",
      "Zapis na wszystkich płytach optycznych polega wyłącznie na trwałym przepaleniu otworów na wylot płyty."
    ],
    "correctIndex": 0,
    "explanation": "Płyty seryjne (CD-ROM, DVD-Video, BD-ROM) produkuje się masowo metodą formowania wtryskowego z poliwęglanu przy użyciu precyzyjnej metalowej matrycy niklowej (stamper), która mechanicznie odciska pity. Z kolei dyski do nagrywania wielokrotnego (CD-RW, DVD-RW, BD-RE) wykorzystują zjawisko przemiany fazowej (Phase-Change): warstwa rejestrująca ze stopu pierwiastków chalkogenidkowych (np. GeSbTe) pod wpływem impulsu laserowego topi się i szybko stygnie, stając się amorficzna (ciemna, małe odbicie), a po słabszym podgrzaniu ulega rekrystalizacji (faza krystaliczna, jasna, duże odbicie).",
    "flashcardFront": "Zapis danych na płytach optycznych (ROM vs R / RW):",
    "flashcardBack": [
      "Płyty ROM (tłoczone): Mechaniczne wytłaczanie pitów w poliwęglanie z metalowej matrycy niklowej (wtryskarka).",
      "Płyty jednokrotnego zapisu (R): Laser trwale niszczy/odbarwia warstwę barwnika organicznego (Dye).",
      "Płyty wielokrotnego zapisu (RW / RE): Laser zmienia fazę stopu pierwiastków chalkogenidkowych (GeSbTe): faza amorficzna (rozprasza światło) <-> faza krystaliczna (odbija światło)."
    ],
    "tips": [
      "Płyty w tłoczni są odciskane mechanicznie z metalowej matrycy (jak płyty winylowe).",
      "Płyty RW wykorzystują zmianę fazy krystaliczna/amorficzna (Phase Change).",
      "Faza amorficzna słabiej odbija światło niż faza krystaliczna."
    ],
    "tip": "Zapis ROM: tłoczenie wtryskowe matrycą. Zapis RW: odwracalna zmiana fazy (krystaliczna / amorficzna).",
    "relatedRoute": "/teoria/pamieci-nosniki#q24"
  },
  {
    "id": "mem-mr-definition",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "Podaj definicję zjawiska magnetorezystancji (MR / AMR) oraz wskaż jego fizyczną przyczynę:",
    "options": [
      "Jest to zjawisko zmiany rezystancji elektrycznej materiału pod wpływem zewnętrznego pola magnetycznego, wywołane zakrzywianiem torów elektronów przez siłę Lorentza i anizotropią rozpraszania w ferromagnetykach.",
      "Jest to proces samorzutnego powstawania pola elektrycznego w dielektryku bez obecności ładunku.",
      "Jest to zjawisko całkowitego zaniku oporu w metalach w temperaturze powyżej 100 stopni Celsjusza.",
      "Jest to zależność indukcji magnetycznej od prądu przesunięcia w próżni."
    ],
    "correctIndex": 0,
    "explanation": "Magnetorezystancja (MR) to zmiana oporu elektrycznego przewodnika lub półprzewodnika pod wpływem zewnętrznego pola magnetycznego. Klasyczna anizotropowa magnetorezystancja (AMR) wynika z działania siły Lorentza na poruszające się elektrony oraz asymetrii rozpraszania elektronów przewodnictwa na orbitalach ferromagnetyka w zależności od kąta między wektorem prądu a wektorem namagnesowania. Efekt ten w metalach wynosi zwykle od kilku promili do kilku procent.",
    "flashcardFront": "Definicja zjawiska magnetorezystancji (MR / AMR):",
    "flashcardBack": [
      "Definicja: Zmiana rezystancji elektrycznej przewodnika/ferromagnetyka pod wpływem zewnętrznego pola magnetycznego.",
      "Fizyczna przyczyna: Siła Lorentza zakrzywiająca tory elektronów oraz zależność rozpraszania od orientacji namagnesowania w ferromagnetyku.",
      "Rząd wielkości (zwykła MR): Zmiana rezystancji rzędu 1–3%."
    ],
    "tips": [
      "Magneto + rezystancja = opór zależny od pola magnetycznego.",
      "Pole magnetyczne zakrzywia tory nośników prądu przez siłę Lorentza.",
      "W klasycznej AMR zmiana oporu wynosi zaledwie 1–3%."
    ],
    "tip": "Magnetorezystancja: zmiana oporu materiału pod wpływem zewnętrznego pola magnetycznego (siła Lorentza).",
    "relatedRoute": "/teoria/pamieci-nosniki#q23"
  },
  {
    "id": "mem-gmr-physics",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "Na czym polega zjawisko Gigantycznej Magnetorezystancji (GMR — Giant Magnetoresistance)?",
    "options": [
      "Na kwantowym rozpraszaniu elektronów zależnym od ich spinu w strukturach wielowarstwowych złożonych z naprzemiennych nanowarstw ferromagnetyka i niemagnetyka (np. Fe/Cr/Fe): antyrównoległe namagnesowanie daje wysoki opór, a równoległe — niski.",
      "Na rozszerzalności cieplnej ferrytów pod wpływem prądu zmiennego o częstotliwości radiowej.",
      "Na zjawisku Halla w złączach p-n z arsenku galu.",
      "Na tłumieniu fal akustycznych w cienkich warstwach złota naniesionych na krzem."
    ],
    "correctIndex": 0,
    "explanation": "Zjawisko GMR (Nagroda Nobla 2007 dla Alberta Ferta i Petera Grünberga) występuje w strukturach złożonych z ultracienkich warstw ferromagnetycznych (np. żelazo, kobalt) przedzielonych warstwą metalu niemagnetycznego (np. chrom, miedź) o grubości rzędu 1 nm. Wynika ono z faktu, że prawdopodobieństwo rozproszenia elektronu zależy od relacji między zwrotem jego spinu a kierunkiem namagnesowania warstwy magnetycznej. Zmiana oporu w GMR osiąga kilkadziesiąt procent (20–80%).",
    "flashcardFront": "Gigantyczna Magnetorezystancja (GMR) — istota fizyczna:",
    "flashcardBack": [
      "Struktura: Nanowarstwy ferromagnetyk / niemagnetyk / ferromagnetyk (np. Fe/Cr/Fe).",
      "Zjawisko: Kwantowe rozpraszanie elektronów zależne od ich SPINU (spin-dependent scattering).",
      "Skala zjawiska: Spadek rezystancji sięgający 20–80% (kilkadziesiąt razy silniejszy niż klasyczna AMR!)."
    ],
    "tips": [
      "GMR = Giant Magnetoresistance (Nobel 2007 Fert & Grünberg).",
      "Wielowarstwowe struktury metaliczne ferromagnetyk / chrom / ferromagnetyk.",
      "Kluczowy mechanizm: rozpraszanie elektronów zależne od ich SPINU."
    ],
    "tip": "GMR: nanostruktury ferromagnetyk/niemagnetyk/ferromagnetyk, rozpraszanie zależne od spinu (efekt 20-80%).",
    "relatedRoute": "/teoria/pamieci-nosniki#q23"
  },
  {
    "id": "mem-gmr-resistance-states",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "Wskaż stany rezystancji struktury GMR w zależności od wzajemnego zwrotu namagnesowania warstw ferromagnetycznych:",
    "options": [
      "Namagnesowanie antyrównoległe (↑↓): elektrony obu spinów są silnie rozpraszane -> DUŻY OPÓR (\\(R_{max}\\)); namagnesowanie równoległe (↑↑): elektrony o zgodnym spinie przechodzą bez rozpraszania -> MAŁY OPÓR (\\(R_{min}\\)).",
      "Namagnesowanie antyrównoległe daje zerowy opór (nadprzewodnictwo), a równoległe daje przerwę w obwodzie.",
      "Rezystancja jest stała i nie zależy od zwrotu wektora namagnesowania.",
      "Namagnesowanie równoległe powoduje zablokowanie przepływu prądu przez zjawisko tunelowe."
    ],
    "correctIndex": 0,
    "explanation": "Prąd elektryczny w modelu dwuprądowym przenoszony jest przez dwa niezależne kanały: elektrony ze spinem „w górę” i „w dół”. Gdy namagnesowanie warstw jest antyrównoległe (\\(\\uparrow\\downarrow\\)), elektrony o spinie w górę rozpraszają się w drugiej warstwie, a o spinie w dół w pierwszej — oba kanały mają wysoki opór, dając rezystancję maksymalną \\(R_{max}\\). Pod wpływem zewnętrznego pola namagnesowania stają się równoległe (\\(\\uparrow\\uparrow\\)) — elektrony o spinie zgodnym z polem przechodzą przez obie warstwy niemal bez przeszkód, tworząc ścieżkę o małym oporze \\(R_{min}\\).",
    "flashcardFront": "Stany rezystancji w złączu GMR (antyrównoległe vs równoległe):",
    "flashcardBack": [
      "Namagnesowanie ANTYRÓWNOLEGŁE (\\(\\uparrow\\downarrow\\)): DUŻY OPÓR (\\(R_{max}\\)) — elektrony obu spinów napotykają silne rozpraszanie w jednej z warstw.",
      "Namagnesowanie RÓWNOLEGŁE (\\(\\uparrow\\uparrow\\)): MAŁY OPÓR (\\(R_{min}\\)) — elektrony o spinie zgodnym z namagnesowaniem płyną swobodnie bez rozpraszania.",
      "Zewnętrzne pole magnetyczne przestawia stan z \\(\\uparrow\\downarrow\\) na \\(\\uparrow\\uparrow\\), wywołując gwałtowny spadek oporu."
    ],
    "tips": [
      "Antyrównoległe namagnesowanie (przeciwne) = zator dla obu spinów = duży opór.",
      "Równoległe namagnesowanie (zgodne) = autostrada dla jednego ze spinów = mały opór.",
      "Pole magnetyczne wyrównuje spiny i zmniejsza opór."
    ],
    "tip": "GMR: namagnesowanie antyrównoległe (↑↓) = duży opór R_max; równoległe (↑↑) = mały opór R_min.",
    "relatedRoute": "/teoria/pamieci-nosniki#q23"
  },
  {
    "id": "mem-cmr-comparison",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "Czym różni się kolosalna magnetorezystancja (CMR) od gigantycznej magnetorezystancji (GMR)?",
    "options": [
      "GMR zachodzi w nanostrukturach wielowarstwowych metali (zmiana oporu do 80%), a CMR zachodzi w tlenkach manganu ze strukturą perowskitu (manganity) i wykazuje zmianę rezystancji o rzędy wielkości (tysiące procent) w silnych polach i niskich temperaturach.",
      "GMR występuje tylko w gazach szlachetnych, a CMR w przewodnikach miedzianych.",
      "CMR wymaga prądu o natężeniu tysięcy amperów, a GMR działa wyłącznie beznapięciowo.",
      "Oba zjawiska są fizycznie tożsame i oznaczają ten sam efekt w krzemie domieszkowanym borem."
    ],
    "correctIndex": 0,
    "explanation": "Kolosalna magnetorezystancja (CMR — Colossal Magnetoresistance) to zjawisko obserwowane w tlenkach metali przejściowych o strukturze perowskitu (np. manganitach \\(\\mathrm{La_{1-x}Ca_xMnO_3}\\)). Zmiana oporu w CMR jest rzędu setek i tysięcy procent (wielokrotne rzędy wielkości!), jednak wymaga bardzo silnych pól magnetycznych (rzędu kilku tesli) oraz niskich temperatur, co ogranicza jej bezpośrednie zastosowanie użytkowe w porównaniu z GMR, która doskonale działa w temperaturze pokojowej.",
    "flashcardFront": "Kolosalna (CMR) vs Gigantyczna Magnetorezystancja (GMR):",
    "flashcardBack": [
      "GMR (Gigantyczna): Wielowarstwowe nanostruktury metaliczne (Fe/Cr/Fe); zmiana oporu do 80%; działa w temperaturze pokojowej.",
      "CMR (Kolosalna): Tlenki manganu o strukturze perowskitu (manganity); zmiana oporu o rzędy wielkości (tysiące procent!).",
      "Wada CMR: Wymaga bardzo silnych pól magnetycznych i temperatur kriogenicznych."
    ],
    "tips": [
      "GMR = warstwy metaliczne (Nobel 2007), działa w temperaturze pokojowej.",
      "CMR = perowskity / manganity, efekt gigantyczny (tysiące procent), ale wymaga wielkich pól i mrożenia.",
      "Pamiętaj słowo klucz dla CMR: perowskity / tlenki manganu."
    ],
    "tip": "GMR: nanostruktury metaliczne Fe/Cr/Fe (do 80%). CMR: perowskity / manganity (tysiące procent w niskich temp.).",
    "relatedRoute": "/teoria/pamieci-nosniki#q23"
  },
  {
    "id": "mem-gmr-devices",
    "category": "pamieci",
    "categoryLabel": "Pamięci, dyski i GMR",
    "tier": "tier1",
    "question": "W jakich urządzeniach technicznych zjawisko magnetorezystancji (GMR / AMR) znajduje powszechne zastosowanie?",
    "options": [
      "W odczytowych głowicach dysków twardych (HDD), nieulotnych pamięciach magnetycznych (MRAM) oraz precyzyjnych czujnikach pola magnetycznego i prędkości obrotowej kół (np. ABS w motoryzacji).",
      "W kineskopach telewizyjnych CRT oraz pamięciach taśmowych ze zwojami ferrytowymi.",
      "W ekranach ciekłokrystalicznych i panelach fotowoltaicznych jako warstwa antyrefleksyjna.",
      "W zasilaczach impulsowych do stabilizacji napięcia zmiennego 230 V."
    ],
    "correctIndex": 0,
    "explanation": "Wprowadzenie głowic odczytowych z zaworami spinowymi GMR przez firmę IBM pod koniec lat 90. umożliwiło tysiąckrotny wzrost gęstości zapisu danych na talerzach dysków HDD. Inne kluczowe zastosowania to magnetyczne pamięci RAM (MRAM — łączące szybkość SRAM z nieulotnością pamięci flash), biosensory magnetyczne oraz precyzyjne czujniki kąta i prędkości obrotowej w układach ABS/ESP w motoryzacji.",
    "flashcardFront": "Zastosowania zjawiska magnetorezystancji (GMR / AMR):",
    "flashcardBack": [
      "Głowice odczytowe dysków HDD: Zastosowanie zaworów spinowych GMR umożliwiło rewolucyjny wzrost gęstości zapisu na talerzach.",
      "Pamięci MRAM (Magnetic RAM): Szybkie, nieulotne pamięci operacyjne o nieograniczonej liczbie cykli zapisu.",
      "Czujniki motoryzacyjne: Czujniki prędkości obrotowej kół w systemach ABS, położenia wału korbowego.",
      "Sensory prądu i biosensory magnetyczne."
    ],
    "tips": [
      "Główny sukces rynkowy GMR to głowice dysków twardych HDD.",
      "Drugie zastosowanie to magnetyczne kości pamięci MRAM.",
      "W motoryzacji czujniki magnetyczne mierzą obroty koła w ABS."
    ],
    "tip": "Zastosowanie GMR: głowice dysków twardych HDD, pamięci MRAM, czujniki pola i prędkości kół (ABS).",
    "relatedRoute": "/teoria/pamieci-nosniki#q23"
  },
  {
    "id": "math-db-rules",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "Jeżeli moc sygnału w torze telekomunikacyjnym wzrosła o +3 dB, to moc ta uległa:",
    "options": [
      "2-krotnemu wzrostowi (podwojeniu); natomiast spadek mocy 16-krotny odpowiada tłumieniu dokładnie 12 dB.",
      "3-krotnemu wzrostowi; a spadek 16-krotny odpowiada tłumieniu 16 dB.",
      "10-krotnemu wzrostowi; a spadek 16-krotny to 4 dB.",
      "Zmniejszeniu o połowę z powodu strat rozproszenia."
    ],
    "correctIndex": 0,
    "explanation": "Z definicji decybela: \\(\\Delta P [\\mathrm{dB}] = 10 \\log_{10}(P_2 / P_1)\\). Ponieważ \\(\\log_{10}(2) \\approx 0,301\\), to \\(10 \\log_{10}(2) \\approx 3\\ \\mathrm{dB}\\) (wzrost 2-krotny). Podobnie: spadek 16-krotny to \\(16 = 2^4\\), a w decybelach: \\(4 \\times 3\\ \\mathrm{dB} = 12\\ \\mathrm{dB}\\) (dokładnie \\(10 \\log_{10}(16) = 12,04\\ \\mathrm{dB}\\)). Wzrost 10-krotny to dokładnie \\(+10\\ \\mathrm{dB}\\).",
    "flashcardFront": "Reguły kciuka decybeli (dB) bez kalkulatora:",
    "flashcardBack": [
      "\\(\\+3\\ \\mathrm{dB}\\) = 2-krotny wzrost mocy (\\(\\times 2\\)).",
      "\\(\\-3\\ \\mathrm{dB}\\) = 2-krotny spadek mocy (połowa mocy, \\(\\times 0,5\\)).",
      "\\(\\+10\\ \\mathrm{dB}\\) = 10-krotny wzrost mocy (\\(\\times 10\\)).",
      "Spadek 16-krotny = \\(2^4\\) -> \\(4 \\times (-3\\ \\mathrm{dB}) = -12\\ \\mathrm{dB}\\)!"
    ],
    "tips": [
      "Zapamiętaj na całe życie: 3 dB to podwojenie mocy.",
      "16 razy mniej to (2 * 2 * 2 * 2) razy mniej.",
      "Cztery podwojenia: 4 razy 3 dB = 12 dB."
    ],
    "tip": "+3 dB = moc × 2. 16 razy mniej = -12 dB (ponieważ 16 = 2⁴, a 4 · 3 dB = 12 dB).",
    "relatedRoute": "/egzaminy/2025_Wrzesien_A"
  },
  {
    "id": "math-dbm-conversions",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "Ile w miliwatach lub watach wynoszą odpowiednio moce: 0 dBm, 16 dBm, 19 dBm oraz 30 dBm?",
    "options": [
      "\\(0\\ \\mathrm{dBm} = 1\\ \\mathrm{mW}\\), \\(16\\ \\mathrm{dBm} \\approx 40\\ \\mathrm{mW}\\), \\(19\\ \\mathrm{dBm} \\approx 80\\ \\mathrm{mW}\\), \\(30\\ \\mathrm{dBm} = 1000\\ \\mathrm{mW} = 1\\ \\mathrm{W}\\).",
      "\\(0\\ \\mathrm{dBm} = 0\\ \\mathrm{mW}\\), \\(16\\ \\mathrm{dBm} = 16\\ \\mathrm{mW}\\), \\(19\\ \\mathrm{dBm} = 19\\ \\mathrm{mW}\\), \\(30\\ \\mathrm{dBm} = 30\\ \\mathrm{W}\\).",
      "\\(0\\ \\mathrm{dBm} = 10\\ \\mathrm{mW}\\), \\(16\\ \\mathrm{dBm} = 160\\ \\mathrm{mW}\\), \\(19\\ \\mathrm{dBm} = 190\\ \\mathrm{mW}\\), \\(30\\ \\mathrm{dBm} = 300\\ \\mathrm{mW}\\).",
      "\\(0\\ \\mathrm{dBm} = -1\\ \\mathrm{mW}\\), \\(16\\ \\mathrm{dBm} = 4\\ \\mathrm{mW}\\), \\(19\\ \\mathrm{dBm} = 8\\ \\mathrm{mW}\\), \\(30\\ \\mathrm{dBm} = 3\\ \\mathrm{kW}\\)."
    ],
    "correctIndex": 0,
    "explanation": "Jednostka dBm odnosi się do poziomu 1 mW: \\(P[\\mathrm{dBm}] = 10 \\log_{10}(P[\\mathrm{mW}])\\). Zatem \\(0\\ \\mathrm{dBm} = 1\\ \\mathrm{mW}\\). Dla 40 mW: \\(40 = 10 \\times 2 \\times 2\\), czyli \\(10\\ \\mathrm{dB} + 3\\ \\mathrm{dB} + 3\\ \\mathrm{dB} = 16\\ \\mathrm{dBm}\\). Dla 80 mW: to dwukrotność 40 mW, czyli \\(16\\ \\mathrm{dBm} + 3\\ \\mathrm{dB} = 19\\ \\mathrm{dBm}\\). Dla 1 W (1000 mW): \\(10 \\log_{10}(1000) = 30\\ \\mathrm{dBm}\\).",
    "flashcardFront": "Przeliczanie mW na dBm bez kalkulatora (egzaminacyjne pewniaki):",
    "flashcardBack": [
      "\\(0\\ \\mathrm{dBm} = 1\\ \\mathrm{mW}\\)",
      "\\(10\\ \\mathrm{dBm} = 10\\ \\mathrm{mW}\\)",
      "\\(16\\ \\mathrm{dBm} \\approx 40\\ \\mathrm{mW}\\) (bo 10 mW + 3 dB + 3 dB = 40 mW)",
      "\\(19\\ \\mathrm{dBm} \\approx 80\\ \\mathrm{mW}\\) (bo 40 mW + 3 dB = 80 mW)",
      "\\(30\\ \\mathrm{dBm} = 1000\\ \\mathrm{mW} = 1\\ \\mathrm{W}\\)"
    ],
    "tips": [
      "Poziom 0 dBm to dokładnie 1 miliwat (mW).",
      "40 mW to 10 mW razy 2 razy 2, czyli 10 dBm + 3 dB + 3 dB = 16 dBm.",
      "80 mW to jeszcze jedno podwojenie (+3 dB) = 19 dBm."
    ],
    "tip": "0 dBm = 1 mW; 16 dBm ≈ 40 mW; 19 dBm ≈ 80 mW; 30 dBm = 1 W.",
    "relatedRoute": "/egzaminy/2026_L1_B"
  },
  {
    "id": "math-optical-budget-exam",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "Zadanie egzaminacyjne: Moc nadajnika wynosi 7 dBm, czułość odbiornika jest 16 razy mniejsza niż moc nadajnika. Tłumienie złącza wynosi 1 dB, a tłumienie światłowodu 0,2 dB/km. Jaki jest maksymalny zasięg łącza?",
    "options": [
      "\\(L = 55\\ \\mathrm{km}\\) (czułość odbiornika wynosi \\(-5\\ \\mathrm{dBm}\\), dostępny bilans tłumienia to 12 dB, po odliczeniu złącza zostaje 11 dB, co przy 0,2 dB/km daje 55 km).",
      "\\(L = 30\\ \\mathrm{km}\\) (czułość wynosi 0 dBm, tłumienie złącza pochłania połowę mocy).",
      "\\(L = 110\\ \\mathrm{km}\\) (obliczone przy założeniu zerowych strat na złączach).",
      "\\(L = 7\\ \\mathrm{km}\\) (zasięg ograniczony dyspersją modową w III oknie)."
    ],
    "correctIndex": 0,
    "explanation": "Krok po kroku: 1. Moc nadajnika \\(P_T = +7\\ \\mathrm{dBm}\\). 2. Czułość odbiornika jest 16 razy mniejsza: spadek 16-krotny to \\(10 \\log_{10}(16) = 12\\ \\mathrm{dB}\\). Zatem czułość wynosi \\(P_R = 7\\ \\mathrm{dBm} - 12\\ \\mathrm{dB} = -5\\ \\mathrm{dBm}\\). 3. Całkowity dostępny margines tłumienia: \\(P_T - P_R = 7 - (-5) = 12\\ \\mathrm{dB}\\). 4. Równanie budżetu: \\(12\\ \\mathrm{dB} = \\alpha \\cdot L + A_{zlacza} = 0,2 \\cdot L + 1\\ \\mathrm{dB}\\). 5. \\(0,2 \\cdot L = 11\\ \\mathrm{dB} \\implies L = 11 / 0,2 = 55\\ \\mathrm{km}\\).",
    "flashcardFront": "Zadanie z egzaminu 2025: Budżet mocy z czułością 16 razy mniejszą:",
    "flashcardBack": [
      "Dane: \\(P_T = +7\\ \\mathrm{dBm}\\), czułość 16× mniejsza, \\(A_{conn} = 1\\ \\mathrm{dB}\\), \\(\\alpha = 0,2\\ \\mathrm{dB/km}\\).",
      "Krok 1: 16 razy mniej w decybelach to \\(12\\ \\mathrm{dB}\\).",
      "Krok 2: Czułość \\(P_R = 7 - 12 = -5\\ \\mathrm{dBm}\\). Margines mocy: \\(\\Delta P = 12\\ \\mathrm{dB}\\).",
      "Krok 3: Budżet tłumienia na światłowód: \\(12\\ \\mathrm{dB} - 1\\ \\mathrm{dB} = 11\\ \\mathrm{dB}\\).",
      "Krok 4: Zasięg: \\(L = 11 / 0,2 = 55\\ \\mathrm{km}\\)!"
    ],
    "tips": [
      "16 razy mniejsza czułość oznacza odjęcie 12 dB (ponieważ 2^4 = 16).",
      "7 dBm minus 12 dB daje czułość równą -5 dBm. Margines to 12 dB.",
      "Odejmij 1 dB złącza (zostaje 11 dB) i podziel przez 0,2 dB/km -> 55 km."
    ],
    "tip": "16× mniejsza = 12 dB różnicy. (12 dB - 1 dB złącza) / 0,2 dB/km = 11 / 0,2 = 55 km.",
    "relatedRoute": "/egzaminy/2025_Wrzesien_A"
  },
  {
    "id": "math-dcf-range-calc",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "W jaki sposób wyznacza się maksymalny zasięg łącza \\(L_{SMF}\\) z budżetu mocy przy pełnej kompensacji dyspersji światłowodem DCF?",
    "options": [
      "Z warunku kompensacji \\(L_{DCF} = L_{SMF} \\frac{|D_{SMF}|}{|D_{DCF}|}\\); całkowite tłumienie wynosi \\(A_{tot} = L_{SMF} (\\alpha_{SMF} + \\alpha_{DCF} \\frac{|D_{SMF}|}{|D_{DCF}|})\\), skąd wyznacza się \\(L_{SMF} = \\frac{P_T - P_R}{\\alpha_{SMF} + \\alpha_{DCF} \\frac{|D_{SMF}|}{|D_{DCF}|}}\\).",
      "Długość DCF dodaje się wprost do zasięgu geograficznego \\(L = L_{SMF} + L_{DCF}\\).",
      "Włókno DCF nie wprowadza żadnego tłumienia mocy i nie wpływa na budżet mocy.",
      "Zasięg zależy wyłącznie od mocy lasera pomnożonej przez współczynnik dyspersji DCF."
    ],
    "correctIndex": 0,
    "explanation": "Na egzaminie (np. 2026 L1 B) należy zauważyć dwie rzeczy: 1. Kompensacja dyspersji wymaga zerowania sumarycznej dyspersji: \\(D_{SMF} L_{SMF} + D_{DCF} L_{DCF} = 0\\), skąd długość włókna kompensującego to \\(L_{DCF} = L_{SMF} \\frac{D_{SMF}}{|D_{DCF}|}\\). 2. Włókno DCF jest zwinięte w kasecie w stacji — NIE wydłuża zasięgu geograficznego łącza, ale wprowadza realne tłumienie optyczne \\(\\alpha_{DCF} L_{DCF}\\)! Całkowite tłumienie to \\(L_{SMF} (\\alpha_{SMF} + \\alpha_{DCF} \\frac{D_{SMF}}{|D_{DCF}|})\\).",
    "flashcardFront": "Kompensacja dyspersji włóknem DCF w budżecie mocy (wzory na symbolach):",
    "flashcardBack": [
      "Warunek zerowania dyspersji: \\(D_{SMF} L_{SMF} + D_{DCF} L_{DCF} = 0\\) -> \\(L_{DCF} = L_{SMF} \\frac{|D_{SMF}|}{|D_{DCF}|}\\).",
      "Ważna uwaga egzaminacyjna: Włókno DCF NIE wpływa na odległość geograficzną (rośnie tylko droga optyczna w stacji).",
      "Całkowite tłumienie: \\(A_{tot} = \\alpha_{SMF} L_{SMF} + \\alpha_{DCF} L_{DCF} = L_{SMF} \\left(\\alpha_{SMF} + \\alpha_{DCF} \\frac{|D_{SMF}|}{|D_{DCF}|}\\right)\\).",
      "Maksymalny zasięg: \\(L_{SMF} = \\frac{P_T - P_{R\\,min}}{\\alpha_{SMF} + \\alpha_{DCF} \\frac{|D_{SMF}|}{|D_{DCF}|}}\\)."
    ],
    "tips": [
      "Najpierw napisz bilans dyspersji: D_SMF * L_SMF + D_DCF * L_DCF = 0.",
      "Wyznacz L_DCF = L_SMF * (|D_SMF| / |D_DCF|).",
      "Wstaw L_DCF do wzoru na całkowite tłumienie optyczne."
    ],
    "tip": "L_DCF = L_SMF · (|D_SMF| / |D_DCF|). Zasięg L_SMF = (P_T - P_R) / (α_SMF + α_DCF · |D_SMF| / |D_DCF|).",
    "relatedRoute": "/egzaminy/2026_L1_B"
  },
  {
    "id": "math-tunable-channels-count",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "W łączu zastosowano lasery przestrajalne w zakresie od 1500 nm do 1550 nm. Kanały rozmieszczono z odstępem 25 GHz, a przepływność wynosi 100 Mb/s na kanał. Ile wynosi maksymalna liczba kanałów i całkowita przepustowość?",
    "options": [
      "Szerokość pasma to ok. 6450 GHz; liczba kanałów \\(N = \\frac{6450}{25} = 258\\) kanałów, a całkowita przepustowość wynosi \\(258 \\times 100\\ \\mathrm{Mb/s} = 25,8\\ \\mathrm{Gb/s}\\).",
      "Liczba kanałów to dokładnie 50 kanałów, a przepustowość wynosi 5 Gb/s.",
      "Liczba kanałów to 25 kanałów, a przepustowość wynosi 2,5 Gb/s.",
      "Szerokość pasma wynosi 50 GHz, co pozwala na zmieszczenie 2 kanałów o przepustowości 200 Mb/s."
    ],
    "correctIndex": 0,
    "explanation": "Przeliczenie zakresu 1500–1550 nm na częstotliwości: \\(f_1 = \\frac{c}{\\lambda_1} = \\frac{3\\cdot 10^8}{1,55\\cdot 10^{-6}} \\approx 193,55\\ \\mathrm{THz}\\), \\(f_2 = \\frac{c}{\\lambda_2} = \\frac{3\\cdot 10^8}{1,50\\cdot 10^{-6}} = 200,00\\ \\mathrm{THz}\\). Całkowite dostępne pasmo optyczne: \\(\\Delta f = 200,00 - 193,55 = 6,45\\ \\mathrm{THz} = 6450\\ \\mathrm{GHz}\\). Liczba kanałów przy rastrze 25 GHz: \\(N = 6450 / 25 = 258\\) kanałów. Całkowita przepustowość: \\(B_{tot} = 258 \\times 100\\ \\mathrm{Mb/s} = 25800\\ \\mathrm{Mb/s} = 25,8\\ \\mathrm{Gb/s}\\). (Dla rastra 12,5 GHz byłoby 516 kanałów i 51,6 Gb/s).",
    "flashcardFront": "Zadanie z laserami przestrajalnymi (zakres 1500–1550 nm):",
    "flashcardBack": [
      "Pasmo częstotliwości: \\(\\Delta f = \\frac{c}{1500\\ \\mathrm{nm}} - \\frac{c}{1550\\ \\mathrm{nm}} \\approx 200,0\\ \\mathrm{THz} - 193,55\\ \\mathrm{THz} \\approx 6450\\ \\mathrm{GHz}\\).",
      "Liczba kanałów przy rastrze 25 GHz: \\(N = 6450 / 25 = 258\\) kanałów.",
      "Liczba kanałów przy rastrze 12,5 GHz: \\(N = 6450 / 12,5 = 516\\) kanałów.",
      "Całkowita przepustowość: \\(B_{tot} = N \\cdot B_{ch}\\) (np. \\(258 \\cdot 100\\ \\mathrm{Mb/s} = 25,8\\ \\mathrm{Gb/s}\\))."
    ],
    "tips": [
      "Pamiętaj: zakres 1500–1550 nm to pasmo częstotliwości ok. 6,45 THz (czyli 6450 GHz).",
      "Podziel dostępne gigaherce przez odstęp międzykanałowy (25 GHz lub 12,5 GHz).",
      "Pomnóż liczbę kanałów przez przepływność jednego kanału."
    ],
    "tip": "Δf ≈ 6450 GHz. Liczba kanałów = 6450 / odstęp. Dla 25 GHz -> 258 kanałów, B_tot = 25,8 Gb/s.",
    "relatedRoute": "/egzaminy/2025_Z1_B"
  },
  {
    "id": "math-tunable-nonlinear-exam",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "W łączu z laserami przestrajalnymi moc każdego lasera wynosi aż 40 mW, a odstęp wynosi 25 GHz (lub 12,5 GHz). Jakie zjawisko tu DOMINUJE i jak zmiana mocy wpłynie na działanie łącza?",
    "options": [
      "Dominują szkodliwe zjawiska nieliniowe, zwłaszcza mieszanie czterofalowe (FWM); dalsze zwiększenie mocy spowoduje katastrofalny wzrost zakłóceń nieliniowych i degradację transmisji.",
      "Dominuje tłumienie liniowe; zwiększenie mocy do 1 W jest zalecane i całkowicie wyeliminuje szumy.",
      "Dominuje rozpraszanie Rayleigha; zmiana mocy lasera nie ma żadnego wpływu na jakość sygnału.",
      "Dominuje interferencja międzymodowa w rdzeniu światłowodu jednomodowego."
    ],
    "correctIndex": 0,
    "explanation": "Moc 40 mW (+16 dBm) na pojedynczy kanał to potężna moc w technice światłowodowej (standardowo stosuje się moce rzędu 0 dBm = 1 mW). Przy tak ogromnej gęstości optycznej i gęstym rastrze kanałów (25 GHz lub 12,5 GHz) dominują zjawiska nieliniowe klastra Kerra: FWM (mieszanie czterofalowe), SPM i XPM. Zwiększenie mocy nie poprawi zasięgu, lecz drastycznie pogorszy parametry łącza, ponieważ moc generowanych produktów FWM rośnie z sześcianem mocy optycznej (\\(P_{FWM} \\propto P^3\\))!",
    "flashcardFront": "Łącze z laserami przestrajalnymi 40 mW: dominujące zjawiska i wpływ mocy:",
    "flashcardBack": [
      "Dominujące zjawiska: Nieliniowości światłowodowe — Mieszanie czterofalowe (FWM), modulacja skrośna (XPM), automodulacja fazy (SPM).",
      "Ocena parametrów: Moc 40 mW (+16 dBm) to bardzo duża wartość (zwykle stosuje się 1–2 mW).",
      "Wpływ zwiększenia mocy: Katastrofalne pogorszenie jakości transmisji — produkty FWM rosną proporcjonalnie do \\(P^3\\)!",
      "Wniosek inżynierski: Należy obniżyć moc kanałów lub zastosować włókna NZDSF i nierównomierny raster kanałowy."
    ],
    "tips": [
      "Moc 40 mW na kanał w światłowodzie to olbrzymia wartość (typowo stosuje się 1 mW).",
      "Przy dużej mocy i małym odstępie częstotliwości natychmiast uaktywnia się FWM.",
      "Zwiększenie mocy tylko pogorszy sprawę, bo FWM rośnie z sześcianem mocy!"
    ],
    "tip": "Przy 40 mW i gęstej siatce dominuje FWM! Zwiększenie mocy pogarsza działanie (P_FWM ∝ P³).",
    "relatedRoute": "/egzaminy/2025_Z1_B"
  },
  {
    "id": "math-itu-20ghz-exam",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "Zadanie egzaminacyjne z wykresem ITU-R P.676: Dla częstotliwości 20 GHz oblicz długość fali \\(\\lambda\\) oraz oszacuj tłumienie fali w atmosferze na odległości d = 1 m:",
    "options": [
      "Długość fali wynosi \\(\\lambda = 1,5\\ \\mathrm{cm}\\) (\\(0,015\\ \\mathrm{m}\\)); tłumienie gazów na dystansie 1 m wynosi poniżej 0,001 dB — jest całkowicie pomijalne.",
      "Długość fali wynosi \\(\\lambda = 15\\ \\mathrm{m}\\); tłumienie wynosi 20 dB.",
      "Długość fali wynosi \\(\\lambda = 1,5\\ \\mathrm{mm}\\); tłumienie na 1 m pochłania całą moc 80 mW.",
      "Długość fali wynosi \\(\\lambda = 60\\ \\mathrm{cm}\\); strata mocy wynosi dokładnie 3 dB."
    ],
    "correctIndex": 0,
    "explanation": "1. Długość fali: \\(\\lambda = \\frac{c}{f} = \\frac{3\\cdot 10^8\\ \\mathrm{m/s}}{20\\cdot 10^9\\ \\mathrm{Hz}} = 0,015\\ \\mathrm{m} = 1,5\\ \\mathrm{cm}\\). 2. Z wykresu ITU-R P.676 tłumienie właściwe powietrza przy 20 GHz wynosi ok. \\(\\gamma \\approx 0,06 - 0,18\\ \\mathrm{dB/km}\\). 3. Na odległości \\(d = 1\\ \\mathrm{m} = 0,001\\ \\mathrm{km}\\) tłumienie wynosi: \\(A = \\gamma \\cdot 0,001 \\approx 0,0001\\ \\mathrm{dB}\\). Tłumienie w gazach atmosferycznych na dystansie 1 metra jest z fizycznego i inżynierskiego punktu widzenia całkowicie pomijalne (moc nie ulega zauważalnemu spadkowi).",
    "flashcardFront": "Zadanie z wykresem ITU-R P.676 dla 20 GHz i dystansu 1 m:",
    "flashcardBack": [
      "Długość fali: \\(\\lambda = c / f = (3\\cdot 10^8) / (20\\cdot 10^9) = 0,015\\ \\mathrm{m} = 1,5\\ \\mathrm{cm}\\).",
      "Odczyt z wykresu ITU-R P.676: Tłumienie jednostkowe gazów to ułamki dB na KILOMETR (ok. 0,1 dB/km).",
      "Tłumienie na drodze 1 m: \\(A = 0,1\\ \\mathrm{dB/km} \\times 0,001\\ \\mathrm{km} = 0,0001\\ \\mathrm{dB}\\).",
      "Wniosek inżynierski: Tłumienie atmosferyczne na dystansie 1 m jest absolutnie zaniedbywalne."
    ],
    "tips": [
      "Długość fali: 300 000 km/s podziel przez 20 GHz = 0,015 m = 1,5 cm.",
      "Wykres ITU-R podaje tłumienie na KILOMETR.",
      "Na dystansie 1 metra strata w powietrzu wynosi ułamki tysięcznych decybela — moc dociera niemal nienaruszona."
    ],
    "tip": "f = 20 GHz -> λ = c/f = 1,5 cm. Tłumienie na 1 m wynosi < 0,0002 dB (pomijalne).",
    "relatedRoute": "/egzaminy/2026_L2_A"
  },
  {
    "id": "math-fresnel-radius",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "Jak brzmi wzór na promień pierwszej strefy Fresnela oraz jaki warunek prześwitu musi być spełniony dla poprawnego działania łącza radiowego?",
    "options": [
      "\\(r_1 = \\sqrt{\\frac{\\lambda d_1 d_2}{d_1 + d_2}}\\); w obszarze bezpośredniej widoczności przynajmniej 60% promienia pierwszej strefy Fresnela musi być wolne od jakichkolwiek przeszkód terenowych.",
      "\\(r_1 = \\frac{\\lambda (d_1 + d_2)}{d_1 d_2}\\); przeszkody mogą zasłaniać do 95% strefy.",
      "\\(r_1 = 2\\pi \\\\sqrt{\\lambda \\\\cdot d}\\); strefa Fresnela dotyczy wyłącznie światłowodów wielomodowych.",
      "\\(r_1 = \\sqrt{\\lambda}\\); wystarczy widoczność optyczna wierzchołków anten bez względu na przeszkody."
    ],
    "correctIndex": 0,
    "explanation": "Promień n-tej strefy Fresnela w punkcie odległym o \\(d_1\\) od nadajnika i \\(d_2\\) od odbiornika wyraża się wzorem: \\(r_n = \\sqrt{\\frac{n \\lambda d_1 d_2}{d_1 + d_2}}\\). Dla pierwszej strefy (\\(n=1\\)) różnica dróg fali ugiętej i bezpośredniej wynosi \\(\\lambda/2\\). Aby uniknąć degradacji sygnału wskutek dyfrakcji i interferencji destruktywnej, strefa widoczności radiowej (clearance) wymaga, aby co najmniej 60% promienia pierwszej strefy Fresnela (\\(0,6 r_1\\)) było wolne od przeszkód (drzew, budynków, wzniesień terenu).",
    "flashcardFront": "Promień I strefy Fresnela i warunek prześwitu radiowego:",
    "flashcardBack": [
      "Wzór na promień: \\(r_1 = \\sqrt{\\frac{\\lambda d_1 d_2}{d_1 + d_2}}\\) (w połowie dystansu \\(r_{1\\,max} = \\frac{1}{2}\\sqrt{\\lambda D}\\)).",
      "Warunek inżynierski: Przynajmniej 60% promienia pierwszej strefy Fresnela (\\(0,6 r_1\\)) musi być wolne od przeszkód terenowych!",
      "Gdy przeszkoda wchodzi w strefę Fresnela, pojawia się silne tłumienie dyfrakcyjne mimo widoczności optycznej."
    ],
    "tips": [
      "Strefa Fresnela to elipsoida obrotowa wokół osi anten.",
      "Wzór pod pierwiastkiem: lambda * d1 * d2 / (d1 + d2).",
      "Zasada inżynierska: min. 60% promienia wolne od drzew i budynków."
    ],
    "tip": "r1 = √(λ d1 d2 / (d1 + d2)). Wymóg prześwitu: min. 60% promienia r1 wolne od przeszkód.",
    "relatedRoute": "/egzaminy/2018_Z1_B"
  },
  {
    "id": "math-chromatic-broadening",
    "category": "zadania_wzory",
    "categoryLabel": "Wzory i reguły kciuka",
    "tier": "tier1",
    "question": "Oblicz poszerzenie impulsu \\(\\Delta\\tau\\) spowodowane dyspersją chromatyczną dla linii o długości L = 50 km, lasera o szerokości widmowej \\(\\Delta\\lambda = 2\\ \\mathrm{nm}\\) i włókna o współczynniku \\(D = 17\\ \\mathrm{ps/(nm\\cdot km)}\\):",
    "options": [
      "\\(\\Delta\\tau = |D| \\cdot L \\cdot \\Delta\\lambda = 17 \\times 50 \\times 2 = 1700\\ \\mathrm{ps} = 1,7\\ \\mathrm{ns}\\).",
      "\\(\\Delta\\tau = 17 / (50 \\times 2) = 0,17\\ \\mathrm{ps}\\).",
      "\\(\\Delta\\tau = 17 \\times 50 / 2 = 425\\ \\mathrm{ps}\\).",
      "\\(\\Delta\\tau = 34\\ \\mathrm{ns}\\) na skutek odbić od płaszcza światłowodu."
    ],
    "correctIndex": 0,
    "explanation": "Poszerzenie impulsu w dyspersji chromatycznej oblicza się wprost ze wzoru: \\(\\Delta\\tau = |D| \\cdot L \\cdot \\Delta\\lambda\\). Podstawiając dane bez użycia kalkulatora: najpierw mnożymy długość przez szerokość widma: \\(50\\ \\mathrm{km} \\times 2\\ \\mathrm{nm} = 100\\ \\mathrm{km\\cdot nm}\\). Następnie mnożymy przez współczynnik dyspersji: \\(100 \\times 17\\ \\mathrm{ps/(nm\\cdot km)} = 1700\\ \\mathrm{ps} = 1,7\\ \\mathrm{ns}\\).",
    "flashcardFront": "Obliczanie poszerzenia impulsu w dyspersji chromatycznej:",
    "flashcardBack": [
      "Wzór: \\(\\Delta\\tau = |D| \\cdot L \\cdot \\Delta\\lambda\\)",
      "Jednostki: \\([\\mathrm{ps}] = [\\mathrm{ps/(nm\\cdot km)}] \\times [\\mathrm{km}] \\times [\\mathrm{nm}]\\).",
      "Przykład egzaminacyjny: \\(L = 50\\ \\mathrm{km}\\), \\(\\Delta\\lambda = 2\\ \\mathrm{nm}\\), \\(D = 17\\ \\mathrm{ps/(nm\\cdot km)}\\):",
      "Obliczenie: \\(17 \\cdot 50 \\cdot 2 = 17 \\cdot 100 = 1700\\ \\mathrm{ps} = 1,7\\ \\mathrm{ns}\\)!"
    ],
    "tips": [
      "Wzór to iloczyn trzech wielkości: D razy L razy Delta lambda.",
      "Mnożenie w pamięci: 50 razy 2 to 100.",
      "100 razy 17 to 1700 pikosekund, czyli 1,7 nanosekundy."
    ],
    "tip": "Δτ = |D| · L · Δλ. Dla D=17, L=50, Δλ=2: Δτ = 17 · 100 = 1700 ps = 1,7 ns.",
    "relatedRoute": "/egzaminy/2017_Z1_B"
  }
];
