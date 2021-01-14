export const books = [
    {
        title: "La structure des révolutions scientifiques",
        author: "Thomas S. Kuhn",
        picture: "img/r_structure_revolution_science.jpg"
    },
    {
        title: "Des raisons d'être heureux",
        author: "Greg Egan",
        picture: "img/r_raisons_heureux.jpg"
    },
    {
        title: "Sapiens - A Brief History of Humankind",
        author: "Yuval Noah Harari",
        picture: "img/r_sapiens.jpg"
    },
    {
        title: "How to fix social media before it's too late, an early investor on how Facebook lost its way.",
        author: "Roger McNamee - Tim Cook - Donald Graham - Maria Ressa",
        picture: "img/r_time_social_medias.jpg"
    },
    {
        title: "Serious Cryptography",
        author: "Jean-Philippe Aumasson",
        picture: "img/r_serious_crypto.jpg"
    },
    {
        title: "Le Joueur d'échecs",
        author: "Stefan Zweig",
        picture: "img/r_le_joueur_decheque.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        picture: "img/r_1984.jpg"
    },
    {
        title: "La formule du Savoir",
        author: "Lê Nguyen Hoang",
        picture: "img/r_la_formule_du_savoir.jpg"
    },
    {
        title: "Méditations métaphysiques",
        author: "René Descartes",
        picture: "img/r_meditations_metaphysiques.jpg"
    },
    {
        title: "L'inconditionnel",
        author: "www.revenudebase.info",
        picture: "img/r_l_inconditionnel.jpg"
    },
    {
        title: "La pensée radicale",
        author: "Jean Baudrillard",
        picture: "img/r_la_pensee_radicale.jpg"
    },
    {
        title: "Patients",
        author: "Grand Corps Malade",
        picture: "img/r_patients.jpg"
    }
]

export const projects = [
    {
        title: "FlexFactory.Fr",
        subjects: ['html', 'css', 'js', 'perf', 'raw'],
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
    },
    {
        title: "Tictactoes",
        subjects: ['best-practices', 'learning', 'python', 'rust', 'c'],
        presentation: `
        <p>Ce projet, découpé en plusieurs dépôts git, est extrêmement simpliste mais il est une bonne représentation de mon processus d'apprentissage et de mes intérets technologiques en terme de language.</p>
        <p>Lorsqu'un language m'intéresse, après avoir fini le tutoriel officiel, je commence toujours par un projet de petite envergure pour mieux comprendre par moi-même les bases du language et manipuler sa syntaxe en dehors du cadre rigoureux d'un tutoriel. Dernièrement, j'ai décidé de me concentrer sur le jeu du morpion pour cet exercice. Il me permet de manipuler des problématiques variées comme les input utilisateur, l'affichage formaté et la gestion d'une base de règles.</p>
        <p>J'essaie de réaliser le développement en trois ou quatre phases pour comprendre progressivement les rouages du language.<p>
        <ul>
            <li>Obtenir un morpion jouable (MVP).</li>
            <li>Diviser l'IHM du code fonctionnel à travers des interfaces généralistes.</li>
            <li>Ecrire des tests (au moins pour le code fonctionnel).</li>
            <li>Ecrire une interface graphique.</li>
        </ul>
        <p>Naturellement, ces mini projets me servent également de tests lorsque je veux essayer une nouvelle feature du language par exemple.</p>
        `,
        github: "https://github.com/TristanPinaudeau?utf8=✓&tab=repositories&q=tictactoe&type=&language=",
        pictures: ['tictactoe_start.png', 'tictactoe_end.png']
    },
    {
        title: "PON",
        subjects: ['best-practices', 'learning', 'c', 'low-level'],
        presentation: `
        <p><b>PON</b> est l'acronyme de <b>P</b>ong <b>O</b>ver <b>N</b>etwork. Ce projet à commencé avec <a href="https://github.com/TristanPinaudeau/pong-over-network">un projet</a> en cours de "programmation temps réel" en 2018. L'objectif était de réaliser un jeu simpliste de pong en réseau en passant par un serveur central hébergé par le professeur.</p>
        <p>J'ai, a l'origine, décidé de m'essayer au C++ avec ce projet et ai découvert le language avec plaisir. Cependant, les délais de rendu étant courts, je n'ai pas pu perfectionner comme je le souhaitais le jeu. Ainsi, en 2019, j'ai décidé de reprendre le projet pour mettre en pratique les bases de C que j'avais aquises durant l'été.</p>
        <p>Mon objectif à long terme est de proposer un jeu de PONG moderne, jouable en peer to peer en réseau local mais aussi à travers internet. Le dévellopement devra suivre un cycle pragmatique et les philosophies agiles. La stabilité, la sécurité et la performance du jeu seront au centre de mes priorité. Enfin, j'essaierais d'y intégrer un gameplay et des fonctionnalités qui rendront le jeu agréable.</p>
        <p>Biensure, l'intéret principal est ici d'étudier les problématiques de game dévellopement, de performance et de programation réseau dans un language bas niveau. Le tout en progressant sur ma maitrise de la sécurité et de la gestion de projet.</p>
        `,
        github: "https://github.com/TristanPinaudeau/pon",
        pictures: ['pon_start.jpg', 'pon_game.png']
    }
]
