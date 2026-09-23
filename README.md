# Webbportfolio

En digital utställningslokal som visar hur olika verksamheter kan presenteras på webben — och hur
funktioner kan byggas ut. Webbportfolio är ett eget projekt, avsändarmärkt diskret i sidfoten:
"Webbportfolio – ett projekt från Nova IT".

Specifikationen som styr innehåll, design och prioritering ligger i
[`docs/webbportfolio-spec/`](docs/webbportfolio-spec/) och är källa till sanning tills repot och
koden säger annat.

## Struktur

- `/` — Webbportfolio, utställningslokalen (egen identitet, inte Nova IT).
- `/webbplatser/` — katalog över tolv branschdemos i fem kategorier.
- `/demo/cafe/` — Kvarterets Koppar (café) — komplett demo.
- `/demo/konsult/` — Nordstrategi (B2B-konsult) — komplett demo.
- `/demo/lokal-service/` — Rakt & Rent (hantverk/lokal service) — komplett demo.
- `/demo/<slug>/` — nio övriga branscher (frisör, träning, hotell, bilvård, kultur, webbshop,
  tandvård, fastighet, utbildning) som `brief_ready`-förhandsvisningar tills de byggs kompletta.
- `/sa-fungerar-det/`, `/startpriser/`, `/kontakt/` — gemensamma sidor för Webbportfolio.

Alla företag i demos är fiktiva arbetsnamn. Inga verkliga kunduppgifter, hemligheter eller
externa tjänster används.

## Utveckling

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # typkontroll + statisk build till dist/
bun run preview
```

## Design

Webbportfolio har en egen `src/styles/tokens-webbportfolio.css` (pappersvitt, bläckmörk text,
signalblått) skild från Nova IT:s identitet. Varje demo har sin egen `tokens-<demo>.css` med
färg, typsnitt och radie. `src/styles/base.css` innehåller den delade strukturen (header, footer,
kort, formulär, knappar) som alla sajter återanvänder — det är variablerna som gör att de ser helt
olika ut, inte extra markup.

## Statusnivåer

- `ready_demo` — komplett och navigerbar demo.
- `build_next` — nästa demos i tur att byggas kompletta.
- `brief_ready` — genomarbetat underlag och katalogkort, men ännu ingen full demo.

## Gränser

Inget publiceras automatiskt. Ingen DNS, domän, e-post, betalning eller kontoinställning ändras
härifrån. Simulerade funktioner (bokning, nyhetsbrev, kundomdöme, karta, betalning) är tydligt
märkta som demo och kopplar inte till några externa tjänster.
