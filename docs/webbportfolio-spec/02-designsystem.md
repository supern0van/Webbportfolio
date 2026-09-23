# Designsystem

## Webbportfolio-identitet

Webbportfolio ska ha en modern, luftig och återhållsam grunddesign. Grundsidan ska vara neutral nog att fungera som showroom, medan demosidorna får bära starkare branschidentitet.

## Visuell riktning

Webbportfolio ska kännas som en samtida utställningskatalog, inte som en samling likadana SaaS-kort. Den minnesvärda komponenten är en smal **demo-docka** som följer med in i varje exempel och låter besökaren återvända, byta demo eller prova ett funktionsläge.

### Grundtokens

- `paper`: `#F5F7F6` - sval pappersvit bakgrund, inte beige standardkräm.
- `ink`: `#17212B` - huvudsaklig text och mörka ytor.
- `slate`: `#66727D` - sekundär text.
- `line`: `#CBD4D8` - linjer och strukturella avgränsare.
- `signal`: `#2855D9` - aktiva val och primära handlingar.
- `signal-soft`: `#DCE5FF` - fokus, val och lugna informationsytor.

### Typografi

- Rubriker: `Sora`, 600-700, kompakt men inte hoptryckt.
- Brödtext och gränssnitt: `Source Sans 3`, 400-600.
- Reservstackar ska anges så att sidan fungerar utan extern fontladdning.
- Normal textbredd: högst 72 tecken per rad.
- Använd meningsfall; undvik spärrade versalrubriker och dekorativa etiketter ovanför varje rubrik.

### Layout

- Vänsterställd huvudcopy med en kataloglist eller levande demoförhandsvisning på motsatt sida.
- Demos presenteras som varierade redaktionella poster, inte identiska rundade kort.
- Radier används sparsamt: `4px`, `12px` och helt rund endast för statusmarkörer.
- Linjer, index och färgfält ska förklara struktur eller status, inte bara dekorera.
- Rörelse: en samlad introduktion och tydlig respons på användarens val. Respektera `prefers-reduced-motion`.

## Undvik

- kodregn,
- terminalmotiv,
- överdrivna teknikschabloner,
- en visuell kopia av Nova IT,
- mörka tunga teknikteman,
- falska integrationer,
- plottriga dropdown-strukturer,
- identiska kortgrids på varje sida,
- gradienter och skuggor utan informationsfunktion.

## Komponentprinciper

Generatorn bör skapa:

- fast huvudnavigation,
- tydliga knappar,
- ett filtrerbart katalogindex med varierade verksamhetsposter,
- en gemensam demo-docka som aldrig tar över demots identitet,
- sektioner med generös spacing,
- prisnivåer som kort eller jämförande block,
- diskreta demo-märkningar,
- sidfot med copyright,
- mobilanpassad layout från början.

## Bildstil för Webbportfolio

Webbportfolio-startsidan ska ha bilder eller visuella kort som visar webbplatsexempel, inte generiska teknikbilder. Bildspråket ska kännas redaktionellt, rent och trovärdigt.

## Bildstil för café

Cafédemon ska använda ett enhetligt bildspråk:

- varmt naturligt ljus,
- svensk eller nordisk cafékänsla,
- kaffe, bakverk och interiör,
- detaljbilder på händer som arbetar,
- inga externa logotyper,
- inga identifierbara verkliga företag,
- inga blandade bildstilar.

AI-bilder är tillåtna som prototypbilder om de tydligt betraktas som platshållare inför slutlig webbplats. Varje demos brief anger egen bildlogik och får inte ärva caféets bildspråk.

## Självkritik mot generisk generatorstil

Den första riktningen med varmvit bakgrund, stora rubriker och rundade kort riskerade att bli en vanlig AI-genererad webbmall. Den reviderade riktningen använder därför sval pappersvit bas, kataloglinjer, varierad rytm och en funktionell demo-docka. Webbportfolio hålls konsekvent, men demos får egna typsnitt, former och kompositionsmodeller.
