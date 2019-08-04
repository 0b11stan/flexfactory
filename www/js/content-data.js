export const books = [
    {
        title: "1984",
        author: "George Orwell",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        picture: "img/1984.jpg"
    },
    {
        title: "La formule du Savoir",
        author: "Lê Nguyen Hoang",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        picture: "img/la_formule_du_savoir.jpg"
    },
    {
        title: "Méditations métaphysiques",
        author: "René Descartes",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        picture: "img/meditations_metaphysiques.jpg"
    },
    {
        title: "L'inconditionnel",
        author: "...",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        picture: "img/l_inconditionnel.jpg"
    },
    {
        title: "La pensée radicale",
        author: "...",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        picture: "img/la_pensee_radicale.jpg"
    }
]

export const projects = [
    {
        title: "FlexFactory.Fr",
        presentation: `
        <p>Vous parcourez actuellement ce projet. Le site flexfactory.fr se veut être d'avantage une vitrine de ma personnalité qu'un CV interactif. Vous y trouverez un rapide historique de mes différentes formations et experiences professionnelles. De plus, trois onglets vous donnent un aperçu de ce qui attire mon intêret au quotidien:</p>
        <ul>
            <li>Les projets qui me tiennent à coeur et sur lesquels je travaille</li>
            <li>Mes lectures passées et mon avis sur ces livres</li>
            <li>Des articles sur des sujets tant technologiques que philosophiques</li>
        </ul>
        <p>Enfin, le site donne un accès facilité à mes différents médias de communication.</p>

        <p>Ce site a également un deuxième intéret plus technique. J'ai d'abord envisagé de développer flexfactory à l'aide de framework js tel que react ou vue comme à mon habitude. Cependant, c'est en regardant, inactif, le chargement pénible des centaines de packages NPM nécessaires à la création de mon projet vide que me sont revenues à l'esprit mes nombreuses lectures sur <a href="https://tonsky.me/blog/disenchantment/">la dérive de la performance web</a> et les failles de sécurité induites par les packages npm (cf faille récente).</p>
        <p>Il est vrai que pour des questions de paresse intellectuelle ou même tout simplement par habitude, il m'arrivait souvent de passer à côté des choix et solutions les plus rationnels dans mon développement, parfois au prix de latences et de lourdeurs que je pensais être nécessaire. C'est alors que j'annule ma commande et décide de commencer mon site web le plus simplement possible et de m'interdire l'utilisation de packages exterieurs (les polices d’icônes y faisant exception).</p>

        <p>Vous trouverez une roadmap de ce projet et des suivants dans leurs README respectifs sur mon github.</p>
        `,
        github: "https://github.com/TristanPinaudeau/FlexFactory",
        pictures: ["flexfactory.png", "ff-readings.png"]
    }
]

