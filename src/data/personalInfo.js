import portraitImage from '../assets/images/michael-lontchi.jpg';

export const personalInfo = {
  fullName: 'LONTCHI FONTSA Michael',
  shortName: 'Michael Lontchi',
  monogram: 'ML',
  title: 'Ingénieur en Génie Logiciel | Software Engineer',
  location: {
    fr: 'Yaoundé, Cameroun',
    en: 'Yaoundé, Cameroon',
  },
  phone: '+237 699-657-458',
  phoneHref: 'tel:+237699657458',
  email: 'lontchimike@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lontchi/',
  portrait: portraitImage,
  portraitAlt: {
    fr: 'Portrait professionnel de Michael Lontchi',
    en: 'Professional portrait of Michael Lontchi',
  },
  navIds: ['accueil', 'apropos', 'competences', 'experiences', 'projets', 'contact'],
};

export const seo = {
  fr: {
    title: 'Michael Lontchi — Ingénieur en Génie Logiciel',
    description:
      'Portfolio de Lontchi Fontsa Michael, ingénieur logiciel basé à Yaoundé. Conception d’applications web, API REST, bases de données et architectures logicielles.',
  },
  en: {
    title: 'Michael Lontchi — Software Engineer',
    description:
      'Portfolio of Lontchi Fontsa Michael, software engineer based in Yaoundé. Web applications, REST APIs, databases and software architecture.',
  },
  url: 'https://michael-lontchi.vercel.app',
  image: '/og-image.svg',
};
