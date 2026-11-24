# 03 — Direction artistique · KokoDesign

> Statut : brouillon, à valider · Date : 2026-11-24
> Planche de tendance : `docs/06-maquettes/moodboard.html` (à ouvrir dans un navigateur)

S'appuie sur le PRD (extraction du design system du Portfolio) et sur le territoire de marque (sous-marque, promesse « Des briques prêtes à copier, déjà testées en vrai. », synthèse § 9). La direction artistique du Portfolio (`~/Projects/Portfolio/docs/03-direction-artistique.md`, v1.3) **fait foi** pour tout ce qui n'est pas redéfini ici.

---

## 1. Direction nommée

**Affiche de nuit**, reprise telle quelle : gris sombre rythmé de sections de couleur, Bagel pour les titres, Fraunces italique pour les mises en valeur, lime et rose en touches, Manrope pour le texte.

**Ce qui est propre à KokoDesign : le mur d'affiches.** Dans le Portfolio, le motif « affiches collées » (cartes inclinées de -2° à 2°, qui se redressent au survol) sert aux projets. Ici, il devient **le catalogue lui-même** : chaque composant est une affiche collée au mur, posée sur un des six fonds, avec sa démo vivante dedans. C'est le seul endroit où le site prend un risque visuel ; tout le reste (en-tête, documentation, code) reste calme.

> Le Portfolio montre les projets comme des affiches. KokoDesign montre les briques comme des affiches.

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

---

## 3. Typographie

Familles, échelle et règles : **reprises sans changement**. Précisions pour KokoDesign :

- **Noms de composants** : en JetBrains Mono quand ils désignent du code (`LetterReveal`), en Bagel quand ils sont le titre d'une affiche ou d'une page.
- **Code** : JetBrains Mono, `--text-sm` minimum (14 px), interlignage `--leading-body`.
- **Phrase d'usage** sous le titre d'un composant : Manrope `--text-lead`, moins de 15 mots (territoire de marque § 6).

---

## 4. Logo

Proposition (à choisir, voir § 8 ; les trois sont dans la planche) :

- **A — Symbole Kokonut + « KokoDesign » en Bagel** *(recommandée)*. Même construction que `SiteLogo` dans le Portfolio : on reconnaît tout de suite la parenté, sans nouveau dessin.
- **B — Symbole + « Koko » en Bagel et « Design » en Fraunces italique.** Plus expressif, mais coupe le nom en deux.
- **C — Symbole seul**, nom écrit en Manrope à côté. Plus discret, moins de caractère.

**Favicon** : le symbole Kokonut en **lime** sur fond neutral-950, pour distinguer l'onglet de celui du Portfolio (symbole violet).

---

## 5. Imagerie et iconographie

- **Pas de captures ni de photos** : les démos vivantes sont l'imagerie du site.
- **Icônes** : celles du Portfolio (Lucide en SVG local, trait épais et arrondi), plus quelques-unes propres au catalogue : copier, code, réglages, accessibilité, langue.
- **Motif « affiches collées »** : il devient le catalogue (§ 1). Inclinaisons de -2° à 2°, jamais deux voisines sur le même fond, droites sur mobile.
- **Fond topographique** (`TopoBackground`) : réservé à l'en-tête de la page d'accueil, comme dans le Portfolio. Pas ailleurs, pour ne pas concurrencer les démos.

---

## 6. Motion

### Le cadre obéit, la scène est libre

Le Portfolio interdit les réactions au curseur (pas de bouton magnétique, rien qui suit la souris). KokoDesign montre des effets : certains futurs composants réagiront forcément au curseur. On sépare donc deux zones :

| Zone | Règle |
|---|---|
| **Le cadre** : en-tête, navigation, documentation, tableaux, code | Règles du Portfolio, sans exception : apparitions simples, survol et clic, aucune réaction au curseur |
| **La scène** : l'intérieur d'une démo | Libre : le composant montré peut faire ce qu'il veut, curseur compris, s'il respecte les trois règles non négociables ci-dessous |

### Mouvements propres au site

| Mouvement | Comportement | Durée et courbe |
|---|---|---|
| Affiche au survol ou au focus | Se redresse (rotation → 0°) et monte de `--card-lift` | `--duration-fast` (250 ms), `--ease-out` |
| Changement de fond dans une démo | Fondu enchaîné de la couleur de fond | `--duration-fast`, `--ease-out` |
| Bouton « Copier » | Appui (`--press-scale`), puis « Copié » pendant `--feedback-hold` | `--duration-press` (120 ms) |
| Réglage d'une prop | Aucune transition ajoutée : la démo réagit tout de suite | — |
| Arrivée sur l'accueil | Une seule entrée orchestrée : le nom en `LetterReveal`, puis les affiches se posent une à une (décalage `--stagger-block`, total < 500 ms) | Valeurs du Portfolio |

Pas d'apparition au scroll sur chaque bloc de documentation : la page d'un composant doit être lisible tout de suite.

### Règles non négociables (reprises du Portfolio, appliquées à chaque composant)

1. **L'essentiel ne patiente jamais** : la démo, le code et le bouton « Copier » sont utilisables en moins d'une seconde.
2. **`prefers-reduced-motion`** : chaque composant documente son comportement réduit, et la démo montre ce mode avec un interrupteur « Animations réduites ».
3. **Performance** : uniquement `transform` et `opacity` dans le cadre ; dans la scène, une démo hors de l'écran est mise en pause.

---

## 7. Ce qui ne change pas

Fonds de section, vagues (`SectionWave`), tokens d'espacement, rayons, zones cliquables de 44 px, focus visible lime : tout vient du Portfolio et ne se redéfinit pas ici.

---

## 8. Questions ouvertes

1. **Logo** : A (recommandé), B ou C ?
2. **Le cadre obéit, la scène est libre** : d'accord pour autoriser les réactions au curseur dans les démos seulement ?
3. **Mur d'affiches** comme catalogue (et accueil) : ça te parle, ou tu préfères une grille droite et sobre ?
