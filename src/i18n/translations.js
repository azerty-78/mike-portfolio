export const translations = {
  fr: {
    nav: {
      accueil: 'Accueil',
      apropos: 'À propos',
      postes: 'Postes',
      competences: 'Compétences',
      experiences: 'Expériences',
      projets: 'Projets',
      contact: 'Contact',
      letsTalk: 'Discutons',
      contactMe: 'Me contacter',
      downloadCv: 'Télécharger le CV',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      mainNav: 'Navigation principale',
      mobileNav: 'Navigation mobile',
    },
    hero: {
      tagline: 'DÉVELOPPEUR FULL-STACK · GÉNIE LOGICIEL',
      headline: [
        { text: 'JE CONÇOIS DES', accent: false },
        { text: 'APPLICATIONS', accent: true },
        { text: 'WEB FULL-STACK', accent: false },
        { text: '& DES API.', accent: true },
      ],
      intro:
        'Développeur Full-Stack diplômé de l’IAI-Cameroun, je conçois des applications web, j’intègre des API et je gère des bases de données — avec Git, Docker et une approche Agile au quotidien.',
      ctaProjects: 'Explorer mes projets',
      ctaContact: 'Me contacter',
      ctaCv: 'Télécharger mon CV',
      availability: 'Disponible pour de nouvelles opportunités',
      scroll: 'Défiler',
      role: 'Développeur Full-Stack',
      identityLabel: 'Portrait',
    },
    about: {
      eyebrow: '01 — À propos',
      title: 'Au-delà du code.',
      text:
        'Développeur Full-Stack diplômé de l’IAI-Cameroun, avec plus de deux ans d’expérience dans la conception d’applications web, l’intégration d’API et la gestion de bases de données. À l’aise en environnement Agile (Scrum, Kanban), avec Git et Docker au quotidien. J’accorde une attention particulière à la qualité du code, à l’expérience utilisateur et à la performance.',
      highlights: [
        {
          label: '01',
          title: 'Formation IAI-Cameroun',
          description: 'Diplôme d’Ingénieur de Travaux Informatiques — Génie Logiciel (Bac+3).',
        },
        {
          label: '02',
          title: '+2 ans d’expérience',
          description: 'Conception d’applications web, API et bases de données.',
        },
        {
          label: '03',
          title: 'Full-Stack',
          description: 'PHP, JavaScript, React, Node.js — du back-end à l’interface.',
        },
        {
          label: '04',
          title: 'Agile & DevOps',
          description: 'Scrum, Kanban, Git et Docker au quotidien.',
        },
      ],
    },
    roles: {
      eyebrow: '02 — Postes',
      title: 'Postes que je peux occuper.',
      description:
        'Un profil polyvalent pour accompagner vos équipes sur le front, le back et l’intégration.',
      items: {
        fullstack: {
          title: 'Développeur Full-Stack',
          description: 'PHP / JavaScript, React, Node.js : du back-end à l’interface.',
        },
        backend: {
          title: 'Développeur Back-end',
          description:
            'PHP, Node.js, Python (Django, Flask), API REST, MySQL / PostgreSQL / MongoDB.',
        },
        frontend: {
          title: 'Développeur Front-end',
          description: 'React et JavaScript, en lien avec les équipes UX/UI.',
        },
        web: {
          title: 'Développeur Web',
          description: 'Plateformes de gestion, sites et applications web sur mesure.',
        },
        business: {
          title: 'Développeur d’applications métiers',
          description: 'Nouvelles fonctionnalités, support et maintenance en production.',
        },
        api: {
          title: 'Intégrateur d’API',
          description: 'Intégration d’API tierces, conception d’API RESTful pour le mobile.',
        },
      },
    },
    skills: {
      eyebrow: '03 — Compétences',
      title: 'Mon arsenal technique.',
      description:
        'Un ensemble d’outils et de technologies pour concevoir, développer et maintenir des solutions logicielles robustes.',
      categoryLabel: 'Catégorie',
      categories: {
        languages: 'Langages',
        frameworks: 'Frameworks',
        api: 'API & Architecture',
        databases: 'Bases de données',
        tools: 'DevOps & Outils',
        methods: 'Méthodes & Qualité',
      },
    },
    experience: {
      eyebrow: '04 — Expérience',
      title: 'Le parcours jusqu’ici.',
      description:
        'Un parcours ancré dans le développement d’applications, la collaboration d’équipe et la livraison de solutions concrètes.',
      current: 'En cours',
      stackLabel: 'Stack',
      jobs: {
        'stage-apps': {
          role: 'Stagiaire Développeur d’Applications',
          period: 'Oct. 2025 – présent',
          summary: 'Applications métiers en production.',
          responsibilities: [
            'Développement de nouvelles fonctionnalités pour des applications métiers.',
            'Collaboration avec l’équipe UX/UI pour améliorer l’expérience utilisateur.',
            'Support et maintenance des applications en production.',
          ],
        },
        'stage-web': {
          role: 'Stagiaire Développeur Web',
          period: 'Juil. 2024 – Sept. 2024',
          summary: 'Plateforme web de gestion.',
          responsibilities: [
            'Conception et développement d’une plateforme web de gestion.',
            'Optimisation des performances des applications existantes.',
            'Tests fonctionnels et correction de bugs.',
          ],
        },
        'dev-logiciel': {
          role: 'Développeur Logiciel',
          period: 'Févr. 2023 – Juin 2024',
          summary: 'Développement d’applications web et intégrations.',
          responsibilities: [
            'Développement d’applications web avec PHP et JavaScript.',
            'Intégration d’API tierces et gestion des bases de données.',
            'Rédaction de la documentation technique et support aux utilisateurs.',
          ],
        },
      },
    },
    projects: {
      eyebrow: '05 — Projets',
      title: 'Projets clés.',
      description:
        'Une sélection de projets illustrant ma capacité à concevoir des applications, des systèmes de données et des API.',
      projectLabel: 'Projet',
      previewSlot: 'Aperçu',
      previewHint: 'Zone réservée pour une capture d’écran ou une image représentative.',
      linkSoon: 'Lien projet à venir',
      viewProject: 'Voir le projet',
      code: 'Code',
      items: {
        'project-management': {
          title: 'Application de gestion de projet',
          description:
            'Application web de gestion de projets et de tâches avec front-end React et back-end Node.js.',
        },
        'database-system': {
          title: 'Système de gestion de base de données',
          description:
            'Application de gestion de données reposant sur un back-end PHP et une base MySQL.',
        },
        'restful-api': {
          title: 'API RESTful pour application mobile',
          description:
            'Conception et mise en œuvre d’une API RESTful consommée par une application mobile.',
        },
      },
    },
    education: {
      eyebrow: '06 — Formation',
      title: 'Savoir & croissance.',
      formation: 'Formation académique',
      certCompleted: 'Certifications — Obtenues',
      certInProgress: 'Certifications — En cours',
      inProgress: 'En cours',
      obtained: 'Obtenue',
      degrees: {
        ingenieur: {
          title: 'Diplôme d’Ingénieur de Travaux Informatiques — Génie Logiciel',
          detail: 'Bac+3 · Niveau Licence · Spécialité Génie Logiciel',
        },
        dts: {
          title: 'DTS — Génie Logiciel',
          detail: 'Bac+2 · Diplôme de Technicien Supérieur',
        },
      },
    },
    softSkills: {
      eyebrow: '07 — Soft Skills & Langues',
      title: 'Les compétences humaines derrière le code.',
      softLabel: 'Qualités humaines',
      languagesLabel: 'Langues',
      items: [
        'Communication efficace',
        'Travail en équipe',
        'Autonomie et gestion du temps',
        'Résolution de problèmes techniques',
      ],
      languages: [
        {
          name: 'Français',
          level: 'Langue maternelle',
        },
        {
          name: 'Anglais',
          level: 'Intermédiaire — lu et écrit, technique',
        },
      ],
    },
    contact: {
      eyebrow: '08 — Contact',
      titleLine1: 'Un projet en tête ?',
      titleLine2: 'Construisons quelque chose de grand.',
      text:
        'Vous avez un projet, une idée ou une opportunité de collaboration ? Je serais ravi d’échanger avec vous.',
      downloadCv: 'Télécharger mon CV (PDF)',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'Adresse email',
      emailPlaceholder: 'vous@email.com',
      subject: 'Sujet',
      subjectPlaceholder: 'Sujet du message',
      message: 'Message',
      messagePlaceholder: 'Parlez-moi de votre projet…',
      send: 'Envoyer le message',
      sending: 'Ouverture…',
      mailtoHint: 'Ouverture de votre client mail.',
      success:
        'Votre client mail s’ouvre avec le message prérempli. Envoyez-le pour finaliser.',
      mailNameLabel: 'Nom',
      mailEmailLabel: 'Email',
      errors: {
        name: 'Le nom est requis.',
        emailRequired: 'L’email est requis.',
        emailInvalid: 'Adresse email invalide.',
        subject: 'Le sujet est requis.',
        message: 'Le message doit contenir au moins 10 caractères.',
      },
    },
    footer: {
      top: 'Haut',
      backToTop: 'Retour en haut',
      email: 'Email',
    },
    loader: {
      label: 'Chargement du portfolio',
    },
    common: {
      language: 'Langue',
    },
  },
  en: {
    nav: {
      accueil: 'Home',
      apropos: 'About',
      postes: 'Roles',
      competences: 'Skills',
      experiences: 'Experience',
      projets: 'Projects',
      contact: 'Contact',
      letsTalk: "Let's Talk",
      contactMe: 'Contact me',
      downloadCv: 'Download CV',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      mainNav: 'Main navigation',
      mobileNav: 'Mobile navigation',
    },
    hero: {
      tagline: 'FULL-STACK DEVELOPER · SOFTWARE ENGINEERING',
      headline: [
        { text: 'I BUILD', accent: false },
        { text: 'FULL-STACK', accent: true },
        { text: 'WEB APPS', accent: false },
        { text: '& APIS.', accent: true },
      ],
      intro:
        'Full-Stack developer graduated from IAI-Cameroon. I design web applications, integrate APIs and manage databases — with Git, Docker and an Agile approach every day.',
      ctaProjects: 'Explore my projects',
      ctaContact: 'Contact me',
      ctaCv: 'Download my CV',
      availability: 'Open to new opportunities',
      scroll: 'Scroll',
      role: 'Full-Stack Developer',
      identityLabel: 'Portrait',
    },
    about: {
      eyebrow: '01 — About',
      title: 'Beyond the code.',
      text:
        'Full-Stack developer graduated from IAI-Cameroon, with more than two years of experience designing web applications, integrating APIs and managing databases. Comfortable in Agile environments (Scrum, Kanban), using Git and Docker daily. I pay close attention to code quality, user experience and performance.',
      highlights: [
        {
          label: '01',
          title: 'IAI-Cameroon graduate',
          description: 'Computer Engineering Works Degree — Software Engineering (Bachelor level).',
        },
        {
          label: '02',
          title: '2+ years of experience',
          description: 'Web application design, APIs and databases.',
        },
        {
          label: '03',
          title: 'Full-Stack',
          description: 'PHP, JavaScript, React, Node.js — from back-end to UI.',
        },
        {
          label: '04',
          title: 'Agile & DevOps',
          description: 'Scrum, Kanban, Git and Docker in daily work.',
        },
      ],
    },
    roles: {
      eyebrow: '02 — Roles',
      title: 'Roles I can take on.',
      description:
        'A versatile profile to support your teams on front-end, back-end and API integration.',
      items: {
        fullstack: {
          title: 'Full-Stack Developer',
          description: 'PHP / JavaScript, React, Node.js: from back-end to UI.',
        },
        backend: {
          title: 'Back-end Developer',
          description:
            'PHP, Node.js, Python (Django, Flask), REST APIs, MySQL / PostgreSQL / MongoDB.',
        },
        frontend: {
          title: 'Front-end Developer',
          description: 'React and JavaScript, working closely with UX/UI teams.',
        },
        web: {
          title: 'Web Developer',
          description: 'Management platforms, websites and custom web applications.',
        },
        business: {
          title: 'Business Application Developer',
          description: 'New features, support and production maintenance.',
        },
        api: {
          title: 'API Integrator',
          description: 'Third-party API integration and RESTful APIs for mobile.',
        },
      },
    },
    skills: {
      eyebrow: '03 — Skills',
      title: 'My Technical Arsenal.',
      description:
        'A set of tools and technologies to design, build and maintain robust software solutions.',
      categoryLabel: 'Category',
      categories: {
        languages: 'Languages',
        frameworks: 'Frameworks',
        api: 'API & Architecture',
        databases: 'Databases',
        tools: 'DevOps & Tools',
        methods: 'Methods & Quality',
      },
    },
    experience: {
      eyebrow: '04 — Experience',
      title: 'The Journey So Far.',
      description:
        'A path rooted in application development, teamwork and delivering concrete solutions.',
      current: 'Current',
      stackLabel: 'Stack',
      jobs: {
        'stage-apps': {
          role: 'Application Developer Intern',
          period: 'Oct. 2025 – Present',
          summary: 'Business applications in production.',
          responsibilities: [
            'Development of new features for business applications.',
            'Collaboration with the UX/UI team to improve user experience.',
            'Support and maintenance of production applications.',
          ],
        },
        'stage-web': {
          role: 'Web Developer Intern',
          period: 'Jul. 2024 – Sep. 2024',
          summary: 'Web management platform.',
          responsibilities: [
            'Design and development of a web management platform.',
            'Performance optimization of existing applications.',
            'Functional testing and bug fixing.',
          ],
        },
        'dev-logiciel': {
          role: 'Software Developer',
          period: 'Feb. 2023 – Jun. 2024',
          summary: 'Web application development and integrations.',
          responsibilities: [
            'Web application development with PHP and JavaScript.',
            'Third-party API integration and database management.',
            'Technical documentation writing and user support.',
          ],
        },
      },
    },
    projects: {
      eyebrow: '05 — Projects',
      title: 'Key Projects.',
      description:
        'A selection of projects that show my ability to design applications, data systems and APIs.',
      projectLabel: 'Project',
      previewSlot: 'Preview',
      previewHint: 'Reserved area for a screenshot or representative image.',
      linkSoon: 'Project link coming soon',
      viewProject: 'View project',
      code: 'Code',
      items: {
        'project-management': {
          title: 'Project management application',
          description:
            'Web application for project and task management with a React front-end and Node.js back-end.',
        },
        'database-system': {
          title: 'Database management system',
          description:
            'Data management application built with a PHP back-end and a MySQL database.',
        },
        'restful-api': {
          title: 'RESTful API for mobile app',
          description:
            'Design and implementation of a RESTful API consumed by a mobile application.',
        },
      },
    },
    education: {
      eyebrow: '06 — Education',
      title: 'Knowledge & Growth.',
      formation: 'Academic background',
      certCompleted: 'Certifications — Completed',
      certInProgress: 'Certifications — In progress',
      inProgress: 'In progress',
      obtained: 'Completed',
      degrees: {
        ingenieur: {
          title: 'Computer Engineering Works Degree — Software Engineering',
          detail: 'Bachelor level · Software Engineering specialization',
        },
        dts: {
          title: 'DTS — Software Engineering',
          detail: 'Higher Technician Diploma',
        },
      },
    },
    softSkills: {
      eyebrow: '07 — Soft Skills & Languages',
      title: 'Human skills behind the code.',
      softLabel: 'Soft skills',
      languagesLabel: 'Languages',
      items: [
        'Effective communication',
        'Teamwork',
        'Autonomy and time management',
        'Technical problem solving',
      ],
      languages: [
        {
          name: 'French',
          level: 'Native language',
        },
        {
          name: 'English',
          level: 'Intermediate — reading and writing, technical',
        },
      ],
    },
    contact: {
      eyebrow: '08 — Contact',
      titleLine1: 'Have a project in mind?',
      titleLine2: "Let's build something great.",
      text:
        'Have a project, an idea or a collaboration opportunity? I would be glad to hear from you.',
      downloadCv: 'Download my CV (PDF)',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email address',
      emailPlaceholder: 'you@email.com',
      subject: 'Subject',
      subjectPlaceholder: 'Message subject',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project…',
      send: 'Send message',
      sending: 'Opening…',
      mailtoHint: 'Opens your email client.',
      success: 'Your email client opens with a prefilled message. Send it to finish.',
      mailNameLabel: 'Name',
      mailEmailLabel: 'Email',
      errors: {
        name: 'Name is required.',
        emailRequired: 'Email is required.',
        emailInvalid: 'Invalid email address.',
        subject: 'Subject is required.',
        message: 'Message must contain at least 10 characters.',
      },
    },
    footer: {
      top: 'Top',
      backToTop: 'Back to top',
      email: 'Email',
    },
    loader: {
      label: 'Loading portfolio',
    },
    common: {
      language: 'Language',
    },
  },
};
