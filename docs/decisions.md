# Journal des décisions

| Date | Décision | Raison |
|---|---|---|
| 2026-11-24 | Création de la branche `dev` | Workflow Git : `main` pour les releases, `dev` pour l'intégration |
| 2026-11-24 | Usage perso + vitrine publique, pas de lib open source au MVP | Lancer vite ; la lib reste possible plus tard sans tout refaire |
| 2026-11-24 | Vue uniquement | Stack habituelle, un seul framework à maintenir |
| 2026-11-24 | Catalogue mixte : briques UI + effets animés | Couvrir les besoins des projets et l'effet vitrine |
| 2026-11-24 | Nom du projet : KokoDesign | Choix de l'utilisateur |
| 2026-11-24 | Licence MIT | Le code doit pouvoir être copié librement |
| 2026-11-24 | Hébergement sur le serveur perso, sous le domaine perso | Infrastructure déjà disponible |
| 2026-11-24 | 10 composants de lancement (5 UI, 5 Effets) | Les briques UI servent aussi au site lui-même |
| 2026-11-24 | Adresse pressentie : design.costamask.dev | Sous-domaine du domaine perso |
| 2026-11-24 | KokoDesign extrait le design system du Portfolio (DA « Affiche de nuit » reprise telle quelle) | Design system déjà validé ; cohérence avec costamask.dev |
| 2026-11-24 | Composants copiés depuis le Portfolio, sans lien de synchronisation | Démarrer vite sans publier de paquet ; le Portfolio reste inchangé |
| 2026-11-24 | Lancement avec les 26 composants génériques du Portfolio (remplace la liste de 10) | Ils existent déjà ; les composants propres au site sont exclus |
| 2026-11-24 | Pas de thème clair / sombre ; démos sur les six fonds de section | La DA est sombre par nature, les fonds jouent ce rôle |
| 2026-11-24 | KokoDesign est une sous-marque du Portfolio | Même auteur et même DA ; seuls la promesse, le public et le ton changent |
| 2026-11-24 | Promesse : « Des briques prêtes à copier, déjà testées en vrai. » | Dit l'usage et la preuve (composants issus d'un site en production) |
| 2026-11-24 | Tutoiement dans la documentation | Usage courant dans la documentation pour développeurs |
| 2026-11-24 | Site bilingue français / anglais | Public dev francophone et international ; complète le MVP du PRD (i18n à prévoir en phases 4 et 7) |
| 2026-11-24 | DA « Affiche de nuit, en version atelier » : structure de documentation façon vue-bits (barre latérale, aperçu, Personnaliser, props) | Choix de l'utilisateur, qui écarte le mur d'affiches |
| 2026-11-24 | La couleur vit dans l'aperçu : cadre sombre, aperçu posé sur un des six fonds | Garder la doc lisible et laisser la DA s'exprimer dans les démos |
| 2026-11-24 | Logo B : symbole Kokonut + « Koko » en Bagel + « Design » en Fraunces italique ; favicon lime | Choix de l'utilisateur ; le favicon lime distingue l'onglet du Portfolio |
| 2026-11-24 | Le cadre obéit, la scène est libre : réactions au curseur permises dans les démos seulement | Certains effets en ont besoin ; le site garde les règles du Portfolio |
| 2026-11-24 | En-tête sombre au lieu de crème (écart avec le Portfolio) | Un bandeau clair couperait l'écran avec une barre latérale |
| 2026-11-24 | Thème du code en quatre couleurs de la palette (contrastes ≥ 6,5:1) | Pas de nouvelle teinte, lisibilité |
| 2026-11-24 | URLs `/fr/composants/<slug>` et `/en/components/<slug>`, sans la famille | Liens stables si un composant change de famille |
| 2026-11-24 | Onglet Code : Utilisation + fichier source complet, tous deux copiables | Le copier-coller doit suffire, même pour qui arrive par un moteur de recherche |
| 2026-11-24 | Page de mentions légales propre à KokoDesign | Site autonome, hébergeur à nommer |
| 2026-11-24 | Ordre fixe de la page composant, avec un bloc Dépendances | Rigueur ; chaque page doit se suffire à elle-même |
| 2026-11-24 | Phase 5 en trois lots (socle, fiches, composants du site), une PR chacun | Relire chaque étape ; le volume est trop grand pour une seule PR |
| 2026-11-24 | Dépendances aux versions du Portfolio ; vite-ssg, vue-i18n et Playwright attendent la phase 7 | Outillage connu ; le moteur du site se décide dans l'architecture technique |
| 2026-11-24 | Principe « copiable seul » : textes en props (français par défaut), vue-router facultatif | Un composant copié doit marcher sans le contenu ni les traductions d'un site |
| 2026-11-24 | Ajouts aux tokens : thème du code (`--code-*`) et `--sidebar-width` | Besoins de la DA, sans nouvelle teinte |
