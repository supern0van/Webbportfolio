# Implementering, ordning och första flyttprompt

Den här filen svarar på tre saker:

1. Hur alla genererade filer ska användas.
2. Var de bör hamna när Webbportfolio får ett riktigt kodrepo.
3. Vilken första prompt som ska skickas till Claude.

## Grundprincip

Det här paketet är inte själva webbplatsen. Det är produkt-, design-, demo- och arbetsunderlaget som ska styra den första riktiga implementationen.

När ett riktigt Webbportfolio-repo finns ska paketet användas som:

- kravspecifikation,
- produktbrief,
- designbrief,
- demo-bibliotek,
- AI-arbetsordning,
- Claude-handoff,
- Gemini-handoff,
- acceptanskriterier.

## Rekommenderad plats i repo

När Claude börjar bygga bör filerna kopieras in i repot under:

```text
docs/webbportfolio-spec/
```

Exempel:

```text
repo/
  docs/
    webbportfolio-spec/
      00-claude-takeover.md
      01-projektbrief.md
      ...
      hemsidor/
        01-cafe-kvarterets-koppar.md
        ...
  src/
  package.json
  README.md
```

Om repot ännu bara har en README kan Claude först lägga in detta under `docs/webbportfolio-spec/` och därefter skapa appstrukturen.

## Vad varje fil ska användas till

### `00-claude-takeover.md`

Läses först av Claude. Anger mål, gränser, stoppregler och första byggordning.

Användning: styrfil för Claude.

### `01-projektbrief.md`

Förklarar vad Webbportfolio är och inte är.

Användning: produktgrund och scope.

### `02-designsystem.md`

Beskriver visuell riktning och komponentprinciper.

Användning: designgrund för Webbportfolio-skalet och kvalitetsnivå för demos.

### `03-sidstruktur.yaml`

Maskinläsbar sidkarta.

Användning: routes, navigation, katalog och sidstruktur.

### `04-startsida-innehall.md`

Copy och sektioner för Webbportfolio-startsidan.

Användning: startsidans första innehåll.

### `05-cafedemo-innehall.md`

Detaljerad caféstruktur.

Användning: första kompletta demo.

### `06-interaktioner-och-simuleringar.md`

Regler för demo-funktioner.

Användning: bokning, nyhetsbrev, karta, evenemang, beställningsknapp och stilbyte.

### `07-priser-och-konvertering.md`

Prisdel med platshållare.

Användning: prisblock och CTA. Skarpa priser får inte hittas på.

### `08-generatorprompt.md`

Generell prompt för att skapa webbplats från underlaget.

Användning: sekundär prompt, inte första Claude-prompt.

### `09-kvalitetschecklista.md`

Kontrollista.

Användning: acceptanstest efter varje större byggsteg.

### `10-hemsidebibliotek.md`

Översikt över demos.

Användning: katalog, portföljbredd och anti-mall-princip.

### `11-variationsmatris.yaml`

Maskinläsbar anti-mall-matris.

Användning: kontrollera att demos inte blir samma sida med olika färger.

### `12-forsta-diskussionen-tolkning.md`

Dokumenterar kärnidén från första diskussionen.

Användning: produktkänsla och resonemang.

### `13-katalogstruktur-och-prioritering.md`

Kategorier, statusnivåer och byggordning.

Användning: styr katalogen och implementationens prioritering.

### `14-ai-arbetsbord-och-rollfordelning.md`

Rollfördelning mellan Claude, ChatGPT och Gemini.

Användning: arbetsmodell.

### `15-claude-startprompt.md`

Claude-startprompt.

Användning: backup/startprompt, men `20-implementering-ordning-och-flyttprompt.md` innehåller den mest aktuella första flyttprompten.

### `16-arbetsorder-forsta-bygget.md`

Konkret första arbetsorder.

Användning: styr första implementationen.

### `17-gemini-roll-och-upplarning.md`

Gemini-roll och upplärning.

Användning: när Gemini ska användas för enskilda demos eller second opinion.

### `18-gemini-startprompt-hemsidegenerator.md`

Gemini-prompt.

Användning: enskild demo i taget.

### `19-gemini-utvarderingsmall.md`

Granskningsmall för Gemini-förslag.

Användning: avgör om ett Gemini-förslag ska in i repo eller omarbetas.

### `hemsidor/*.md`

Tolv separata demo-briefar.

Användning: varje fil är underlag för en fristående demo.

### `webbportfolio-spec.json`

Kompakt maskinläsbar specifikation.

Användning: kan styra data, routes, demo-status, katalogkort och generatorlogik.

## Implementeringsordning

### Fas 0 - Säker start

1. Skapa eller öppna Webbportfolio-repot.
2. Kontrollera att det är rätt repo och inte Nova IT.
3. Kontrollera `git status`.
4. Kopiera in hela paketet till `docs/webbportfolio-spec/`.
5. Gör ingen publicering, DNS-ändring eller extern koppling.

### Fas 1 - Appgrund

1. Välj teknikstack om den inte redan är vald.
2. Skapa grundlayout.
3. Skapa routes.
4. Skapa navigation.
5. Skapa datamodell för demos, status och katalog.
6. Läs in eller översätt `webbportfolio-spec.json` till intern datastruktur.

### Fas 2 - Webbportfolio-skal

1. Bygg startsidan.
2. Bygg katalogsidan med tolv demos i kategorier.
3. Bygg grundläggande sidor: `Så fungerar det`, `Startpriser`, `Kontakt`.
4. Lägg in demomärkning och avsändare diskret.

### Fas 3 - Första kompletta demos

Bygg i denna ordning:

1. Café - Kvarterets Koppar.
2. Konsult - Nordstrategi.
3. Hantverk/lokal service - Rakt & Rent.

Skälet är att de tillsammans visar tre olika uttryck:

- varm lokal upplevelse,
- B2B/förtroende/process,
- snabb lokal service/offert.

### Fas 4 - Gemensamma demo-funktioner

Skapa komponenter eller moduler för:

- demobar,
- funktionssimulering,
- statusetiketter,
- katalogkort,
- demo-CTA,
- platshållare för karta/formulär/bokning,
- stilbyte där det passar.

### Fas 5 - Nästa demos

Bygg därefter:

1. Webbshop - Butik Fält.
2. Tandvård - Tandrum.
3. Hotell - Vikrum.

Övriga demos kan ligga som `brief_ready` eller förhandsvisning tills de byggs.

### Fas 6 - Kontroll

Kör:

- typecheck,
- lint,
- build,
- relevanta tester,
- manuell mobil/desktop-granskning,
- kontroll mot `09-kvalitetschecklista.md`,
- kontroll mot `11-variationsmatris.yaml`.

## Vad Claude ska göra först

Claude ska inte börja med DNS, publicering eller externa tjänster.

Claude ska börja med att:

1. läsa specifikationspaketet,
2. inventera repo,
3. föreslå exakt teknik- och filstruktur,
4. skapa första implementationen lokalt,
5. bygga Webbportfolio-skal och första demos,
6. köra tester,
7. rapportera vad som är färdigt och vad som är demo.

## Första flyttprompten till Claude

Kopiera detta till Claude:

```text
Du ska ta över Webbportfolio-projektet från ett färdigt specifikations- och handoffpaket.

Viktigt: Webbportfolio är ett eget projekt. Det ska inte byggas i Nova IT:s repo, inte använda Nova IT:s drift, DNS, secrets, Cloudflare-zoner eller interna system som tekniskt beroende. Nova IT får bara nämnas diskret som avsändare.

Din roll är att vara huvudmotor för kod, repo, komponentstruktur, implementation och teknisk kvalitet. ChatGPT används som vardagskonsult/kravtolk och Gemini kan användas senare för enskilda demoidéer. Repo och specifikationsfiler är källan till sanning.

Börja med att läsa dessa filer i ordning:

1. docs/webbportfolio-spec/00-claude-takeover.md
2. docs/webbportfolio-spec/20-implementering-ordning-och-flyttprompt.md
3. docs/webbportfolio-spec/16-arbetsorder-forsta-bygget.md
4. docs/webbportfolio-spec/README.md
5. docs/webbportfolio-spec/01-projektbrief.md
6. docs/webbportfolio-spec/12-forsta-diskussionen-tolkning.md
7. docs/webbportfolio-spec/13-katalogstruktur-och-prioritering.md
8. docs/webbportfolio-spec/11-variationsmatris.yaml
9. docs/webbportfolio-spec/03-sidstruktur.yaml
10. docs/webbportfolio-spec/webbportfolio-spec.json

Läs därefter relevanta filer i docs/webbportfolio-spec/hemsidor/.

Om dessa filer ännu inte ligger i repo: börja med att kopiera in hela paketet till docs/webbportfolio-spec/ och arbeta därifrån.

Målet för första implementationen:

1. Skapa Webbportfolio-skalet.
2. Skapa startsida.
3. Skapa katalog med tolv demoingångar i kategorier.
4. Skapa statusnivåer: ready_demo, build_next, brief_ready.
5. Bygga Café - Kvarterets Koppar som komplett demo.
6. Bygga Konsult - Nordstrategi som komplett demo.
7. Bygga Hantverk/lokal service - Rakt & Rent som komplett demo.
8. Skapa gemensam demobar.
9. Skapa simulerade funktionsval som tydligt märks som demo.
10. Lägga in startpriser med platshållare, inte riktiga priser.

Hårda regler:

- Publicera inte.
- Ändra inte DNS, domäner, e-post, betalning, abonnemang eller säkerhetsinställningar.
- Använd inte verkliga kunduppgifter, personuppgifter, kontaktuppgifter, recensioner eller hemligheter.
- Koppla inte in externa boknings-, betalnings-, kart- eller nyhetsbrevstjänster.
- Låtsas inte att simulerade funktioner är aktiva.
- Gör inte alla demos som samma mall med olika färger.
- Stoppa och fråga före publicering, extern tjänst, verkliga priser eller större arkitekturbeslut.

Arbetssätt:

1. Inventera repo och teknikstack.
2. Kontrollera git status.
3. Läs närmaste package.json och identifiera package manager.
4. Föreslå kort filstruktur och implementation.
5. Implementera första byggsteget.
6. Kör relevanta kontroller: install vid behov, typecheck, lint, test och build om projektet stödjer det.
7. Rapportera ändrade filer, körda kommandon, testresultat, vad som är simulerat och vad som återstår.

Viktig produktidé:

Webbportfolio är en digital utställningslokal och interaktiv webbplatsstudio. Demosidorna ska kännas som egna världar. Det gemensamma ska vara kvaliteten, inte utseendet.
```

## Kortare variant om Claude redan har filerna

```text
Läs `docs/webbportfolio-spec/20-implementering-ordning-och-flyttprompt.md` och följ första flyttprompten där. Börja inte med publicering, DNS eller externa tjänster. Första målet är lokalt byggd Webbportfolio med katalog och tre kompletta demos: Café, Konsult och Hantverk.
```

