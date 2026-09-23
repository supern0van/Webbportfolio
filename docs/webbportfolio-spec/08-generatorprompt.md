# Generatorprompt

Använd följande prompt när en AI-agent eller webbplatsgenerator ska skapa en första kodad version av Webbportfolio från underlaget.

```text
Du ska skapa en modern, responsiv webbplats för Webbportfolio baserad på de bifogade specifikationsfilerna.

Webbportfolio är en digital utställningslokal för exempelwebbplatser. Webbportfolio ska ha en egen identitet och ska inte se ut som Nova IT. Nova IT får endast nämnas diskret som avsändare: "Webbportfolio - ett projekt från Nova IT".

Bygg följande sidor eller vyer i första versionen:

1. Startsida för Webbportfolio.
2. Kategoriserad översikt över samtliga tolv webbplatser/demos.
3. Cafédemo som känns som en egen fiktiv caféwebbplats.
4. Konsultdemo som komplett och tydlig kontrast till café.
5. Hantverks-/lokal servicedemo som komplett och tydlig kontrast till café och konsult.
6. Förhandsvisningar för övriga nio briefs, ärligt märkta `brief_ready`.
7. Sektion eller vy för "Så fungerar det".
8. Startpriser med platshållarna "X XXX kr".
9. Kontaktsektion eller kontaktsida.

Följ `03-sidstruktur.yaml` för navigation, rutter och sektioner.
Följ `04-startsida-innehall.md` för startsidans copy.
Följ `05-cafedemo-innehall.md` för cafédemons innehåll.
Följ `06-interaktioner-och-simuleringar.md` för funktionsval och demoetiketter.
Följ `07-priser-och-konvertering.md` för prisdelar och CTA.
Följ `10-hemsidebibliotek.md` och `11-variationsmatris.yaml` för flera branschdemos och deras skillnader.
Följ `13-katalogstruktur-och-prioritering.md` för kategorier, statusnivåer och byggordning.
Läs varje fil i `hemsidor/` som en separat webbplatsbrief.

Designriktning:

- sval pappersvit grund enligt designsystemets exakta tokens,
- mörk bläckfärgad text och blå signalfärg,
- kataloglinjer och varierad redaktionell rytm,
- en gemensam smal demo-docka som signatur,
- generöst med luft,
- stora tydliga rubriker,
- välordnade katalogposter; använd kort bara där innehållet faktiskt tjänar på det,
- mjukt rundade hörn där det passar,
- inga kodregn, terminalmotiv eller överdrivna teknikschabloner,
- ingen visuell kopia av Nova IT.

Alla demos ska vara fiktiva. Använd inte verkliga företag, personer, adresser, telefonnummer, e-postadresser eller omdömen. Markera diskret att de är konceptdemos och kontrollera arbetsnamn före all publik användning.

Skapa inte alla demos med samma utförande. Varje demo ska ha tydligt egen layoutmodell, egen ton, egen bildlogik, egen CTA-strategi och egen förstaskärm. Det gemensamma ska vara kvaliteten och den stabila tekniska grunden, inte formen.

Simulerade funktioner får visas visuellt men ska inte framställas som verkligt aktiva. Koppla inte in extern bokning, betalning, karttjänst, nyhetsbrev eller annan extern tjänst utan separat beslut.

Publicera inte automatiskt. Ändra inte DNS, domän, e-post, konto, abonnemang, betalning eller säkerhetsinställningar.

Resultatet ska vara mobilanpassat, lätt att skanna, tillgängligt, professionellt och redo att vidareutvecklas.
```

## Rekommenderad genereringsordning

1. Skapa grundlayout, färger och typografi.
2. Skapa navigation och rutter.
3. Bygg startsidan.
4. Bygg cafédemon som egen upplevelse.
5. Bygg Konsult och Hantverk som två fullständiga kontraster till café.
6. Lägg till övriga demos som kort, undersidor eller generatorredo briefs beroende på omfattning.
7. Lägg till simulerade funktionsval.
8. Lägg till prisdel och kontakt.
9. Bygg katalogfiltrering för samtliga tolv briefs utan att lägga tolv val i huvudmenyn.
10. Kör kvalitetschecklistan och variationsmatrisen.
