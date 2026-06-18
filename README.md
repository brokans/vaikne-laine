# Vaikne Laine OÜ — veebileht

**Eksamikood:** EX-2026-8U3D
**Ettevõte:** Vaikne Laine OÜ
**Tegevusala:** mööblirestaureerimise töökoda

Veebileht tutvustab töökoda ja kajastab uudistes valminud töid, kursuseid ja
huvitavaid leide. Sait koosneb esilehest, uudiste loendist, üksiku uudise
vaatest ja kontaktilehest.

## Valitud CMS ja põhjendus

Valisin **Storyblok**'i (headless CMS) koos **Astro** frontendiga. Storyblok hoiab
sisu pilves ja pakub seda API kaudu, nii et sisu ja kujundus on lahutatud —
toimetaja saab uudiseid lisada mugava admin-liidese kaudu ilma koodi puutumata.
Astro genereerib sellest kiire staatilise saidi.

## Tööplaan ja ajahinnang (~3 h)

1. **Tööplaan ja README** (5 min) — eksamiandmed, CMS-valik, plaan.
2. **Arenduskeskkond** (10 min) — Astro + Storybloki integratsioon, Node 24, npm.
3. **Põhipaigutus** (15 min) — responsiivne `Layout` koos burgerimenüüga.
4. **Sisukomponendid** (15 min) — Hero, Page, NewsPost komponendid + registreerimine.
5. **Storyblok seadistus** (20 min) — space (EU), sisutüübid `page` ja `news_post`, väljad.
6. **Lehed/vaated** (30 min) — esileht, uudiste loend, üksiku uudise vaade, kontaktileht.
7. **Sisu sisestamine** (25 min) — esilehe sisu, 2–3 uudist, kontaktinfo; kõik avaldada.
8. **Lokaalne käivitus ja kontroll** (15 min) — `npm run dev`, kõigi lehtede ja vaadete testimine.
9. **Viimistlus** (20 min) — stiilid, mobiilikontroll, päise/jaluse kohandus.

> Plaan võib töö käigus täpsustuda; muudatused kajastan commitides.
