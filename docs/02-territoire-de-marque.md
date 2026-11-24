# 02 — Territoire de marque · KokoDesign

> Statut : validé · Date : 2026-11-24

S'appuie sur le PRD (KokoDesign extrait le design system du Portfolio) et sur le territoire de marque du Portfolio (`~/Projects/Portfolio/docs/02-territoire-de-marque.md`), **qui fait foi** pour tout ce qui n'est pas redéfini ici.

---

## 1. Relation avec le Portfolio

KokoDesign est une **sous-marque** du Portfolio : même auteur, même identité visuelle, même valeurs. Le Portfolio montre **les projets** ; KokoDesign montre **les briques** qui les construisent.

| Repris tel quel du Portfolio | Propre à KokoDesign |
|---|---|
| Valeurs (créatif, rigoureux, compréhensif, résilient) | Nom, promesse, positionnement |
| Archétype créateur + explorateur, curseurs | Public (développeurs, avant les recruteurs) |
| Mots à éviter | Ton de la documentation technique |
| Champ lexical de la construction | Langue du site |

Le lien est affiché : un renvoi vers `costamask.dev` dans le pied de page, et inversement depuis le Portfolio (plus tard).

---

## 2. Mission, vision, promesse

**Mission** — rassembler les briques de mes projets dans un seul endroit, pour ne plus jamais les recoder.

**Vision** — un design system se prouve en le montrant : chaque brique visible, réglable, copiable.

**Promesse**
> **Des briques prêtes à copier, déjà testées en vrai.**
> *EN : Ready-to-copy building blocks, already tested for real.*

Elle dit l'usage (copier) et la preuve : chaque composant vient d'un site en production.

---

## 3. Valeurs appliquées à KokoDesign

| Valeur | Comment elle se voit sur KokoDesign |
|---|---|
| **Créatif** | Une DA affirmée (« Affiche de nuit »), à l'opposé des bibliothèques neutres ; des effets qui surprennent dans les démos. |
| **Rigoureux** | Chaque composant documenté pareil : démo, réglages, props, accessibilité, motion. Zéro valeur en dur. |
| **Compréhensif** | Chaque composant dit quand s'en servir et quand ne pas s'en servir. |
| **Résilient** | Chaque composant peut avoir une note « limites connues » plutôt que de les cacher. |

---

## 4. Positionnement

**KokoDesign est** une bibliothèque personnelle de composants Vue à copier, avec une identité visuelle forte et une accessibilité garantie composant par composant.

| Référence | Ce qu'on partage | Ce qui nous distingue |
|---|---|---|
| **vue-bits** / **react-bits** | Le copier-coller, les démos en direct, les effets animés | Un design system cohérent derrière les effets, pas une collection d'effets isolés ; `prefers-reduced-motion` géré partout |
| **shadcn-vue** | Le code copié qu'on possède, les tokens | Une DA assumée au lieu d'un style neutre à personnaliser |
| **Storybook d'entreprise** | Documentation par composant, états, props | Un site pensé pour être montré, pas un outil interne |

**Différenciation en une phrase** : les briques d'un vrai site, avec leur design system, montrées comme une affiche.

---

## 5. Personnalité

Reprise du Portfolio (créateur + explorateur, curseurs identiques). Un seul ajustement :

| Curseur | Portfolio | KokoDesign | Pourquoi |
|---|---|---|---|
| Sérieux ↔ Ludique | 3 | **3,5** | Un catalogue d'effets invite à jouer : les démos peuvent l'être, la documentation reste sérieuse. |

---

## 6. Ton de voix

Règles du Portfolio (phrases courtes et concrètes, « je », humour rare), avec ces ajustements pour une documentation technique :

- **Adresse** : **« tu »**, l'usage courant dans la documentation pour développeurs (le Portfolio, lui, vouvoie).
- **Langues** : **français et anglais**, au même niveau. En anglais, même ton décontracté, « you ».
- **Impératif pour les instructions** : « Copie le composant », « Passe le texte en prop ».
- **Un composant = une phrase d'usage** : ce qu'il fait, en moins de 15 mots.
- **Pas de superlatifs** : on montre la démo, on ne dit pas qu'elle est « incroyable ».

| ✅ On dit | ❌ On ne dit pas |
|---|---|
| « Les lettres montent une à une, puis se posent. » | « Une animation de texte époustouflante. » |
| « Animations coupées si `prefers-reduced-motion` est actif. » | « Entièrement accessible. » |
| « Ne l'utilise pas pour du texte courant : il ralentit la lecture. » | *(rien : ne pas taire les limites)* |

**Mots à éviter** : ceux du Portfolio, plus « magique », « époustouflant », « next-level », « pixel perfect », « blazing fast ».

---

## 7. Champ lexical

Celui du Portfolio, **construire brique par brique**, qui devient ici le vocabulaire central : le design system du Portfolio appelle déjà ses composants des « briques ».

- **Construction** : brique, assembler, poser, fondations, structure, plan.
- **Atelier** : copier, régler, ajuster, essayer, outil, établi.
- **Affiche** : fond, coller, accrocher, tirage (lien avec la DA « Affiche de nuit »).

---

## 8. Questions ouvertes

Aucune.

---

## 9. Synthèse — brief pour la direction artistique

> **La bibliothèque de briques Vue du Portfolio, montrée comme une affiche : même DA « Affiche de nuit », même rigueur.**
> **Les démos peuvent jouer, la documentation reste sobre, concrète et honnête sur les limites.**
> **Chaque brique se voit, se règle et se copie en moins de 30 secondes.**
