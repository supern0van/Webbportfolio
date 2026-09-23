# AI-arbetsbord och rollfördelning

## Rekommendation

Ja, uppdelningen är rimlig: låt Claude vara huvudverktyg för kod och låt ChatGPT och Gemini vara stöd för resonemang, kravformulering, idéer, granskning och vardagsbeslut.

Det är rätt väg om arbetsbordet styrs hårt av tydliga filer, statusnivåer och beslutsgränser. Det är fel väg om tre modeller får driva samma arbete parallellt utan en gemensam källa till sanning.

## Föreslagen rollfördelning

### Claude

Huvudansvar:

- kod,
- komponenter,
- filstruktur,
- refaktorering,
- lokala tester,
- tekniska beslut inom beslutad arkitektur,
- implementation av demos,
- bygg- och deployförberedelse.

Claude passar bäst när uppgiften är:

- konkret,
- filbaserad,
- testbar,
- avgränsad,
- beskriven som en arbetsorder.

Risk:

- kan bli för bokstavlig,
- kan fastna i behörighets- och stoppfrågor,
- kan behöva mycket tydliga ramar för vad som får göras,
- kan prioritera implementation före diskussion om målet.

Motåtgärd:

- ge Claude copy-ready arbetsorder,
- lägg beslutsgränser i fil,
- ge tydlig byggordning,
- låt Claude rapportera blockerare i slutet av varje steg,
- undvik för mycket fri brainstorming i Claude.

### ChatGPT

Huvudansvar:

- vardagskonsult,
- tolka mål och användarens resonemang,
- skapa handoffar,
- skriva tydliga krav,
- strukturera oklara idéer,
- agera andra ögon på UX, språk, scope och prioritering,
- hjälpa användaren att fatta beslut innan Claude kodar.

ChatGPT passar bäst när uppgiften är:

- halvformulerad,
- strategisk,
- samtalsbaserad,
- prioriteringsbaserad,
- kopplad till språk, ton, målgrupp och användarupplevelse.

Risk:

- kan bli för rådgivande om det egentligen behövs kod,
- kan behöva översätta resultatet till mycket konkreta instruktioner för Claude.

Motåtgärd:

- avsluta rådgivning med en konkret Claude-order,
- håll beslut och koduppdrag separata.

### Gemini

Huvudansvar:

- extra second opinion,
- jämföra flera idéer,
- ge alternativ på innehåll, struktur och visuell riktning,
- kontrollera om en idé verkar begriplig ur ett annat perspektiv.

Gemini passar bäst när uppgiften är:

- jämförande,
- kreativ,
- bred,
- konceptuell.
- avgränsad till en enskild demo,
- inriktad på variation, visuell riktning eller alternativ copy.

Risk:

- kan skapa ännu fler alternativ när projektet egentligen behöver beslut,
- kan bidra till spretighet om dess förslag inte filtreras.

Motåtgärd:

- använd Gemini för alternativ och kritik,
- låt inte Gemini vara källa till teknisk sanning,
- för in endast beslutade saker i specifikationsfilerna.
- låt Gemini börja med en demo i taget,
- granska Gemini-förslag med `19-gemini-utvarderingsmall.md`.

### Gemini som hemsidegenerator

Gemini kan även användas för att skapa förslag till enskilda demosidor. Det kan vara en fördel just för Webbportfolio, eftersom varje demo ska kännas som ett eget stand-alone-projekt.

Det är acceptabelt att olika tjänster tar fram olika demos så länge:

- Webbportfolio-specen styr alla demos,
- status och demomärkning är gemensam,
- simulerade funktioner är ärligt markerade,
- resultatet granskas innan det förs in i repo,
- Claude eller repoägaren gör den slutliga implementationen.

Gemini ska alltså gärna bidra till större variation mellan sidorna, men inte skapa egna regler för produkten.

## Källa till sanning

Den viktigaste regeln:

> Filerna i Webbportfolio-generator-underlag är källan till sanning tills ett riktigt repo tar över.

När kodrepo finns ska källan till sanning flyttas till:

1. repo,
2. README/AGENTS/CLAUDE-fil,
3. issues eller arbetsorder,
4. verifierade tester och faktisk kod.

ChatGPT/Gemini får föreslå. Claude får implementera. Men beslut ska landa i fil eller repo innan de blir "sanning".

## Praktisk arbetsprocess

1. Använd ChatGPT för att formulera mål och avgränsning.
2. Skriv eller uppdatera specifikationsfil.
3. Ge Claude en konkret arbetsorder.
4. Claude implementerar i repo.
5. Claude kör tester och rapporterar.
6. ChatGPT/Gemini kan granska resultatet på språk, UX och prioritet.
7. Endast beslutade ändringar förs tillbaka till repo/spec.

## Rekommenderad Claude-inställning i praktiken

Utan att vara beroende av en viss produktinställning bör Claude arbeta i ett läge där den:

- får läsa hela projektmappen,
- får skapa och ändra filer i avsett repo,
- får köra lokala install/test/build-kommandon,
- inte får publicera eller ändra externa tjänster utan separat beslut,
- inte får röra Nova IT-projekt eller drift för Webbportfolio,
- måste rapportera kommandon, testresultat och blockerare tydligt.

Om Claude känns för låst är det oftast bättre att justera projektbehörighet, arbetsmapp och godkända kommandon än att byta bort Claude som kodmotor.

## Slutsats

Den bästa uppdelningen är:

- Claude som byggmotor.
- ChatGPT som samtalspartner, kravtolk och arbetsledande konsult.
- Gemini som extra perspektiv och kreativ kontroll.

Men bara om repo/spec är stommen. Annars blir tre AI-verktyg tre olika viljor.
