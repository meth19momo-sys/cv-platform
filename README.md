# Plateforme de création de CV avec services associés

Ce dépôt contient une application complète composée d'un **backend Spring Boot** et d'un **frontend React** permettant de créer et de gérer des curriculum vitae, de télécharger des modèles et d'accéder à divers services de rédaction et de design.

## Aperçu

### Backend (Spring Boot)

Le backend expose une API REST qui permet de créer et de consulter des CV stockés dans **MongoDB Atlas**. L'authentification et l'autorisation sont gérées par **Keycloak**. Les principales dépendances sont :

- `spring-boot-starter-web` pour les endpoints REST
- `spring-boot-starter-data-mongodb` pour l'accès à MongoDB
- `spring-boot-starter-security` et `keycloak-spring-boot-starter` pour la sécurité

Les endpoints disponibles :

- `POST /api/cvs` – crée un CV (champ Authorization requis si Keycloak est activé)
- `GET /api/cvs` – liste les CV
- `GET /api/cvs/{id}` – récupère un CV par son identifiant

### Frontend (React)

L'interface utilisateur est construite avec React et React Router. Elle propose :

- Une page d'accueil présentant la plateforme
- Un générateur de CV avec formulaire pour saisir ses informations et les envoyer à l'API
- Une page répertoriant des modèles de CV et de lettres de motivation (disponibles au téléchargement)
- Des tutoriels et un lien vers la chaîne TikTok pour des vidéos explicatives
- Une page listant les autres services proposés (conception de logos, relecture, traduction, etc.)
- Un bouton de connexion qui redirige vers Keycloak

## Pré‑requis

- **Java 17** et **Maven** pour le backend
- **Node.js >= 16** et **npm** pour le frontend
- Un cluster **MongoDB Atlas** et un serveur **Keycloak** opérationnels (ou les variables d'environnement par défaut pour le développement local)

## Configuration

Certaines propriétés du backend sont paramétrables via variables d'environnement :

- `MONGODB_URI` : URI de connexion à MongoDB (exemple : `mongodb+srv://user:pass@cluster0.mongodb.net/cvdb?retryWrites=true&w=majority`)
- `KEYCLOAK_URL` : URL du serveur Keycloak (par défaut `http://localhost:8080/auth`)
- `KEYCLOAK_REALM` : nom du realm (par défaut `cv-realm`)
- `KEYCLOAK_CLIENT_ID` : identifiant du client (par défaut `cv-client`)
- `KEYCLOAK_CLIENT_SECRET` : secret du client

Dans le frontend, vous pouvez définir les mêmes variables préfixées par `REACT_APP_` dans un fichier `.env` :

```
REACT_APP_KEYCLOAK_URL=http://localhost:8080/auth
REACT_APP_KEYCLOAK_REALM=cv-realm
REACT_APP_KEYCLOAK_CLIENT_ID=cv-client
```

## Lancement local

1. Clonez ce dépôt et déplacez‑vous dans le dossier `backend`. Exécutez :

   ```bash
   mvn spring-boot:run
   ```

   Le backend démarre sur le port `8080`. Assurez‑vous que MongoDB et Keycloak soient accessibles.

2. Dans un autre terminal, déplacez‑vous dans le dossier `frontend` et installez les dépendances :

   ```bash
   npm install
   npm start
   ```

   L'application React s'ouvrira sur `http://localhost:3000` et utilisera un proxy pour accéder à l'API du backend.

## Déploiement sur Render

Pour déployer l'application, vous pouvez créer deux services sur [Render](https://render.com) :

1. **Service web pour le backend** : ajoutez un nouveau service de type « Web Service » et pointez vers le répertoire `backend`. Choisissez un environnement Docker ou Maven. Définissez les variables d'environnement nécessaires (`MONGODB_URI`, `KEYCLOAK_URL`, etc.). Render détectera l'application Spring Boot et l'exécutera.

2. **Service web statique pour le frontend** : build votre application React (`npm run build`), puis servez le contenu du dossier `build` via un service statique. Vous pouvez également utiliser un stockage object (Render Static Sites) en important le dossier `build`.

N'oubliez pas de configurer les règles CORS sur votre backend si vous hébergez les deux services sur des domaines différents.

## Personnalisation

Cette plateforme est volontairement minimaliste. Vous pouvez :

- Ajouter des champs supplémentaires dans le formulaire de CV (par exemple, certificats, projets, langues).
- Intégrer un éditeur de mise en page ou des modèles plus sophistiqués à l'aide de Canva.
- Mettre en place un système d'authentification complet en utilisant Keycloak pour protéger les appels API depuis le frontend.
- Ajouter un espace administrateur pour gérer les services et les commandes de vos clients.

Nous espérons que cette base vous aidera à démarrer votre activité en ligne !
