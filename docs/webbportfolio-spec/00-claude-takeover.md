# Claude Takeover - Webbportfolio

Det här är startfilen för att Claude ska kunna ta över arbetet på ett kontrollerat sätt.

## Kort sammanfattning

Webbportfolio ska bli en egen kodad webbplats och en digital utställningslokal för flera demonstrationswebbplatser. Den ska inte vara en kopia av Nova IT, men ska hålla samma professionella nivå i struktur, noggrannhet och kvalitet.

Claude bör stå för majoriteten av kod, implementation, komponentstruktur, testning och teknisk bearbetning.

ChatGPT och Gemini används som vardagskonsulter för resonemang, avstämning, idéarbete, språk, prioriteringar, second opinion och för att översätta otydliga tankar till tydliga arbetsorder.

## Viktigaste principen

Bygg inte bara en portfolio med skärmbilder. Bygg en liten interaktiv webbplatsstudio:

1. Webbportfolio är utställningslokalen.
2. Branschdemosidorna är utställningsobjekten.
3. Interaktiva val visar hur en webbplats kan förändras med funktioner, stil och innehåll.

## Claude ska börja här

Läs filerna i denna ordning:

1. `00-claude-takeover.md`
2. `15-claude-startprompt.md`
3. `14-ai-arbetsbord-och-rollfordelning.md`
4. `README.md`
5. `01-projektbrief.md`
6. `12-forsta-diskussionen-tolkning.md`
7. `13-katalogstruktur-och-prioritering.md`
8. `11-variationsmatris.yaml`
9. `03-sidstruktur.yaml`
10. `webbportfolio-spec.json`

Läs därefter branschbriefarna i `hemsidor/` efter den rekommenderade byggordningen i `13-katalogstruktur-och-prioritering.md`.

## Rekommenderad första implementation

Första kodade versionen bör bygga:

1. Webbportfolio-skal och katalog.
2. Café som komplett demo.
3. Konsult som komplett demo.
4. Hantverk/lokal service som komplett demo.
5. Gemensamt system för demobar, status, simulerade funktioner och katalogkort.

Övriga demos kan börja som välgjorda förhandsvisningar eller briefs, men ska inte märkas som färdiga demos förrän de är byggda.

## Hårda gränser

Claude får inte:

- publicera automatiskt,
- ändra DNS, domäner, e-post, betalning, abonnemang eller säkerhetsinställningar,
- använda verkliga kunduppgifter eller hemligheter,
- använda Nova IT:s repo, zoner, secrets eller drift som tekniskt beroende,
- låtsas att en simulerad funktion är verkligt inkopplad,
- göra alla demos som samma mall med utbytt text och färg.

## Det som ska vara gemensamt

Alla demos ska dela:

- responsivitet,
- tillgänglighet,
- tydlig navigation,
- genomtänkt informationsstruktur,
- stabil teknisk grund,
- tydlig demomärkning,
- möjlighet att lägga till funktioner.

## Det som ska skilja sig

Varje demo ska ha egen:

- layoutmodell,
- bildlogik,
- typografisk känsla,
- CTA-strategi,
- ton,
- startsida/första skärm,
- primär funktion,
- branschlogik.

## Stoppa och fråga användaren när

Claude bör stoppa om något kräver:

- publicering,
- DNS/domänbeslut,
- verkliga priser,
- verkliga kontaktuppgifter,
- externa tjänster,
- betalning,
- inloggning som inte redan är klar,
- destruktiv ändring,
- val mellan flera större tekniska arkitekturer där inget beslut finns.

## Leveransformat för Claude

Varje större steg bör avslutas med:

- vad som ändrats,
- vilka filer som ändrats,
- hur det testades,
- vad som återstår,
- om något är simulerat,
- om något kräver beslut.

