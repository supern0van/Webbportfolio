# Gemini - Roll och upplärning

## Bedömning

Gemini kan vara värt att använda i Webbportfolio-arbetet, särskilt eftersom kostnaden är låg och den kan ge extra variation. Men den ska inte börja som huvudmotor för repo, arkitektur eller produktsanning.

Rätt roll:

- vardagsbollplank,
- idévariation,
- snabb second opinion,
- hemsidegenerator för enskilda demos,
- visuell och copymässig kontrast mot Claude/ChatGPT,
- test av om en demo känns begriplig för en utomstående.

Fel roll:

- källa till teknisk sanning,
- ensam arkitekt,
- okontrollerad kodgenerator för hela Webbportfolio,
- beslutstagare för publicering, DNS, externa tjänster eller skarpa priser.

## Tänker användaren rätt?

Ja, med en viktig nyans.

Eftersom varje Webbportfolio-demo nästan är ett eget stand-alone-projekt är det inte farligt i sig att olika AI-tjänster hjälper till med olika demos. Tvärtom kan det vara en fördel, eftersom det minskar risken att alla sidor får samma uttryck.

Men Webbportfolio som produkt måste fortfarande kännas sammanhållen:

- samma kvalitetsnivå,
- samma demomärkning,
- samma ärlighet kring simulerade funktioner,
- samma tillgänglighetsnivå,
- samma kataloglogik,
- samma stoppregler,
- samma grundidé: utställningslokal och interaktiv webbplatsstudio.

Alltså:

> Olika AI får gärna skapa olika uttryck. De får inte skapa olika regler.

## Upplärningsmodell

Gemini bör tränas in i projektet stegvis.

### Steg 1 - Läsning och återberättande

Ge Gemini endast uppdraget att läsa sammanfattningen och återberätta:

- vad Webbportfolio är,
- vad Webbportfolio inte är,
- varför demos ska skilja sig,
- vad som är gemensam kvalitetsgrund,
- vad som är förbjudet.

Godkänt först när Gemini återger produkten korrekt utan att göra den till en vanlig portfolio eller generisk hemsidebyrå.

### Steg 2 - En demo i taget

Låt Gemini arbeta med en enda demo åt gången. Exempel:

- förbättra Frisör - Studio Linje,
- skapa alternativ hero för Bilvård - Glansverk,
- föreslå annan struktur för Kulturförening - Ladan.

Gemini ska inte samtidigt ändra hela Webbportfolio, alla demos och grundstrategin.

### Steg 3 - Variantproduktion

När Gemini förstår projektet kan den få skapa 2-3 varianter för en demo:

- trygg version,
- mer uttrycksfull version,
- mer konverteringsdriven version.

Men den ska alltid ange vilken variant som bäst följer specifikationen.

### Steg 4 - Kod eller sidgenerering

Först därefter kan Gemini få generera kod eller en komplett sida. Då ska den arbeta mot en strikt brief och lämna resultatet som förslag, inte som automatiskt accepterad implementation.

## Hur Gemini bör styras

Ge Gemini:

- en roll,
- en enda demo,
- de styrande filerna,
- tydligt outputformat,
- förbud mot att hitta på verkliga uppgifter,
- krav på att redovisa vad som är demo,
- krav på att jämföra mot variationsmatrisen.

Undvik:

- "gör en snygg hemsida",
- "förbättra allt",
- "bygg vidare fritt",
- "ta fram massa idéer" utan urvalsregel.

## Rekommenderad användning i Webbportfolio

Bra Gemini-uppgifter:

- skapa tre alternativa riktningar för en branschdemo,
- föreslå bättre rubriker och CTA för en demo,
- skapa fristående HTML/CSS-prototyp för en demo,
- granska om två demos känns för lika,
- föreslå bildbriefar,
- testa om en sida känns begriplig för en kund,
- jämföra två sidstrukturer.

Mindre bra Gemini-uppgifter:

- bygga hela repoarkitekturen,
- ändra säkerhetsgränser,
- skapa verkliga integrationer,
- välja priser,
- bedöma drift eller DNS,
- samordna release.

## Beslutsregel

Gemini-resultat får användas när det:

1. följer Webbportfolio-specen,
2. inte bryter demogränser,
3. skiljer sig från befintliga demos,
4. kan föras in i fil eller repo,
5. har granskats av användaren, ChatGPT eller Claude.

Om Gemini föreslår något bra ska det översättas till:

- uppdaterad brief,
- konkret arbetsorder till Claude,
- eller en separat prototyp som jämförs innan kodbasen ändras.

