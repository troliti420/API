# SWAPI API

API pour acc�der aux donn�es de SWAPI (Star Wars API) et les stocker dans MongoDB.

## Endpoints

### People

- `POST /api/people` - Cr�e une nouvelle personne.
- `GET /api/people` - R�cup�re toutes les personnes.
- `GET /api/people/{id}` - R�cup�re une personne par ID.
# SWAPI API

API pour acc�der aux donn�es de SWAPI (Star Wars API) et les stocker dans MongoDB.

## Endpoints

### People

- `POST /api/people` - Cr�e une nouvelle personne.
- `GET /api/people` - R�cup�re toutes les personnes.
- `GET /api/people/{id}` - R�cup�re une personne par ID.
- `PUT /api/people/{id}` - Met � jour une personne par ID.
- `DELETE /api/people/{id}` - Supprime une personne par ID.

### Planets, Films, Species, Vehicles, Starships

(� impl�menter de mani�re similaire � la ressource People)

## Authentification

L'API utilise JSON Web Tokens (JWT) pour l'authentification. Les routes n�cessitant une authentification doivent inclure un en-t�te `Authorization` avec la valeur `Bearer {token}`.

## Richardson Maturity Model

Le mod�le de Richardson est un mod�le qui classe les API REST en quatre niveaux selon leur maturit� en termes de conception et d'impl�mentation :

1. Niveau 0 - Les services web sont expos�s via des URL uniques sans utiliser les verbes HTTP appropri�s.
2. Niveau 1 - Les verbes HTTP appropri�s sont utilis�s, mais les ressources ne sont pas correctement identifi�es.
3. Niveau 2 - Les ressources sont correctement identifi�es, et les verbes HTTP appropri�s sont utilis�s.
4. Niveau 3 - L'API utilise HATEOAS (Hypertext As The Engine Of Application State) pour fournir des liens permettant � l'utilisateur de naviguer � travers l'API.

Dans ce projet, nous avons atteint le niveau 2 du mod�le de Richardson. Les ressources sont correctement identifi�es et les verbes HTTP appropri�s sont utilis�s pour effectuer des op�rations CRUD.

Pour atteindre le niveau 3, nous pourrion ajouter des liens dans les r�ponses de l'API pour permettre � l'utilisateur de naviguer � travers les ressources de mani�re dynamique.

## Installation et ex�cution

1. Assurez-vous d'avoir Node.js et MongoDB install�s sur votre machine.
2. Clonez ce d�p�t : `git clone https://github.com/votre-utilisateur/swapi-api.git`
3. Acc�dez au r�pertoire du projet : `cd swapi-api`
4. Installez les d�pendances : `npm install`
5. D�marrez le serveur : `node index.js`
6. L'API sera accessible � l'adresse : `http://localhost:3000/api`

## Documentation Swagger

La documentation Swagger est disponible � l'adresse : `http://localhost:3000/api/docs`

