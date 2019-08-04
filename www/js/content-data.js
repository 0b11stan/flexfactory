export const books = [
    {
        title: "1984",
        author: "George Orwell",
        commentary: `incoming...`,
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
    }
]
/*
<p>Amateur de philosophie, de science fiction et des problématiques liés à la protection des données personnelles, ce classique de la litterature moderne m'avait été recomandé à de nombreuses reprises. Je me suis très vite rendu compte que cet ouvrage mértait tous les compliments qui lui étaient destinés. Plus encore, je trouve que cette dystopie mérite une meilleure visibilité, notamment auprès d'un public jeune.</p>
<p>J'ai décidé de lire ce livre dans sa langue d'origine (l'anglais) comme on me l'a si sagement conseillé. Malgrès cela, la facilité de lecture m'a beaucoup impressionné. Je ne maitrisais bien-entendu pas tous les mots et la présence d'un pseudo language inventé par l'auteur ne facilitais pas la tâche, mais je recommandrais moi aussi la lecture de cette oeuvre en anglais tant le choix des mots et l'importance du vocabulaire influence l'imertion du lecteur dans cette dystopie.</p>
<p>Mon passage préféré du livre, pour n'en nommer qu'un, se trouve page 184 (dans mon édition) et est nommé 'THE THEORY AND PRACTICE OF OLIGARCHICAL COLLECTIVISM'. Les quelques pages qui suivent sont une formidable leçon de géopolitique et philosophie des idéologies. Dans ces quelques pages, se dévoile un monde à la fois si loin du notre dans son manque d'humanité mais aussi si proche de part sa structure et son évolution qu'il est difficile pour le lecteur de ne pas être troublé. Lors de cette lecture, il vous sera nécessaire de relever la tête quelques instants, simplement pour vérifier que le monde qui vous entoure n'est pas entrain de sombrer dans un chaos technologique. Parfois, en relevant la tête, vous pourriez bien constatez que ce chaos technologique est entrain de s'installer, sous une forme différente mais analogue à celle du livre.</p>
<p>Quoi qu'il en soit, je recommande cette lecture pour toute personne intéressé de près ou de loin par la politique, la science-fiction dystopique ou les problématiques liés à la protection des informations personnels.</p>
*/
