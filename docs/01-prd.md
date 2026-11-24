# 01 — PRD

> Statut : brouillon, à valider · Date : 2026-11-24

## 1. Contexte et problème

Je construis régulièrement des interfaces en Vue et je recode souvent les mêmes briques (boutons, cartes, champs) et les mêmes effets (texte animé, fonds, survols). Aujourd'hui ces composants sont dispersés entre plusieurs projets, sans style commun ni version de référence.

Des sites comme react-bits ou vue-bits montrent qu'on peut rassembler ce genre de travail sous forme de catalogue : une démo en direct, le code prêt à copier. Ce projet reprend cette idée, mais avec **mon propre design system** et pour **mon usage**, avec une vitrine publique.

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

- En tant que **développeur**, je veux **parcourir les composants par catégorie (UI / Effets)**, afin de **trouver vite ce dont j'ai besoin**.
- En tant que **développeur**, je veux **voir une démo en direct de chaque composant**, afin de **juger son rendu avant de l'utiliser**.
- En tant que **développeur**, je veux **copier le code source en un clic**, afin de **l'intégrer tel quel dans un projet Vue**.
- En tant que **développeur**, je veux **modifier les principales props depuis la démo**, afin de **voir les variantes sans écrire de code**.
- En tant que **mainteneur**, je veux **ajouter un composant en créant ses fichiers dans un dossier**, afin que **le site le liste automatiquement**.
- En tant que **visiteur**, je veux **voir les tokens du design system (couleurs, typo, espacements, motion)**, afin de **comprendre la cohérence de l'ensemble**.
- En tant que **visiteur sensible au mouvement**, je veux **que les animations respectent `prefers-reduced-motion`**, afin de **naviguer sans gêne**.

## 5. Périmètre

### MVP
- Site Vue statique : accueil, catalogue, une page par composant, une page « Design system » (tokens).
- Deux catégories : **UI** (briques d'interface) et **Effets** (animations, fonds, texte animé).
- Page composant : démo en direct, contrôles des props principales, code source copiable, liste des props, notes d'accessibilité.
- Ajout d'un composant en déposant ses fichiers dans un dossier, avec découverte automatique (aucune route à écrire à la main).
- Thème clair / sombre.
- 6 à 10 composants au lancement, mélange UI et Effets.

### Plus tard
- Recherche et filtres par tag.
- Installation par CLI (`npx …`) ou registre de type shadcn.
- Versions des composants et journal des modifications.
- Variante Tailwind / CSS pur de chaque composant.

### Hors périmètre
- Support de React ou d'autres frameworks.
- Paquet npm publié et maintenu pour des tiers.
- Comptes utilisateurs, backend, contributions externes.

## 6. Contraintes

- **Technique** : Vue 3 + TypeScript, site 100 % statique, aucun backend.
- **Hébergement** : gratuit (GitHub Pages, Netlify ou Vercel).
- **Accessibilité** : WCAG AA, navigation clavier complète, `prefers-reduced-motion` respecté par chaque effet.
- **Légal** : pas de cookies ni d'analytics au MVP, donc pas de bandeau RGPD. Licence du code à choisir.
- **Délai et budget** : projet personnel, sans échéance imposée.

## 7. Questions ouvertes

1. **Nom du site** : réutiliser ton pseudo (ex. « Konut UI ») ou trouver un nom à part ? Ce choix nourrit la phase 2 (marque).
2. **Licence** : MIT (on peut tout copier librement) ou tous droits réservés (vitrine seulement) ?
3. **Premiers composants** : lesquels veux-tu en priorité ? Sinon je proposerai une liste en phase 4.
4. **Hébergement** : as-tu une préférence (GitHub Pages, Netlify ou Vercel) et un nom de domaine ?
