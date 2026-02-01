# PortfolioJea

> A modern, interactive Bento Grid portfolio website powered by React, TypeScript, and Gemini AI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646cff.svg)](https://vitejs.dev/)

<!-- TODO: Add build status badge -->
<!-- TODO: Add deployment status badge -->
<!-- TODO: Add code coverage badge if applicable -->

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Status](#project-status)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Examples](#examples)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## 🌟 Overview

PortfolioJea is a modern, interactive portfolio website built with React and TypeScript. It features a unique Bento Grid layout design and integrates Google's Gemini AI for intelligent chat interactions. The portfolio showcases personal information, projects, services, credentials, and more in an engaging and responsive interface.

**Key Technologies:**
- ⚛️ React 19.2 with TypeScript
- ⚡ Vite for blazing-fast builds
- 🤖 Google Gemini AI integration for interactive chat
- 🎨 Lucide React icons
- 📱 Fully responsive design

## ✨ Features

- **Bento Grid Layout**: Modern, Pinterest-style card layout for showcasing content
- **AI-Powered Chat**: Interactive chat feature powered by Google's Gemini AI
- **Responsive Design**: Optimized for all device sizes
- **Modal System**: Smooth modal interactions for detailed content views
- **Dynamic Content**: Easy-to-update portfolio data structure
- **Social Integration**: Links to social profiles and contact information
- **Project Showcase**: Display your projects with descriptions and links
- **Credentials Display**: Showcase certifications and achievements
- **Service Offerings**: Highlight your skills and services

## 📊 Project Status

🚀 **Active Development** - This project is actively maintained and accepting contributions.

<!-- TODO: Update status badges and deployment information -->

## 📦 Requirements

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Gemini API Key**: Required for AI chat functionality ([Get API Key](https://ai.google.dev/))

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jea022/PortfolioJea.git
cd PortfolioJea
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory (or rename `.env.example` if provided):

```bash
cp .env .env.local
```

Add your Gemini API key to `.env` or `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## ⚡ Quick Start

Get up and running in under 2 minutes:

```bash
# Install dependencies
npm install

# Set your Gemini API key in .env
echo "GEMINI_API_KEY=your_key_here" > .env

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

## 💻 Usage

### Development Mode

Run the development server with hot module replacement:

```bash
npm run dev
```

This starts a local development server, typically at `http://localhost:5173`.

### Production Build

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## ⚙️ Configuration

### Customizing Portfolio Data

Edit the portfolio data file to customize your content:

**File**: `data/portfolioData.ts`

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... more fields
};

export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    // ... more fields
  },
  // Add more projects
];
```

### Vite Configuration

Customize build settings in `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Add your custom configuration
});
```

### TypeScript Configuration

TypeScript settings are in `tsconfig.json`. Adjust as needed for your project requirements.

## 📁 Project Structure

```
PortfolioJea/
├── components/          # React components
│   ├── BentoCard.tsx   # Card component for Bento Grid
│   ├── Footer.tsx      # Footer component
│   ├── Modal.tsx       # Modal component
│   └── Navbar.tsx      # Navigation bar component
├── data/               # Data and content
│   └── portfolioData.ts # Portfolio content data
├── public/             # Static assets
├── .github/            # GitHub templates and workflows
├── docs/               # Extended documentation
├── examples/           # Usage examples
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## 📚 Examples

Check out the [examples/](./examples/) directory for:
- Basic setup examples
- Customization recipes
- Deployment guides

See [examples/README.md](./examples/README.md) for detailed examples.

## 🧪 Testing

<!-- TODO: Add testing framework and instructions once implemented -->

Currently, this project does not have a formal testing framework configured. Contributions to add testing are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md).

**Planned Testing Stack:**
- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Playwright

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details on:
- Code of Conduct
- Development process
- Submitting pull requests
- Code style guidelines
- Issue reporting

**Quick Contribution Steps:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

<!-- TODO: Add LICENSE file if not present -->

## 🙏 Credits

**Built With:**
- [React](https://reactjs.org/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Google Generative AI](https://ai.google.dev/) - AI chat functionality
- [Lucide React](https://lucide.dev/) - Icon library

**Inspired By:**
- Modern portfolio design trends
- Bento Grid layouts
- Interactive web experiences

---

**Maintainer**: [@jea022](https://github.com/jea022)

**Repository**: [github.com/jea022/PortfolioJea](https://github.com/jea022/PortfolioJea)

<!-- TODO: Add links to live demo, documentation site, etc. -->
