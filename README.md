# Fuel Simulator

Ce projet est un projet perso basé sur mes besoins actuels. Dans l'optique d'achat d'un bolide, j'ai besoin de déterminé combien me couterait un plein d'essence sur 1 semaine, 1 mois et 1 an. Elle me permettra également de déterminé à quel sauce je serai mangé mais aussi, déterminé la viabilité de l'achat d'un bolide sur le long terme (et donc combien je devrai dépensé dans un contexte d'une utilisation quotidienne). Durant la pandémie de la COVID-19 et de l'inflation, les prix du carburant n'ont fait qu'augmentés, atteignant ainsi une tarification record dans l'Hézagone.

## Installation

Pour installer les différents package nécessaire à l'utilisation de React:
```bash
npm install sass sass-loader react react-dom react-router-dom axios prop-types
```

### Base de données

Si la base de données n'est pas créer
```bash
symfony console doctrine:database:create
```

Ensuite, une fois la BDD créer, il faut maintenant générer les migrations s'il ne sont pas déjà générer. Par défault, les fichiers de migrations sont stockés dans le répertoire migrations à la racine du projet Symfony.
```bash
symfony console m:migration
```

Une fois les fichiers de migration générer, il faut les executer. Pour faire cela, il faut aller à la racine du projet Symfony, puis executer la commande suivante :
```bash
symfony console doctrine:migration:migrate
```

## Authentification

Symfony bundle:
```bash
composer require lexik/jwt-authentication-bundle
```

Une fois que la dépendance a été ajouté, il faudra maintenant générer une clé. Cette clé sera ensuite utilisé pour générer les token qui seront envoyer aux utilisateurs de la plateforme. Voici la commande pour générer ces clés :
```bash
php bin/console lexik:jwt:generate-keypair
```

Une fois la commande ci-dessus lancée, elle va créer un sous-dossier jwt dans le dossier config. Dans ce sous-dossier, on aura 2 fichiers, ces 2 fichiers sont les clés privés et publics qui seront utlisé dans les actions de génération du token. A ce niveau, on a rien de plus.

Il faudra maintenant configurer le fichier packages/security.yaml. Je recommande d'utiliser la doc de symfony pour configurer la connexion par token ou de regarder la configuration dans mes autres projets utilisant cette méthode de connexion

## Commandes utiles

Voici ci-joint les commandes qui débloque quand le besoin ce présente

### Github

IF you have NOT pushed your changes to remote
```bash
git reset HEAD~1
```
ELSE you have pushed your changes to remote
```bash
git revert HEAD
```

Dans un contexte où un repo GIT aurait été créer mais qu'elle contiendrait déjà des fichiers, voici la commande a éxecuter :
```bash
git pull --allow-unrelated-histories
```

### Générer un mot de passe hashé

```bash
symfony console security:hash-password
```

## Issues

Lors de l'installation de symfony, le package `AssetMapper` (c'est l'équivalent de `webpack-encore`) est automatiquement installé. Pour le désinstaller de symfony :
```bash
composer remove symfony/asset-mapper
```

Pour installer le package webpack-encore:
```bash
composer require symfony/webpack-encore-bundle
```