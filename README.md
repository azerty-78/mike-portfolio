# Mike Portfolio

Portfolio personnel de **Michael Lontchi Fontsa**, développeur Full-Stack (Génie Logiciel).

Site one-page premium, bilingue (FR / EN), pensé pour présenter le parcours, les compétences, les expériences et les projets de manière claire et professionnelle.

---

## Aperçu

- Hero immersif avec portrait professionnel
- Sections : À propos, Compétences, Expériences, Projets, Formation, Soft skills, Contact
- Basculement de langue **FR / EN** (mémorisé)
- Animations fluides (Framer Motion) avec respect de `prefers-reduced-motion`
- Design responsive (desktop, tablette, mobile)
- Formulaire de contact via `mailto`
- Prêt pour un déploiement sur Vercel ou Netlify

## Stack technique

| Technologie | Usage |
|---|---|
| React 19 | Interface |
| Create React App | Build & tooling |
| Tailwind CSS | Styles & design system |
| Framer Motion | Animations |
| Lucide React | Icônes |

## Démarrage

### Prérequis

- Node.js 18+ recommandé
- npm

### Installation

```bash
git clone https://github.com/azerty-78/Mike-portfolio.git
cd Mike-portfolio
npm install
```

### Lancer en développement

```bash
npm start
```

L’application s’ouvre sur [http://localhost:3000](http://localhost:3000).

### Build de production

```bash
npm run build
```

Le dossier `build/` contient les fichiers prêts à être déployés.

## Structure du projet

```text
src/
├── assets/images/          # Photos et médias
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Sections de la page
│   ├── ui/                 # Boutons, curseur, loader, etc.
│   └── animations/         # Révélations au scroll
├── data/                   # Données structurées (projets, expériences…)
├── hooks/                  # Hooks personnalisés
├── i18n/                   # Traductions FR / EN
├── App.js
└── index.js
```

## Personnalisation

### Textes & traductions

Les contenus bilingues se trouvent dans :

```text
src/i18n/translations.js
```

### Données professionnelles

| Fichier | Contenu |
|---|---|
| `src/data/personalInfo.js` | Identité, contacts, photo |
| `src/data/skills.js` | Compétences techniques |
| `src/data/experiences.js` | Parcours professionnel |
| `src/data/projects.js` | Projets (ajouter `image`, `liveUrl`, `githubUrl` si disponibles) |
| `src/data/education.js` | Formation & certifications |

### Palette

Le thème s’inspire du portrait professionnel (sable, taupe, bordeaux). Les tokens sont définis dans :

```text
tailwind.config.js
src/index.css
```

## Scripts npm

| Commande | Description |
|---|---|
| `npm start` | Serveur de développement |
| `npm run build` | Build production |
| `npm test` | Tests |
| `npm run eject` | Éjection CRA (irréversible) |

## Déploiement

Compatible avec :

- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com)
- GitHub Pages (via build statique)

Commande de build : `npm run build`  
Dossier de sortie : `build`

## Auteur

**Michael Lontchi Fontsa**  
Développeur Full-Stack · Génie Logiciel — Yaoundé, Cameroun

- Email : [lontchimike@gmail.com](mailto:lontchimike@gmail.com)
- Téléphone : +237 699 657 458

## Licence

Projet personnel — tous droits réservés.
