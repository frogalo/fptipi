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
  // ==========================================
  // 1. FALE ELEKTROMAGNETYCZNE I PROPAGACJA
  // ==========================================
  {
    id: 'em-1',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Jakie jest fizyczne znaczenie IV równania Maxwella: \\(\\nabla\\cdot\\vec{B} = 0\\)?',
    options: [
      'Pole magnetyczne jest bezźródłowe — linie pola są zawsze zamknięte i w przyrodzie nie istnieją swobodne ładunki magnetyczne (monopole).',
      'Pole magnetyczne nie może ulegać zakrzywieniu w obecności przewodników prądu stałego.',
      'Wektor indukcji magnetycznej B jest zawsze równy zeru w dielektryku idealnym.',
      'Zmienne w czasie pole elektryczne nie może wywołać pola magnetycznego w próżni.'
    ],
    correctIndex: 0,
    explanation: 'Równanie Gaussa dla magnetyzmu (\\(\\nabla\\cdot\\vec{B} = 0\\)) orzeka, że dywergencja wektora indukcji magnetycznej jest tożsamościowo równa zero. Oznacza to brak ładunków magnetycznych (pojedynczych biegunów N lub S). Każdy magnes zawsze posiada parę biegunów, a linie pola magnetycznego zamykają się same na sobie.',
    flashcardFront: 'Co fizycznie oznacza IV równanie Maxwella: \\(\\nabla\\cdot\\vec{B}=0\\)?',
    flashcardBack: [
      'Pole magnetyczne jest BEZŹRÓDŁOWE (brak monopoli magnetycznych).',
      'Linie pola magnetycznego są ZAWSZE zamknięte (nie mają początku ani końca).',
      'Magnes zawsze ma biegun N i S – przecięcie magnesu tworzy dwa mniejsze magnesy dwubiegunowe.'
    ],
    tips: [
      'Zwróć uwagę na operator dywergencji (\\(\\nabla\\cdot\\)). Przypomnij sobie, jaką cechę geometryczną pola opisuje dywergencja – czy chodzi o wirowość linii, czy o ich początki i końce?',
      'Porównaj to równanie z prawem Gaussa dla elektrostatyki: \\(\\nabla\\cdot\\vec{D} = \\rho\\). Tam po prawej stronie występuje gęstość ładunku, a tutaj stoi zero.',
      'Wartość zero oznacza, że linie tego pola nie mają ani punktu startowego, ani końcowego. Zastanów się, co to mówi o kształcie tych linii oraz czy w przyrodzie zaobserwowano kiedykolwiek pojedynczy, izolowany biegun magnetyczny.'
    ],
    tip: 'Przypomnij sobie pojęcie dywergencji wektora – opisuje ona źródłowość danego pola (czy pole wypływa z punktowych ładunków).',
    relatedRoute: '/teoria/fala-propagacja#q1'
  },
  {
    id: 'em-2',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Wskaż poprawne sformułowanie I równania Maxwella (prawo Faradaya w postaci różniczkowej):',
    options: [
      '\\(\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\)',
      '\\(\\nabla\\times\\vec{B} = -\\mu_0 \\varepsilon_0 \\frac{\\partial\\vec{E}}{\\partial t}\\)',
      '\\(\\nabla\\cdot\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\)',
      '\\(\\nabla\\times\\vec{E} = +\\mu_0 \\vec{j}\\)'
    ],
    correctIndex: 0,
    explanation: 'I równanie Maxwella to uogólnione prawo indukcji Faradaya: rotacja pola elektrycznego jest równa minus pochodnej czasowej indukcji magnetycznej. Znak minus wynika z reguły Lenza (prąd/pole indukowane przeciwdziała przyczynie, która je wywołała).',
    flashcardFront: 'I równanie Maxwella (Prawo Faradaya) — postać różniczkowa i interpretacja:',
    flashcardBack: [
      'Wzór: \\(\\nabla\\times\\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t}\\)',
      'Zmienne w czasie pole magnetyczne wytwarza WIROWE pole elektryczne.',
      'Znak minus odzwierciedla regułę Lenza (przeciwdziałanie przyczynie indukcji).'
    ],
    tips: [
      'Przypomnij sobie zjawisko powstawania prądu w pętli pod wpływem zbliżania lub oddalania magnesu (prawo Faradaya). Jak to zjawisko tłumaczy teoria pola?',
      'Chodzi o pole, którego linie tworzą pętle (pole wirowe), indukowane przez zmiany innego pola w czasie. Zastanów się też nad regułą Lenza – prąd indukcyjny przeciwdziała przyczynie, która go wywołała.',
      'Szukaj relacji, która wiąże rotację wektora pola elektrycznego z pochodną czasową drugiego pola, pamiętając o odpowiednim znaku wyrażającym regułę przekory.'
    ],
    tip: 'I równanie Maxwella to prawo indukcji elektromagnetycznej Faradaya w postaci różniczkowej – opisuje powstawanie wirowego pola elektrycznego.',
    relatedRoute: '/teoria/fala-propagacja#q1'
  },
  {
    id: 'em-3',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Czym jest prąd przesunięcia wprowadzony przez Jamesa Clerka Maxwella w II równaniu?',
    options: [
      'Składnikiem \\(\\varepsilon \\frac{\\partial\\vec{E}}{\\partial t}\\) opisującym, że zmienne pole elektryczne wytwarza wirowe pole magnetyczne nawet w próżni i izolatorze.',
      'Prądem unoszenia powstającym wyłącznie wskutek zderzeń swobodnych jonów w metalach.',
      'Prądem upływu stałego płynącym przez rezystancję upływnościową dielektryka.',
      'Ruchomym ładunkiem powierzchniowym zgromadzonym na okładkach kondensatora.'
    ],
    correctIndex: 0,
    explanation: 'II równanie Maxwella brzmi \\(\\nabla\\times\\vec{B} = \\mu_0\\left(\\vec{j} + \\varepsilon_0\\frac{\\partial\\vec{E}}{\\partial t}\\right)\\). Człon \\(\\vec{j}_D = \\varepsilon_0\\frac{\\partial\\vec{E}}{\\partial t}\\) to gęstość prądu przesunięcia. To właśnie ten człon pozwolił przewidzieć istnienie samopodtrzymującej się fali elektromagnetycznej w próżni.',
    flashcardFront: 'Co to jest prąd przesunięcia Maxwella i do czego posłużył?',
    flashcardBack: [
      'Wzór: \\(\\vec{j}_D = \\varepsilon_0 \\frac{\\partial\\vec{E}}{\\partial t}\\)',
      'Występuje w dielektryku i w próżni, gdy pole elektryczne zmienia się w czasie.',
      'Działa jak prąd przewodzenia: wytwarza wirowe pole magnetyczne.',
      'Umożliwił zbilansowanie obwodu prądu przemiennego z kondensatorem i przewidzenie fal EM.'
    ],
    tips: [
      'Rozważ ładowanie kondensatora w obwodzie prądu przemiennego. Pomiędzy jego okładkami znajduje się izolator lub próżnia – dlaczego wokół przestrzeni między okładkami pojawia się pole magnetyczne?',
      'Maxwell zauważył asymetrię w równaniach: skoro zmieniające się pole magnetyczne wywołuje pole elektryczne, to symetryczna zależność powinna zachodzić również w drugą stronę.',
      'Pojęcie to nie odnosi się do fizycznego transportu cząstek obdarzonych masą, lecz do samej dynamiki zmian pola elektrycznego w czasie.'
    ],
    tip: 'Zastanów się, jak prąd może „płynąć” przez idealny izolator lub próżnię wewnątrz kondensatora, gdzie nie ma swobodnych elektronów.',
    relatedRoute: '/teoria/fala-propagacja#q1'
  },
  {
    id: 'em-4',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Wektor Poyntinga \\(\\vec{S} = \\vec{E} \\times \\vec{H}\\) określa:',
    options: [
      'Gęstość strumienia mocy fali elektromagnetycznej oraz kierunek jej propagacji, a jego jednostką jest \\(\\mathrm{W/m^2}\\).',
      'Całkowitą energię zmagazynowaną w objętości dielektryka o jednostce dżul \\(\\mathrm{[J]}\\).',
      'Siłę Lorentza działającą na ładunek punktowy poruszający się z prędkością światła.',
      'Prędkość grupową paczki falowej w falowodzie prostokątnym o jednostce \\(\\mathrm{m/s}\\).'
    ],
    correctIndex: 0,
    explanation: 'Wektor Poyntinga \\(\\vec{S}\\) to iloczyn wektorowy natężenia pola elektrycznego \\(\\vec{E}\\) [V/m] i pola magnetycznego \\(\\vec{H}\\) [A/m]. Wymiar to \\(\\mathrm{V/m \\cdot A/m = W/m^2}\\). Wskazuje kierunek przepływu energii fali EM.',
    flashcardFront: 'Wektor Poyntinga — wzór, jednostka i znaczenie fizyczne:',
    flashcardBack: [
      'Wzór: \\(\\vec{S} = \\vec{E} \\times \\vec{H}\\)',
      'Jednostka: \\(\\mathrm{W/m^2}\\) (Wat na metr kwadratowy).',
      'Znaczenie: Gęstość strumienia mocy przenoszonej przez falę EM oraz kierunek transportu energii.'
    ],
    tips: [
      'Zwróć uwagę na jednostki obu wektorów składowych w układzie SI: natężenie pola elektrycznego wyraża się w woltach na metr, a pola magnetycznego w amperach na metr.',
      'Przemnóż te jednostki: wolt pomnożony przez amper daje moc w watach. Zastanów się, jaki wymiar ma iloczyn \\([\\mathrm{V/m}] \\cdot [\\mathrm{A/m}]\\) i do czego w bilansie fali może odnosić się mianownik.',
      'Kierunek tego wektora wyznacza iloczyn wektorowy \\(\\vec{E} \\times \\vec{H}\\). Wskazuje on kierunek transportu energii przez falę poprzeczną.'
    ],
    tip: 'Przeanalizuj iloczyn wektorowy natężenia pola elektrycznego \(\vec{E}\) [V/m] i magnetycznego \(\vec{H}\) [A/m].',
    relatedRoute: '/teoria/fala-propagacja#q1'
  },
  {
    id: 'em-5',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Wskaż warunek kąta Brewstera (\\(\\theta_B\\)) i stan polaryzacji fali odbitej:',
    options: [
      '\\(\\tan\\theta_B = \\frac{n_2}{n_1}\\); promień odbity jest całkowicie spolaryzowany liniowo prostopadle do płaszczyzny padania.',
      '\\(\\sin\\theta_B = \\frac{n_1}{n_2}\\); promień załamany jest całkowicie spolaryzowany kołowo.',
      '\\(\\cos\\theta_B = n_1 \\cdot n_2\\); w dielektryku zanika składowa elektryczna fali.',
      '\\(\\tan\\theta_B = \\frac{n_1}{n_2}\\); brak promienia załamanego wskutek całkowitego wewnętrznego odbicia.'
    ],
    correctIndex: 0,
    explanation: 'Dla kąta Brewstera zachodzi \\(\\tan\\theta_B = n_2/n_1\\). Promień odbity i załamany tworzą kąt prosty (90°). Wtedy fala spolaryzowana równolegle (p) wnika całkowicie w drugi ośrodek bez odbicia, więc promień odbity składa się wyłącznie z polaryzacji prostopadłej (s) — jest w 100% spolaryzowany liniowo.',
    flashcardFront: 'Kąt Brewstera — wzór i efekt polaryzacji:',
    flashcardBack: [
      'Wzór: \\(\\tan\\theta_B = \\frac{n_2}{n_1}\\)',
      'Kąt między promieniem odbitym a załamanym wynosi dokładnie 90°.',
      'Promień odbity jest w 100% spolaryzowany liniowo (zanika składowa równoległa).',
      'Zastosowanie: lasery, filtry polaryzacyjne, okulary polaryzacyjne.'
    ],
    tips: [
      'Zjawisko to dotyczy światła padającego na granicę dwóch ośrodków przezroczystych pod specyficznym kątem, przy którym zachodzi selekcja składowych drgań fali.',
      'Kluczową rolę odgrywa tu wzajemne geometryczne ułożenie promienia odbitego i załamanego w punkcie padania – tworzą one wówczas kąt prosty (90°).',
      'Zastanów się, jaka funkcja trygonometryczna opisuje stosunek \\(n_2 / n_1\\) przy tym kącie i która składowa wektora pola elektrycznego (równoległa czy prostopadła do płaszczyzny padania) ulega wtedy całkowitemu załamaniu do drugiego ośrodka bez odbicia.'
    ],
    tip: 'Kąt Brewstera dotyczy zjawiska polaryzacji przez odbicie na granicy dwóch dielektryków.',
    relatedRoute: '/teoria/fala-propagacja#q3'
  },
  {
    id: 'em-6',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Dlaczego w inżynierii radiowej do wyznaczania horyzontu radiowego stosuje się zastępczy promień Ziemi \\(R_z\' = \\frac{4}{3} R_z\\)?',
    options: [
      'Ze względu na zjawisko standardowej refrakcji w troposferze — spadek gęstości powietrza z wysokością powoduje uginanie toru fal radiowych w stronę Ziemi.',
      'Z powodu eliptycznego kształtu globu ziemskiego na szerokościach geograficznych Europy.',
      'Wynika to z obecności warstwy ozonowej, która przyspiesza falę o czynnik 1,33.',
      'Ze względu na spadek przenikalności magnetycznej w wyższych partiach atmosfery.'
    ],
    correctIndex: 0,
    explanation: 'W standardowej troposferze gęstość i współczynnik załamania powietrza maleją wraz z wysokością. W efekcie fala radiowa biegnąca w pobliżu powierzchni Ziemi ulega ciągłemu ugięciu w stronę gruntu. Matematycznie modeluje się to prostoliniowym biegiem fal przy powiększeniu promienia Ziemi o współczynnik k = 4/3.',
    flashcardFront: 'Dlaczego horyzont radiowy jest większy od optycznego (model 4/3 R_Z)?',
    flashcardBack: [
      'W standardowej troposferze współczynnik załamania n maleje wraz z wysokością.',
      'Promień radiowy ulega refrakcji (ugina się łukiem ku powierzchni Ziemi).',
      'Fale „zaglądają” nieco za geometryczny horyzont optyczny.',
      'Matematyczny model zastępczy: powiększenie promienia Ziemi do \\(R_z\' = \\frac{4}{3} R_z \\approx 8500\\ \\mathrm{km}\\).'
    ],
    tips: [
      'Pomyśl o strukturze pionowej dolnej warstwy atmosfery ziemskiej (troposfery). Co dzieje się z gęstością i temperaturą powietrza wraz ze wzrostem wysokości nad poziomem morza?',
      'Zgodnie z prawem Snelliusa, gdy fala przechodzi przez warstwy o ciągle zmieniającym się współczynniku załamania, jej trajektoria nie jest idealną linią prostą.',
      'Spadek współczynnika załamania powietrza z wysokością powoduje uginanie toru fali w stronę gęstszego ośrodka (ku powierzchni planety), co pozwala jej „sięgać” nieco dalej, niż wynikałoby z prostej geometrii kuli.'
    ],
    tip: 'Zastanów się nad właściwościami atmosfery ziemskiej: gęstość i ciśnienie powietrza maleją wraz ze wzrostem wysokości.',
    relatedRoute: '/teoria/fala-propagacja#q6'
  },
  {
    id: 'em-7',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier2',
    question: 'Który mechanizm odpowiada za dalekosiężną łączność radiową na falach krótkich (HF) na dystanse tysięcy kilometrów?',
    options: [
      'Wielokrotne odbicia fali przestrzennej od zjonizowanych warstw jonosfery (F1, F2) i powierzchni Ziemi.',
      'Propagacja fali powierzchniowej wzdłuż warstwy dielektrycznej gleby bez tłumienia.',
      'Zjawisko całkowitego wewnętrznego odbicia w troposferycznym kanale falowodowym.',
      'Przenikanie fal przez rdzeń płynny Ziemi na drugą półkulę.'
    ],
    correctIndex: 0,
    explanation: 'Fale krótkie (3–30 MHz) ulegają załamaniu i odbiciu w jonosferze (zwłaszcza w warstwie F o największej gęstości elektronowej). Odbita fala wraca na Ziemię, odbija się od gruntu i może wielokrotnie okrążać glob.',
    flashcardFront: 'Mechanizm dalekosiężnej propagacji fal krótkich (HF):',
    flashcardBack: [
      'Fale jonosferyczne odbijają się od warstw jonosfery (głównie warstwa F) i od powierzchni Ziemi.',
      'Jonizacja gazów wywołana jest promieniowaniem UV i rentgenowskim Słońca.',
      'W nocy zanikają warstwy D i E (mniejsze tłumienie, lepszy zasięg HF).',
      'Obszar pomiędzy strefą fali przyziemnej a powrotem fali jonosferycznej to tzw. strefa martwa (strefa ciszy).'
    ],
    tips: [
      'Zastanów się, dlaczego fale w pasmach ultrakrótkich (np. UKF/VHF) docierają tylko do linii horyzontu, podczas gdy fale krótkie (HF) potrafią dotrzeć na drugi kontynent.',
      'Ziemia jest otoczona na wysokości kilkuset kilometrów warstwą zjonizowanego gazu (plazmy), powstałą pod wpływem promieniowania słonecznego.',
      'Fale o odpowiednio dobranej częstotliwości ulegają załamaniu i zawróceniu w tej naładowanej warstwie atmosfery ku powierzchni globu, mogąc wielokrotnie powtarzać ten cykl (tzw. skoki).'
    ],
    tip: 'Fale krótkie (pasmo HF: 3–30 MHz) potrafią okrążać Ziemię pomimo krzywizny globu.',
    relatedRoute: '/teoria/fala-propagacja#q4'
  },
  {
    id: 'em-8',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Jak brzmią warunki brzegowe składowych pola elektromagnetycznego na granicy dwóch idealnych dielektryków (bez ładunków swobodnych)?',
    options: [
      'Składowe styczne \\(E_t\\) i \\(H_t\\) są ciągłe, a składowe normalne \\(D_n\\) i \\(B_n\\) są ciągłe.',
      'Wszystkie składowe pola elektrycznego muszą spaść skokowo do zera.',
      'Składowe normalne \\(E_n\\) są ciągłe, natomiast składowe styczne \\(E_t\\) rosną proporcjonalnie do współczynnika załamania.',
      'Indukcja magnetyczna \\(B\\) przyjmuje wartość nieskończoną na granicy podziału.'
    ],
    correctIndex: 0,
    explanation: 'Na granicy dwóch dielektryków bez swobodnych ładunków i prądów: składowe styczne natężenia pola elektrycznego \\(E_{1t} = E_{2t}\\) oraz pola magnetycznego \\(H_{1t} = H_{2t}\\) są ciągłe. Składowe normalne indukcji \\(D_{1n} = D_{2n}\\) oraz \\(B_{1n} = B_{2n}\\) również są ciągłe.',
    flashcardFront: 'Warunki brzegowe pola EM na granicy dwóch dielektryków:',
    flashcardBack: [
      'Składowe STYCZNE natężeń są ciągłe: \\(E_{1t} = E_{2t}\\), \\(H_{1t} = H_{2t}\\)',
      'Składowe NORMALNE indukcji są ciągłe: \\(D_{1n} = D_{2n}\\), \\(B_{1n} = B_{2n}\\)',
      'Z tego wynika prawo załamania Snella: \\(n_1 \\sin\\alpha = n_2 \\sin\\beta\\).'
    ],
    tips: [
      'Warunki brzegowe wynikają z zastosowania twierdzenia Stokesa do małego prostokąta oraz twierdzenia Gaussa do małego walca na granicy rozdziału dwóch ciał.',
      'Zastanów się, które wektory wiążą się z całkowaniem wzdłuż pętli (składowe wzdłuż powierzchni, czyli styczne), a które z całkowaniem po powierzchni zamkniętej (składowe prostopadłe do powierzchni, czyli normalne).',
      'Dla idealnego dielektryka nie ma swobodnych prądów powierzchniowych ani ładunków powierzchniowych, co oznacza brak skoku wartości odpowiednich wielkości po obu stronach granicy.'
    ],
    tip: 'Warunki brzegowe wynikają bezpośrednio z całkowania równań Maxwella na nieskończenie cienkiej powierzchni granicznej.',
    relatedRoute: '/teoria/swiatlowody#q7'
  },

  // ==========================================
  // 2. ŚWIATŁOWODY I TRANSMISJA OPTYCZNA
  // ==========================================
  {
    id: 'opt-1',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Kiedy we włóknie światłowodowym o profilu skokowym prowadzony jest tylko jeden mod (światłowód jednomodowy SMF)?',
    options: [
      'Gdy znormalizowana częstotliwość falowodowa spełnia warunek: \\(V \\le 2{,}405\\).',
      'Gdy współczynnik załamania rdzenia jest mniejszy od współczynnika załamania płaszcza: \\(n_1 < n_2\\).',
      'Gdy średnica rdzenia wynosi dokładnie 50 lub 62,5 mikrometra.',
      'Gdy długość fali lasera jest mniejsza od tzw. długości odcięcia: \\(\\lambda < \\lambda_c\\).'
    ],
    correctIndex: 0,
    explanation: 'Liczba 2,405 to pierwsze zero funkcji Bessela rzędu zerowego \\(J_0(x)\\). Jeśli parametr \\(V = \\frac{2\\pi a}{\\lambda}\\sqrt{n_1^2 - n_2^2} \\le 2{,}405\\), to w falowodzie może propagować się wyłącznie podstawowy mod \\(HE_{11}\\) (światłowód jednomodowy).',
    flashcardFront: 'Warunek jednomodowości światłowodu (parametr V):',
    flashcardBack: [
      'Wzór na parametr V: \\(V = \\frac{2\\pi a}{\\lambda}\\sqrt{n_1^2 - n_2^2} = \\frac{2\\pi a}{\\lambda} \\cdot NA\\)',
      'Warunek jednomodowości: \\(V \\le 2{,}405\\)',
      'Dla \\(V > 2{,}405\\) wzbudzają się mody wyższych rzędów (światłowód staje się wielomodowy).',
      'Włókno jednomodowe SMF ma typowo średnicę rdzenia ok. 9 µm.'
    ],
    tips: [
      'Zastanów się, od jakich parametrów falowodu zależy liczba możliwych do prowadzenia rozkładów pola (tzw. modów): średnica rdzenia, długość fali i współczynniki załamania.',
      'W teorii światłowodów wielkości te łączy się w jeden bezwymiarowy parametr falowodowy (częstotliwość znormalizowaną), oznaczany tradycyjnie literą \\(V\\).',
      'Dla modu podstawowego istnieje granica matematyczna (związana z pierwszym pierwiastkiem funkcji Bessela), poniżej której żaden wyższy mod nie ma prawa bytu w rdzeniu.'
    ],
    tip: 'Zastanów się, jaki bezwymiarowy parametr falowodowy (częstotliwość znormalizowana V) decyduje o liczbie prowadzonych modów.',
    relatedRoute: '/teoria/swiatlowody#q8'
  },
  {
    id: 'opt-2',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Apertura numeryczna (NA) światłowodu wyraża się wzorem i określa:',
    options: [
      '\\(NA = \\sqrt{n_1^2 - n_2^2} = \\sin\\theta_{max}\\); określa zdolność światłowodu do zbierania światła (maksymalny kąt wprowadzenia wiązki).',
      '\\(NA = \\frac{n_1 - n_2}{n_1}\\); określa współczynnik tłumienia falowodowego na 1 km.',
      '\\(NA = n_1 + n_2\\); określa maksymalną prędkość fazową fali optycznej.',
      '\\(NA = \\sqrt{n_1 \\cdot n_2}\\); określa częstotliwość rezonansową siatki Bragga.'
    ],
    correctIndex: 0,
    explanation: 'Apertura numeryczna \\(NA = \\sqrt{n_1^2 - n_2^2} = n_0 \\sin\\theta_{max}\\) (dla powietrza \\(n_0=1\\)). Jest miarą rozwarcia stożka akceptacji światła — promienie wpadające pod kątem większym niż \\(\\theta_{max}\\) nie doznają całkowitego wewnętrznego odbicia i uciekają do płaszcza.',
    flashcardFront: 'Apertura numeryczna (NA) — wzór i znaczenie:',
    flashcardBack: [
      'Wzór: \\(NA = \\sqrt{n_1^2 - n_2^2} = \\sin\\theta_{max}\\)',
      '\\(n_1\\) — współczynnik rdzenia, \\(n_2\\) — współczynnik płaszcza (zawsze \\(n_1 > n_2\\)).',
      'Miarą zdolności do wprowadzania światła do rdzenia z powietrza.',
      'Im większa NA, tym łatwiej wprowadzić światło ze źródła (szerszy stożek akceptacji).'
    ],
    tips: [
      'Pomyśl o zjawisku całkowitego wewnętrznego odbicia – światło musi wpaść do rdzenia pod odpowiednim kątem, aby po odbiciu od granicy z płaszczem nie uciekło na zewnątrz.',
      'Wielkość ta określa „stożek akceptacji” światłowodu, a z trygonometrii wiąże się z sinusem maksymalnego kąta wlotowego promienia w powietrzu.',
      'Zastanów się, jak ten warunek geometryczny zależy od kontrastu optycznego pomiędzy materiałem rdzenia a materiałem płaszcza.'
    ],
    tip: 'Apertura numeryczna opisuje stożek akceptacji światła wprowadzanego do rdzenia światłowodu.',
    relatedRoute: '/teoria/swiatlowody#q7'
  },
  {
    id: 'opt-3',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Jaka dyspersja jest CAŁKOWICIE nieobecna w światłowodzie jednomodowym (SMF)?',
    options: [
      'Dyspersja modowa (międzymodowa).',
      'Dyspersja materiałowa.',
      'Dyspersja falowodowa.',
      'Dyspersja polaryzacyjna (PMD).'
    ],
    correctIndex: 0,
    explanation: 'Dyspersja modowa wynika z różnicy dróg optycznych i prędkości grupowych pomiędzy różnymi modami prowadzonymi we włóknie wielomodowym (MMF). W światłowodzie jednomodowym prowadzony jest wyłącznie jeden mod podstawowy, więc dyspersja modowa nie występuje w ogóle.',
    flashcardFront: 'Która dyspersja NIE występuje we włóknie jednomodowym?',
    flashcardBack: [
      'Brak dyspersji MODOWEJ (międzymodowej) — bo jest tylko jeden mod!',
      'We włóknie SMF występuje natomiast dyspersja CHROMATYCZNA (materiałowa + falowodowa).',
      'Występuje też dyspersja polaryzacyjna (PMD) z powodu nieidealnej kołowości rdzenia.',
      'Dzięki brakowi dyspersji modowej włókna SMF osiągają gigantyczne zasięgi i pasma (Tb/s na setki km).'
    ],
    tips: [
      'Dyspersja ogólnie oznacza rozmycie impulsu świetlnego w czasie w miarę pokonywania drogi wzdłuż włókna.',
      'Zastanów się, jakie są przyczyny rozmycia: zależność prędkości od długości fali (materiałowa), struktura geometryczna falowodu (falowodowa) oraz podróżowanie światła wieloma różnymi ścieżkami.',
      'Pomyśl o samej nazwie światłowodu: skoro we włóknie istnieje wyłącznie jedna dopuszczalna ścieżka propagacji rozkładu pola, to który rodzaj rozmycia nie ma tam fizycznej racji bytu?'
    ],
    tip: 'Pomyśl o definicji światłowodu jednomodowego (SMF) – w jego rdzeniu rozchodzi się tylko jeden mod falowy.',
    relatedRoute: '/teoria/swiatlowody#q10'
  },
  {
    id: 'opt-4',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Dlaczego III okno telekomunikacyjne (1550 nm) jest preferowane do łączy dalekosiężnych?',
    options: [
      'Występuje tam globalne minimum tłumienności krzemionki (ok. 0,2 dB/km) oraz dostępne są optyczne wzmacniacze domieszkowane erbem (EDFA).',
      'W tym oknie dyspersja chromatyczna standardowego włókna SMF wynosi dokładnie 0 ps/(nm·km).',
      'Rozpraszanie Rayleigha osiąga w tym zakresie swoje lokalne maksimum, wzmacniając sygnał.',
      'Promieniowanie 1550 nm jest całkowicie niewrażliwe na jakiekolwiek zgięcia kabla światłowodowego.'
    ],
    correctIndex: 0,
    explanation: 'W oknie 1550 nm (pasmo C) tłumienie krzemionki \\(\\mathrm{SiO_2}\\) osiąga absolutne minimum \\(\\approx 0{,}18 - 0{,}2\\ \\mathrm{dB/km}\\). Ponadto w tym paśmie idealnie pracują optyczne wzmacniacze EDFA. (Uwaga: zerowa dyspersja standardowego włókna SMF-28 wypada w II oknie przy 1310 nm, a nie przy 1550 nm).',
    flashcardFront: 'Cechy III okna telekomunikacyjnego (\\(\\lambda = 1550\\ \\mathrm{nm}\\)):',
    flashcardBack: [
      'Najmniejsze tłumienie liniowe włókna krzemionkowego: \\(\\alpha \\approx 0{,}2\\ \\mathrm{dB/km}\\).',
      'Idealne pasmo pracy wzmacniaczy optycznych EDFA (1530–1565 nm).',
      'Standardowe włókno SMF ma tu dodatnią dyspersję chromatyczną (\\(D \\approx +17\\ \\mathrm{ps/(nm\\cdot km)}\\)), co wymaga kompensacji na długich trasach.',
      'Znakomite do systemów dalekosiężnych WDM/DWDM.'
    ],
    tips: [
      'W telekomunikacji światłowodowej dalekiego zasięgu kluczowym problemem jest konieczność regeneracji sygnału – im rzadziej trzeba stawiać wzmacniacze, tym łącze jest tańsze i pewniejsze.',
      'Przeanalizuj krzywą strat czystego szkła krzemionkowego (\\(\\mathrm{SiO_2}\\)) w funkcji długości fali w zakresie podczerwieni.',
      'Przy 1310 nm minimalizuje się dyspersja chromatyczna, natomiast przy 1550 nm szkło krzemionkowe osiąga swoje absolutne minimum strat energii na jednostkę długości.'
    ],
    tip: 'W telekomunikacji światłowodowej dalekiego zasięgu kluczowym parametrem jest minimalizacja strat mocy sygnału na kilometr.',
    relatedRoute: '/teoria/swiatlowody#q9'
  },
  {
    id: 'opt-5',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Na czym polega kompensacja dyspersji chromatycznej za pomocą włókna DCF (Dispersion Compensating Fiber)?',
    options: [
      'Dołącza się odcinek włókna DCF o silnie ujemnym współczynniku dyspersji (np. -80 do -100 ps/(nm·km)), tak aby suma iloczynów \\(L_{SMF} D_{SMF} + L_{DCF} D_{DCF} = 0\\).',
      'Włókno DCF podgrzewa impulsy laserowe, co przyspiesza składowe widmowe o dłuższej fali.',
      'Włókno DCF całkowicie pochłania skrajne częstotliwości widma impulsu, zmniejszając szerokość pasma.',
      'Zmienia się kierunek polaryzacji światła o 90 stopni co każdy kilometr linii.'
    ],
    correctIndex: 0,
    explanation: 'Standardowe włókno jednomodowe ma przy 1550 nm dyspersję \\(D_{SMF} \\approx +17\\ \\mathrm{ps/(nm\\cdot km)}\\) (czerwone składowe biegną szybciej niż niebieskie). Włókno DCF ma specjalnie zmodyfikowany profil z silnie ujemną dyspersją falowodową (\\(D_{DCF} \\approx -80\\ \\mathrm{ps/(nm\\cdot km)}\\)). Dobierając długość tak, by \\(D_1 L_1 + D_2 L_2 = 0\\), impuls odzyskuje pierwotną szerokość czasową.',
    flashcardFront: 'Warunek kompensacji dyspersji chromatycznej włóknem DCF:',
    flashcardBack: [
      'Równanie kompensacji: \\(L_{SMF} \\cdot D_{SMF} + L_{DCF} \\cdot D_{DCF} = 0\\)',
      'Wzór na długość włókna DCF: \\(L_{DCF} = -L_{SMF} \\frac{D_{SMF}}{D_{DCF}}\\)',
      'Włókno DCF ma dużą UJEMNĄ dyspersję (np. \\(-80\\ \\mathrm{ps/(nm\\cdot km)}\\)).',
      'Wada DCF: mały rdzeń i wyższa tłumienność (ok. \\(0{,}5\\ \\mathrm{dB/km}\\)), co obciąża budżet mocy.'
    ],
    tips: [
      'Podczas propagacji w standardowym włóknie jednomodowym poszczególne składowe widmowe impulsu poruszają się z nieco różnymi prędkościami, co powoduje „rozciąganie” bitów w czasie.',
      'Współczynnik dyspersji chromatycznej standardowego włókna (SMF-28) w oknie 1550 nm ma określoną wartość dodatnią (ok. +17 ps/(nm·km)).',
      'Aby przywrócić pierwotny kształt impulsu na końcu toru, trzeba przepuścić go przez odcinek ośrodka, który wprowadzi dokładnie przeciwny efekt opóźnienia składowych.'
    ],
    tip: 'Zastanów się, jak skompensować poszerzenie impulsu spowodowane dodatnią dyspersją chromatyczną standardowego włókna SMF-28.',
    relatedRoute: '/teoria/swiatlowody#q11'
  },
  {
    id: 'opt-6',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'W równaniu budżetu mocy łącza optycznego: \\(P_R = P_T - \\alpha L - \\sum A_z - \\sum A_s - M\\), czym jest składnik \\(M\\)?',
    options: [
      'Marginesem bezpieczeństwa (typowo 3–6 dB) uwzględniającym starzenie się komponentów, dryft temperatury i przyszłe naprawy (spawy remontowe).',
      'Maksymalną mocą nieliniową Brillouina, powyżej której sygnał ulega rozproszeniu wstecznemu.',
      'Liczbą modów prowadzonych przez złącza optyczne na trasie transmisji.',
      'Współczynnikiem modulacji fazowej w nadajniku laserowym.'
    ],
    correctIndex: 0,
    explanation: 'Margines systemowy \\(M\\) (System Margin) projektuje się na poziomie od 3 do 6 dB. Gwarantuje on bezawaryjną pracę łącza przez planowany okres eksploatacji (np. 15–25 lat), kiedy laser traci sprawność (starzenie), rosną straty na złączach i pojawiają się dodatkowe spawy po awariach kabla.',
    flashcardFront: 'Budżet mocy (Power Budget) — znaczenie marginesu bezpieczeństwa M:',
    flashcardBack: [
      'Wzór: \\(P_R = P_T - \\alpha L - N_z A_z - N_s A_s - M\\)',
      '\\(M\\) — Margines systemowy (zazwyczaj 3 do 6 dB).',
      'Zabezpiecza przed starzeniem lasera (spadek mocy), wahaniami temperatury oraz naprawami kabla (nowe spawy po zerwaniach).',
      'Warunek poprawności łącza: moc na odbiorniku \\(P_R\\) musi być \\(\\ge\\) czułości odbiornika \\(P_{R,min}\\).'
    ],
    tips: [
      'Budżet mocy to rachunek zysków i strat mocy optycznej w torze transmisyjnym – pozwala inżynierowi ocenić, czy sygnał na drugim końcu włókna będzie czytelny.',
      'Zastanów się, co dzieje się z mocą wyemitowaną przez nadajnik w miarę pokonywania kolejnych kilometrów kabla, złączy rozłączalnych i spawów stałych.',
      'Równanie to wyznacza poziom mocy, jaki dociera na element odbiorczy (fotodiodę) po odliczeniu wszystkich tłumień i rezerwy eksploatacyjnej.'
    ],
    tip: 'Budżet mocy (Power Budget) to bilans strat mocy optycznej od nadajnika (Tx) do odbiornika (Rx).',
    relatedRoute: '/teoria/swiatlowody#q12'
  },
  {
    id: 'opt-7',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier2',
    question: 'Dlaczego światłowód o profilu gradientowym (Graded-Index) ma znacznie mniejszą dyspersję modową niż światłowód o profilu skokowym (Step-Index)?',
    options: [
      'Promienie biegnące dłuższym torem krzywoliniowym w strefach zewnętrznych poruszają się szybciej, ponieważ współczynnik załamania płynnie maleje w stronę płaszcza.',
      'Światło w profilu gradientowym porusza się wyłącznie po linii prostej wzdłuż osi rdzenia.',
      'Gradient domieszkowania całkowicie eliminuje odbicia promieni od granicy rdzeń-płaszcz.',
      'W profilu gradientowym elektrony przewodnictwa ekranują fale o wyższych częstotliwościach.'
    ],
    correctIndex: 0,
    explanation: 'W profilu gradientowym współczynnik załamania maleje z odległością od osi: \\(v(r) = c/n(r)\\). Mody wyższych rzędów wędrują dalej od osi (dłuższa droga geometryczna), ale przebywają tam w ośrodku o mniejszym współczynniku \\(n\\), więc poruszają się szybciej. W efekcie wszystkie mody docierają na koniec włókna niemal w tym samym czasie.',
    flashcardFront: 'Zasada redukcji dyspersji modowej w światłowodzie gradientowym:',
    flashcardBack: [
      'Współczynnik załamania \\(n(r)\\) maleje parabolicznie od osi ku płaszczowi.',
      'Prędkość fali wynosi \\(v = c/n\\) — na zewnątrz rdzenia światło porusza się SZYBCIEJ.',
      'Promienie o dłuższej drodze (mody wyższe) nadrabiają czas większą prędkością!',
      'Dyspersja modowa spada nawet 100-krotnie w porównaniu ze światłowodem skokowym.'
    ],
    tips: [
      'W światłowodzie wielomodowym o profilu skokowym promienie biegnące po trajektoriach skośnych mają dłuższą drogę do przebycia niż promień osiowy, co prowadzi do rozmycia czasowego.',
      'W profilu gradientowym współczynnik załamania światła nie jest stały, lecz płynnie maleje w miarę oddalania się od środka rdzenia w stronę płaszcza.',
      'Przypomnij sobie wzór na prędkość fazową światła w ośrodku: \\(v = c / n\\). W którym obszarze rdzenia światło porusza się szybciej i jak to wpływa na czas przelotu promieni o dłuższych trajektoriach?'
    ],
    tip: 'W profilu gradientowym (Graded-Index) współczynnik załamania płynnie maleje od osi rdzenia ku płaszczowi.',
    relatedRoute: '/teoria/swiatlowody#q8'
  },

  // ==========================================
  // 3. MODULACJA, JAKOŚĆ SYGNAŁU I MULTIPLEKSACJA
  // ==========================================
  {
    id: 'mod-1',
    category: 'modulacja',
    categoryLabel: 'Modulacja i multipleksacja',
    tier: 'tier1',
    question: 'Co na wykresie oka (Eye Diagram) reprezentuje pionowe rozwarcie oka (Eye Height)?',
    options: [
      'Margines odporności na szum (Noise Margin) — im większe rozwarcie pionowe, tym mniejsze prawdopodobieństwo błędnej decyzji detektora.',
      'Maksymalny jitter fazowy zegara taktującego w odbiorniku.',
      'Szybkość narastania zboczy impulsów wynikającą z pasma wzmacniacza.',
      'Całkowitą liczbę bitów przesłanych w kanale telekomunikacyjnym.'
    ],
    correctIndex: 0,
    explanation: 'Wysokość rozwarcia oka (Eye Height) odzwierciedla margines szumu: różnicę między poziomem sygnału dla jedynki logicznej a progiem decyzyjnym. Szerokość oka (Eye Width) odzwierciedla odporność na fluktuacje fazowe (jitter), a nachylenie zboczy określa wrażliwość na błędy synchronizacji czasowej.',
    flashcardFront: 'Parametry wykresu oka (Eye Diagram) i ich interpretacja:',
    flashcardBack: [
      'PIONOWE rozwarcie oka: Margines odporności na szum (Noise Margin).',
      'POZIOME rozwarcie oka: Margines odporności na jitter czasowy (timing jitter).',
      'Grubość linii na górze/dole: Szum amplitudy i dyspersja.',
      'Zamknięte oko: Brak możliwości bezbłędnego odczytu bitów (wysoki BER).'
    ],
    tips: [
      'Wykres oka to obraz powstający na ekranie oscyloskopu poprzez nakładanie na siebie wielu kolejnych przebiegów bitowych sygnału cyfrowego.',
      'Na osi pionowej oscyloskop mierzy napięcie (lub natężenie sygnału), a na osi poziomej upływ czasu.',
      'Rozważ pionowy wymiar „otwarcia” wewnętrznego obszaru oka w punkcie optymalnej decyzji próbkującej: o czym informuje odległość między poziomem jedynki a zera w obecności zakłóceń?'
    ],
    tip: 'Wykres oka powstaje z nałożenia na siebie kolejnych przebiegów bitowych na ekranie oscyloskopu.',
    relatedRoute: '/teoria/modulacja#q13'
  },
  {
    id: 'mod-2',
    category: 'modulacja',
    categoryLabel: 'Modulacja i multipleksacja',
    tier: 'tier1',
    question: 'Czym jest zjawisko mieszania czterofalowego (FWM - Four-Wave Mixing) w systemach DWDM?',
    options: [
      'Nieliniowym zjawiskiem trzeciego rzędu (\\(\\chi^{(3)}\\)), w którym oddziaływanie trzech fal o częstotliwościach \\(f_i, f_j, f_k\\) generuje nową pasożytniczą falę \\(f_{ijk} = f_i + f_j - f_k\\).',
      'Czwórkowym kodowaniem bitów eliminującym zjawisko dyspersji polaryzacyjnej.',
      'Odbiciem fali świetlnej od czterech kolejnych złącz mechanicznych w kasecie spawów.',
      'Liniowym tłumieniem sygnału optycznego spowodowanym obecnością jonów hydroksylowych OH-.'
    ],
    correctIndex: 0,
    explanation: 'Mieszanie czterofalowe (FWM) to zjawisko nieliniowe zachodzące przy dużych gęstościach mocy optycznej w światłowodzie. Fale o różnych częstotliwościach interferują i modulują współczynnik załamania szkła (efekt Kerra), tworząc siatki refrakcyjne generujące nowe częstotliwości pasożytnicze, które zakłócają sąsiednie kanały DWDM.',
    flashcardFront: 'Zjawisko mieszania czterofalowego (FWM) w łączach DWDM:',
    flashcardBack: [
      'Zjawisko nieliniowe trzeciego rzędu (zależne od mocy i nieliniowej podatności szkła).',
      'Generacja fal pasożytniczych wg reguły: \\(f_{ijk} = f_i + f_j - f_k\\).',
      'Liczba fal pasożytniczych dla \\(N\\) kanałów: \\(N_{FWM} = \\frac{N^2(N - 1)}{2}\\).',
      'Najsilniej występuje przy RÓWNYCH odstępach kanałów i ZEROWEJ dyspersji chromatycznej.',
      'Sposób walki: włókna NZDSF (z niezerową dyspersją) i nierównomierne odstępy siatki ITU.'
    ],
    tips: [
      'Zjawisko to zalicza się do efektów nieliniowych trzeciego rzędu (podatność nieliniowa szkła), które ujawniają się przy dużych mocach optycznych i gęstym upakowaniu fal.',
      'Gdy w jednym włóknie propaguje się równolegle kilka nośnych o różnych częstotliwościach, zachodzi ich wzajemna intermodulacja.',
      'Nazwa zjawiska wprost wskazuje liczbę fal biorących udział w oddziaływaniu: fale o częstotliwościach pierwotnych mieszają się, tworząc nowe prążki częstotliwościowe.'
    ],
    tip: 'FWM (Four-Wave Mixing) to nieliniowe zjawisko optyczne trzeciego rzędu zachodzące w światłowodach przy dużych gęstościach mocy.',
    relatedRoute: '/teoria/modulacja#q15'
  },
  {
    id: 'mod-3',
    category: 'modulacja',
    categoryLabel: 'Modulacja i multipleksacja',
    tier: 'tier1',
    question: 'Ile pasożytniczych częstotliwości FWM powstanie w łączu DWDM pracującym na \\(N = 4\\) kanałach laserowych przy równomiernym odstępie częstotliwości?',
    options: [
      '24',
      '12',
      '16',
      '48'
    ],
    correctIndex: 0,
    explanation: 'Wzór na liczbę generowanych fal FWM wynosi: \\(N_{FWM} = \\frac{N^2(N - 1)}{2}\\). Dla \\(N = 4\\): \\(N_{FWM} = \\frac{4^2 \\cdot (4 - 1)}{2} = \\frac{16 \\cdot 3}{2} = \\frac{48}{2} = 24\\). Fale te odbierają moc kanałom użytecznym i nakładają się na nie jako zakłócenia.',
    flashcardFront: 'Wzór na liczbę prążków FWM dla N kanałów DWDM:',
    flashcardBack: [
      'Wzór: \\(N_{FWM} = \\frac{N^2(N - 1)}{2}\\)',
      'Dla \\(N=3\\) kanałów: \\(N_{FWM} = 3^2 \\cdot 2 / 2 = 9\\)',
      'Dla \\(N=4\\) kanałów: \\(N_{FWM} = 16 \\cdot 3 / 2 = 24\\)',
      'Dla \\(N=8\\) kanałów: \\(N_{FWM} = 64 \\cdot 7 / 2 = 224\\) fal pasożytniczych!'
    ],
    tips: [
      'Zadanie wymaga zastosowania wzoru kombinatorycznego na liczbę produktów mieszania nieliniowego dla zadanego zestawu nośnych.',
      'Dla \\(N\\) kanałów optycznych generowane są częstotliwości kombinacyjne postaci \\(f_{ijk} = f_i + f_j - f_k\\).',
      'Zależność określająca łączną liczbę takich pasożytniczych produktów wynosi \\(M = \\frac{N^2 (N - 1)}{2}\\). Podstaw do niej liczbę kanałów z treści zadania.'
    ],
    tip: 'Skorzystaj z kombinatorycznego wzoru na liczbę produktów mieszania czterofalowego dla \(N\) kanałów optycznych.',
    relatedRoute: '/teoria/modulacja#q15'
  },
  {
    id: 'mod-4',
    category: 'modulacja',
    categoryLabel: 'Modulacja i multipleksacja',
    tier: 'tier2',
    question: 'Czym różni się multipleksacja z podziałem czasu (TDM) od multipleksacji z podziałem częstotliwości/długości fali (FDM / WDM)?',
    options: [
      'W TDM każdy użytkownik otrzymuje całe pasmo transmisyjne na przydzielony krótki wycinek czasu (szczelinę czasową), a w FDM/WDM sygnały nadają ciągle na odrębnych częstotliwościach.',
      'W TDM sygnały transmitowane są tylko w jedną stronę (simplex), a w FDM w dwie strony (duplex).',
      'W TDM nośna optyczna modulowana jest amplitudowo, a w WDM wyłącznie kątowo.',
      'W TDM nie jest wymagana żadna synchronizacja zegarowa pomiędzy nadajnikiem a odbiornikiem.'
    ],
    correctIndex: 0,
    explanation: 'TDM (Time Division Multiplexing) dzieli oś czasu na szczeliny (time slots) powtarzające się w ramkach — każdy kanał ma całe pasmo, ale tylko przez ułamek sekundy. FDM/WDM (Frequency/Wavelength Division Multiplexing) dzieli pasmo częstotliwości na niezależne podkanały pracujące jednocześnie.',
    flashcardFront: 'TDM vs FDM/WDM — kluczowa różnica architektoniczna:',
    flashcardBack: [
      'TDM (czas): Całe pasmo łącza dostępne dla danego kanału, ale tylko w przydzielonej szczelinie czasowej (time slot). Wymaga precyzyjnej synchronizacji zegarowej.',
      'FDM/WDM (częstotliwość/fala): Równoległa, jednoczesna transmisja wielu sygnałów na różnych częstotliwościach fali nośnej.',
      'WDM to w istocie FDM realizowany w dziedzinie fal optycznych (lasery o różnych \\(\\lambda\\)).'
    ],
    tips: [
      'Pomyśl o różnych sposobach współdzielenia jednego fizycznego medium transmisyjnego (np. kabla miedzianego lub pasma radiowego) przez wielu użytkowników.',
      'Jeden ze sposobów polega na przydzieleniu każdemu użytkownikowi innego pasma częstotliwości, a inny na udostępnieniu całego pasma, ale w ściśle określonych porcjach czasu.',
      'Przeanalizuj rozwinięcie pierwszych liter w skrótach: litera „T” odnosi się do domeny czasowej, a „F” do domeny częstotliwościowej.'
    ],
    tip: 'Zwróć uwagę na litery w skrótach: TDM to Time Division, FDM to Frequency Division, a WDM to Wavelength Division.',
    relatedRoute: '/teoria/modulacja#q14'
  },

  // ==========================================
  // 4. PÓŁPRZEWODNIKI I ZŁĄCZE P-N
  // ==========================================
  {
    id: 'semi-1',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'Czym charakteryzuje się domieszkowanie krzemu (Si) atomami pierwiastków z V grupy układu okresowego (np. fosfor P, arsen As)?',
    options: [
      'Powstaje półprzewodnik typu n, w którym domieszki są donorami dostarczającymi elektrony — nośnikami większościowymi są elektrony.',
      'Powstaje półprzewodnik typu p, w którym domieszki są akceptorami wychwytującymi dziury.',
      'Zmniejsza się przewodność elektryczna materiału do poziomu idealnego dielektryka.',
      'Poziom Fermiego przesuwa się w stronę wierzchołka pasma walencyjnego.'
    ],
    correctIndex: 0,
    explanation: 'Krzem jest czterowartościowy. Wprowadzenie atomu z V grupy (5 elektronów walencyjnych, np. P, As) sprawia, że 4 elektrony tworzą wiązania kowalencyjne, a 5. elektron łatwo odrywa się i trafia do pasma przewodnictwa. Taka domieszka to donor, a powstały materiał to półprzewodnik typu n (negative), gdzie elektrony są nośnikami większościowymi.',
    flashcardFront: 'Domieszkowanie typu n vs typu p — reguła grup:',
    flashcardBack: [
      'Grupa V (P, As, Sb): DONORY \\(\\to\\) oddają 5. elektron \\(\\to\\) półprzewodnik TYPU N (nośniki większościowe: elektrony).',
      'Grupa III (B, Al, Ga, In): AKCEPTORY \\(\\to\\) brakuje 1 elektronu (tworzy się dziura) \\(\\to\\) półprzewodnik TYPU P (nośniki większościowe: dziury).',
      'W półprzewodniku typu n poziom Fermiego leży BLISKO pasma przewodnictwa (\\(E_c\\)).',
      'W półprzewodniku typu p poziom Fermiego leży BLISKO pasma walencyjnego (\\(E_v\\)).'
    ],
    tips: [
      'Krzem (Si) należy do IV grupy układu okresowego i posiada 4 elektrony walencyjne, którymi tworzy stabilną sieć krystaliczną.',
      'Zastanów się, co stanie się w sieci krzemu, jeśli w miejsce atomu krzemu wstawi się domieszkę z grupy sąsiedniej, posiadającą 5 elektronów walencyjnych (np. fosfor lub arsen).',
      'Cztery elektrony domieszki biorą udział w wiązaniach, a piąty elektron zostaje bardzo słabo związany z jądrem i z łatwością przechodzi do pasma przewodnictwa.'
    ],
    tip: 'Krzem (Si) jest pierwiastkiem IV grupy układu okresowego i posiada 4 elektrony walencyjne tworzące wiązania kowalencyjne.',
    relatedRoute: '/teoria/polprzewodniki#q16'
  },
  {
    id: 'semi-2',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'W stanie równowagi termodynamicznej półprzewodnika poziom Fermiego (\\(E_F\\)) to poziom energetyczny, dla którego:',
    options: [
      'Prawdopodobieństwo obsadzenia przez elektron wg rozkładu Fermiego-Diraca wynosi dokładnie 0,5 (50%).',
      'Wszystkie stany kwantowe są w 100% zapełnione dziurami.',
      'Energia elektronów osiąga prędkość światła w krysztale.',
      'Koncentracja nośników samoistnych spada skokowo do zera bez względu na temperaturę.'
    ],
    correctIndex: 0,
    explanation: 'Rozkład Fermiego-Diraca wyraża się wzorem \\(f(E) = \\frac{1}{1 + e^{(E - E_F)/kT}}\\). Gdy \\(E = E_F\\), mianownik wynosi \\(1 + e^0 = 2\\), a zatem \\(f(E_F) = 1/2 = 0{,}5\\). Poziom Fermiego to chemiczny potencjał elektronów.',
    flashcardFront: 'Definicja poziomu Fermiego (\\(E_F\\)) i rozkład Fermiego-Diraca:',
    flashcardBack: [
      'Wzór Fermiego-Diraca: \\(f(E) = \\frac{1}{1 + \\exp\\left(\\frac{E - E_F}{kT}\\right)}\\)',
      'Dla \\(E = E_F\\): prawdopodobieństwo obsadzenia stanu przez elektron wynosi DOKŁADNIE 0,5 (50%).',
      'W temperaturze zera bezwzględnego (0 K): stany poniżej \\(E_F\\) są obsadzone (1), a powyżej są puste (0).',
      'W półprzewodniku samoistnym \\(E_F\\) leży prawie dokładnie w połowie pasma wzbronionego.'
    ],
    tips: [
      'Poziom Fermiego (\\(E_F\\)) opisuje prawdopodobieństwo obsadzenia stanów kwantowych przez elektrony w funkcji energii.',
      'W układzie termodynamicznym złożonym z różnych obszarów (np. złącze p-n bez zewnętrznego zasilania) cząstki mogą swobodnie przemieszczać się do momentu ustania przepływów.',
      'Pomyśl o analogii z poziomem cieczy w połączonych naczyniach w stanie równowagi: jak musi zachowywać się potencjał elektrochemiczny w całym jednolitym układzie?'
    ],
    tip: 'Poziom Fermiego (\(E_F\)) reprezentuje potencjał elektrochemiczny elektronów w ciele stałym.',
    relatedRoute: '/teoria/polprzewodniki#q17'
  },
  {
    id: 'semi-3',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'Czym różni się prąd unoszenia (dryfu) od prądu dyfuzji w półprzewodniku?',
    options: [
      'Prąd unoszenia jest wywołany działaniem zewnętrznego pola elektrycznego (\\(\\vec{E}\\)), a prąd dyfuzji wynika z niejednorodnego rozkładu koncentracji nośników (gradientu gęstości).',
      'Prąd unoszenia przenoszą wyłącznie dziury, a prąd dyfuzji wyłącznie elektrony.',
      'Prąd unoszenia występuje tylko przy oświetleniu laserem, a dyfuzja tylko w ciemności.',
      'Prąd dyfuzji wymaga obecności zmiennego pola magnetycznego o częstotliwości gigahercowej.'
    ],
    correctIndex: 0,
    explanation: 'Gęstość prądu całkowitego to suma dryfu i dyfuzji: \\(J = J_{dryf} + J_{dyf}\\). Prąd dryfu \\(J_{dryf} = q(n\mu_n + p\mu_p)E\\) jest ruchem uporządkowanym pod wpływem siły Coulomba od pola \\(E\\). Prąd dyfuzji \\(J_{dyf} = q D_n \\frac{dn}{dx} - q D_p \\frac{dp}{dx}\\) wynika z przypadkowego ruchu cieplnego dążącego do wyrównania stężeń (z obszaru gęstszego do rzadszego).',
    flashcardFront: 'Prąd dryfu (unoszenia) vs prąd dyfuzji:',
    flashcardBack: [
      'Prąd unoszenia (dryf): Napędzany POLEM ELEKTRYCZNYM \\(E\\). Nośniki poruszają się z prędkością dryfu \\(v = \\mu E\\).',
      'Prąd dyfuzji: Napędzany GRADIENTEM KONCENTRACJI (\\(dn/dx\\)). Cząstki wędrują od stężenia wyższego do niższego.',
      'W stanie równowagi na złączu p-n prąd dryfu i dyfuzji idealnie się znoszą (prąd wypadkowy = 0).'
    ],
    tips: [
      'Prąd elektryczny w półprzewodniku jest sumą ruchów cząstek naładowanych wywołanych dwoma fundamentalnie różnymi przyczynami fizycznymi.',
      'Jedna z przyczyn to siła elektrostatyczna wywierana na ładunek przez obecne w materiale pole elektryczne.',
      'Druga przyczyna ma podłoże czysto statystyczne i wynika z chaotycznych drgań cieplnych cząstek dążących do wyrównania różnic w gęstości ich rozmieszczenia.'
    ],
    tip: 'Pomyśl o dwóch różnych siłach napędowych powodujących ruch ładunków w ośrodku materialnym.',
    relatedRoute: '/teoria/polprzewodniki#q19'
  },
  {
    id: 'semi-4',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'Co dzieje się z warstwą zubożoną (ładunku przestrzennego) złącza p-n przy polaryzacji w kierunku przewodzenia (plus do p, minus do n)?',
    options: [
      'Zewnętrzne napięcie obniża barierę potencjału, warstwa zubożona ulega zwężeniu, a przez złącze płynie duży prąd dyfuzyjny nośników większościowych.',
      'Warstwa zubożona gwałtownie się poszerza, blokując całkowicie przepływ jakichkolwiek ładunków.',
      'Wzrasta pole elektryczne wewnątrz złącza, powodując natychmiastowe przebicie lawinowe.',
      'Atomy domieszek opuszczają sieć krystaliczną i migrują w stronę elektrod zasilających.'
    ],
    correctIndex: 0,
    explanation: 'Przyłożenie potencjału dodatniego do p i ujemnego do n przeciwdziała wbudowanemu polu elektrycznemu złącza. Bariera potencjału maleje z \\(V_{bi}\\) do \\(V_{bi} - U\\). Warstwa zubożona ulega znacznemu zwężeniu, co pozwala elektronom z n i dziurom z p na masową dyfuzję przez złącze (wykładniczy wzrost prądu wg równania Shockleya).',
    flashcardFront: 'Zachowanie złącza p-n w kierunku przewodzenia vs zaporowym:',
    flashcardBack: [
      'PRZEWODZENIE (plus do p, minus do n):',
      '• Bariera potencjału spada: \\(V_{bi} - U\\)',
      '• Warstwa zubożona ZWĘŻA SIĘ',
      '• Prąd rośnie wykładniczo (dyfuzja nośników większościowych).',
      'ZAPOROWO (plus do n, minus do p):',
      '• Bariera potencjału rośnie: \\(V_{bi} + U_R\\)',
      '• Warstwa zubożona ROZSZERZA SIĘ',
      '• Płynie tylko znikomy prąd wsteczny (unoszenie mniejszościowych).'
    ],
    tips: [
      'W złączu p-n bez polaryzacji istnieje wbudowane pole elektryczne od nieruchomych zjonizowanych domieszek, które powstrzymuje dalszą dyfuzję nośników większościowych.',
      'Zastanów się, jaki zwrot ma zewnętrzne napięcie przy polaryzacji zaporowej (plus do obszaru n, minus do obszaru p) względem tego wewnętrznego pola.',
      'Dodatkowe pole w tym samym kierunku powoduje dalsze odciąganie swobodnych nośników od granicy metalurgicznej złącza.'
    ],
    tip: 'Zewnętrzne napięcie polaryzujące w kierunku zaporowym ma taki sam zwrot jak wewnętrzne pole elektryczne bariery potencjału.',
    relatedRoute: '/teoria/polprzewodniki#q20'
  },
  {
    id: 'semi-5',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'Co oznaczają pojęcia „iniekcji” i „ekstrakcji” nośników w stanie nierównowagi termodynamicznej?',
    options: [
      'Iniekcja to wstrzyknięcie nadmiarowych nośników (np. światłem lub w kierunku przewodzenia), a ekstrakcja to ich odessanie poniżej stanu równowagi (np. polaryzacja zaporowa).',
      'Iniekcja dotyczy wyłącznie krystalizacji krzemu, a ekstrakcja wyciągania kryształu metodą Czochralskiego.',
      'Iniekcja to zamiana elektronów w fonony, a ekstrakcja to powstawanie polarytonów.',
      'Iniekcja to przejście półprzewodnika w stan nadprzewodnictwa w niskich temperaturach.'
    ],
    correctIndex: 0,
    explanation: 'Stan nierównowagi termodynamicznej wymuszony jest czynnikami zewnętrznymi. Iniekcja polega na wprowadzeniu dodatkowych nośników (koncentracja \\(n > n_0\\), np. oświetlenie światłem o energii \\(h\nu > E_g\\) generuje pary elektron-dziura). Ekstrakcja polega na zmniejszeniu stężenia poniżej poziomu równowagowego przez pole elektryczne złącza spolaryzowanego zaporowo.',
    flashcardFront: 'Iniekcja vs Ekstrakcja nośników ładunku:',
    flashcardBack: [
      'Stan nierównowagi: \\(n \\cdot p \\neq n_i^2\\). Wprowadza się quasi-poziomy Fermiego (\\(F_n, F_p\\)).',
      'INIEKCJA: Wprowadzenie nadmiarowych nośników (\\(\\Delta n > 0\\)). Źródła: oświetlenie fotonami, polaryzacja przewodzenia złącza.',
      'EKSTRAKCJA: Usunięcie nośników przez pole elektryczne (\\(\\Delta n < 0\\)) poniżej stanu równowagi (np. złącze zaporowe).',
      'Czas życia nośników (\\(\\tau\\)): czas, po którym nadmiarowa koncentracja spada \\(e\\)-krotnie w wyniku rekombinacji.'
    ],
    tips: [
      'Procesy te opisują zachowanie nośników mniejszościowych przechodzących przez barierę potencjału złącza p-n.',
      'Pomyśl o kierunkach: jeden proces polega na wtłaczaniu nośników w głąb obszaru, w którym są one mniejszością, a drugi na ich ściąganiu przez barierę.',
      'Zastanów się, który z tych stanów odpowiada obniżeniu bariery potencjału (polaryzacja w kierunku przewodzenia), a który jej podwyższeniu.'
    ],
    tip: 'Pojęcia te opisują ruch nośników mniejszościowych przez barierę złącza p-n w stanach polaryzacji.',
    relatedRoute: '/teoria/polprzewodniki#q18'
  },
  {
    id: 'semi-6',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier2',
    question: 'Czym różni się przebicie Zenera od przebicia lawinowego w złączu p-n?',
    options: [
      'Przebicie Zenera zachodzi w silnie domieszkowanych złączach o wąskiej warstwie zaporowej na skutek tunelowania kwantowego elektronów, a przebicie lawinowe w słabiej domieszkowanych złączach wskutek jonizacji zderzeniowej.',
      'Przebicie Zenera prowadzi zawsze do stopienia krzemu, a przebicie lawinowe jest całkowicie odwracalne.',
      'Przebicie Zenera występuje tylko przy napięciu powyżej 1000 V, a lawinowe przy 1 V.',
      'Przebicie Zenera jest wywoływane falami radiowymi, a lawinowe promieniami gamma.'
    ],
    correctIndex: 0,
    explanation: 'Przebicie Zenera (niskie napięcia, typowo < 5 V) to kwantowe tunelowanie elektronów z pasma walencyjnego p wprost do pasma przewodnictwa n przez bardzo cienką barierę. Przebicie lawinowe (> 6–7 V) polega na tym, że nieliczne elektrony przyspieszane silnym polem zderzają się z atomami sieci i wybijają kolejne elektrony (efekt lawinowy).',
    flashcardFront: 'Przebicie Zenera vs Przebicie Lawinowe w złączu p-n:',
    flashcardBack: [
      'Przebicie Zenera (< 5 V): Silnie domieszkowane złącze, wąska warstwa zubożona. Zjawisko KWANTOWEGO TUNELOWANIA elektronów przez barierę. Ujemny współczynnik temperaturowy.',
      'Przebicie Lawinowe (> 7 V): Słabiej domieszkowane złącze, szersza warstwa. JONIZACJA ZDERZENIOWA (rozbijanie wiązań przez rozpędzone nośniki). Dodatni współczynnik temperaturowy.'
    ],
    tips: [
      'Oba mechanizmy prowadzą do gwałtownego wzrostu prądu przy polaryzacji zaporowej, ale zachodzą w zupełnie innych warunkach domieszkowania i przy innych grubościach złącza.',
      'W bardzo wąskich barierach natężenie pola jest tak gigantyczne, że cząstki mogą pokonać barierę bez klasycznego przeskakiwania nad nią (zjawisko czysto kwantowe).',
      'W szerszych barierach pojedynczy nośnik przyspieszony silnym polem zderza się z atomami sieci krystalicznej, wybijając kolejne elektrony w procesie kaskadowym.'
    ],
    tip: 'Przebicie Zenera zachodzi w złączach silnie domieszkowanych przy wąskiej barierze, a lawinowe w słabiej domieszkowanych przy szerszej barierze.',
    relatedRoute: '/teoria/polprzewodniki#q20'
  },

  // ==========================================
  // 5. PAMIĘCI, DYSKI MAGNETYCZNE I GMR
  // ==========================================
  {
    id: 'mem-1',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'Na czym polega zjawisko Gigantycznej Magnetorezystancji (GMR - Giant Magnetoresistance)?',
    options: [
      'Na skokowej zmianie rezystancji elektrycznej struktury wielowarstwowej złożonej z warstw ferromagnetycznych przedzielonych niemagnetykiem, zależnej od wzajemnej orientacji magnetycznej (równoległa = mały opór, antyrównoległa = duży opór).',
      'Na nagłym spadku oporności przewodnika do zera w temperaturze ciekłego helu.',
      'Na powstawaniu napięcia Halla prostopadłego do kierunku przepływu prądu i pola magnetycznego.',
      'Na zmianie częstotliwości drgań kryształu kwarcu pod wpływem zewnętrznego pola magnetycznego.'
    ],
    correctIndex: 0,
    explanation: 'Struktura GMR składa się z dwóch warstw ferromagnetycznych (np. Fe, Co) przedzielonych ultracienką warstwą metalu niemagnetycznego (np. Cu). Gdy namagnesowania obu warstw są RÓWNOLEGŁE, elektrony o zgodnym spinie przechodzą niemal bez rozpraszania (mała rezystancja). Gdy namagnesowania są ANTYRÓWNOLEGŁE, wszystkie elektrony doznają silnego rozpraszania na złączach (duża rezystancja). Za odkrycie GMR przyznano Nagrodę Nobla w 2007 r. (Fert i Grünberg).',
    flashcardFront: 'Gigantyczna Magnetorezystancja (GMR) — zasada i struktura:',
    flashcardBack: [
      'Struktura: kanapka Ferromagnetyk / Niemagnetyk / Ferromagnetyk (np. Fe/Cr/Fe lub Co/Cu/Co).',
      'ORIENTACJA RÓWNOLEGŁA (\\(\\uparrow\\uparrow\\)): Słabe rozpraszanie spinowe \\(\\to\\) BARDZO MAŁY OPÓR.',
      'ORIENTACJA ANTYRÓWNOLEGŁA (\\(\\uparrow\\downarrow\\)): Silne rozpraszanie spinowe obu stanów \\(\\to\\) BARDZO DUŻY OPÓR.',
      'Zastosowanie: Głowice odczytu dysków HDD (przełom w gęstości zapisu na talerzach), czujniki pola.'
    ],
    tips: [
      'Zjawisko to występuje w sztucznie wytworzonych nanostrukturach złożonych z naprzemiennych ultracienkich warstw ferromagnetycznych i niemagnetycznych przewodników.',
      'Kluczową rolę odgrywa tu wewnętrzny moment pędu elektronów przewodnictwa (spin) oraz jego orientacja względem kierunku namagnesowania warstwy.',
      'Zastanów się, jak zmienia się opór elektryczny takiego złącza, gdy kierunki namagnesowania obu warstw magnetycznych są zgodne ze sobą, a jak gdy są przeciwne.'
    ],
    tip: 'Zjawisko Gigantycznej Magnetorezystancji (Nobel 2007) zachodzi w strukturach wielowarstwowych: ferromagnetyk / metal niemagnetyczny / ferromagnetyk.',
    relatedRoute: '/teoria/pamieci-nosniki#q28'
  },
  {
    id: 'mem-2',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'Jaka jest kluczowa różnica funkcjonalna pomiędzy pamięcią Flash typu NAND a pamięcią Flash typu NOR?',
    options: [
      'Flash NAND ma komórki połączone szeregowo, oferuje dużą gęstość upakowania i zapis blokowy (stosowana w SSD/SD), podczas gdy NOR ma komórki równoległe, pozwala na swobodny dostęp losowy bajt po bajcie i wykonanie kodu w miejscu (XIP).',
      'Flash NOR jest pamięcią ulotną tracącą dane po odłączeniu zasilania, a NAND jest pamięcią stałą.',
      'Flash NAND stosuje zapis magnetyczny, a NOR zapis optyczny.',
      'Flash NOR może być kasowana nieskończoną liczbę razy, podczas gdy NAND tylko jeden raz.'
    ],
    correctIndex: 0,
    explanation: 'W strukturze NOR komórki są połączone równolegle do linii bitów — zapewnia to szybki dostęp losowy (Random Access) do pojedynczego słowa, co pozwala procesorowi bezpośrednio wykonywać program (XIP - eXecute In Place, BIOS/firmware). W strukturze NAND komórki połączone są w łańcuchy szeregowe (mniejsza liczba styków) — daje to ogromną gęstość i niski koszt za gigabajt, ale dostęp jest sekwencyjny/stronicowy (dyski SSD, pendrive).',
    flashcardFront: 'Flash NAND vs Flash NOR — porównanie:',
    flashcardBack: [
      'Flash NOR:',
      '• Połączenie równoległe komórek,',
      '• Swobodny dostęp losowy (bajtowy),',
      '• Obsługa XIP (wykonywanie kodu wprost z Flash, np. BIOS, mikrokontrolery),',
      '• Mniejsza gęstość, wyższy koszt.',
      'Flash NAND:',
      '• Połączenie szeregowe komórek w stringi,',
      '• Dostęp blokowy/stronicowy (brak XIP),',
      '• Ogromna gęstość upakowania, szybki zapis/kasowanie dużych bloków,',
      '• Pamięć masowa: SSD, pendrive, karty SD, smartfony.'
    ],
    tips: [
      'Oba rodzaje pamięci półprzewodnikowej opierają się na tranzystorach z pływającą bramką, ale różnią się sposobem ich wzajemnego łączenia w matrycy komórek.',
      'Jedno z rozwiązań łączy komórki w szeregowe łańcuchy (jak w bramce logicznej NAND), a drugie łączy je równolegle do linii bitów (jak w NOR).',
      'Zastanów się, który układ pozwala na uzyskanie ogromnej gęstości zapisu i operacje na całych blokach danych (dyski masowe), a który zapewnia szybki dostęp do pojedynczych bajtów.'
    ],
    tip: 'Pomyśl o sposobie połączenia komórek tranzystorowych w strukturze matrycy: szeregowo (NAND) lub równolegle (NOR).',
    relatedRoute: '/teoria/pamieci-nosniki#q24'
  },
  {
    id: 'mem-3',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'W jaki sposób na standardowej płycie kompaktowej (CD-ROM) realizowane jest odczytywanie bitów 0 i 1 za pomocą lasera?',
    options: [
      'Wiązka lasera odbija się od rowków (land) i zagłębień (pit) o głębokości \\(\\lambda/4\\); przejście między pitem a landem wywołuje interferencję destruktywną (różnica dróg \\(\\lambda/2\\)) i spadek natężenia światła na fotodiodzie.',
      'Laser podgrzewa pit do temperatury topnienia krzemu, co zmienia oporność płytki.',
      'Każdy pit zawiera miniaturowy magnes, który obraca płaszczyznę polaryzacji przez efekt Faradaya.',
      'Pity pochłaniają całe światło, a landy świecą własnym światłem fluorescencyjnym.'
    ],
    correctIndex: 0,
    explanation: 'Głębokość pitu wynosi dokładnie \\(d = \\frac{\\lambda}{4 n}\\) (gdzie n to współczynnik załamania poliwęglanu). Promień odbity od dna pitu przebywa drogę o \\(2d = \\lambda / 2\\) dłuższą niż promień odbity od landu. Powstaje przesunięcie fazowe 180° i interferencja destruktywna — światło gaśnie na detektorze, co układ interpretuje jako zmianę logiczną (zbocze pitu to logiczna „1”).',
    flashcardFront: 'Zasada odczytu płyty CD (pity i landy):',
    flashcardBack: [
      'Głębokość pitu wynosi \\(d = \\frac{\\lambda}{4 n}\\) (ćwierć długości fali w poliwęglanie).',
      'Światło wpadające do pitu pokonuje drogę tam i z powrotem \\(\\Delta r = 2d = \\frac{\\lambda}{2}\\).',
      'Różnica faz wynosi dokładnie 180° (\\(\\pi\\)) \\(\\to\\) INTERFERENCJA DESTRUKTYWNA.',
      'Na krawędzi pitu światło gaśnie na fotodiodzie — detektor wykrywa zmianę (zbocze = 1 logiczna).'
    ],
    tips: [
      'Płyta optyczna CD przechowuje dane w postaci mikroskopijnych wytłoczeń (tzw. pitów) na powierzchni odbijającej aluminium.',
      'Światło lasera oświetla jednocześnie dno wgłębienia oraz otaczający je płaski obszar, po czym odbija się i trafia do fotodetektora.',
      'Głębokość wgłębienia została tak dobrana, aby droga przebyta przez promień odbity od wgłębienia różniła się od drogi promienia z płaszczyzny o dokładnie połowę długości fali światła.'
    ],
    tip: 'Płyta CD posiada wytłoczone mikroskopijne wgłębienia (pity) i obszary płaskie (landy) odczytywane promieniem lasera podczerwonego (780 nm).',
    relatedRoute: '/teoria/pamieci-nosniki#q25'
  },
  {
    id: 'mem-4',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier2',
    question: 'W dyskach magnetooptycznych (MO) proces zapisu i odczytu wykorzystuje zjawiska:',
    options: [
      'Zapis: nagrzanie warstwy laserem powyżej temperatury Curie (\\(T_c\\)) i zmiana orientacji domen polem magnetycznym; Odczyt: polarymetryczny magnetooptyczny efekt Kerra (MOKE).',
      'Zapis: wytrawianie chemiczne kwasem solnym; Odczyt: skanowanie mikroskopem AFM.',
      'Zapis: zjawisko tunelowania Zenera; Odczyt: pomiar siły Lorentza na igle gramofonowej.',
      'Zapis: zmiana oporu GMR prądem 100 A; Odczyt: emisja promieniowania rentgenowskiego.'
    ],
    correctIndex: 0,
    explanation: 'Dysk MO łączy technikę magnetyczną i optyczną. Przy temperaturze pokojowej koercja materiału jest ogromna (zapis niemożliwy). Przy zapisie laser podgrzewa punktowo domenę powyżej temperatury Curie \\(T_c\\) (koercja spada do zera), a zewnętrzna cewka ustawia namagnesowanie. Przy odczycie zimny laser o małej mocy pada na dysk — polaryzacja odbitego światła skręca się o ułamek stopnia w lewo lub w prawo w zależności od wektora magnetycznego (efekt Kerra).',
    flashcardFront: 'Dyski magnetooptyczne (MO) — zapis i odczyt:',
    flashcardBack: [
      'ZAPIS (termomagnetyczny):',
      '• Laser podgrzewa punktowo nośnik powyżej temperatury Curie (\\(T_c\\)),',
      '• Materiał traci ferromagnetyzm \\(\\to\\) cewka magnetyczna z łatwością polaryzuje domenę.',
      'ODCZYT (optyczny):',
      '• Słaby spolaryzowany promień lasera odbija się od warstwy magnetycznej,',
      '• Magnetooptyczny EFEKT KERRA: płaszczyzna polaryzacji skręca się w lewo lub prawo zależnie od kierunku namagnesowania domeny.'
    ],
    tips: [
      'Pamięci magnetooptyczne łączą mechanizmy termiczne realizowane wiązką lasera ze zjawiskami ferromagnetycznymi.',
      'Materiały magnetyczne w temperaturze pokojowej wykazują bardzo dużą koercję (trudno zmienić ich namagnesowanie), ale powyżej pewnej temperatury charakterystycznej koercja spada do zera.',
      'Odczyt danych nie wymaga już podgrzewania, lecz wykorzystuje subtelną zmianę płaszczyzny polaryzacji światła lasera odbitego od namagnesowanego ośrodka.'
    ],
    tip: 'Dyski MO łączą technologię laserową z magnetyczną, umożliwiając wielokrotny zapis.',
    relatedRoute: '/teoria/pamieci-nosniki#q26'
  },
  {
    id: 'mem-5',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'W tranzystorze polowym MOSFET z kanałem wzbogacanym (indukowanym) typu n, przepływ prądu dren-źródło staje się możliwy, gdy:',
    options: [
      'Napięcie bramka-źródło przekroczy progowe napięcie dodatnie (\\(V_{GS} > V_{th}\\)), co wywołuje inwersję ładunku pod bramką i utworzenie kanału n.',
      'Napięcie bramka-źródło jest silnie ujemne, co wypycha elektrony z podłoża.',
      'Prąd stały bazy zacznie zasilać złącze emiterowe jak w BJT.',
      'Temperatura struktury spadnie poniżej zera bezwzględnego.'
    ],
    correctIndex: 0,
    explanation: 'Tranzystor MOSFET z kanałem indukowanym typu n bez polaryzacji nie posiada przewodzącego kanału między drenem a źródłem (dwa zaporowe złącza p-n). Przyłożenie dodatniego napięcia bramki \\(V_{GS} > V_{th}\\) odpycha dziury z podłoża p i przyciąga elektrony pod izolator \\(\\mathrm{SiO_2}\\), tworząc tzw. warstwę inwersyjną (indukowany kanał typu n łączący źródło z drenem).',
    flashcardFront: 'MOSFET z kanałem wzbogacanym typu n — zasada włączania:',
    flashcardBack: [
      'Normalnie wyłączony (Normally OFF) — brak kanału przy \\(V_{GS} = 0\\).',
      'Przyłożenie dodatniego napięcia bramki \\(V_{GS} > V_{th}\\) (napięcie progowe).',
      'Pole elektryczne przyciąga elektrony z podłoża pod tlenek bramki \\(\\mathrm{SiO_2}\\).',
      'Powstaje warstwa INWERSYJNA (kanał typu n) łączący źródło z drenem \\(\\to\\) prąd \\(I_D\\) zaczyna płynąć.',
      'Bramka pobiera znikomy prąd stały (ogromna rezystancja wejściowa dzięki dielektrykowi).'
    ],
    tips: [
      'Pomyśl o strukturze tranzystora MOSFET: metalowa bramka oddzielona cienkim dielektrykiem (tlenkiem krzemu) od podłoża półprzewodnikowego.',
      'Słowo „wzbogacany” (indukowany) oznacza, że w stanie bez przyłożonego napięcia bramki pomiędzy źródłem a drenem nie ma fizycznej ścieżki przewodzącej.',
      'Zastanów się, jaki znak musi mieć napięcie przyłożone do bramki, aby przyciągnąć do powierzchni podłoża elektrony i wytworzyć tzw. warstwę inwersyjną.'
    ],
    tip: 'Tranzystor z kanałem wzbogacanym przy zerowym napięciu bramki (\(V_{GS} = 0\)) jest normalnie ZAMKNIĘTY (nie przewodzi prądu).',
    relatedRoute: '/teoria/pamieci-nosniki#q23'
  },

  // ==========================================
  // 6. WZORY, REGUŁY KCIUKA I ZADANIA OBLICZENIOWE
  // ==========================================
  {
    id: 'math-1',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Jeżeli moc sygnału wzrosła o \\(+3\\ \\mathrm{dB}\\), to oznacza, że moc ta:',
    options: [
      'Wzrosła w przybliżeniu 2-krotnie (\\(\\times 2\\)).',
      'Wzrosła 3-krotnie (\\(\\times 3\\)).',
      'Wzrosła 10-krotnie (\\(\\times 10\\)).',
      'Wzrosła o 3 waty.'
    ],
    correctIndex: 0,
    explanation: 'Z definicji decybela mocy: \\(\\Delta P_{[dB]} = 10 \\log_{10}(P_2 / P_1)\\). Jeśli \\(P_2 / P_1 = 2\\), to \\(10 \\log_{10}(2) \\approx 10 \\cdot 0{,}30103 \\approx 3{,}01\\ \\mathrm{dB} \\approx +3\\ \\mathrm{dB}\\). Odpowiednio: spadek o \\(-3\\ \\mathrm{dB}\\) oznacza spadek mocy o połowę (\\(\\div 2\\)).',
    flashcardFront: 'Złote reguły kciuka decybeli (dB):',
    flashcardBack: [
      '\\(+3\\ \\mathrm{dB} \\approx \\times 2\\) (podwojenie mocy)',
      '\\(-3\\ \\mathrm{dB} \\approx \\div 2\\) (spadek mocy o połowę)',
      '\\(+10\\ \\mathrm{dB} \\approx \\times 10\\) (10-krotny wzrost mocy)',
      '\\(-10\\ \\mathrm{dB} \\approx \\div 10\\) (spadek mocy do 1/10)',
      '\\(+20\\ \\mathrm{dB} \\approx \\times 100\\)',
      '\\(+30\\ \\mathrm{dB} \\approx \\times 1000\\)'
    ],
    tips: [
      'Pamiętaj, że decybel (dB) jest miarą logarytmiczną stosunku dwóch mocy: \\(\\Delta P = 10 \\log_{10}(P_2 / P_1)\\).',
      'Zastanów się, jaka wartość ilorazu \\(P_2 / P_1\\) daje po zlogarytmowaniu podstawą 10 wartość bliską 0,3.',
      'Ponieważ \\(\\log_{10}(2) \\approx 0{,}301\\), pomnożenie wyniku przez 10 daje w przybliżeniu wartość z treści zadania.'
    ],
    tip: 'Wzór na zmianę mocy w decybelach wynosi: \(\Delta P [\mathrm{dB}] = 10 \log_{10}(P_2 / P_1)\).',
    relatedRoute: '/teoria/sciaga'
  },
  {
    id: 'math-2',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Ile w miliwatach lub watach wynosi moc \\(0\\ \\mathrm{dBm}\\) oraz \\(30\\ \\mathrm{dBm}\\)?',
    options: [
      '\\(0\\ \\mathrm{dBm} = 1\\ \\mathrm{mW}\\), a \\(30\\ \\mathrm{dBm} = 1\\ \\mathrm{W}\\) (1000 mW).',
      '\\(0\\ \\mathrm{dBm} = 0\\ \\mathrm{mW}\\), a \\(30\\ \\mathrm{dBm} = 30\\ \\mathrm{mW}\\).',
      '\\(0\\ \\mathrm{dBm} = 1\\ \\mathrm{W}\\), a \\(30\\ \\mathrm{dBm} = 30\\ \\mathrm{kW}\\).',
      '\\(0\\ \\mathrm{dBm} = -1\\ \\mathrm{mW}\\), a \\(30\\ \\mathrm{dBm} = 3\\ \\mathrm{mW}\\).'
    ],
    correctIndex: 0,
    explanation: 'Skala dBm to poziom mocy odniesiony do 1 miliwata (1 mW): \\(P_{[dBm]} = 10 \\log_{10}(P / 1\\ \\mathrm{mW})\\). Stąd \\(10 \\log_{10}(1) = 0\\ \\mathrm{dBm} = 1\\ \\mathrm{mW}\\). Dodając \\(+30\\ \\mathrm{dB}\\) (trzykrotnie \\(+10\\ \\mathrm{dB}\\), czyli \\(10 \\times 10 \\times 10 = 1000\\)), otrzymujemy \\(1000\\ \\mathrm{mW} = 1\\ \\mathrm{W} = 30\\ \\mathrm{dBm}\\).',
    flashcardFront: 'Przeliczniki skali dBm na mW i W:',
    flashcardBack: [
      '\\(0\\ \\mathrm{dBm} = 1\\ \\mathrm{mW}\\)',
      '\\(10\\ \\mathrm{dBm} = 10\\ \\mathrm{mW}\\)',
      '\\(20\\ \\mathrm{dBm} = 100\\ \\mathrm{mW}\\)',
      '\\(30\\ \\mathrm{dBm} = 1000\\ \\mathrm{mW} = 1\\ \\mathrm{W}\\)',
      '\\(-10\\ \\mathrm{dBm} = 0{,}1\\ \\mathrm{mW} = 100\\ \\mu\\mathrm{W}\\)',
      '\\(-30\\ \\mathrm{dBm} = 0{,}001\\ \\mathrm{mW} = 1\\ \\mu\\mathrm{W}\\)'
    ],
    tips: [
      'Jednostka dBm oznacza poziom mocy odniesiony do 1 miliwata (\\(1\\ \\mathrm{mW} = 10^{-3}\\ \\mathrm{W}\\)).',
      'Z definicji poziom \\(0\\ \\mathrm{dBm}\\) oznacza sytuację, w której moc mierzona jest równa mocy odniesienia.',
      'Zauważ, że wzrost o każde \\(+10\\ \\mathrm{dB}\\) oznacza 10-krotny wzrost mocy w watach. Co oznacza więc wzrost o \\(+30\\ \\mathrm{dB}\\) względem poziomu odniesienia?'
    ],
    tip: 'Decybelomiliwat (\(\mathrm{dBm}\)) to poziom mocy odniesiony do 1 miliwata: \(P [\mathrm{dBm}] = 10 \log_{10}(P [\mathrm{mW}] / 1\ \mathrm{mW})\).',
    relatedRoute: '/teoria/sciaga'
  },
  {
    id: 'math-3',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Zgodnie z regułą Carsona, szerokość pasma \\(B\\) sygnału zmodulowanego częstotliwościowo (FM) wynosi:',
    options: [
      '\\(B = 2(\\Delta f + f_m)\\), gdzie \\(\\Delta f\\) to dewiacja częstotliwości, a \\(f_m\\) to maksymalna częstotliwość sygnału modulującego.',
      '\\(B = \\Delta f - f_m\\).',
      '\\(B = 2 \\cdot f_m\\) bez względu na amplitudę dewiacji częstotliwości.',
      '\\(B = \\frac{\\Delta f^2}{2 f_m}\\).'
    ],
    correctIndex: 0,
    explanation: 'Reguła Carsona określa pasmo zawierające około 98% całkowitej mocy sygnału FM: \\(B = 2(\\Delta f + f_m) = 2 f_m (1 + \\beta)\\), gdzie \\(\\beta = \\Delta f / f_m\\) to wskaźnik modulacji. Dla małych \\(\\beta\\) (wąskopasmowe NBFM) \\(B \\approx 2 f_m\\) jak w AM, a dla dużych \\(\\beta\\) (szerokopasmowe WBFM) \\(B \\approx 2 \\Delta f\\).',
    flashcardFront: 'Reguła Carsona na pasmo sygnału FM:',
    flashcardBack: [
      'Wzór: \\(B = 2(\\Delta f + f_m) = 2 f_m (1 + \\beta)\\)',
      '\\(\\Delta f\\) — dewiacja częstotliwości (maksymalne odchylenie od nośnej),',
      '\\(f_m\\) — najwyższa częstotliwość w sygnale informacyjnym,',
      '\\(\\beta = \\frac{\\Delta f}{f_m}\\) — wskaźnik modulacji FM.',
      'Pasmo FM jest ZAWSZE szersze niż pasmo modulacji AM (które wynosi po prostu \\(2 f_m\\)).'
    ],
    tips: [
      'Reguła ta określa pasmo częstotliwościowe sygnału z modulacją kątową (częstotliwościową FM lub fazową PM).',
      'Widmo sygnału FM teoretycznie składa się z nieskończonej liczby prążków bocznych, ale w praktyce inżynierskiej pomija się prążki o znikomej energii.',
      'Pasmo to zależy od dwóch składowych: maksymalnego odchylenia częstotliwości od nośnej oraz od najwyższej częstotliwości w sygnale źródłowym, a w formule występuje współczynnik symetrii dla obu wstęg.'
    ],
    tip: 'Reguła Carsona określa praktyczne pasmo częstotliwościowe sygnału z modulacją kątową (FM / PM).',
    relatedRoute: '/zadania/3'
  },
  {
    id: 'math-4',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Wzór Shannona-Hartleya na maksymalną teoretyczną przepustowość (pojemność informacyjną) kanału z szumem gaussowskim ma postać:',
    options: [
      '\\(C = B \\log_2\\left(1 + \\frac{S}{N}\\right)\\) [b/s]',
      '\\(C = 2 B \\log_{10}(S \\cdot N)\\)',
      '\\(C = \\frac{B}{1 + S/N}\\)',
      '\\(C = B \\cdot \\sqrt{\\frac{S}{N}}\\)'
    ],
    correctIndex: 0,
    explanation: 'Twierdzenie Shannona wyznacza granicę pojemności kanału (Channel Capacity): \\(C = B \\log_2(1 + SNR)\\), gdzie \\(B\\) to pasmo [Hz], a \\(S/N\\) to stosunek mocy sygnału do szumu (liczbowy, NIE w decybelach!). Jeśli stosunek szumu rośnie do nieskończoności (SNR -> 0), przepustowość spada do 0.',
    flashcardFront: 'Wzór Shannona-Hartleya na pojemność kanału C:',
    flashcardBack: [
      'Wzór: \\(C = B \\log_2\\left(1 + \\frac{S}{N}\\right)\\) w bitach na sekundę [b/s].',
      '\\(B\\) — szerokość pasma kanału w hercach [Hz],',
      '\\(S/N\\) — stosunek sygnału do szumu jako ILORAZ MOCY (nie w dB! Jeśli podane w dB, trzeba zamienić: \\(S/N = 10^{SNR_{dB}/10}\\)).',
      'Żaden kod korekcyjny nie pozwoli przesłać więcej danych bez błędów niż wynosi granica Shannona.'
    ],
    tips: [
      'Twierdzenie to opisuje graniczną ilość informacji, jaką można bezbłędnie przesłać w kanale telekomunikacyjnym w obecności szumu białego o rozkładzie gaussowskim.',
      'Przepustowość jest wprost proporcjonalna do dostępnej szerokości pasma kanału (\\(B\\)).',
      'Liczba poziomów możliwych do rozróżnienia zależy od stosunku mocy sygnału do szumu (\\(S/N\\)), a przejście z poziomów na bity wymaga zastosowania logarytmu o podstawie dwójkowej.'
    ],
    tip: 'Twierdzenie Shannona-Hartleya wyznacza absolutną teoretyczną granicę przepustowości kanału z szumem białym.',
    relatedRoute: '/zadania/3'
  },
  {
    id: 'math-5',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier2',
    question: 'Wzór na promień pierwszej strefy Fresnela w punkcie odległym o \\(d_1\\) od nadajnika i \\(d_2\\) od odbiornika to:',
    options: [
      '\\(r_1 = \\sqrt{\\frac{\\lambda \\cdot d_1 \\cdot d_2}{d_1 + d_2}}\\)',
      '\\(r_1 = \\frac{\\lambda (d_1 + d_2)}{d_1 \\cdot d_2}\\)',
      '\\(r_1 = \\sqrt{\\lambda \\cdot (d_1 + d_2)}\\)',
      '\\(r_1 = 2 \\lambda \\sqrt{d_1 \\cdot d_2}\\)'
    ],
    correctIndex: 0,
    explanation: 'Promień n-tej strefy Fresnela dany jest wzorem \\(r_n = \\sqrt{\\frac{n \\lambda d_1 d_2}{d_1 + d_2}}\\). Dla \\(n=1\\) mamy \\(r_1 = \\sqrt{\\frac{\\lambda d_1 d_2}{D}}\\). Aby transmisja w przestrzeni była zbliżona do warunków wolnej przestrzeni, co najmniej 60% promienia I strefy Fresnela musi być wolne od jakichkolwiek przeszkód terenowych.',
    flashcardFront: 'Promień I strefy Fresnela — wzór i reguła 60%:',
    flashcardBack: [
      'Wzór: \\(r_1 = \\sqrt{\\frac{\\lambda d_1 d_2}{d_1 + d_2}}\\)',
      'Maksimum promienia wypada w połowie trasy: \\(r_{1,max} = \\frac{1}{2}\\sqrt{\\lambda D}\\).',
      'Reguła czystości strefy: Aby nie było tłumienia dyfrakcyjnego od przeszkód, co najmniej 60% promienia I strefy Fresnela musi być wolne od drzew, budynków i wzgórz.'
    ],
    tips: [
      'Strefy Fresnela to obszary wokół osi łączącej antenę nadawczą i odbiorczą, w których obecność przeszkód powoduje interferencję fal.',
      'Pierwsza strefa odpowiada geometrycznemu miejscu punktów, dla których różnica dróg promienia ugiętego i bezpośredniego nie przekracza połowy długości fali (\\(\\lambda / 2\\)).',
      'Zastanów się nad symetrią: promień strefy jest największy dokładnie w połowie trasy i zależy od iloczynu odległości \\(d_1 \\cdot d_2\\) podzielonego przez ich sumę.'
    ],
    tip: 'Pierwsza strefa Fresnela to elipsoida obrotowa o promieniu zależnym od odległości od nadajnika (\(d_1\)), odbiornika (\(d_2\)) i długości fali \(\lambda\).',
    relatedRoute: '/zadania/1'
  },
  {
    id: 'math-6',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Jak obliczyć graniczną odległość bezpośredniej widoczności (horyzont radiowy) przy wysokościach anten \\(H_N\\) i \\(H_O\\)?',
    options: [
      '\\(d_0 = \\sqrt{2 R_Z} \\left(\\sqrt{H_N} + \\sqrt{H_O}\\right) \\approx 3{,}57 \\left(\\sqrt{H_N} + \\sqrt{H_O}\\right)\\) [km] (lub 4,12 przy uwzględnieniu refrakcji 4/3 R).',
      '\\(d_0 = R_Z \\cdot (H_N + H_O)\\)',
      '\\(d_0 = \\sqrt{R_Z \\cdot H_N \\cdot H_O}\\)',
      '\\(d_0 = 2 \\pi R_Z \\frac{H_N}{H_O}\\)'
    ],
    correctIndex: 0,
    explanation: 'Odległość widoczności horyzontalnej wynika z twierdzenia Pitagorasa dla trójkąta stycznego do kuli ziemskiej: \\(d_1 = \\sqrt{(R+H)^2 - R^2} \\approx \\sqrt{2 R H}\\). Suma zasięgów obu anten to \\(d_0 = \\sqrt{2 R_Z}(\\sqrt{H_N} + \\sqrt{H_O})\\). Jeśli podstawimy promień w kilometrach, a wysokości w metrach: współczynnik wynosi ok. 3,57 dla geometrycznego i ok. 4,12 dla radiowego (przy 4/3 R).',
    flashcardFront: 'Wzór na zasięg bezpośredniej widoczności anten (horyzont):',
    flashcardBack: [
      'Wzór ścisły: \\(d_0 = \\sqrt{2 R_Z}(\\sqrt{H_N} + \\sqrt{H_O})\\)',
      'Dla wysokości anten w metrach i zasięgu w km:',
      '• Horyzont geometryczny: \\(d_0 \\approx 3{,}57 \\cdot (\\sqrt{H_N} + \\sqrt{H_O})\\) [km]',
      '• Horyzont radiowy (refrakcja standardowa 4/3 R): \\(d_{rad} \\approx 4{,}12 \\cdot (\\sqrt{H_N} + \\sqrt{H_O})\\) [km].'
    ],
    tips: [
      'Zadanie dotyczy wyznaczenia odległości wzajemnej widoczności optycznej anten z uwzględnieniem krzywizny globu i zjawiska standardowej refrakcji.',
      'Zależność geometryczna wiąże odległość z twierdzeniem Pitagorasa, co prowadzi do zależności pierwiastkowej od wysokości zawieszenia masztów.',
      'W inżynierii radiowej stosuje się prosty współczynnik liczbowy (ok. 4,12), przez który mnoży się sumę pierwiastków z wysokości anten wyrażonych w metrach.'
    ],
    tip: 'Horyzont radiowy uwzględnia krzywiznę kuli ziemskiej oraz ugięcie fal w troposferze (zastępczy promień Ziemi \(4/3 R_z\)).',
    relatedRoute: '/zadania/1'
  },
  {
    id: 'math-7',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier2',
    question: 'Ile w przybliżeniu wynosi liczba modów prowadzonych \\(M\\) we włóknie światłowodowym wielomodowym o profilu skokowym (Step-Index) o znormalizowanej częstotliwości \\(V\\)?',
    options: [
      '\\(M \\approx \\frac{V^2}{2}\\) (dla profilu gradientowego \\(M \\approx \\frac{V^2}{4}\\)).',
      '\\(M \\approx 2 V\\).',
      '\\(M \\approx \\sqrt{V}\\).',
      '\\(M \\approx V^3\\).'
    ],
    correctIndex: 0,
    explanation: 'Dla włókna skokowego liczba modów jest proporcjonalna do kwadratu parametru V i wynosi \\(M \\approx V^2 / 2\\). We włóknie gradientowym o profilu parabolicznym (alfa = 2) liczba modów jest o połowę mniejsza i wynosi \\(M \\approx V^2 / 4\\).',
    flashcardFront: 'Liczba modów prowadzonych we włóknie skokowym i gradientowym:',
    flashcardBack: [
      'Włókno o profilu skokowym (Step-Index): \\(M \\approx \\frac{V^2}{2}\\)',
      'Włókno o profilu gradientowym (Graded-Index): \\(M \\approx \\frac{V^2}{4}\\)',
      'Profil gradientowy prowadzi 2 razy mniej modów, ale drastycznie redukuje ich rozmycie czasowe (dyspersję modową).'
    ],
    tips: [
      'W światłowodzie o profilu skokowym liczba dozwolonych konfiguracji przestrzennych pola (modów) zależy od częstotliwości znormalizowanej falowodu (\\(V\\)).',
      'Dla dużych wartości parametru \\(V\\) (znacznie powyżej progu jednomodowości) liczba modów rośnie z kwadratem tego parametru.',
      'Pamiętaj, że każdy mod przestrzenny może występować w dwóch prostopadłych stanach polaryzacji, co wiąże się ze współczynnikiem ułamkowym w formule aproksymacyjnej.'
    ],
    tip: 'Liczba modów prowadzonych zależy od częstotliwości znormalizowanej falowodu \(V\).',
    relatedRoute: '/teoria/swiatlowody#q8'
  },
  {
    id: 'math-8',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Impedancja falowa próżni \\(\\eta_0\\) (stosunek natężenia pola elektrycznego do magnetycznego \\(E/H\\) w fali płaskiej) wynosi w przybliżeniu:',
    options: [
      '\\(\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} \\approx 120\\pi \\approx 377\\ \\Omega\\)',
      '\\(\\eta_0 = 50\\ \\Omega\\)',
      '\\(\\eta_0 = 75\\ \\Omega\\)',
      '\\(\\eta_0 = 1\\ \\Omega\\)'
    ],
    correctIndex: 0,
    explanation: 'Impedancja falowa próżni \\(\\eta_0 = \\sqrt{\\mu_0 / \\varepsilon_0} = \\sqrt{4\pi \\cdot 10^{-7} / (8{,}854 \\cdot 10^{-12})} \\approx 376{,}73\\ \\Omega \\approx 120\\pi \\approx 377\\ \\Omega\\). Wiąże ona amplitudy pól: \\(E = \\eta_0 H\\).',
    flashcardFront: 'Impedancja falowa próżni \\(\\eta_0\\) — wzór i wartość:',
    flashcardBack: [
      'Wzór: \\(\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\varepsilon_0}} = \\frac{E}{H}\\)',
      'Wartość liczbowa: \\(\\eta_0 \\approx 120\\pi \\approx 377\\ \\Omega\\)',
      'W dielektryku o przenikalności \\(\\varepsilon_r\\): \\(\\eta = \\frac{\\eta_0}{\\sqrt{\\varepsilon_r}} = \\frac{377}{\\sqrt{\\varepsilon_r}}\\ \\Omega\\).'
    ],
    tips: [
      'Impedancja falowa ośrodka bezstratnego jest zdefiniowana jako pierwiastek ze stosunku przenikalności magnetycznej do elektrycznej: \\(\\sqrt{\\mu / \\varepsilon}\\).',
      'W próżni wielkość ta wiąże ze sobą chwilową wartość natężenia pola elektrycznego \\(E\\) [V/m] i magnetycznego \\(H\\) [A/m].',
      'Zastanów się nad stałymi fizycznymi: prędkość światła \\(c = 1/\\sqrt{\\varepsilon_0 \\mu_0}\\) oraz \\(\\mu_0 = 4\\pi \\cdot 10^{-7}\\ \\mathrm{H/m}\\). Wynik liczbowy wyraża się w omach i jest rzędu kilkuset.'
    ],
    tip: 'Impedancja falowa próżni (opór falowy) wynika ze stosunku stałych materiałowych próżni: \(\eta_0 = \sqrt{\mu_0 / \varepsilon_0}\).',
    relatedRoute: '/teoria/fala-propagacja#q1'
  },
  // Additional comprehensive exam questions
  {
    id: 'em-9',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier1',
    question: 'Wskaż równania materiałowe wiążące natężenia pól \\(\\vec{E}, \\vec{H}\\) z indukcjami \\(\\vec{D}, \\vec{B}\\) oraz gęstością prądu \\(\\vec{j}\\):',
    options: [
      '\\(\\vec{D} = \\varepsilon \\vec{E},\\quad \\vec{B} = \\mu \\vec{H},\\quad \\vec{j} = \\sigma \\vec{E}\\)',
      '\\(\\vec{D} = \\mu \\vec{E},\\quad \\vec{B} = \\varepsilon \\vec{H},\\quad \\vec{j} = \\frac{\\vec{E}}{\\sigma}\\)',
      '\\(\\vec{E} = \\varepsilon \\vec{D},\\quad \\vec{H} = \\mu \\vec{B},\\quad \\vec{j} = \\nabla \\times \\vec{E}\\)',
      '\\(\\vec{D} = \\varepsilon_0 \\vec{B},\\quad \\vec{B} = \\mu_0 \\vec{D},\\quad \\vec{j} = \\rho \\vec{v}\\)'
    ],
    correctIndex: 0,
    explanation: 'Równania materiałowe opisują reakcję ośrodka na pole: \\(\\vec{D} = \\varepsilon\\vec{E} = \\varepsilon_0 \\varepsilon_r \\vec{E}\\) (polaryzacja elektryczna), \\(\\vec{B} = \\mu\\vec{H} = \\mu_0 \\mu_r \\vec{H}\\) (namagnesowanie) oraz różniczkowe prawo Ohma \\(\\vec{j} = \\sigma \\vec{E}\\) (przewodnictwo właściwe).',
    flashcardFront: 'Równania materiałowe (związki konstytutywne) pola EM:',
    flashcardBack: [
      '\\(\\vec{D} = \\varepsilon \\vec{E} = \\varepsilon_0 \\varepsilon_r \\vec{E}\\) (indukcja elektryczna)',
      '\\(\\vec{B} = \\mu \\vec{H} = \\mu_0 \\mu_r \\vec{H}\\) (indukcja magnetyczna)',
      '\\(\\vec{j} = \\sigma \\vec{E}\\) (różniczkowe prawo Ohma)',
      'Natężenia \\(\\vec{E}, \\vec{H}\\) to ŹRÓDŁO (przyczyna), a indukcje \\(\\vec{D}, \\vec{B}\\) to EFEKT (reakcja materii).'
    ],
    tips: [
      'Równania Maxwella operują czterema wektorami: natężeniami (\\(\\vec{E}, \\vec{H}\\)) oraz indukcjami (\\(\\vec{D}, \\vec{B}\\)). Równania materiałowe stanowią „most” łączący te wielkości z właściwościami samego środowiska.',
      'Zastanów się, jakie stałe charakteryzują podatność dielektryczną, magnetyczną oraz zdolność materiału do przewodzenia ładunków.',
      'Zwróć uwagę na proporcjonalność: pole \\(\\vec{D}\\) wiąże się ze zjawiskiem polaryzacji dielektryka, \\(\\vec{B}\\) z namagnesowaniem, a gęstość prądu \\(\\vec{J}\\) z prawem Ohma w ujęciu lokalnym.'
    ],
    tip: 'Równania materiałowe wiążą natężenia pól (E, H) z indukcjami (D, B) i gęstością prądu przewodzenia (J) poprzez parametry ośrodka.',
    relatedRoute: '/teoria/fala-propagacja#q2'
  },
  {
    id: 'em-10',
    category: 'fale_em',
    categoryLabel: 'Fale i propagacja EM',
    tier: 'tier2',
    question: 'W jaki sposób deszcz i mgła wpływają na propagację fal radiowych w pasmach mikrofalowych (zwłaszcza powyżej 10 GHz)?',
    options: [
      'Krople deszczu o rozmiarach zbliżonych do długości fali silnie rozpraszają i pochłaniają energię fali (tłumienie rośnie drastycznie z częstotliwością).',
      'Deszcz tworzy idealny falowód atmosferyczny, który podwaja zasięg anten mikrofalowych.',
      'Mgła przyspiesza falę radiową o 50%, zmniejszając opóźnienie propagacyjne.',
      'Krople wody odwracają zwrot wektora Poyntinga w stronę nadajnika bez strat energii.'
    ],
    correctIndex: 0,
    explanation: 'Dla częstotliwości powyżej 10 GHz długość fali staje się porównywalna z rozmiarem kropel deszczu (milimetry). Zachodzi silne rozpraszanie Mie oraz absorpcja dielektryczna przez cząsteczki wody, co może powodować tłumienie rzędu kilkunastu dB/km i zrywać łącza radioliniowe.',
    flashcardFront: 'Wpływ opadów atmosferycznych (deszcz, mgła) na fale radiowe:',
    flashcardBack: [
      'Dla \\(f < 3\\ \\mathrm{GHz}\\): wpływ deszczu i mgły jest niemal pomijalny.',
      'Dla \\(f > 10\\ \\mathrm{GHz}\\) (mikrofale, 5G, radiolinie): silne tłumienie przez absorpcję i rozpraszanie Mie na kroplach deszczu.',
      'Dodatkowo cząsteczki tlenu (pik przy 60 GHz) i pary wodnej (pik przy 22 GHz) wykazują silną absorpcję rezonansową.',
      'Wymaga projektowania tzw. marginesu na zaniki deszczowe (rain fade margin).'
    ],
    tips: [
      'Pomyśl o relacji między długością fali a rozmiarem przeszkód w ośrodku. Dla częstotliwości rzędu 10–30 GHz długość fali wynosi od kilku centymetrów do milimetrów.',
      'Cząsteczki wody w kroplach deszczu i chmurach mają średnice zbliżone do długości takich fal, co powoduje silne oddziaływanie fal z cząstkami.',
      'Zastanów się, czy woda pochłania i rozprasza energię fali, czy może polepsza jej rozchodzenie się – jak to wpływa na zasięg łączy radiowych w czasie ulewy?'
    ],
    tip: 'Zwróć uwagę na długość fali radiowej przy częstotliwościach powyżej 10 GHz (fale centymetrowe i milimetrowe).',
    relatedRoute: '/teoria/fala-propagacja#q5'
  },
  {
    id: 'semi-7',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'Równanie Einsteina wiążące współczynnik dyfuzji \\(D\\) i ruchliwość nośników \\(\\mu\\) ma postać:',
    options: [
      '\\(\\frac{D}{\\mu} = \\frac{k T}{q} = V_T\\) (napięcie termiczne, ok. 26 mV w 300 K)',
      '\\(\\frac{D}{\\mu} = \\frac{q}{k T}\\)',
      '\\(D \\cdot \\mu = k T q\\)',
      '\\(\\frac{D}{\\mu} = \\sqrt{k T}\\)'
    ],
    correctIndex: 0,
    explanation: 'Relacja Einsteina \\(D_n / \\mu_n = D_p / \\mu_p = kT/q = V_T\\) łączy przypadkowy ruch cieplny cząstek (dyfuzja) z ich uporządkowanym ruchem w polu elektrycznym (ruchliwość/dryf). Napięcie termiczne \\(V_T = kT/q\\) w temperaturze pokojowej (300 K) wynosi ok. 25,9 mV (przyjmuje się 26 mV).',
    flashcardFront: 'Relacja Einsteina (dyfuzja a ruchliwość):',
    flashcardBack: [
      'Wzór: \\(\\frac{D}{\\mu} = \\frac{kT}{q} = V_T\\)',
      '\\(D\\) — współczynnik dyfuzji \\([\\mathrm{m^2/s}]\\), \\(\\mu\\) — ruchliwość nośników \\([\\mathrm{m^2/(V\\cdot s)}]\\).',
      '\\(V_T = \\frac{kT}{q} \\approx 26\\ \\mathrm{mV}\\) w temperaturze pokojowej (300 K).',
      'Łączy zjawiska transportu dyfuzyjnego i unoszenia w polu elektrycznym.'
    ],
    tips: [
      'Równanie to łączy zdolność nośników do przemieszczania się w polu elektrycznym (ruchliwość \\(\\mu\\)) z ich tendencją do wyrównywania stężeń (współczynnik dyfuzji \\(D\\)).',
      'W stanie równowagi termodynamicznej prąd unoszenia i prąd dyfuzji muszą się dokładnie równoważyć.',
      'Pomyśl, jaka wielkość fizyczna (związana z iloczynem stałej Boltzmanna i temperatury) determinuje średnią energię kinetyczną cząstek w zjawiskach termicznych.'
    ],
    tip: 'Zależność Einsteina wiąże ze sobą dwa pozornie niezależne zjawiska transportu ładunków w półprzewodniku: dyfuzję i unoszenie w polu.',
    relatedRoute: '/teoria/polprzewodniki#q19'
  },
  {
    id: 'mem-6',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'W komórce pamięci Flash z pływającą bramką (Floating Gate), w jaki sposób elektrony są wprowadzane na izolowaną bramkę podczas zapisu?',
    options: [
      'Przez tunelowanie kwantowe Fowlera-Nordheima (FN) lub iniekcję gorących elektronów (CHE) przez cienką warstwę tlenku tunelowego.',
      'Poprzez bezpośredni styk mechaniczny miniaturowej igły platynowej.',
      'Za pomocą promieniowania rentgenowskiego skupianego mikrosoczewką.',
      'Wskutek nagrzania bramki prądem zwarciowym do temperatury 1000 stopni Celsjusza.'
    ],
    correctIndex: 0,
    explanation: 'Pływająca bramka (Floating Gate) jest całkowicie otoczona dielektrykiem (SiO2). Zapis polega na przyłożeniu wysokiego napięcia (np. 15–20 V) do bramki sterującej, co wywołuje zjawisko tunelowania Fowlera-Nordheima (elektrony przebijają się kwantowo przez barierę potencjału tlenku) lub iniekcję gorących elektronów w pobliżu drenu. Uwięziony ładunek przesuwa napięcie progowe tranzystora.',
    flashcardFront: 'Zapis w pamięci Flash (Floating Gate) — mechanizmy fizyczne:',
    flashcardBack: [
      'Bramka pływająca jest odizolowana warstwą tlenku krzemu \\(\\mathrm{SiO_2}\\).',
      'ZAPIS / PROGRAMOWANIE:',
      '• Tunelowanie Fowlera-Nordheima (FN) pod wpływem silnego pola elektrycznego (\\(\\sim 10\\ \\mathrm{MV/cm}\\)).',
      '• Iniekcja gorących elektronów (CHE — Channel Hot Electron injection).',
      'Uwięzione elektrony na pływającej bramce podwyższają napięcie progowe \\(V_{th}\\) tranzystora.',
      'Trwałość komórki jest ograniczona degradacją tlenku tunelowego przy cyklach zapisu/kasowania.'
    ],
    tips: [
      'W komórkach pamięci Flash ładunek musi zostać wprowadzony na odizolowaną elektrycznie wyspę polikrzemową (pływającą bramkę) przez warstwę dielektryka.',
      'Ponieważ dielektryk stanowi barierę potencjału, w warunkach normalnych elektrony nie mogą przez niego przepływać.',
      'Przeniesienie ładunku wymaga wymuszenia przepływu elektronów za pomocą bardzo silnego pola elektrycznego wywołującego przejście przez barierę lub nadanie elektronom wysokiej energii kinetycznej.'
    ],
    tip: 'W komórkach Floating Gate ładunek elektryczny musi pokonać barierę potencjału dielektryka (tlenku tunelowego SiO2).',
    relatedRoute: '/teoria/pamieci-nosniki#q24'
  },
  {
    id: 'math-9',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Jaka jest prędkość fali elektromagnetycznej \\(v\\) w niemagnetycznym dielektryku o względnej przenikalności elektrycznej \\(\\varepsilon_r = 4\\)?',
    options: [
      '\\(1{,}5 \\cdot 10^8\\ \\mathrm{m/s}\\) (połowa prędkości światła w próżni \\(c/2\\)).',
      '\\(3 \\cdot 10^8\\ \\mathrm{m/s}\\) (dokładnie prędkość światła w próżni).',
      '\\(0{,}75 \\cdot 10^8\\ \\mathrm{m/s}\\) (jedna czwarta prędkości światła).',
      '\\(6 \\cdot 10^8\\ \\mathrm{m/s}\\) (dwa razy szybciej niż w próżni).'
    ],
    correctIndex: 0,
    explanation: 'Współczynnik załamania dielektryka to \\(n = \\sqrt{\\varepsilon_r \\mu_r} = \\sqrt{4 \\cdot 1} = 2\\). Prędkość fazowa fali wynosi \\(v = c / n = (3 \\cdot 10^8\\ \\mathrm{m/s}) / 2 = 1{,}5 \\cdot 10^8\\ \\mathrm{m/s}\\).',
    flashcardFront: 'Prędkość fali EM w dielektryku — wzór i zależność:',
    flashcardBack: [
      'Wzór: \\(v = \\frac{c}{\\sqrt{\\varepsilon_r \\mu_r}} = \\frac{c}{n}\\)',
      'Współczynnik załamania: \\(n = \\sqrt{\\varepsilon_r \\mu_r}\\) (dla dielektryków niemagnetycznych \\(n = \\sqrt{\\varepsilon_r}\\)).',
      'Dla \\(\\varepsilon_r = 4\\): \\(n = \\sqrt{4} = 2 \\implies v = c / 2 = 1{,}5 \\cdot 10^8\\ \\mathrm{m/s}\\).',
      'Długość fali w ośrodku również skraca się: \\(\\lambda = \\lambda_0 / n\\), natomiast częstotliwość \\(f\\) pozostaje STAŁA!'
    ],
    tips: [
      'Prędkość rozchodzenia się fali elektromagnetycznej zależy od parametrów materiałowych ośrodka, w którym fala propaguje.',
      'W próżni prędkość fali wynosi \\(c\\), natomiast w dielektryku materiałowym ulega spowolnieniu pod wpływem oddziaływania z ładunkami ośrodka.',
      'Dla ośrodków niemagnetycznych (gdzie \\(\\mu_r \\approx 1\\)) stopień spowolnienia fali wiąże się wprost ze względną przenikalnością elektryczną \\(\\varepsilon_r\\) lub współczynnikiem załamania \\(n\\).'
    ],
    tip: 'Prędkość fali elektromagnetycznej w próżni wynosi \(c \approx 300\ 000\ \mathrm{km/s}\).',
    relatedRoute: '/teoria/fala-propagacja#q2'
  },
  {
    id: 'semi-8',
    category: 'polprzewodniki',
    categoryLabel: 'Półprzewodniki i złącze p-n',
    tier: 'tier1',
    question: 'W stanie równowagi termodynamicznej półprzewodnika, iloczyn koncentracji elektronów i dziur (prawo działania mas) wynosi:',
    options: [
      '\\(n \\cdot p = n_i^2\\) i zależy wyłącznie od temperatury oraz materiału, niezależnie od stopnia domieszkowania.',
      '\\(n \\cdot p = N_D + N_A\\) i rośnie proporcjonalnie do napięcia polaryzacji.',
      '\\(n \\cdot p = 0\\), ponieważ nośniki przeciwnego znaku natychmiast znoszą się do zera.',
      '\\(n \\cdot p = \\frac{1}{k T}\\) i maleje wraz ze wzrostem temperatury.'
    ],
    correctIndex: 0,
    explanation: 'Prawo działania mas w półprzewodniku orzeka, że w stanie równowagi iloczyn stężenia elektronów swobodnych i dziur jest stałą wartością równą kwadratowi koncentracji samoistnej: \\(n \\cdot p = n_i^2(T)\\). Jeśli domieszkujemy materiał donorami (np. \\(n = N_D = 10^{16}\\ \\mathrm{cm^{-3}}\\)), to stężenie dziur drastycznie spada do \\(p = n_i^2 / N_D\\).',
    flashcardFront: 'Prawo działania mas w półprzewodniku (stan równowagi):',
    flashcardBack: [
      'Wzór: \\(n \\cdot p = n_i^2(T)\\)',
      '\\(n_i\\) to koncentracja nośników w półprzewodniku samoistnym (dla krzemu w 300 K: \\(n_i \\approx 1{,}5 \\cdot 10^{10}\\ \\mathrm{cm^{-3}}\\)).',
      'Iloczyn zależy SILNIE od temperatury (wykładniczo), ale NIE zależy od poziomu domieszkowania.',
      'Zwiększenie koncentracji elektronów (typ n) automatycznie dusi koncentrację dziur mniejszościowych.'
    ],
    tips: [
      'Rozważ stan czystego półprzewodnika samoistnego w określonej temperaturze, gdzie stężenie elektronów i dziur jest sobie równe (\\(n_i\\)).',
      'Wprowadzenie domieszek donorowych dramatycznie zwiększa liczbę elektronów, co jednocześnie drastycznie podnosi prawdopodobieństwo ich rekombinacji z dziurami.',
      'Prawo to orzeka, że przy ustalonej temperaturze iloczyn koncentracji nośników obu znaków w równowadze pozostaje wielkością niezmienną.'
    ],
    tip: 'Prawo działania mas (Mass Action Law) orzeka, że w stanie równowagi termodynamicznej tempo generacji termicznej par elektron-dziura równa się tempu ich rekombinacji.',
    relatedRoute: '/teoria/polprzewodniki#q17'
  },
  {
    id: 'mem-7',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'W tranzystorze bipolarnym (BJT) typu npn pracującym w normalnym stanie aktywnym (wzmacniającym):',
    options: [
      'Złącze emiter-baza jest spolaryzowane w kierunku przewodzenia, a złącze baza-kolektor w kierunku zaporowym; prąd kolektora wynosi \\(I_C = \\beta I_B\\).',
      'Oba złącza (E-B oraz B-C) są spolaryzowane w kierunku przewodzenia (stan nasycenia).',
      'Złącze emiter-baza jest spolaryzowane zaporowo, a kolektor-baza w przewodzenia.',
      'Tranzystor nie przewodzi żadnego prądu dopóki napięcie kolektora nie przekroczy 100 V.'
    ],
    correctIndex: 0,
    explanation: 'W stanie aktywnym normalnym złącze emiter-baza (EBJ) polaryzuje się w kierunku przewodzenia (ok. 0,7 V dla Si), dzięki czemu elektrony są wstrzykiwane z emitera do cienkiej bazy. Złącze kolektor-baza (CBJ) polaryzuje się zaporowo, więc pole elektryczne natychmiast „wciąga” elektrony dyfundujące przez bazę do kolektora. Prąd kolektora jest niemal równy prądowi emitera (\\(I_C \\approx I_E\\)) i sterowany prądem bazy \\(I_C = \\beta I_B\\).',
    flashcardFront: 'Warunki polaryzacji BJT w aktywnym obszarze pracy:',
    flashcardBack: [
      'Emiter–Baza (EBJ): W KIERUNKU PRZEWODZENIA (\\(V_{BE} \\approx 0{,}7\\ \\mathrm{V}\\)).',
      'Kolektor–Baza (CBJ): W KIERUNKU ZAPOROWYM (\\(V_{BC} < 0\\)).',
      'Współczynnik wzmocnienia prądowego: \\(\\beta = \\frac{I_C}{I_B}\\) (zazwyczaj 50–300).',
      'Baza musi być fizycznie BARDZO CIENKA i słabo domieszkowana, aby większość elektronów z emitera dotarła do kolektora bez rekombinacji w bazie.'
    ],
    tips: [
      'Tranzystor bipolarny npn składa się z dwóch przeciwstawnych złączy p-n: złącza emiter-baza oraz złącza baza-kolektor.',
      'W aktywnym stanie wzmacniającym elektrony muszą być efektywnie emitowane do cienkiej bazy, a następnie przechwytywane przez obszar kolektora.',
      'Zastanów się, jakie znaki potencjałów na poszczególnych elektrodach zapewnią jednoczesne obniżenie bariery emiterowej i skuteczne ściąganie nośników w stronę kolektora.'
    ],
    tip: 'W normalnym aktywnym stanie pracy tranzystora bipolarnego npn elektrony muszą być wstrzykiwane z emitera i przepływać do kolektora.',
    relatedRoute: '/teoria/pamieci-nosniki#q22'
  },
  {
    id: 'mem-8',
    category: 'pamieci',
    categoryLabel: 'Pamięci, dyski i GMR',
    tier: 'tier1',
    question: 'Czym różni się pamięć statyczna SRAM od pamięci dynamicznej DRAM?',
    options: [
      'SRAM oparta jest na bistabilnym przerzutniku (np. 6 tranzystorów), jest bardzo szybka i nie wymaga odświeżania; DRAM oparta jest na 1 tranzystorze i kondensatorze, ma dużą gęstość, ale wymaga cyklicznego odświeżania ładunku (refresh).',
      'SRAM traci dane po zaniku zasilania, a DRAM zachowuje dane wiecznie bez zasilania.',
      'SRAM stosowana jest w dyskach twardych, a DRAM na taśmach magnetycznych.',
      'SRAM wymaga chłodzenia ciekłym azotem, a DRAM działa w temperaturze do 500 °C.'
    ],
    correctIndex: 0,
    explanation: 'Komórka SRAM (Static RAM, komórka 6T) przechowuje bit w przerzutniku bistabilnym — tak długo jak jest zasilanie, stan jest trwały bez konieczności odświeżania. Jest niesłychanie szybka (ułamki nanosekund), ale zajmuje dużą powierzchnię krzemu (pamięci podręczne cache CPU). Komórka DRAM (1T1C) magazynuje ładunek w mikrokondensatorze — z powodu upływności ładunek ucieka w ciągu milisekund, dlatego kontroler musi cyklicznie odczytywać i doładowywać komórki (odświeżanie DRAM).',
    flashcardFront: 'SRAM vs DRAM — kluczowe różnice komórek:',
    flashcardBack: [
      'SRAM (Static RAM):',
      '• Komórka: 4 lub 6 tranzystorów (przerzutnik bistabilny).',
      '• Bardzo szybka (czas dostępu < 1 ns), brak odświeżania.',
      '• Mała gęstość, droższa \\(\\to\\) Pamięci podręczne Cache L1/L2/L3.',
      'DRAM (Dynamic RAM):',
      '• Komórka: 1 tranzystor + 1 kondensator (1T1C).',
      '• Kondensator ulega rozładowaniu \\(\\to\\) WYMAGA CYKLICZNEGO ODŚWIEŻANIA (Refresh).',
      '• Gigantyczna gęstość upakowania i tani gigabajt \\(\\to\\) Pamięć operacyjna RAM w PC.'
    ],
    tips: [
      'Różnica między tymi pamięciami tkwi w konstrukcji pojedynczej komórki elementarnej przechowującej jeden bit informacji.',
      'Jedna z nich przechowuje ładunek na mikroskopijnej pojemności pasożytniczej, z której ładunek nieuchronnie ucieka na skutek prądów upływu.',
      'Druga z nich wykorzystuje stabilny układ bistabilny zbudowany z kilku połączonych krzyżowo tranzystorów, który nie wymaga okresowego odtwarzania stanu.'
    ],
    tip: 'Pomyśl o konstrukcji elementarnej komórki: ile tranzystorów i kondensatorów zawiera komórka SRAM, a ile DRAM.',
    relatedRoute: '/teoria/pamieci-nosniki#q21'
  },
  {
    id: 'opt-8',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Jak zależy tłumienie spowodowane rozpraszaniem Rayleigha we włóknach optycznych od długości fali \\(\\lambda\\)?',
    options: [
      'Jest odwrotnie proporcjonalne do czwartej potęgi długości fali: \\(\\alpha_R \\propto \\frac{1}{\\lambda^4}\\).',
      'Rośnie liniowo wraz z długością fali: \\(\\alpha_R \\propto \\lambda\\).',
      'Jest całkowicie niezależne od długości fali światła.',
      'Jest odwrotnie proporcjonalne do pierwiastka z długości fali: \\(\\alpha_R \\propto \\frac{1}{\\sqrt{\\lambda}}\\).'
    ],
    correctIndex: 0,
    explanation: 'Rozpraszanie Rayleigha wynika z mikroskopijnych fluktuacji gęstości krzemionki zamrożonych podczas stygnięcia włókna. Zgodnie z prawem Rayleigha natężenie rozpraszania zależy od \\(\\lambda^{-4}\\). Z tego powodu tłumienie w oknie 850 nm wynosi ok. 2–3 dB/km, w 1310 nm ok. 0,35 dB/km, a w 1550 nm spada do ok. 0,2 dB/km.',
    flashcardFront: 'Zależność rozpraszania Rayleigha od długości fali:',
    flashcardBack: [
      'Prawo Rayleigha: \\(\\alpha_R \\propto \\frac{1}{\\lambda^4}\\)',
      'Dwukrotne zwiększenie długości fali zmniejsza rozpraszanie aż \\(2^4 = 16\\)-krotnie!',
      'Wyjaśnia, dlaczego okna o dłuższej fali (1310 nm i 1550 nm) mają drastycznie mniejsze tłumienie niż I okno (850 nm).',
      'To samo zjawisko odpowiada za niebieski kolor nieba za dnia i czerwony o zachodzie słońca.'
    ],
    tips: [
      'Zjawisko to wynika z mikroskopijnych, zamrożonych w strukturze szkła fluktuacji gęstości krzemionki, których wymiary są znacznie mniejsze od długości fali.',
      'Jest to ten sam mechanizm fizyczny, który odpowiada za błękitną barwę ziemskiego nieba w słoneczny dzień.',
      'Zastanów się, w jaki sposób rozpraszanie fal na bardzo małych cząstkach zależy od długości fali – jest to niezwykle stroma funkcja potęgowa.'
    ],
    tip: 'Rozpraszanie Rayleigha wynika z mikroskopijnych niejednorodności gęstości szkła w procesie wytapiania światłowodu.',
    relatedRoute: '/teoria/swiatlowody#q9'
  },
  {
    id: 'opt-9',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier1',
    question: 'Światłowodowa siatka Bragga (FBG - Fiber Bragg Grating) działa jak filtr odbiciowy dla fali o długości spełniającej warunek:',
    options: [
      '\\(\\lambda_B = 2 n_{eff} \\Lambda\\), gdzie \\(n_{eff}\\) to efektywny współczynnik załamania, a \\(\\Lambda\\) to okres siatki.',
      '\\(\\lambda_B = \\frac{n_{eff}}{2 \\Lambda}\\).',
      '\\(\\lambda_B = n_1 - n_2\\).',
      '\\(\\lambda_B = \\Lambda^2 \\cdot c\\).'
    ],
    correctIndex: 0,
    explanation: 'Siatka FBG to periodyczna zmiana współczynnika załamania rdzenia wytworzona promieniowaniem UV. Odbija ona selektywnie wąskie pasmo światła o długości \\(\\lambda_B = 2 n_{eff} \\Lambda\\) (warunek interferencji konstruktywnej fal odbitych od kolejnych prążków), przepuszczając wszystkie pozostałe długości fali.',
    flashcardFront: 'Światłowodowa siatka Bragga (FBG) — zasada i warunek odbicia:',
    flashcardBack: [
      'Warunek Bragga: \\(\\lambda_B = 2 n_{eff} \\Lambda\\)',
      '\\(\\Lambda\\) — okres modulacji współczynnika załamania w rdzeniu.',
      'Działa jak selektywne lustro: odbija wąską wstęgę \\(\\lambda_B\\), przepuszcza całą resztę.',
      'Zastosowanie:',
      '• Filtry i multipleksery w systemach WDM,',
      '• Kompensatory dyspersji (siatki chirpowane o zmiennym okresie),',
      '• Światłowodowe czujniki naprężeń i temperatury.'
    ],
    tips: [
      'Wyobraź sobie odcinek rdzenia światłowodu, w którym za pomocą lasera UV wytworzono periodyczną, prążkową strukturę o zmiennym współczynniku załamania.',
      'Fale o różnych długościach odbijają się od kolejnych prążków. Dla jednej specyficznej długości fali odbicia te sumują się w fazie (interferencja konstruktywna).',
      'Element ten zachowuje się jak wybiórcze zwierciadło: jedną ściśle określoną długość fali zawraca, a wszystkie pozostałe przepuszcza bez przeszkód.'
    ],
    tip: 'Światłowodowa siatka Bragga to okresowa zmiana współczynnika załamania w rdzeniu światłowodu.',
    relatedRoute: '/teoria/swiatlowody#q11'
  },
  {
    id: 'opt-10',
    category: 'swiatlowody',
    categoryLabel: 'Światłowody i optyka',
    tier: 'tier2',
    question: 'Zjawisko dyspersji polaryzacyjnej (PMD) we włóknach optycznych:',
    options: [
      'Wynika z przypadkowej asymetrii geometrycznej i naprężeń w rdzeniu (dwójłomność), przez co dwie ortogonalne składowe polaryzacji biegną z różnymi prędkościami.',
      'Występuje wyłącznie wtedy, gdy do światłowodu wprowadzimy promień lasera o mocy powyżej 100 W.',
      'Może być w 100% skompensowane zwykłym odcinkiem włókna DCF bez względu na temperaturę.',
      'Zwiększa szerokość pasma światłowodu o współczynnik 2.'
    ],
    correctIndex: 0,
    explanation: 'W rzeczywistym włóknie rdzeń nie jest idealnie kołowy, a w szkle występują naprężenia mechaniczne. Wywołuje to dwójłomność (birefringence): fale o polaryzacji pionowej i poziomej poruszają się z minimalnie różnymi prędkościami. Różnica czasowa (DGD - Differential Group Delay) rośnie proporcjonalnie do pierwiastka z długości łącza (\\(\\Delta \\tau \\propto \\sqrt{L}\\)) i ma charakter losowy zależny od temperatury.',
    flashcardFront: 'Dyspersja polaryzacyjna (PMD) — geneza i cechy:',
    flashcardBack: [
      'Przyczyna: Nieidealna kołowość rdzenia i naprężenia mechaniczne \\(\\to\\) DWÓJŁOMNOŚĆ.',
      'Dwie składowe polaryzacji (oś szybka i wolna) rozchodzą się z różną prędkością grupową.',
      'Opóźnienie międzypolaryzacyjne: \\(\\Delta \\tau_{PMD} = D_{PMD} \\sqrt{L}\\) (rośnie z PIERWIASTKIEM długości!).',
      'Ma charakter STATYSTYCZNY i fluktuuje w czasie pod wpływem drgań kabla i zmian temperatury.',
      'Staje się barierą przy przepływnościach 10 Gb/s, 40 Gb/s, 100 Gb/s na długich trasach.'
    ],
    tips: [
      'W rzeczywistym włóknie rdzeń nigdy nie ma idealnie idealnego, symetrycznego przekroju poprzecznego na całej długości trasy (występują naprężenia i mikroskopijna eliptyczność).',
      'Mod podstawowy światła można rozłożyć na dwie ortogonalne składowe polaryzacji pola elektrycznego.',
      'Zastanów się, co się dzieje, gdy z powodu niesymetrii rdzenia jedna z tych składowych porusza się minimalnie szybciej niż druga i jak wpływa to na czas trwania impulsu przy bardzo wysokich przepływnościach.'
    ],
    tip: 'Zjawisko dyspersji polaryzacyjnej (PMD) wiąże się z brakiem idealnej symetrii kołowej rdzenia włókna światłowodowego.',
    relatedRoute: '/teoria/swiatlowody#q10'
  },
  {
    id: 'math-10',
    category: 'zadania_wzory',
    categoryLabel: 'Wzory i reguły kciuka',
    tier: 'tier1',
    question: 'Oblicz maksymalny zasięg łącza optycznego: moc nadajnika \\(P_T = 0\\ \\mathrm{dBm}\\), czułość odbiornika \\(P_{R,min} = -28\\ \\mathrm{dBm}\\), tłumienie kabla \\(\\alpha = 0{,}25\\ \\mathrm{dB/km}\\), łączne straty na złączach i spawach \\(L_{straty} = 3\\ \\mathrm{dB}\\), margines \\(M = 5\\ \\mathrm{dB}\\).',
    options: [
      '\\(80\\ \\mathrm{km}\\)',
      '\\(112\\ \\mathrm{km}\\)',
      '\\(40\\ \\mathrm{km}\\)',
      '\\(25\\ \\mathrm{km}\\)'
    ],
    correctIndex: 0,
    explanation: 'Równanie budżetu mocy: \\(P_T - P_{R,min} = \\alpha L + L_{straty} + M\\). Dostępna dynamika: \\(0 - (-28) = 28\\ \\mathrm{dB}\\). Odejmujemy złącza i margines: \\(28 - 3 - 5 = 20\\ \\mathrm{dB}\\). Dopuszczalne tłumienie włókna to 20 dB. Długość: \\(L = 20\\ \\mathrm{dB} / (0{,}25\\ \\mathrm{dB/km}) = 20 \\cdot 4 = 80\\ \\mathrm{km}\\).',
    flashcardFront: 'Zadanie z budżetu mocy łącza — algorytm obliczeń:',
    flashcardBack: [
      '1. Oblicz budżet całkowity (dynamikę): \\(A_{tot} = P_T - P_{R,min}\\).',
      '2. Odejmij straty stałe: złącza, spawy i margines bezpieczeństwa \\(M\\): \\(A_{włókna} = A_{tot} - \\sum A_z - M\\).',
      '3. Wyznacz zasięg: \\(L = \\frac{A_{włókna}}{\\alpha}\\).',
      'Przykład: dynamika 28 dB, straty stałe 8 dB \\(\\to\\) zostaje 20 dB. Przy 0,25 dB/km zasięg wynosi dokładnie 80 km.'
    ],
    tips: [
      'Zastosuj zasadę bilansu budżetu mocy: całkowity dozwolony spadek mocy optycznej to różnica między mocą nadawaną a czułością odbiornika.',
      'Od całkowitej dostępnej puli decybeli należy w pierwszej kolejności odliczyć wymagany margines bezpieczeństwa eksploatacyjnego.',
      'Pozostałą rezerwę tłumienia dzieli się przez tłumienność jednostkową kabla światłowodowego wyrażoną w dB/km, co bezpośrednio daje maksymalny zasięg w kilometrach.'
    ],
    tip: 'Zastosuj wzór bilansu mocy optycznej: \(P_T - P_R = \alpha \cdot L_{max} + \text{margines}\).',
    relatedRoute: '/zadania/2'
  }
];

