/* eslint max-len: "off" */

const sidebar = {
  name: {
    title: 'Développeur Full Stack',
    name: 'Hochart Guillaume',
  },
  contact: {
    title: 'Contact',
    email: { value: ' guillaume.hochart.pro@gmail.com', icon: 'fa fa-envelope' },
    phone: { value: ' 06 59 87 38 02', icon: 'fa fa-phone' },
    linkedin: { value: ' linkedin.com/in/guillaume-hochart-b363a5124/', icon: 'fa fa-linkedin' },
    github: { value: ' github.com/GuillaumeHochart', icon: 'fa fa-github' }
  },
  skills: {
    title: 'Compétences',
    list: {
      languages: [
        {value: 'Java',force:4},
        {value: 'C#',force:1},
        {value: 'HTML5/css',force:3},
        {value: 'javascript',force:3},
        {value: 'typescript',force:1.5},
        {value: 'pl/pgSql',force:2}
      ],
      solutions: [
        {value: 'Ansible',force:1},
        {value: 'Ansible tower',force:1},
        {value: 'docker',force:2},
        {value: 'keycloak',force:2.5},
        {value: 'jenkins',force:1},
        {value: 'aws',force:0.5},
        {value: 'git',force:3},
        {value: 'restfull API',force:3},
        {value: 'soap API',force:2},
        {value: 'graphql API',force:1},
        {value: 'server send event',force:1},
        {value: 'eclipse memory analyzer',force:1},
      ],
      frameworks: [
        {value: 'ReactJS',force:3},
        {value: 'Node-js',force:1},
        {value: 'React Native',force:0.5},
        {value: 'Spring-boot',force:3},
        {value: 'Spring-security',force:2},
        {value: 'Spring-batch',force:1},
        {value: 'Vaadin',force:3},
        {value: 'Unity',force:1},
        {value: 'Hibernate/JPA',force:3},
        {value: 'Apache camel',force:2},
        {value: 'Apache poi',force:2},
        {value: 'Ansible',force:1},
      ],
      BDD: [
        {value: 'MongoDB',force:3},
        {value: 'Postgresql',force:3},
        {value: 'Elasticsearch',force:1},
      ],
    },
  },
  education: {
    title: 'Etude',
    list: [
      {
        degree: 'DUT informatique',
        school: 'IUT A Lille',
        date: '2015-2017',
      },
      {
        degree: 'Niveau Licence 3 - Psychologie cognitive et psycholinguistique',
        school: 'Université de Lille − sciences humaines et sociales',
        date: '2015',
      },
      {
        degree: 'Niveau I-II Licence De psychologie - Psychopathologie, Psychanalyse',
        school: 'Université catholique de Lille',
        date: '2013-2015',
      }
    ],
  },
  languages: {
    title: 'Languages',
    list: [{ name: 'Anglais', level: 'Lecture' }, { name: 'français', level: 'Natif' }],
  },
  interests: {
    title: 'Centre d\'intérêts',
    list: [
      {
        name: 'Sport',
        description: 'Pratique régulière du volley',
      },
      {
        name: 'Art',
        description: 'digital-painting',
      },
      {
        name: 'Autres',
        description: 'Japanimation',
      }],
  },
  source: {
    title: 'Source',
    link: 'github.com/crisboarna/react-cv'
  }
};

export default sidebar;
