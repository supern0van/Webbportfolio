# Webbportfolio Generatorunderlag

Det här paketet omvandlar Sitebuilder-instruktionerna till filer som kan användas för att generera eller bygga fram Webbportfolio och dess demonstrationswebbplatser i kod.

Syftet är inte att publicera något direkt. Syftet är att samla struktur, innehåll, designriktning, säkerhetsgränser och kvalitetskrav så att en framtida generator, AI-agent eller utvecklare kan skapa webbplatser konsekvent.

## Filer

- `00-claude-takeover.md` är startfilen för att Claude ska kunna ta över arbetet.
- `01-projektbrief.md` beskriver uppdrag, gränser och övergripande idé.
- `02-designsystem.md` beskriver visuell identitet, ton och komponentprinciper.
- `03-sidstruktur.yaml` är en maskinläsbar sidkarta med navigation, sidor och sektioner.
- `04-startsida-innehall.md` innehåller copy och sektioner för Webbportfolio-startsidan.
- `05-cafedemo-innehall.md` innehåller copy, struktur och krav för cafédemon.
- `06-interaktioner-och-simuleringar.md` beskriver funktionsval och hur de får simuleras utan externa tjänster.
- `07-priser-och-konvertering.md` samlar prisblock, tillägg och CTA-principer.
- `08-generatorprompt.md` är en färdig prompt för att generera webbplatsen från underlaget.
- `09-kvalitetschecklista.md` är en kontrollista före något används som beslutsunderlag.
- `10-hemsidebibliotek.md` beskriver tolv separata demonstrationswebbplatser och hur de ska skilja sig.
- `11-variationsmatris.yaml` är en maskinläsbar variationsmatris som förhindrar att alla demos blir samma mall.
- `12-forsta-diskussionen-tolkning.md` dokumenterar hur den ursprungliga idén har tolkats och avgränsats.
- `13-katalogstruktur-och-prioritering.md` organiserar demos i kategorier och anger byggordning.
- `14-ai-arbetsbord-och-rollfordelning.md` beskriver hur Claude, ChatGPT och Gemini bör delas upp.
- `15-claude-startprompt.md` är en copy-ready prompt för att starta Claude på rätt spår.
- `16-arbetsorder-forsta-bygget.md` är en konkret första arbetsorder för kodimplementation.
- `17-gemini-roll-och-upplarning.md` beskriver hur Gemini bör användas och läras in utan att bli källa till sanning.
- `18-gemini-startprompt-hemsidegenerator.md` är en copy-ready prompt för Gemini som hemsidegenerator.
- `19-gemini-utvarderingsmall.md` är en granskningsmall för Gemini-förslag.
- `20-implementering-ordning-och-flyttprompt.md` beskriver var filerna ska in i repo, implementeringsordning och första prompten till Claude.
- `hemsidor/` innehåller separata briefar för tolv olika hemsidor.
- `webbportfolio-spec.json` är en kompakt maskinläsbar specifikation.

## Viktiga regler

- Webbportfolio ska vara ett eget projekt och inte se ut som Nova IT.
- Nova IT får nämnas diskret som avsändare: "Webbportfolio - ett projekt från Nova IT".
- Använd inga verkliga caféuppgifter, verkliga kunduppgifter, hemligheter eller externa tjänster.
- Publicera inte automatiskt.
- Priser ska ligga kvar som `X XXX kr` tills riktiga priser är beslutade.
- Funktioner som inte är tekniskt inkopplade ska märkas som demo eller simulering.
- Demosidorna får absolut inte ha genomgående samma tema, layout, bildspråk eller utförande.

## Hemsidor i biblioteket

- Café: `hemsidor/01-cafe-kvarterets-koppar.md`
- Frisör: `hemsidor/02-frisor-studio-linje.md`
- Konsult: `hemsidor/03-konsult-nordstrategi.md`
- Lokal service/hantverk: `hemsidor/04-hantverk-rakt-rent.md`
- Träningsstudio: `hemsidor/05-traning-pulsverk.md`
- Boutiquehotell: `hemsidor/06-hotell-vikrum.md`
- Bilvård: `hemsidor/07-bilvard-glansverk.md`
- Kulturförening: `hemsidor/08-kultur-ladan.md`
- Webbshop: `hemsidor/09-webbshop-butik-falt.md`
- Tandvård: `hemsidor/10-tandvard-tandrum.md`
- Fastighetsförmedling: `hemsidor/11-fastighet-hemlinjen.md`
- Utbildning: `hemsidor/12-utbildning-kursverk.md`
