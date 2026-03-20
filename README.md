# AnantaOps — Cloud-Native Engineering Studio

The official website for [AnantaOps](https://anantaops.github.io) — a cloud-native engineering studio helping startups build scalable, reliable infrastructure using Kubernetes, DevOps automation, and modern cloud tooling.

## Tech Stack

- **React** + **TypeScript**
- **Vite** — build tooling
- **Tailwind CSS** — styling
- **shadcn/ui** — component library
- **React Router** — client-side routing
- **GitHub Actions** — CI/CD pipeline
- **GitHub Pages** — hosting

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Local Development

```bash
# Clone the repo
git clone https://github.com/anantaops/anantaops.github.io.git
cd anantaops.github.io

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

Deployments are automated via GitHub Actions. Every push to `main` triggers a build and deploys the output to the `gh-pages` branch, which is served by GitHub Pages.

Workflow: `.github/workflows/deploy.yml`

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level page components
│   └── main.tsx        # App entry point
├── public/             # Static assets
├── index.html          # HTML shell
└── vite.config.ts      # Vite configuration
```

## License

MIT
