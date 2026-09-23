// De nio demos som ännu bara är brief_ready: genomarbetat underlag och
// katalogkort, men ingen egen tokens-fil eller fullt byggd sajt än.
// Basdata hämtad direkt ur docs/webbportfolio-spec/hemsidor/*.md.
//
// Max tre sidor delar samma strukturella mall (list/recommend/visual), och
// varje sidas funktionsinslag är ordagrant briefens egen "Primär funktion"
// — inte en påhittad ersättare — så det känns branschäkta (en frisör utan
// bokningskänsla, en fastighetssajt utan filter osv. skulle kännas fel).
export type BriefTemplate = "list" | "recommend" | "visual";

export interface FilterOption {
  id: string;
  label: string;
}

export interface ListItem {
  id: string;
  title: string;
  meta: string;
  tags: string[];
}

export interface RecommendOption {
  id: string;
  label: string;
  resultTitle: string;
  resultText: string;
}

export interface VisualOption {
  id: string;
  label: string;
  detailTitle: string;
  detailText: string;
}

export interface BriefDemo {
  slug: string;
  branch: string;
  name: string;
  category: string;
  tone: string;
  imagery: string;
  palette: string[];
  headline: string;
  subheadline: string;
  structure: string[];
  interactiveIdeas: string[];
  primaryFunction: string;
  differentiator: string;
  template: BriefTemplate;

  // Mall A — lista/filter
  filterPrompt?: string;
  filters?: FilterOption[];
  listItems?: ListItem[];

  // Mall B — väljare → rekommendation
  recommendPrompt?: string;
  recommendOptions?: RecommendOption[];

  // Mall C — bildledd med egen väljare
  visualPrompt?: string;
  visualOptions?: VisualOption[];
}

export const briefDemos: BriefDemo[] = [
  // ---------- Mall A — lista/filter ----------
  {
    slug: "fastighet",
    branch: "Fastighetsförmedling",
    name: "Hemlinjen",
    category: "Företag och handel",
    tone: "Lokal, kunnig, transparent, arkitektonisk",
    imagery: "Fasader, planlösningsliknande grafik, material och områdesliv",
    palette: ["#F5F2EA", "#1D2925", "#B84E38", "#477A8B", "#FFFFFF"],
    headline: "Hitta ett hem genom att förstå platsen först.",
    subheadline: "En horisontell objektlista visar boendetyp, område och nästa fiktiva visning.",
    structure: [
      "Filter för område, boendetyp och vardagsbehov",
      "Fiktiv objektlista",
      "Objektdetalj med bildserie och faktablock",
      "Områdesguide",
      "Jämför två objekt som demo",
      "Visningsintresse utan inskick",
      "Säljprocess som översikt",
    ],
    interactiveIdeas: ["Områdes- och livsstilsfilter som förändrar objektlistan och visar varför"],
    primaryFunction: "Områdes- och livsstilsfilter förändrar objektlistan och visar motiveringen bakom träffarna.",
    differentiator: "Får inte kännas som hotellbokning, webbshopsproduktgrid eller lyxmäklarmall.",
    template: "list",
    filterPrompt: "Filtrera efter boendetyp",
    filters: [
      { id: "lagenhet", label: "Lägenhet" },
      { id: "villa", label: "Villa" },
      { id: "radhus", label: "Radhus" },
      { id: "fritidshus", label: "Fritidshus" },
    ],
    listItems: [
      { id: "1", title: "Vindsvåning vid Kanalgatan", meta: "2 rum · centralt läge", tags: ["lagenhet"] },
      { id: "2", title: "Trädgårdsvilla i Änggården", meta: "5 rum · stor tomt", tags: ["villa"] },
      { id: "3", title: "Radhus nära skolan", meta: "4 rum · barnvänligt område", tags: ["radhus"] },
      { id: "4", title: "Sjönära fritidshus", meta: "3 rum · egen brygga", tags: ["fritidshus"] },
      { id: "5", title: "Ljus tvåa centralt", meta: "2 rum · balkong", tags: ["lagenhet"] },
    ],
  },
  {
    slug: "webbshop",
    branch: "Webbshop",
    name: "Butik Fält",
    category: "Företag och handel",
    tone: "Kurerad, taktil, nyfiken, exakt",
    imagery: "Materialdetaljer, objekt i användning, skala och förpackning",
    palette: ["#F8F8F4", "#172338", "#D8CDBB", "#2855D9", "#FFFFFF"],
    headline: "Föremål valda för att användas länge.",
    subheadline: "En nischbutik som visar produktupptäckt, jämförelse och ett tryggt köpflöde utan verklig handel.",
    structure: [
      "Kurerad produktvägg",
      "Filter för material, användning och prisintervall som demo",
      "Produktdetalj med mått, material och skötsel",
      "Jämförelse mellan tre produkter",
      "Leverans- och returinformation som exempel",
      "Varukorgssimulering",
    ],
    interactiveIdeas: [
      "Material- och användningsfilter som omformar sortimentet",
      "Varukorg som lokalt demotillstånd — tar aldrig betalt eller skapar order",
    ],
    primaryFunction: "Material- och användningsfilter omformar sortimentet och förklarar varför.",
    differentiator: "Får inte se ut som caféets meny, bilvårdens paketjämförelse eller en generisk marknadsplats.",
    template: "list",
    filterPrompt: "Filtrera efter material",
    filters: [
      { id: "tra", label: "Trä" },
      { id: "keramik", label: "Keramik" },
      { id: "textil", label: "Textil" },
      { id: "metall", label: "Metall" },
    ],
    listItems: [
      { id: "1", title: "Handdrejad kaffemugg", meta: "Exempelpris: X XX kr", tags: ["keramik"] },
      { id: "2", title: "Snidad brödkniv i ek", meta: "Exempelpris: X XX kr", tags: ["tra"] },
      { id: "3", title: "Vävd bordslöpare", meta: "Exempelpris: X XX kr", tags: ["textil"] },
      { id: "4", title: "Gjuten ljusstake", meta: "Exempelpris: X XX kr", tags: ["metall"] },
      { id: "5", title: "Linnehandduk, tvättad", meta: "Exempelpris: X XX kr", tags: ["textil"] },
    ],
  },
  {
    slug: "kultur",
    branch: "Kulturförening",
    name: "Ladan",
    category: "Kultur och lärande",
    tone: "Mänsklig, varm, lokal, inkluderande",
    imagery: "Scenljus, affischer, publikdetaljer, lokala miljöer, verkstadskänsla",
    palette: ["#F2EEE5", "#24221F", "#D6403A", "#2D63C8", "#E6C94F"],
    headline: "Här händer det något varje vecka.",
    subheadline: "En föreningsdemo för arrangemang, medlemskap, volontärer och lokala berättelser.",
    structure: [
      "Programdriven hero",
      "Kommande arrangemang",
      "Kalenderfilter",
      "Om föreningen",
      "Medlemskap",
      "Volontärspår",
      "Nyhetsbrev som demo",
    ],
    interactiveIdeas: [
      "Filtrera program efter musik, samtal, workshop och familj",
      "Visa medlemsnytta",
      "Nyhetsbrev som tydlig demo utan inskick",
    ],
    primaryFunction: "Programfilter som bevarar datumordning och visar aktiva filter tydligt.",
    differentiator: "Ska inte bli kommersiell säljsida, premiumhotell eller företagskonsult.",
    template: "list",
    filterPrompt: "Filtrera programmet",
    filters: [
      { id: "musik", label: "Musik" },
      { id: "samtal", label: "Samtal" },
      { id: "workshop", label: "Workshop" },
      { id: "familj", label: "Familj" },
    ],
    listItems: [
      { id: "1", title: "Fredagsjazz i Ladan", meta: "Fredag 19.00", tags: ["musik"] },
      { id: "2", title: "Samtalskväll om lokalhistoria", meta: "Onsdag 18.30", tags: ["samtal"] },
      { id: "3", title: "Vävworkshop för nybörjare", meta: "Lördag 11.00", tags: ["workshop"] },
      { id: "4", title: "Familjelördag med pyssel", meta: "Lördag 13.00", tags: ["familj"] },
      { id: "5", title: "Akustisk singer-songwriter-kväll", meta: "Söndag 17.00", tags: ["musik"] },
    ],
  },

  // ---------- Mall B — väljare → rekommendation ----------
  {
    slug: "tandvard",
    branch: "Tandvård",
    name: "Tandrum",
    category: "Hälsa och aktivitet",
    tone: "Lugn, rak, omtänksam, saklig",
    imagery: "Ljusa rum, material, välkomnande miljöer, neutrala arbetsdetaljer — inga patientbilder",
    palette: ["#F7FAF9", "#163F46", "#73BFD1", "#DCE8E6", "#FFFFFF"],
    headline: "Tydlig tandvård, från första fråga till nästa steg.",
    subheadline: "Två likvärdiga vägar visas direkt: boka planerad tid, eller akuta besvär.",
    structure: [
      "Två kontaktvägar",
      "Behandlingar förklarade i vardagsspråk",
      "Så går ett besök till",
      "Tillgänglighet och stöd inför besöket",
      "Teamroller utan verkliga personer",
      "Behovsväljare som demo",
      "Kontakt- och kartplatshållare",
    ],
    interactiveIdeas: [
      "Behovsväljare visar relevant kontaktväg utan att ställa diagnos",
      "Akutläge visar endast en tydlig demoförklaring",
    ],
    primaryFunction: "Behovsväljare visar relevant kontaktväg — ställer ingen diagnos, samlar ingen hälsodata.",
    differentiator: "Inte lyxig som hotell, modeinriktad som frisör eller formulärtung som offertdemo.",
    template: "recommend",
    recommendPrompt: "Vad gäller det?",
    recommendOptions: [
      {
        id: "planerad",
        label: "Planerad tid",
        resultTitle: "Boka en vanlig undersökning",
        resultText: "En rutinkontroll bokas normalt inom ett par veckor. Ingen diagnos ställs här — det här är bara en väg in.",
      },
      {
        id: "akut",
        label: "Akuta besvär",
        resultTitle: "Vi prioriterar akuta besvär",
        resultText: "Vid akuta besvär visas normalt en snabbare kontaktväg, samma dag om möjligt. Demo — inget bokas på riktigt här.",
      },
    ],
  },
  {
    slug: "bilvard",
    branch: "Bilvård",
    name: "Glansverk",
    category: "Lokala tjänster",
    tone: "Noggrann, teknisk, resultatinriktad, premium",
    imagery: "Lack, reflektioner, interiördetaljer, före/efter-resultat",
    palette: ["#111417", "#F5F7F8", "#4D8DFF", "#7C8792", "#D9DEE2"],
    headline: "Bilvård där resultatet syns i varje detalj.",
    subheadline: "En bilvårdsdemo för verksamheter som vill visa paket, process och resultat utan att sidan känns rörig.",
    structure: [
      "Resultatdriven hero",
      "Paketjämförelse",
      "Före/efter-modul",
      "Arbetsprocess",
      "Tillägg",
      "Tidsbokning som demo",
      "Vanliga frågor",
    ],
    interactiveIdeas: [
      "Paketväljare",
      "Före/efter-slider om tekniken stödjer det",
      "Rekommenderat paket efter biltyp som demo",
    ],
    primaryFunction: "Biltyp och behov ger ett tydligt demoförslag på paket med förklaring.",
    differentiator: "Får inte låna caféets mjukhet, hotellens långsamhet eller träningssidans energi.",
    template: "recommend",
    recommendPrompt: "Vilken biltyp gäller det?",
    recommendOptions: [
      {
        id: "vardagsbil",
        label: "Vardagsbil",
        resultTitle: "Baspaket",
        resultText: "Tvätt, dammsugning och en snabb interiörgenomgång — för bilen som körs varje dag.",
      },
      {
        id: "familjebil",
        label: "Familjebil / SUV",
        resultTitle: "Familjepaket",
        resultText: "Grundligare interiörvård, anpassad för smulor, lera och barnstolar.",
      },
      {
        id: "premiumbil",
        label: "Premiumbil",
        resultTitle: "Detaljpaket",
        resultText: "Handpolering och lackskydd med extra tid på ytor som syns.",
      },
    ],
  },
  {
    slug: "utbildning",
    branch: "Utbildning/kursverksamhet",
    name: "Kursverk",
    category: "Kultur och lärande",
    tone: "Pedagogisk, konkret, nyfiken, uppmuntrande",
    imagery: "Verkstad, anteckningar, lärsituationer, tydliga ämnessymboler",
    palette: ["#EEF3F8", "#172A49", "#F0C54B", "#7358C8", "#FFFFFF"],
    headline: "Börja på rätt nivå och se vart kursen leder.",
    subheadline: "Tre lärvägar visar nivå, tidsåtgång och mål direkt — inga kurskoder att tolka.",
    structure: [
      "Tre lärvägar",
      "Kurskatalog med nivå- och tidsfilter",
      "Kursdetalj med mål, upplägg och förkunskaper",
      "Veckoschema som lista",
      "Pedagogroller utan verkliga personer",
      "Rekommenderad lärväg som demo",
      "Intresseanmälan utan inskick",
    ],
    interactiveIdeas: ["Nivåväljare som bygger en rekommenderad lärväg och förklarar valet"],
    primaryFunction: "Nivåväljaren bygger en rekommenderad lärväg — vägledning i demon, inte antagning.",
    differentiator: "Får inte bli träningsschema, konsultprocess eller kulturföreningens programkalender.",
    template: "recommend",
    recommendPrompt: "Vilken nivå passar dig?",
    recommendOptions: [
      {
        id: "nyborjare",
        label: "Nybörjare",
        resultTitle: "Grundkurs + stödmaterial",
        resultText: "Börjar från grunden med extra stödmaterial och lägre tempo, inga förkunskaper krävs.",
      },
      {
        id: "fortsattning",
        label: "Fortsättning",
        resultTitle: "Fördjupningskurs med projekt",
        resultText: "Bygger vidare på grunderna genom ett eget projekt med löpande handledning.",
      },
      {
        id: "avancerad",
        label: "Avancerad",
        resultTitle: "Mästarklass med mentorskap",
        resultText: "Högt tempo, eget ansvar och en mentor kopplad till kursen.",
      },
    ],
  },

  // ---------- Mall C — bildledd med egen väljare ----------
  {
    slug: "hotell",
    branch: "Boutiquehotell",
    name: "Vikrum",
    category: "Mat och boende",
    tone: "Stillsam, sinnlig, premium, platsnära",
    imagery: "Rum, textilier, frukost, landskap, stilla detaljer",
    palette: ["#ECEBE6", "#283436", "#8CA0A1", "#B08A57", "#FAF9F5"],
    headline: "En lugn plats för långsamma dagar.",
    subheadline: "En hotelldemo som visar hur rum, upplevelser och bokningsresa kan kännas samlad och personlig.",
    structure: [
      "Fullbleed hero",
      "Rumstyper",
      "Säsongspaket",
      "Frukost och upplevelser",
      "Lokala tips",
      "Bokningssimulering",
      "Frågor före vistelse",
    ],
    interactiveIdeas: [
      "Rumsväljare",
      "Datumfält som demo utan verklig bokning",
      "Säsongsväxlare: vår, sommar, höst, vinter",
    ],
    primaryFunction: "Säsongsväljaren ändrar upplevelser, bildton och paketcopy.",
    differentiator: "Inte sportig, inte offertdriven och inte cafévardaglig.",
    template: "visual",
    visualPrompt: "Byt säsong",
    visualOptions: [
      { id: "var", label: "Vår", detailTitle: "Vårpaket", detailText: "Långsamma morgnar, lokala vandringar och ljusare kvällar." },
      { id: "sommar", label: "Sommar", detailTitle: "Sommarpaket", detailText: "Frukost på terrassen och svalkande kvällsdopp." },
      { id: "host", label: "Höst", detailTitle: "Höstpaket", detailText: "Öppen spis, lugna helger och färgstarka omgivningar." },
      { id: "vinter", label: "Vinter", detailTitle: "Vinterpaket", detailText: "Varma bad, stilla utsikt och tidig kvällsmörker som atmosfär." },
    ],
  },
  {
    slug: "frisor",
    branch: "Frisör",
    name: "Studio Linje",
    category: "Lokala tjänster",
    tone: "Självsäker, modern, personlig",
    imagery: "Hårdetaljer, sax, spegel, struktur, rena porträtt",
    palette: ["#F7F5F2", "#151515", "#B36D76", "#D5B59C", "#FFFFFF"],
    headline: "Klippning, färg och form med tydlig känsla.",
    subheadline: "En frisördemo för salonger som vill visa behandlingar, stil och bokningsväg utan att besökaren behöver leta.",
    structure: [
      "Modeinspirerad hero med behandlingar direkt synliga",
      "Behandlingsmeny i tydliga segment",
      "Stylistpresentation",
      "Före/efter-yta som demo",
      "Bokningssimulering",
      "Stilguide: vardag, färg, brud/fest",
      "Kontakt och plats",
    ],
    interactiveIdeas: [
      "Behandlingsväljare som visar ungefärlig tidsåtgång",
      "Stilfilter som byter bildton och rekommenderade tjänster",
      "Bokningsknapp som öppnar demo-ruta, inte verklig bokning",
    ],
    primaryFunction: "Behandlingsväljaren visar tidsåtgång, vad som ingår och nästa demosteg.",
    differentiator: "Får inte kännas som café, spa eller företagskonsult.",
    template: "visual",
    visualPrompt: "Välj behandling",
    visualOptions: [
      { id: "klippning", label: "Klippning", detailTitle: "ca 45 min", detailText: "Inklusive tvätt och styling. Nästa steg i en riktig bokning: välj tid och stylist." },
      { id: "fargning", label: "Färgning", detailTitle: "ca 2 tim", detailText: "Inklusive konsultation och eftervård. Nästa steg i en riktig bokning: välj önskad nyans." },
      { id: "styling", label: "Styling / uppsättning", detailTitle: "ca 60 min", detailText: "För fest eller bröllop. Nästa steg i en riktig bokning: boka en provtid i förväg." },
    ],
  },
  {
    slug: "traning",
    branch: "Träningsstudio",
    name: "Pulsverk",
    category: "Hälsa och aktivitet",
    tone: "Energisk, tydlig, peppande, aktiv",
    imagery: "Rörelse, gruppass, träningsdetaljer, tempo",
    palette: ["#121417", "#F4F7F5", "#B8FF3D", "#4E6BFF", "#777E85"],
    headline: "Hitta passet som får veckan att röra på sig.",
    subheadline: "En träningsdemo för studios som vill visa schema, medlemskap och prova-på utan krångliga steg.",
    structure: [
      "Energifull hero",
      "Passfilter: styrka, kondition, rörlighet",
      "Veckoschema",
      "Medlemskap",
      "Tränare",
      "Prova-på-ruta",
      "Frågor inför första besöket",
    ],
    interactiveIdeas: ["Filtrera pass", "Visa schema efter dag", "Prova-på-formulär som demo"],
    primaryFunction: "Passfilter med tydlig träffmängd och återställning.",
    differentiator: "Får inte kännas som vård, konsult eller stillsam förening.",
    template: "visual",
    visualPrompt: "Filtrera passchemat",
    filters: [
      { id: "styrka", label: "Styrka" },
      { id: "kondition", label: "Kondition" },
      { id: "rorlighet", label: "Rörlighet" },
    ],
    listItems: [
      { id: "1", title: "Styrkecirkel", meta: "Måndag 18.00", tags: ["styrka"] },
      { id: "2", title: "Intervallpass", meta: "Tisdag 07.00", tags: ["kondition"] },
      { id: "3", title: "Yin yoga", meta: "Onsdag 20.00", tags: ["rorlighet"] },
      { id: "4", title: "Cirkelfitness", meta: "Torsdag 17.30", tags: ["styrka", "kondition"] },
      { id: "5", title: "Mjuk mobility", meta: "Söndag 10.00", tags: ["rorlighet"] },
    ],
  },
];
