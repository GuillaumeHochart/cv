/* eslint max-len: "off" */

const sidebar = {
  name: {
    title: 'Développeur Full Stack',
    name: 'Hochart Guillaume',
  },
  contact: {
    title: 'Contact',
    email: { value: 'guillaume.hochart.pro@gmail.com', icon: 'far fa-envelope' },
    phone: { value: '06 59 87 38 02', icon: 'fas fa-phone' },
    linkedin: { value: 'linkedin.com/in/guillaume-hochart-b363a5124/', icon: 'fab fa-linkedin' },
    github: { value: 'github.com/GuillaumeHochart', icon: 'fab fa-github' }
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
  skills: {
    title: 'Compétences',
    list: {
      languages: [
        'Java(4)',
        'C#(1)',
        'HTML5/css(3)',
        'javascript(3)',
        'typescript(1.5)',
        'pl/pgSql(2)'
      ],
      solutions: [
        'Ansible(1)',
        'Ansible tower(1)',
        'docker(2)',
        'keycloak(2.5)',
        'jenkins(1)',
        'aws(0.5)',
        'git(3)',
        'eclipse memory analyzer(1)'
      ],
      frameworks: [
        'ReactJS(3)',
        'React Native(0.5)',
        'Spring-boot(3)',
        'spring-security(2)',
        'spring-batch(1)',
        'vaadin(3)',
        'unity(1)',
        'hibernate/JPA(3)',
        'apache camel(3)',
        'apache poi(3)'
      ],
      BDD: [
        'MongoDB(3)',
        'Postgresql(3)',
        'Elasticsearch(1)'
      ],
    },
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
