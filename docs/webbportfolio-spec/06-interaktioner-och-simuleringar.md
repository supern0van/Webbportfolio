# Interaktioner och Simuleringar

## Sektion

Rubrik:

> Anpassa webbplatsen

Alternativ rubrik:

> Prova funktioner

Intro:

> Testa hur olika funktioner kan förändra en webbplats. I denna demo visas funktionerna som koncept eller simuleringar, inte som aktiva externa tjänster.

## Gemensam interaktionsmodell

Varje demo ska ha högst en primär interaktiv idé och ett eller två mindre stödval. Alla demos får inte ärva caféets kontrollpanel. Interaktionen ska komma ur branschens verkliga beslut: behandling för frisör, problem för konsult, jobbtyp för hantverk, produktfilter för webbshop och kursnivå för utbildning.

När ett val görs ska tre saker förändras tydligt:

1. innehållet eller modulen som visas,
2. en kort förklaring av verksamhetsnyttan,
3. en synlig demostatus om ingen tjänst är inkopplad.

## Val i cafédemon

### Lägg till bokningskalender

Nytta:

> Bokning minskar behovet av telefonsamtal och gör det enklare för gäster att planera sitt besök.

Simulering:

- Visa en kalenderliknande modul som platshållare.
- Märk den med "Demo - ingen bokning skickas".
- Koppla inte in extern bokningstjänst.

### Visa evenemang

Nytta:

> Evenemang hjälper caféet att synliggöra quiz, musik och temakvällar.

Simulering:

- Visa ett evenemangsblock med fiktiva aktiviteter.
- Låt funktionen ändra synlighet eller markering om interaktivitet finns.

### Lägg till kundomdömen

Nytta:

> Kundomdömen kan skapa förtroende och hjälpa nya besökare att förstå känslan i verksamheten.

Simulering:

- Använd fiktiva korta omdömen.
- Använd aldrig verkliga namn eller verkliga citat.
- Märk vid behov med "Exempelomdömen".

### Lägg till nyhetsbrev

Nytta:

> Nyhetsbrev gör det enklare att nå återkommande gäster.

Simulering:

- Visa ett formulärfält som inte skickar data.
- Märk tydligt med "Demo - ingen anmälan skickas".
- Koppla inte in extern e-posttjänst.

### Visa beställningsknapp

Nytta:

> En beställningsknapp kan göra det lättare att hitta rätt väg till take away eller förbeställning.

Simulering:

- Visa knappen som inaktiv demo eller länk till en informationsruta.
- Koppla inte in betalning eller verklig beställning.

### Byt mellan varm, modern och exklusiv stil

Nytta:

> Stilval visar hur samma innehåll kan kännas olika beroende på färg, bildspråk och typografi.

Simulering:

- Varm: mjuka toner, naturligt ljus, personlig känsla.
- Modern: renare layout, mer kontrast, mindre dekor.
- Exklusiv: mörkare detaljer, mer premiumkänsla, återhållsam copy.

## Regel för alla simulerade funktioner

Låtsas aldrig att en funktion är verkligt inkopplad om den bara visas som demo.

- Använd knappar med `aria-pressed` eller motsvarande tydligt valt läge.
- Tangentbordsfokus ska synas.
- Resultatet ska annonseras begripligt för hjälpmedel.
- Stängda eller inaktiva demoformulär får aldrig samla in personuppgifter.
- En simulering ska kunna återställas till ursprungsläget.
