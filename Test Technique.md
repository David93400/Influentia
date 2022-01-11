# Test Technique - Influentia - Full-Stack

## Contexte

L'entreprise Influentia souhaite mettre en place un blog permettant d'échanger sur des astuces et des informations avec
le monde extérieur. Ce blog permettra également d'avoir des articles premium, qui seront accessibles soit par paiement à
l'unité, soit par un abonnement mensuel permettant d'accéder à l'ensemble de manière illimitée.

## Déroulé du projet (suggestion)

1. Gestion des utilisateurs et des rôles
   (Page de login + Inscription, Rôle admin et utilisateur)
2. CRUD des articles (pour les admins)
3. Affichage des articles paginés et d'un article
   (pour les visiteurs et les personnes inscrites, ne pas afficher les articles premium aux personnes n'ayant pas payé)
4. Ajout du tunnel d'achat d'un article premium
5. _(OPTIONNEL)_ Ajout de la possibilité de s'abonner pour accéder à l'ensemble des contenus premiums durant la période
   d'abonnement

## Niveau de difficultés (impact sur le temps nécessaire)

### Moyen

Faire le site sans api, et n'implémenter que le système de vente d'articles premium.

### Difficile

Faire le site avec une API et un frontend et n'implémenter que le système de vente d'articles premium.

### Hardcore

Faire le site avec une API et un frontend et implémenter les deux systèmes d'accès aux articles premium.

## Technologies autorisés

Tout langage, librairies sont autorisées, mais attention d'avoir des choix cohérents. Les seules obligations sont
l'utilisation de Git pour le versionning et de Stripe pour le paiement.

## Points importants:

- Il n'est pas obligatoire de finir à 100% le projet
- Ne pas hésiter à documenter son travail, pour que l'on puisse comprendre les intentions.
- Avoir un jeu de données (fixtures)
- L'UX et l'UI du site sont en bonus