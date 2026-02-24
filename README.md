# Git & Github Docs

## Overview
Git & Github Docs is a modern, production-ready documentation website designed to help users master Git and GitHub. Built with React, TypeScript, and Vite, it offers clear, interactive guides, best practices, and reference material for developers of all skill levels. The site is optimized for speed, accessibility, and SEO, making it ideal for both learning and reference.

---

## Purpose
The goal of this project is to provide:
- Easy-to-follow tutorials for Git and GitHub
- Reference material for commands, workflows, and troubleshooting
- A platform for community contributions and updates

---

## Tech Stack
- **React**: UI library for building interactive interfaces
- **TypeScript**: Type-safe JavaScript for reliability
- **Vite**: Lightning-fast development and build tool
- **Vercel**: Deployment platform for static sites
- **ESLint**: Code linting for quality assurance

---

## Key Features
- **Component-Based Architecture**: Modular, reusable components
- **Responsive Design**: Works seamlessly on desktop and mobile
- **SEO Optimized**: Sitemap, robots.txt, semantic HTML
- **Dynamic Navigation**: Sidebar, On This Page, Prev/Next links
- **Global Loader & Mobile Menu**: Smooth user experience
- **Dark/Light Theme Support**: Accessible for all users
- **Production-Ready Build**: Optimized for fast deployment

---

## Features
- **React + TypeScript**: Robust, type-safe codebase for maintainability and scalability.
- **Vite**: Fast development server and optimized build for production.
- **Component-Based Architecture**: Modular components for easy updates and feature additions.
- **Responsive Design**: Mobile-friendly layout and navigation.
- **SEO Optimized**: Includes sitemap, robots.txt, and semantic HTML for search engine visibility.
- **Global Loader & Mobile Menu**: Enhanced user experience with dynamic loading and navigation.
- **Sidebar & On This Page Navigation**: Easy access to documentation sections.
- **Prev/Next Navigation**: Seamless browsing between documentation pages.

---

## Project Structure

```
├── public/           # Static assets (images, sitemap.xml, robots.txt)
├── src/              # Main source code
│   ├── components/   # UI components (Navbar, Sidebar, etc.)
│   ├── context/      # React context providers (ThemeContext)
│   ├── data/         # Documentation content and data
│   ├── layout/       # Layout components (DocsLayout)
│   ├── pages/        # Individual documentation pages
│   ├── utils/        # Utility functions (formatDate, slugify)
│   ├── App.tsx       # Root app component
│   ├── main.tsx      # Entry point for React
│   ├── index.css     # Global styles
│   └── vite-env.d.ts # Vite environment types
├── index.html        # HTML entry point
├── vite.config.ts    # Vite configuration
├── tsconfig*.json    # TypeScript configuration
├── eslint.config.js  # ESLint configuration
├── vercel.json       # Vercel deployment config
```

---

## Usage
### Local Development
1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (default).

---

### Build for Production
3. **Build static files**:
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

4. **Preview production build**:
   ```bash
   npm run preview
   ```
   Serves the built files locally for testing.

---

### Deployment
- **Vercel**: Deploy instantly using the included `vercel.json`.
- **Other Platforms**: Deploy the `dist/` folder to any static hosting service (Netlify, GitHub Pages, etc).

---

## Contact & Support
- For questions, suggestions, or support, open an issue in the repository.
- For urgent matters, contact the maintainer via GitHub profile.

---

## Contributing
Contributions are welcome! Please open issues or pull requests for suggestions, bug fixes, or new features.

---

## Contribution Guidelines
We welcome contributions! To contribute:
1. Fork the repository
2. Create a new branch for your feature or fix
3. Submit a pull request with a clear description
4. Participate in code review and discussion

Please follow the code style enforced by ESLint and use TypeScript for all new code.