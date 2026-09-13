# Webbportfolio

Nova IT:s portfölj för webbutveckling: en hubbsida som presenterar
tjänster och kompetens, plus sju fullständiga exempelsajter för olika
typer av verksamheter — allt byggt som ett Astro-projekt.

## Struktur

- `/` — Nova IT-navet (hem, tjänster, kompetens, kundtyper, om oss, kontakt),
  i Nova IT:s egna färger och logotyp.
- `/advokatbyra/` — Lindqvist & Partners (advokatbyrå)
- `/restaurang/` — Restaurang Björk (restaurang/café)
- `/hantverkare/` — Ek & Sten Bygg (hantverkare/bygg)
- `/frisor/` — Studio Rae (frisör/skönhetssalong)
- `/sportforening/` — IFK Lindholmen (sportförening)
- `/stadfirma/` — Klarblick Städ (städfirma)
- `/enkel-foretagare/` — Elin Karlsson, massageterapeut (Bas-paketet: en sida)

Alla företag ovan utom Nova IT är fiktiva demoexempel.

## Utveckling

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # typkontroll + statisk build till dist/
bun run preview
```

## Design

Varje sajt har en egen `src/styles/tokens-<sajt>.css` med CSS-variabler för
färg, typsnitt och radie. `src/styles/base.css` innehåller den delade
strukturen (header, footer, kort, formulär, knappar) som alla sajter
återanvänder — det är variablerna som gör att de ser helt olika ut.
