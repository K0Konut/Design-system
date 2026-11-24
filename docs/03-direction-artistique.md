# 03 — Direction artistique · KokoDesign

> Statut : validé · Date : 2026-11-24
> Planche de tendance : `docs/06-maquettes/moodboard.html` (à ouvrir dans un navigateur)

S'appuie sur le PRD (extraction du design system du Portfolio) et sur le territoire de marque (sous-marque, promesse « Des briques prêtes à copier, déjà testées en vrai. », synthèse § 9). La direction artistique du Portfolio (`~/Projects/Portfolio/docs/03-direction-artistique.md`, v1.3) **fait foi** pour tout ce qui n'est pas redéfini ici.

---

## 1. Direction nommée

**Affiche de nuit, en version atelier.**

L'identité du Portfolio (gris sombre, Bagel pour les titres, Fraunces italique pour les mises en valeur, lime et rose en touches, Manrope pour le texte) habille une **structure de documentation à la vue-bits** : un en-tête fin, une barre latérale qui range les composants par famille, et pour chaque composant un aperçu, le code, un panneau « Personnaliser » et le tableau des props.

**La couleur vit dans l'aperçu.** Le cadre (en-tête, barre latérale, doc, code) reste sombre et calme. La zone d'aperçu de chaque composant se pose sur un des six fonds de section, au choix : c'est là que la DA « Affiche de nuit » s'exprime.

---

## 2. Couleurs

Palette, rôles et six fonds de section : **repris sans changement** (design system du Portfolio § 2). Les contrastes AA y sont déjà vérifiés.

### Ajout : thème du code

Les blocs de code sont nombreux ici, alors qu'ils n'existaient pas dans le Portfolio. Ils reprennent les rôles existants, sans nouvelle teinte.

| Élément | Teinte | Contraste sur la surface (neutral-900) |
|---|---|---|
| Fond du bloc | neutral-900 (`--color-surface`) | — |
| Texte, noms | neutral-50 | 15,3:1 |
| Mots-clés (`const`, `import`, `v-if`) | lime-500 | 14,5:1 |
| Chaînes, valeurs | pink-500 | 6,8:1 |
| Balises, attributs, ponctuation | neutral-100 | 13,2:1 |
| Commentaires | neutral-400 | 6,5:1 |

Quatre couleurs seulement : un code trop coloré se lit moins bien. Le violet-500 n'est jamais utilisé pour du texte de code (contraste insuffisant sur fond sombre, règle du Portfolio).

### Écart avec le Portfolio : en-tête sombre

Le Portfolio a un en-tête crème. KokoDesign passe à un **en-tête sombre** (neutral-950, filet neutral-700), comme les sites de documentation : avec une barre latérale, un bandeau clair couperait l'écran en deux. L'accent et le focus y redeviennent lime.

---

## 3. Typographie

Familles, échelle et règles : **reprises sans changement**. Précisions pour KokoDesign :

- **Titre d'une page de composant** : son nom en Bagel (`--text-h1`).
- **Noms de composants dans la barre latérale et dans le texte** : Manrope dans la barre latérale (lisibilité en petit), JetBrains Mono dans le texte courant (`LetterReveal`).
- **Titres de sections de la doc** (« Personnaliser », « Props ») : Manrope gras, `--text-lead`. Bagel reste réservé aux grands titres.
- **Code** : JetBrains Mono, `--text-sm` minimum (14 px), interlignage `--leading-body`.
- **Phrase d'usage** sous le titre : Manrope `--text-lead`, moins de 15 mots (territoire de marque § 6).

---

## 4. Logo

**Retenu : B — symbole Kokonut + « Koko » en Bagel + « Design » en Fraunces italique.**

- Sur fond sombre, « Design » prend la couleur de mise en valeur (`--color-highlight`, lime) ; sur fond clair, le violet. Il suit donc la règle des rôles, comme toute mise en valeur en Fraunces.
- Le symbole prend la couleur du texte (`currentColor`), comme dans `SiteLogo`.
- **Favicon** : le symbole Kokonut en **lime** sur fond neutral-950, pour distinguer l'onglet de celui du Portfolio (symbole violet).

---

## 5. Mise en page

| Zone | Contenu | Comportement |
|---|---|---|
| **En-tête** (60 px, collé en haut) | Logo · Composants · Design system · sélecteur de langue | Sur mobile : un bouton « Composants » ouvre la barre latérale |
| **Barre latérale** (15 rem, collée) | Démarrer, puis les cinq familles du PRD et leurs composants ; le composant ouvert est en lime avec un filet à gauche | Défile seule ; masquée sous 1024 px |
| **Page d'un composant** | Titre · phrase d'usage · onglets Aperçu / Code · aperçu (barre de fonds + Rejouer) · Personnaliser · Props · encadré « Animations réduites et limites » | Colonne unique, largeur max ~1100 px |
| **Accueil** | En-tête de page sur fond violet avec le fond topographique, le nom en `LetterReveal`, la promesse, deux boutons (« Parcourir les composants », « Voir le design system ») | Plein écran sur mobile |

- **Encadré des limites** : filet rose à gauche, sur la surface. C'est la valeur « Résilient » du territoire de marque : les limites se voient.
- **Icônes** : celles du Portfolio (Lucide en SVG local, trait épais et arrondi), plus copier, code, rejouer, langue, menu.
- **Pas de captures ni de photos** : les démos sont l'imagerie du site.
- **Fond topographique** (`TopoBackground`) : réservé à l'accueil. La planche le remplace par un dégradé flou en attendant le vrai composant.

---

## 6. Motion

### Le cadre obéit, la scène est libre

| Zone | Règle |
|---|---|
| **Le cadre** : en-tête, barre latérale, doc, tableaux, code | Règles du Portfolio, sans exception : survol et clic, aucune réaction au curseur, pas d'apparition au scroll |
| **La scène** : l'intérieur d'un aperçu | Libre : le composant montré peut tout faire, curseur compris, s'il respecte les trois règles non négociables ci-dessous |

### Mouvements propres au site

| Mouvement | Comportement | Durée et courbe |
|---|---|---|
| Changement de fond dans l'aperçu | Fondu de la couleur de fond | `--duration-fast` (250 ms), `--ease-out` |
| Réglage dans « Personnaliser » | La démo rejoue tout de suite, sans transition ajoutée | — |
| Bouton « Copier » | Appui (`--press-scale`), puis « Copié » pendant `--feedback-hold` | `--duration-press` (120 ms) |
| Interrupteur | La pastille glisse | `--duration-fast`, `--ease-out` |
| Arrivée sur l'accueil | Une seule entrée : le nom lettre par lettre (`LetterReveal`) ; le fond topographique ondule lentement | Valeurs du Portfolio |

### Règles non négociables (reprises du Portfolio, appliquées à chaque composant)

1. **L'essentiel ne patiente jamais** : l'aperçu, le code et le bouton « Copier » sont utilisables en moins d'une seconde.
2. **`prefers-reduced-motion`** : chaque composant documente son comportement réduit, et l'aperçu le montre avec l'interrupteur « Animations réduites ».
3. **Performance** : uniquement `transform` et `opacity` dans le cadre ; dans la scène, un aperçu hors de l'écran est mis en pause.

---

## 7. Ce qui ne change pas

Fonds de section, vagues (`SectionWave`), tokens d'espacement, rayons, zones cliquables de 44 px, focus visible lime : tout vient du Portfolio et ne se redéfinit pas ici.

---

## 8. Questions ouvertes

Aucune.
