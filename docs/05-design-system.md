# 05 — Design system & composants · KokoDesign

> Statut : lot 1 (socle) à valider · Date : 2026-11-24

S'appuie sur le PRD (§ 5 bis : 26 composants génériques), la DA (thème du code, barre latérale, « le cadre obéit, la scène est libre ») et l'architecture UX (page d'un composant, bloc Dépendances, ajout d'un composant par simple dossier).

Le design system du Portfolio (`~/Projects/Portfolio/docs/05-design-system.md`, v1.2) **fait foi** pour les principes (§ 1), les tokens (§ 2) et les spécifications détaillées de chaque composant (§ 4). Ce document ne note que ce que KokoDesign reprend, change ou ajoute.

La phase se fait en trois lots, un par PR :

| Lot | Contenu | État |
|---|---|---|
| 1. Socle | Outillage, tokens, 26 composants copiés et découplés, tests | **Cette PR** |
| 2. Fiches | Format de la fiche de documentation d'un composant, puis les 26 fiches FR / EN | À faire |
| 3. Composants du site | Barre latérale, onglets, aperçu, Personnaliser, tableau des props, bloc de code, interrupteur ; page vitrine | À faire |

---

## 1. Principes

Ceux du Portfolio (tokens uniquement, deux niveaux de couleurs, plat, accessible par défaut, des briques et pas des sections, réglables, démontrables), plus un :

8. **Copiable seul** : un composant ne dépend que de `vue`, des fichiers de base (§ 3) et des briques listées dans sa fiche. Aucun texte en dur dans une langue sans prop pour le changer ; aucune dépendance au contenu ou aux traductions d'un site.

---

## 2. Tokens

`src/styles/tokens.css` : copie de celui du Portfolio, avec ces ajouts.

| Token | Valeur | Usage |
|---|---|---|
| `--code-text` | neutral-50 | Texte du code (15,3:1 sur la surface) |
| `--code-keyword` | lime-500 | Mots-clés (14,5:1) |
| `--code-string` | pink-500 | Chaînes, valeurs (6,8:1) |
| `--code-tag` | neutral-100 | Balises, attributs, ponctuation (13,2:1) |
| `--code-comment` | neutral-400 | Commentaires (6,5:1) |
| `--sidebar-width` | `15rem` | Barre latérale de la documentation |

Rien n'est retiré : les tokens propres aux sections du Portfolio (`--text-hero`, `--hero-parallax`…) servent aussi aux briques qui en viennent (`LetterReveal`, `ScrollParallax`).

---

## 3. Fichiers de base

Tout projet qui copie un composant copie d'abord ces fichiers une fois (page « Utiliser un composant », UX § 4) :

| Fichier | Contenu |
|---|---|
| `src/styles/tokens.css` | Variables, polices (`@font-face`) |
| `src/styles/base.css` | Remise à zéro, focus, `.sr-only`, six fonds de section (`.fond-*`), classes partagées par les briques (`.display`, `.lead`, `.container`, `.poster`, `.reveal`, `.skill-dot`, `.trace`, `.link-inline`, `.hl`) |
| `public/fonts/` | Bagel Fat One, Fraunces italique, Manrope, JetBrains Mono (woff2, licences OFL) |

`base.css` perd les styles `.prose` du Portfolio, qui ne servaient qu'à son contenu Markdown.

---

## 4. Inventaire des composants

Les 26 briques, rangées par famille. « Briques » : autres fichiers de `src/` à copier avec le composant. « Utilisé dans KokoDesign » : pages de l'architecture UX où le site s'en sert lui-même.

### Fonds

| Composant | Briques | Bibliothèque | Utilisé dans KokoDesign |
|---|---|---|---|
| `TopoBackground` | `useTopography`, `motion` | — (WebGL natif) | Accueil |
| `SectionWave` | `useViewportWidth`, `fonds`, `wave` | — | — |

### Textes animés

| Composant | Briques | Bibliothèque | Utilisé dans KokoDesign |
|---|---|---|---|
| `LetterReveal` | `motion` | — | Accueil (le nom) |

### Animations

| Composant | Briques | Bibliothèque | Utilisé dans KokoDesign |
|---|---|---|---|
| `v-reveal` (directive) | — | — | — |
| `ScrollParallax` | `motion` | GSAP (ScrollTrigger, chargé à la demande) | — |
| `ScrollHint` | — | — | — |
| `DragToSnap` | — | — | — |

### Composants

| Composant | Briques | Bibliothèque | Utilisé dans KokoDesign |
|---|---|---|---|
| `BaseButton` | `useLink`, `BaseIcon`, `icons` | vue-router (facultatif) | Accueil, Personnaliser (Rejouer) |
| `TextLink` | `useLink`, `BaseIcon`, `icons` | vue-router (facultatif) | Textes, pied de page |
| `BaseTag` | — | — | — |
| `BaseIcon` | `icons` | — | Partout |
| `CopyButton` | `BaseButton`, `BaseIcon`, `useLink`, `icons` | — | Design system (noms des tokens) |
| `PosterCard` | `fonds` | — | — |
| `DeviceFrame` | — | — | — |
| `DotList` | — | — | — |
| `DefinitionList` | — | — | — |
| `StatBlock` | `v-reveal` | — | — |
| `BaseTimeline` | `motion`, `BaseTag`, `TextLink` (+ ses briques) | GSAP (ScrollTrigger), vue-router (facultatif) | — |
| `CycleSteps` | `v-reveal` | — | — |
| `NumberedSteps` | `v-reveal` | — | — |
| `StickyToc` | — | — | — |
| `NextLink` | `useLink`, `BaseIcon`, `icons` | vue-router (facultatif) | Page d'un composant (précédent / suivant) |

### Mise en page

| Composant | Briques | Bibliothèque | Utilisé dans KokoDesign |
|---|---|---|---|
| `PageSection` | `fonds`, `v-reveal` | — | Accueil, Design system |
| `PageIntro` | `fonds`, `v-reveal` | — | Index, Introduction, 404 |
| `PosterGrid` | `slotChildren`, `v-reveal` | — | — |
| `BentoGrid` | `motion`, `slotChildren`, `v-reveal` | — | — |

**vue-router facultatif** : avec le routeur installé, `to` donne un `RouterLink` ; sans lui, un simple `<a href>`. Le type `RouteLocationRaw` vient de vue-router : sans lui, TypeScript demandera d'installer ses types ou de passer `to` en chaîne.

---

## 5. Découplage fait au lot 1

| Fichier | Avant (Portfolio) | Après |
|---|---|---|
| `useLink` | `vue-i18n` pour « (nouvel onglet) », `RouterLink` importé | Prop `newTabLabel` (« (nouvel onglet) » par défaut) ; `RouterLink` pris dans l'application s'il y est déclaré, sinon `<a>` (sans routeur, `to` doit être une chaîne) |
| `NextLink` | `<RouterLink>` en dur | Passe par `useLink` |
| `CopyButton` | `vue-i18n` | Prop `labels` (`idle`, `copied`, `selected`), en français par défaut |
| `StatBlock` | `vue-i18n` | Props `beforeLabel`, `afterLabel` (« avant », « après » par défaut) |
| `StickyToc` | `vue-i18n` | Prop `label` existante, « Sommaire » par défaut |
| `DeviceFrame` | Type `Device` importé du contenu du Portfolio | Type écrit dans le composant (`'browser' \| 'phone'`) |

**Langue par défaut : le français.** Les textes par défaut sont en français, comme dans le Portfolio ; la version anglaise du site passe les textes anglais en props.

---

### Corrections faites à la revue de code

Ces défauts existent aussi dans le Portfolio : à reporter là-bas.

| Fichier | Défaut | Correction |
|---|---|---|
| `TopoBackground` | Au démontage, `clearTimeout` recevait un numéro d'idle et pouvait annuler le minuteur d'un autre composant | N'annule que l'API qui a servi |
| `LetterReveal` | En démarrage `manual`, les lettres apparaissaient d'office au bout de 3 s, avant `play()` | Le secours des 3 s ne vaut que pour `load` |
| `DragToSnap` | Sans cible, l'élément était « proche » dès le début d'un glisser et ne revenait pas à sa place | Jamais « proche » sans cible |
| `useTopography` | Un shader qui ne compile pas laissait un contexte WebGL ouvert à chaque essai | Le contexte est libéré |
| `CopyButton` | `--feedback-hold` écrit en ms durait 1 000 fois trop longtemps | Lit les s et les ms |
| `wave.ts` | Quand la largeur ne tombe pas sur un pas, la vague finissait avant le bord droit | Toujours un dernier point au bord droit |

## 6. Composants du site (lot 3)

Déduits de l'architecture UX (§ 3 et § 4) et de la planche de la DA. Spécifiés en détail au lot 3.

| Composant | Rôle | Pages |
|---|---|---|
| `SiteHeader` | Logo B, Composants, Design system, langue, GitHub ; bouton « Composants » sur mobile | Toutes |
| `DocSidebar` | Démarrer + cinq familles, composant en cours en lime | Pages de doc et de composant |
| `DocTabs` | Onglets Aperçu / Code (rôle `tablist`, flèches du clavier) | Page d'un composant |
| `DemoPreview` | Barre des six fonds + Rejouer, scène sur le fond choisi, pause hors de l'écran, repli WebGL | Page d'un composant |
| `DemoControls` | Un contrôle par option (texte, nombre, booléen, liste) + « Animations réduites » | Page d'un composant |
| `PropsTable` | Props, slots, événements | Page d'un composant |
| `CodeBlock` | Code coloré avec les tokens `--code-*`, bouton Copier, message si la copie échoue | Page d'un composant, Utiliser |
| `BaseSwitch` | Interrupteur accessible (`role="switch"`) | Personnaliser |
| `SiteFooter` | Portfolio, GitHub, MIT, mentions légales | Toutes |
| `SiteLogo` | Symbole Kokonut + « Koko » Bagel + « Design » Fraunces | En-tête |

---

## 7. Vérifications du lot 1

- `npm run type-check`, `npm run lint`, `npm run format:check` : OK.
- `npm run test` : 34 tests, repris du Portfolio (briques, composants de base, vague) et complétés pour le découplage (lien sans routeur, textes en props) et les corrections de la revue.
