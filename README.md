IPL Social - Email Validator (TypeScript)
Informations de l'étudiant

    Nom : HUIU
    Prénom : Teodor
    Email Vinci : teodor.huiu@student.vinci.be

Repository

URL GitHub : https://github.com/teodor-huiu/ipl-social
Description du projet

IPL Social est un projet de validation d'emails développé en TypeScript avec Node.js. Le projet implémente une fonction validateEmail() qui vérifie qu'une adresse email respecte les critères suivants :

    Contient au moins un @
    Contient au moins un point dans le nom de domaine (et pas le dernier caractère)
    Ne contient aucun espace
    Contient du texte avant et après le @

Le projet a été développé en suivant la méthodologie TDD (Test Driven Development) avec Jest et ts-jest.
Technologies utilisées

    Runtime : Node.js 18+
    Langage : TypeScript 5+
    Framework de tests : Jest + ts-jest
    Méthodologie : TDD avec pattern AAA (Arrange-Act-Assert)

Installation
Prérequis

    Node.js version 18 ou supérieure
    npm (inclus avec Node.js)
    Git

Étapes d'installation
bash

# 1. Cloner le repository
git clone https://github.com/teodor-huiu/ipl-social.git
cd ipl-social

# 2. Installer les dépendances
npm install

Exécution des tests

Pour lancer tous les tests unitaires :
bash

npm test

Pour lancer les tests en mode watch (développement) :
bash

npm run test:watch

Pour générer un rapport de couverture de code :
bash

npm run test:coverage

Pour compiler le TypeScript :
bash

npm run build

Utilisation
typescript

import { validateEmail } from './src/emailValidator';

// Exemples d'utilisation
console.log(validateEmail('test@example.com'));      // true
console.log(validateEmail('user.name@domain.co.uk')); // true
console.log(validateEmail('invalid'));                // false
console.log(validateEmail('no@domain'));              // false (pas de point)
console.log(validateEmail('no space@test.com'));      // false (contient un espace)
console.log(validateEmail('@nodomain.com'));          // false (pas de texte avant @)
console.log(validateEmail('noat.com'));               // false (pas de @)

Structure du projet

ipl-social/
├── src/
│   └── emailValidator.ts       # Fonction de validation (TypeScript)
├── tests/
│   └── emailValidator.test.ts  # Tests unitaires (TypeScript + TDD)
├── dist/                       # Code compilé (généré)
├── coverage/                   # Rapports de couverture (généré)
├── node_modules/               # Dépendances (généré)
├── .gitignore                  # Fichiers à ignorer par Git
├── tsconfig.json               # Configuration TypeScript
├── jest.config.js              # Configuration Jest
├── package.json                # Configuration npm et scripts
├── package-lock.json           # Lock des dépendances
└── README.md                   # Documentation du projet

Critères de validation de l'email
Critère	Description	Exemple valide	Exemple invalide
@	Au moins un @	test@domain.com	testdomain.com
Point	Au moins un point dans le domaine	test@domain.com	test@domain
Pas d'espace	Aucun espace	test@domain.com	test @domain.com
Texte avant @	Du texte avant le @	test@domain.com	@domain.com
Texte après @	Du texte après le @	test@domain.com	test@
Point pas en fin	Le point n'est pas le dernier caractère	test@domain.com	test@domain.
Méthodologie TDD

Le développement a suivi l'approche TDD (Test Driven Development) avec le pattern AAA :
Cycle Red-Green-Refactor :

    RED : Écriture du test (qui échoue) - PAS DE COMMIT
    GREEN : Écriture du code minimal pour passer le test - COMMIT
    REFACTOR : Amélioration du code (optionnel) - COMMIT

Pattern AAA (Arrange-Act-Assert) :

Chaque test suit cette structure :
typescript

it('description du comportement', () => {
  // Arrange : Préparer les données de test
  const input = 'test@example.com';
  
  // Act : Exécuter l'action à tester
  const result = validateEmail(input);
  
  // Assert : Vérifier le résultat
  expect(result).toBe(true);
});

Couverture de Code

Le projet vise un minimum de 70% de couverture sur :

    Lignes de code (lines)
    Branches (branches)
    Fonctions (functions)
    Instructions (statements)

Accès au repository

Les accès collaborateur ont été donnés aux personnes suivantes :

    sewelseb (https://github.com/sewelseb/)
    olivier.choquet@vinci.be

Licence

Ce projet est développé dans un cadre académique pour l'IPL (Institut Paul Lambin).
Contact

Pour toute question, contactez : teodor.huiu@student.vinci.be
