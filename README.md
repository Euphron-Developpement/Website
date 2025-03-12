# Nuxt Minimal Starter
___
## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

Installez les dépendances du projet :

```bash
npm install
```

## Développement

Pour démarrer le serveur de développement sur `http://localhost:8080` :

```bash
npm run dev
```

### Utilisation de Docker pour le développement

Pour démarrer l'environnement de développement avec Docker :

```bash
docker-compose -f docker-compose.yml up --build app_dev
```

Cela va :
- Construire l'image Docker définie dans `Dockerfile.dev`
- Monter le répertoire de travail local dans le conteneur
- Exposer les ports 8080 et 24678

Pour prévisualiser localement la build de production :

```bash
npm run preview
```
___

## Production

### Utilisation de Docker pour la production

Pour construire et démarrer le conteneur Docker en mode production :

```bash
docker-compose up --build app
```

Cela va :
- Construire l'image Docker définie dans `Dockerfile`
- Exposer le port 8080
___

## Documentation

Consultez la [documentation de Nuxt](https://nuxt.com/docs/getting-started/introduction) pour plus d'informations.
___

## Déploiement

Pour plus d'informations sur le déploiement, consultez la [documentation de déploiement](https://nuxt.com/docs/getting-started/deployment).
___

## Références

- [Implémentation Docker](https://markus.oberlehner.net/blog/running-nuxt-3-in-a-docker-container/)
