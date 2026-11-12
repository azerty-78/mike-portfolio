import portraitImage from '../assets/images/michael-lontchi.jpg';

export const personalInfo = {
  fullName: 'Michael Lontchi Fontsa',
  shortName: 'Michael Lontchi',
  monogram: 'ML',
  title: 'Développeur Full-Stack · Génie Logiciel',
  location: {
    fr: 'Yaoundé, Cameroun',
    en: 'Yaoundé, Cameroon',
  },
  phone: '+237 699 657 458',
  phoneHref: 'tel:+237699657458',
  email: 'lontchimike@gmail.com',
  cvUrl: '/docs/CV_Michael_LONTCHI_FONTSA.pdf',
  cvFileName: 'CV_Michael_LONTCHI_FONTSA.pdf',
  portrait: portraitImage,
  portraitAlt: {
    fr: 'Portrait professionnel de Michael Lontchi Fontsa',
    en: 'Professional portrait of Michael Lontchi Fontsa',
  },
  navIds: ['accueil', 'apropos', 'postes', 'competences', 'experiences', 'projets', 'contact'],
};

export const seo = {
  fr: {
    title: 'Michael Lontchi Fontsa — Développeur Full-Stack',
    description:
      'Portfolio de Michael Lontchi Fontsa, développeur Full-Stack diplômé de l’IAI-Cameroun. Applications web, API REST, bases de données, React, Node.js et PHP.',
  },
  en: {
    title: 'Michael Lontchi Fontsa — Full-Stack Developer',
    description:
      'Portfolio of Michael Lontchi Fontsa, Full-Stack developer graduated from IAI-Cameroon. Web applications, REST APIs, databases, React, Node.js and PHP.',
  },
  url: 'https://michael-lontchi.vercel.app',
  image: '/og-image.svg',
};
