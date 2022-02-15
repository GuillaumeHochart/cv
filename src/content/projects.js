/* eslint max-len: "off" */

const projects = {
  title: 'Projects',
  icon: 'archive',
  description: null,
  list: [
    {
    title: 'Application mobile - réseau social générationnel',
    subtitle: 'Projet personnel - v0.1',
    tags: [
      'Spring-boot',
      'postgresql',
      'react native',
      'keycloak',
      'representation intervalaire',
    ],
    description: ['Création d\'une application permettant de gérer son arbre généalogique en famille.',
    ],
    tooltip: [
    '<p>La réalisation de ce projet à pour objectif de me familiariser avec des technologies et des contextes pour lesquels je n\'avais pas encore pu travailler jusqu\'à maintenant.\n' +
    'Les enjeux techniques sont les suivants :</p>\n' +
    '<ul><li><p>Gestion fine des utilisateurs, des politiques et gestion des ressources dans keyloak \n</p></li>' +
    '<li><p>Une gestion de l\'arbre généalogique en SLQ via un parcours de graphe (Representation intervalaire)</p></li></ul>\n'
    ]
  },
    {
      title: 'Application web e-market/Lecture de manga',
      subtitle: 'Projet personnel - v0.9',
      tags: [
        'Spring-boot',
        'java',
        'mongodb',
        'react JS',
        'keycloak',
        'redux-toolkit',
      ],
      description: ['A la suite d\'une formation en react et redux, réalisation d\'une application de lecture de manga/e-market', 'Réalisation d\'une api rest','Intégration d\'un serveur d\'authentification','Utilisation de différents modules react tels que react-redux, react-router ...',
      ],
      tooltip: ['<p>Après avoir suivi une formation sur <b>reactJs et redux</b>, je me suis lancé comme projet de mettre en application ce que j\'avais pu apprendre.\n' +
        'L\'application devra permettre aux créateurs de BD/manga/manhwa amateurs de poster sur le site leurs artworks, ainsi que de leur donner une visibilité vers leurs sites personnels respectifs. Les utilisateurs quant à eux pourront parcourir les différentes œuvres.</p>\n' +
        '\n' +
        '<p>La réalisation de ce projet à pour objectif de me familiariser avec des technologies et des contextes pour lesquels je n\'avais pas encore pu travailler jusqu\'à maintenant.\n' +
        'Les enjeux techniques sont les suivants :</p>\n' +
        '<ul><li><p>Apprentissage de <b>react et redux</b>\n</p></li>' +
        '<li><p>Utilisation des <b>api google, ainsi que google adsense</b>\n</p></li>' +
        '<li><p>Intégration d\'une <b>api gateway</b> afin de sécuriser les API, produire des métriques. <b>spring cloud gateway</b>\n</p></li>' +
        '<li><p>Déploiement sur une infrastructure cloud\n</p></li>' +
        '<li><p>Intégration transversal de moyen de connexion avec facebook, twitter etc...\n</p></li>' +
        '<li><p>Intégration d\'un serveur d\'authentification \n</p></li>' +
      '<li><p>Travail sur la cohésion du site web afin de conserver l\'équilibre entre fluidité et affichage/animation des images</p></li></ul>\n'
      ]
    },
    {
      title: 'Jeux vidéo web/mobile',
      subtitle: 'Projet personnel - v0.2',
      tags: ['unity',
      ],
      description: ['Développement d\'un jeux vidéo multijoueur en 2D mélangeant build-map et jeux de combat de plateforme',
      ],
      tooltip: ['<p>Curieux dont la manière pouvait être créés les jeux vidéos, je me suis posé comme défi de créer le mien.</p>\n' +
      '<p>Après m\'être formé à <b>Unity</b> et avoir lu de la documentation sur le sujet, j\'ai commencé à réaliser un jeu à la frontière entre smash brosh et minecraft.\n' +
      'J\'ai pu me rendre compte de la différence d\'architecture, de design pattern etc...  entre le développement de gestion et le développement de jeux vidéo.</p>\n']
    },
    {
      title: 'Application web Assurfleet/Declasin Altima',
      subtitle: 'Pymma-Software',
      tags: [
        'Spring-boot',
        'java',
        'mongodb',
        'vaadin',
        'Ignite',
        'Camel',
        'docker',
        'ansible',
        'jeinkins'
      ],
      description: ['Réalisation d\'une solution complète de gestion de parc automobile et des contrats d\'assurances',
        'Création d\'un back-end contenant une API-rest, un processus de mise à jour asynchrone',
        'Réalisation de plusieurs front-end en vaadin',
        'Déploiement de la solution chez le client final via ansible et jeinkins'
      ],
      tooltip: [
        '<p>Dans une équipe de de 1 à 5 personnes. \n' +
        'Réalisation d\'une solution complète de gestion de parc automobile et des contrats d\'assurances basés sur l\'expertise fonctionnelle des intervenants Declasin.</p> \n' +
        '<p>L\'enjeu du système applicatif était de permettre à différents acteurs (assureur, courtier, client) en rapport avec Altima Assurances de gérer et d\'intervenir à différents niveaux des contrats.</p> \n' +
        '<p>J\'ai participé à la création et à la <b>mise en place de l\'architecture de la solution</b>. Puis activement à son développement.\n' +
        'Avec l\'aide de plusieurs collègues nous avons mis en place 3 front-end en <b>vaadin et angular</b> à destination des différents acteurs, nous avons également créé une <b>api rest avec spring boot.</b>\n' +
        'J\'ai participé à l\'élaboration d\'un batch de mise à jour asynchrone avec <b>apache camel et apache ignite.\n</b></p>' +
        '<p>Pendant cette expérience j\'ai beaucoup appris sur la complexité de conserver la cohérence des données avec un modèle mixte de BDD <b>(mongodb, postgresql)</b> et avec différents consommateurs asynchrones:</p>\n' +
        '<ul><li><p>Création de script <b>pl/pgsql</b>, mongodb afin de redresser les BDD ou de maintenir la cohérence des données après une évolution </li></p>\n' +
        '<li><p>Mise en place des <b>transactions mongodb/postgresql\n</b></li></p></ul>'
      ]
    },
    {
      title: 'Application web Moa Onisep',
      subtitle: 'Pymma-Software - https://moa.onisep.fr/',
      subtitleLink: 'https://moa.onisep.fr/',
      tags: [
        'Spring-boot',
        'java',
        'mongodb',
        'hibernate',
        'C#'
      ],
      description: [
        'Migration d\'un backend C# vers java',
        'Développement d\'une Api rest',
        'Développement d\'un batch de mise à jour de référentiel',
        'Participation au déploiement de l\'application sur windows server (wds)',
      ],
      tooltip: [
        '<p>Dans une équipe de 3 développeurs. Réalisation d\'<b>une api rest java spring boot</b> à partir d\'un backend existant <b>C#</b>. \n' +
        'Cette première expérience sur une api rest m\'a permis de découvrir les bonnes pratiques liées à leurs usages.</p>\n' +
        '<ul><li><p>Usage de la pagination \n</li></p>' +
        '<li><p><b>Api gateway</b> \n</li></p>' +
        '<li><p>Création d\'une documentation à destination des consommateurs via <b>swagger</b>\n</li></p></ul>' +
        '<p>J\'ai également participé au développement d\'un batch de mise à jour de référentiel de notre bdd avec l\'utilisation de <b>spring batch.</b>\n</p>' +
        '<p>Dans le cadre de la mission j\'ai aussi pu mettre en place un système utilisateur avec <b>spring security et jwt.</b>\n</p>' +
        '<p>Enfin j\'ai participé aux premiers déploiement de l\'application sur <b>windows server (wds)</b>\n</p>'
      ]
    },
    {
      title: 'Prototype application web Pro-Btp',
      subtitle: 'Pymma-software',
      tags: [
        'Spring-boot',
        'vaadin',
        'java',
        'mongodb',
        'hibernate',
        'drools',
        'drools workbench'

      ],
      description: [
        'Migration des règles métier d\'une assurance à partir d\'une infrastructure propriétaire vers un modèle open source.',
        'Utilisation du moteur de règle drools',
        'Création d\'un prototype d\'application web afin d\'illustrer la bonne exécution des règles métiers.'
      ],
      tooltip: [
        '<p>Réalisation d\'un POC dans l\'objectif d\'une migration de SI d\'une version propriétaire vers un modèle open-source. Dans le cadre de cette mission j\'ai participé à l\'intégration d\'une solution <b>Drools</b> ainsi qu\'à la vérification de la cohérence des règles fonctionnelles ajoutées.\n</p>' +
        '<p>J\'ai également participé à la réalisation des tests consommateurs des <b>endpoints soap</b> permettant l\'exécution des règles.\n</p>' +
        '<p>Dans le cadre du POC, j\'ai réalisé une interface web en <b>java 11 et vaadin</b> afin d\'illustrer l\'exécution de l\'ensemble des règles métiers intégrées.</p>'
      ]
    },
    {
      title: 'Prototype application web Auchan retail',
      subtitle: 'Pymma-software',
      tags: [
        'spring-boot',
        'vaadin',
        'java',
        'postgresql',
        'hibernate'
      ],
      description: [
        'Création d\'un prototype d\'application web suite à un appel d\'offre. Intervention principalement sur le front-end via le framework Vaadin',
      ],
      tooltip: ['<p>Dans une équipe de 2 développeurs, j\'ai pu créer un prototype d\'application web suite à une appel d\'offres. Intervention principalement sur le front-end via le <b>framework Vaadin.</b></p>']
    },
  ],
};

export default projects;
