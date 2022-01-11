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
        degree: 'Niveau I-II Licence De psychologie - Psychopathologie, Pyschanalyse',
        school: 'Université catholique de Lille',
        date: '2013-2015',
      }
    ],
  },
  skills: {
    title: 'Compétences',
    list: {
      languages: [
        'Java',
        'C#',
        'HTML5',
        'javascript',
      ],
      solutions: [
        'Ansible',
        'Ansible tower',
        'docker',
        'jenkins',
        'eclipse memory analyzer'
      ],
      frameworks: [
        'ReactJS',
        'Spring-boot',
        'vaadin',
        'unity',
        'apache camel'
      ],
      BDD: [
        'MongoDB',
        'Postgresql',
        'pl/pgSql'
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
