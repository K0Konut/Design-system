# 01 — PRD · KokoDesign

> Statut : validé · Date : 2026-11-24

## 1. Contexte et problème

Je construis régulièrement des interfaces en Vue et je recode souvent les mêmes briques (boutons, cartes, champs) et les mêmes effets (texte animé, fonds, survols). Aujourd'hui ces composants sont dispersés entre plusieurs projets, sans style commun ni version de référence.

Des sites comme react-bits ou vue-bits montrent qu'on peut rassembler ce genre de travail sous forme de catalogue : une démo en direct, le code prêt à copier. Ce projet reprend cette idée, mais avec **mon propre design system** et pour **mon usage**, avec une vitrine publique.

**Point de départ** : le design system de mon Portfolio (`~/Projects/Portfolio`, v1.2 du 23/10/2026, direction artistique « Affiche de nuit »). Il contient déjà les tokens, une trentaine de composants rangés par famille et un catalogue de développement avec réglages en direct. KokoDesign en est l'**extraction** dans un site autonome : même identité visuelle, composants copiés, Portfolio inchangé.

## 2. Objectifs et indicateurs

| Objectif | Indicateur | Cible |
|---|---|---|
| Une source unique pour mes composants | Composants copiés depuis le site dans mes projets | Tout nouveau projet part du site |
| Pouvoir améliorer le site en continu | Temps pour ajouter un nouveau composant (code + démo + doc) | Moins de 15 min, sans toucher à la navigation ni au routage |
| Montrer mon niveau (vitrine) | Score Lighthouse Performance et Accessibilité | 90 ou plus sur chaque page |
| Garder un design cohérent | Valeurs en dur dans les composants | 0 : tout passe par les tokens |

## 3. Personas

**Moi, développeur (persona principal).** Je démarre un projet Vue, je veux récupérer un composant éprouvé en 30 secondes : je le cherche, je vois la démo, je copie le code. Je reviens régulièrement ajouter ou améliorer un composant.

**Le visiteur : recruteur, client ou pair (persona secondaire).** Il arrive depuis un lien (CV, réseau social, portfolio) et parcourt quelques démos en moins de 2 minutes. Il doit repartir avec une impression nette de qualité et de cohérence visuelle.

**Le dev de passage (persona tertiaire).** Il tombe sur un composant qui lui plaît et veut le copier. On ne lui promet pas de support, mais le code copié doit fonctionner seul.

## 4. User stories principales

- En tant que **développeur**, je veux **parcourir les composants par famille (Fonds, Textes animés, Animations, Composants, Mise en page)**, afin de **trouver vite ce dont j'ai besoin**.
- En tant que **développeur**, je veux **voir une démo en direct de chaque composant**, afin de **juger son rendu avant de l'utiliser**.
- En tant que **développeur**, je veux **copier le code source en un clic**, afin de **l'intégrer tel quel dans un projet Vue**.
- En tant que **développeur**, je veux **modifier les principales props depuis la démo**, afin de **voir les variantes sans écrire de code**.
- En tant que **mainteneur**, je veux **ajouter un composant en créant ses fichiers dans un dossier**, afin que **le site le liste automatiquement**.
- En tant que **visiteur**, je veux **voir les tokens du design system (couleurs, typo, espacements, motion)**, afin de **comprendre la cohérence de l'ensemble**.
- En tant que **visiteur sensible au mouvement**, je veux **que les animations respectent `prefers-reduced-motion`**, afin de **naviguer sans gêne**.

## 5. Périmètre

### MVP
- Site Vue statique : accueil, catalogue, une page par composant, une page « Design system » (tokens).
- Cinq familles, reprises du Portfolio : **Fonds**, **Textes animés**, **Animations**, **Composants**, **Mise en page**.
- Page composant : démo en direct, contrôles des props principales, code source copiable, liste des props, notes d'accessibilité.
- Ajout d'un composant en déposant ses fichiers dans un dossier, avec découverte automatique (aucune route à écrire à la main).
- Chaque composant visible sur les six fonds de section de la DA (pas de thème clair / sombre : la DA « Affiche de nuit » est sombre par nature).
- Les 26 composants génériques du Portfolio au lancement (voir § 5 bis).

### Plus tard
- Recherche et filtres par tag.
- Installation par CLI (`npx …`) ou registre de type shadcn.
- Versions des composants et journal des modifications.
- Variante Tailwind / CSS pur de chaque composant.

### Hors périmètre
- Support de React ou d'autres frameworks.
- Composants propres au Portfolio : `AppHeader`, `MobileMenu`, `LangSwitch`, `AppFooter`, `SiteLogo`, `ContactLinks`, `SkipLink`, `ProjectCard`.
- Synchronisation automatique avec le Portfolio : les composants sont copiés, chaque projet évolue de son côté.
- Paquet npm publié et maintenu pour des tiers.
- Comptes utilisateurs, backend, contributions externes.

## 6. Contraintes

- **Technique** : Vue 3 + TypeScript, site 100 % statique, aucun backend.
- **Hébergement** : build statique déployé sur mon serveur personnel, a priori sur `design.costamask.dev`.
- **Accessibilité** : WCAG AA, navigation clavier complète, `prefers-reduced-motion` respecté par chaque effet.
- **Légal** : pas de cookies ni d'analytics au MVP, donc pas de bandeau RGPD. Code sous licence **MIT**.
- **Délai et budget** : projet personnel, sans échéance imposée.

## 5 bis. Composants de lancement

Les briques génériques du design system du Portfolio (§ 3 de son `05-design-system.md`). Ceux marqués ⚠ dépendent du contenu ou des traductions du Portfolio : il faudra les découpler (textes passés en props) à l'extraction.

| Famille | Composants |
|---|---|
| Fonds | `TopoBackground` (WebGL), `SectionWave` |
| Textes animés | `LetterReveal` |
| Animations | `v-reveal` (directive), `ScrollParallax` ⚠, `ScrollHint`, `DragToSnap` |
| Composants | `BaseButton`, `TextLink`, `BaseTag`, `BaseIcon`, `CopyButton` ⚠, `PosterCard`, `DeviceFrame` ⚠, `DotList`, `DefinitionList`, `StatBlock` ⚠, `BaseTimeline` ⚠, `CycleSteps`, `NumberedSteps`, `StickyToc` ⚠, `NextLink` |
| Mise en page | `PageSection`, `PageIntro`, `PosterGrid`, `BentoGrid` |

Le moteur du catalogue (`src/pages/design-system/catalogue.ts` et les composants `Ds*` du Portfolio : démo, panneau de réglages, code, tableau des props) est repris comme base du site.

## 6. Contraintes

- **Technique** : Vue 3 + TypeScript, site 100 % statique, aucun backend.
- **Hébergement** : build statique déployé sur mon serveur personnel, a priori sur `design.costamask.dev`.
- **Accessibilité** : WCAG AA, navigation clavier complète, `prefers-reduced-motion` respecté par chaque effet.
- **Légal** : pas de cookies ni d'analytics au MVP, donc pas de bandeau RGPD. Code sous licence **MIT**.
- **Délai et budget** : projet personnel, sans échéance imposée.

## 5 bis. Composants de lancement (proposition)

Les briques UI servent aussi au site lui-même : le site est le premier utilisateur de son design system.

| # | Composant | Catégorie | Pourquoi au lancement |
|---|---|---|---|
| 1 | Button | UI | Base de tout ; sert au bouton « Copier » |
| 2 | Input | UI | Formulaires de tous les projets |
| 3 | Switch | UI | Sert au sélecteur clair / sombre |
| 4 | Tabs | UI | Sert à basculer entre Démo et Code |
| 5 | Card | UI | Sert aux vignettes du catalogue |
| 6 | Texte révélé | Effets | Révélation lettre par lettre ou mot par mot, très demandé en hero |
| 7 | Bouton magnétique | Effets | Le bouton suit légèrement le curseur |
| 8 | Carte spotlight | Effets | Halo lumineux qui suit le curseur sur une carte |
| 9 | Fond aurora | Effets | Fond animé en dégradé, pour les sections hero |
| 10 | Marquee infini | Effets | Bandeau défilant de logos ou de texte |

## 7. Questions ouvertes

Aucune à ce stade. Adresse pressentie : `design.costamask.dev`, à confirmer en phase 7.
