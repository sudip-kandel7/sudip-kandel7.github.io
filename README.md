# Sudip Kandel - Portfolio

A modern, responsive portfolio website built with Astro, React, and Tailwind CSS, showcasing my projects, skills, as a full-stack developer.

## Live Demo

Visit: [sudip-kandel.com.np](https://sudip-kandel.com.np)

- **[Astro](https://astro.build/)** - Static Site Generator
- **[React](https://react.dev/)** - UI Components
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety

### Libraries & Tools

- **react-icons** - Icon library (FaLinkedinIn, FaGithub, etc.)
- **typewriter-effect** - Typing animation
- **astro-seo** - SEO optimization
- **GitHub Pages** - Hosting & Deployment

### Development Tools

- **Node.js** - Runtime environment
- **npm** - Package manager
- **GitHub Actions** - CI/CD pipeline

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sudip-kandel7/sudip-kandel.github.io.git
cd sudip-kandel.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Pages

- **Home** (`/`) - Hero section, tech slider, about preview, and featured projects
- **Projects** (`/projects`) - Complete showcase of all projects with filters
- **About** (`/about`) - Detailed bio, skills, and GitHub banner
- **Contact** (`/contact`) - Social links and contact information
- **404** - Custom error page

## Key Components

### React Components

- `NotificationBell.jsx` - Interactive notification system with localStorage
- `TypeEffect.jsx` - Typewriter animation for dynamic text
- `SocialIcons.jsx` - Reusable social media icon links
- `CopyMail.jsx` - Copy email to clipboard functionality

### Astro Components

- `navbar.astro` - Responsive navigation with mobile menu
- `hero.astro` - Reusable hero section with grid background
- `projectCard.astro` - Project display cards with tech tags
- `skills.astro` - Technology showcase grid
- `footer.astro` - Site footer with links

## Configuration

### Site URL

Update in `astro.config.mjs`:

```javascript
site: "https://sudip-kandel.com.np";
```

### Social Links

Edit social media links in:

- `src/components/commons/socialIcons/socialIcons.jsx`
- `src/components/commons/navbar/navbar.astro`

### Projects Data

Add or modify projects in:

- `src/data/projectData.js` (all projects)
- `src/data/projectsAboutData.js` (featured projects)

## Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

The workflow file (`.github/workflows/deploy.yml`) handles:

- Installing dependencies
- Building the site
- Deploying to GitHub Pages

## Contact

- Portfolio: [sudip-kandel.com.np](https://sudip-kandel.com.np)
- GitHub: [@sudip-kandel7](https://github.com/sudip-kandel7)
- LinkedIn: [sudip-kandel7](https://www.linkedin.com/in/sudip-kandel7/)
- Twitter: [@paade_07](https://x.com/paade_07/)
- Email: sudipkandel27@gmail.com

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Tech icons from [Devicon](https://devicon.dev/)
- Fonts and styling with [Tailwind CSS](https://tailwindcss.com/)
- Built with [Astro](https://astro.build/)

---

⭐ If you like this project, please consider giving it a star on GitHub!
