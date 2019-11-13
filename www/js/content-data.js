export const books = [
    /*{
        title: "Le Joueur d'échecs",
        author: "Stefan Zweig",
        commentary: `
        <p>Je découvre l'existance de Stefan Zweig, un auteur pourtant réputé, en même temps que ce livre qu'il à écrit à la fin de sa vie, peu de temps avant son suicide. C'est sur le conseille d'un professeur et d'un amis que j'ai décidé de lire ce court mais passionnant ouvrage.</p>
        <p>En effet, c`
        picture: "#"
    },*/
    {
        title: "1984",
        author: "George Orwell",
        commentary: `
        <p>Voilà un classique de la science fiction dystopique.</p>
        <p>Ce roman raconte l'histoire de Winston Smith, un habitant de l'occidant du futur, dans un monde où les régimes dictatoriaux des années 30 ont atteint leur paroxysme. George Orwell nous fait entrevoir sa vision de la dictature "parfaite". Un régime devenu structurellement indétronable.</p>
        <p>J'ai beaucoup apprécié cette lecture et je pense que ce livre mérite d'être lu pour un grand nombre raison.</p>
        <p>L'une d'elles est liée à l'écriture très riche et pourtant si limpide d'Orwell que j'ai découverte à travers cet ouvrage. Une véritable leçon de vocabulaire anglais.</p>
        <p>La deuxième est historique. Si vous doutez de l'existance possible d'une dictature totale et parfaite et des raisons qui pourraient lui faire voir le jour, G.O. vous apporte ici des éléments de réponse, de quoi faire réfléchir...</p>
        <p>Ensuite, c'est l'intêret d'un amateur de science-fiction qui vous poussera sûrement à lire ce livre. La vision qu'à G.O. du futur et ses différentes prédictions technologiques sont d'une impressionante précision; surtout lorsque l'on s'intéresse à la date de parution de l'oeuvre : 1949!</p>
        <p>Enfin, si ces dernières lignes ne vous ont toujours pas décidé à lire le livre, je finirais par évoquer le fort intéret philosophique de cette lecture. G.O. nous met à la place d'un personage constamment tiraillé par une multitude de questions morales tout au long du livre. Il est alors très intéressant d'analyser nos propres choix moraux dans des situations similaires.</p>
        <p>Je finirais par évoquer mon passage préféré du livre qui, sur mon édition, se trouve à la page 184. Celui-ci à pour titre 'THE THEORY AND PRACTICE OF OLIGARCHICAL COLLECTIVISM'. Les quelques pages qui suivent sont une formidable leçon de géopolitique et de philosophie des idéologies. Entre ces lignes se dévoile un monde à la fois si loin du nôtre par son manque d'humanité mais à la fois tellement proche de part sa structure et son évolution qu'il est difficile pour le lecteur de ne pas en être troublé. Lors de cette lecture, il vous sera nécessaire de relever la tête quelques instants, simplement pour vérifier que le monde qui vous entoure n'est pas entrain de sombrer dans un chaos technologique.</p>
        `,
        picture: "img/1984.jpg"
    },
    {
        title: "La formule du Savoir",
        author: "Lê Nguyen Hoang",
        commentary: "incoming...",
        picture: "img/la_formule_du_savoir.jpg"
    },
    {
        title: "Méditations métaphysiques",
        author: "René Descartes",
        commentary: "incoming...",
        picture: "img/meditations_metaphysiques.jpg"
    },
    {
        title: "L'inconditionnel",
        author: "www.revenudebase.info",
        commentary: "incoming...",
        picture: "img/l_inconditionnel.jpg"
    },
    {
        title: "La pensée radicale",
        author: "Jean Baudrillard",
        commentary: "incoming...",
        picture: "img/la_pensee_radicale.jpg"
    },
    {
        title: "Patients",
        author: "Grand Corps Malade",
        commentary: "incoming...",
        picture: "img/patients.jpg"
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
        <p>Mon objectif à long terme est de proposer un jeu de PONG moderne, jouable en peer to peer en réseau local mais aussi à travers internet. Le dévellopement devra suivre un cycle pragmatique et les philosophies agiles. La stabilité, la sécurité et la performance du jeu seront au centre de mes priorité. Enfin, j'essaierais d'y intégrer un gameplay et des fonctionnalités qui rendront le jeu agréable et addictif.</p>
        <p>Biensure, l'intéret principal est ici d'étudier les problématiques de game dévellopement, de performance et de programation réseau dans un language bas niveau. Le tout en progressant sur ma maitrise de la sécurité et de la gestion de projet.</p>
        `,
        github: "https://github.com/TristanPinaudeau/pon",
        pictures: ['pon_start.jpg', 'pon_game.png']
    }
]
