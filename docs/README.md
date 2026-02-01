# PortfolioJea Documentation

Welcome to the comprehensive documentation for PortfolioJea! This guide will help you understand, customize, and deploy your portfolio website.

## 📚 Documentation Index

### Getting Started
- [Quick Start Guide](#quick-start-guide) - Get up and running quickly
- [Installation Guide](#installation-guide) - Detailed installation instructions
- [Configuration](#configuration) - Configure your portfolio

### Guides
- [Tutorial: Building Your Portfolio](#tutorial-building-your-portfolio) - Step-by-step walkthrough
- [Architecture Overview](./architecture.md) - Understand the project structure
- [Development Guide](./development.md) - Set up your development environment

### Reference
- [Component API](#component-api) - Component reference and props
- [Data Structure](#data-structure) - Portfolio data schema
- [Troubleshooting](#troubleshooting) - Common issues and solutions
- [FAQ](#faq) - Frequently asked questions

---

## Quick Start Guide

### Prerequisites

Before you begin, ensure you have:
- Node.js v18+ installed
- npm v9+ (comes with Node.js)
- A Gemini API key from [Google AI Studio](https://ai.google.dev/)
- A code editor (VS Code recommended)

### Setup in 3 Steps

1. **Clone and Install**
   ```bash
   git clone https://github.com/jea022/PortfolioJea.git
   cd PortfolioJea
   npm install
   ```

2. **Configure API Key**
   ```bash
   # Create .env file
   echo "GEMINI_API_KEY=your_api_key_here" > .env
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Tutorial: Building Your Portfolio

### Step 1: Customize Personal Information

Edit `data/portfolioData.ts` to add your information:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Brief description about yourself",
  location: "Your Location",
  email: "your.email@example.com",
  phone: "+1234567890",
  // ... more fields
};
```

### Step 2: Add Your Projects

Add your projects to the `projects` array:

```typescript
export const projects = [
  {
    title: "Project Name",
    description: "Brief project description",
    image: "/path/to/image.jpg",
    link: "https://project-url.com",
    tags: ["React", "TypeScript", "API"],
    featured: true,
  },
  // Add more projects...
];
```

### Step 3: Configure Services

List the services you offer:

```typescript
export const services = [
  {
    title: "Web Development",
    description: "Full-stack web application development",
    icon: "Code",
    features: [
      "React & TypeScript",
      "Node.js & Express",
      "Database design",
    ],
  },
  // Add more services...
];
```

### Step 4: Add Credentials

Showcase your certifications and education:

```typescript
export const credentials = [
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    image: "/path/to/certificate.jpg",
    link: "https://verify-link.com",
  },
  // Add more credentials...
];
```

### Step 5: Set Up Social Links

Configure your social media profiles:

```typescript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  // ... more platforms
};
```

### Step 6: Test Your Changes

```bash
# Development mode (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Architecture Overview

See the detailed [Architecture Guide](./architecture.md) for information about:
- Component hierarchy and structure
- Data flow and state management
- AI chat integration
- Styling approach

### Key Architectural Decisions

**Component Structure:**
- `App.tsx` - Main application logic and state
- `components/` - Reusable UI components
- `data/` - Content and configuration data

**State Management:**
- React hooks (useState, useEffect) for local state
- No external state management library (keeping it simple)

**Styling:**
- Inline styles with Tailwind-like utility patterns
- Responsive design with mobile-first approach

**AI Integration:**
- Google Generative AI SDK for chat functionality
- API key managed through environment variables

---

## Component API

### BentoCard Component

The main card component for the Bento Grid layout.

**Props:**
```typescript
interface BentoCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}
```

**Usage:**
```tsx
<BentoCard
  title="Card Title"
  description="Card description"
  icon={<Icon />}
  onClick={() => handleClick()}
  size="medium"
/>
```

### Modal Component

Reusable modal for displaying detailed content.

**Props:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
```

**Usage:**
```tsx
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
>
  <p>Modal content goes here</p>
</Modal>
```

---

## Data Structure

### Portfolio Data Schema

The main data structure in `data/portfolioData.ts`:

```typescript
// Personal Information
interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  avatar?: string;
}

// Project
interface Project {
  title: string;
  description: string;
  image?: string;
  link: string;
  github?: string;
  tags: string[];
  featured?: boolean;
}

// Service
interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Credential
interface Credential {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  link?: string;
}
```

---

## Troubleshooting

### Common Issues

#### Issue: "API Key not found" error

**Solution:**
1. Check that `.env` file exists in the root directory
2. Verify the API key variable name is `GEMINI_API_KEY`
3. Restart the development server after adding the key

```bash
# Stop the server (Ctrl+C)
# Start again
npm run dev
```

#### Issue: Port 5173 already in use

**Solution:**
Vite will automatically use the next available port, or you can specify a different port:

```bash
npm run dev -- --port 3000
```

#### Issue: Build fails with TypeScript errors

**Solution:**
1. Check TypeScript version: `npm list typescript`
2. Ensure all type definitions are installed
3. Run type checking: `npx tsc --noEmit`

#### Issue: Components not rendering

**Solution:**
1. Check browser console for errors
2. Verify all imports are correct
3. Ensure data structure matches expected types

---

## FAQ

### General Questions

**Q: Can I deploy this portfolio for free?**
A: Yes! You can deploy to platforms like:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Cloudflare Pages

**Q: Do I need a Gemini API key to use the portfolio?**
A: The chat feature requires a Gemini API key, but the rest of the portfolio works without it. You can disable the chat feature if you don't need it.

**Q: Can I use this portfolio for commercial purposes?**
A: Yes, this project is MIT licensed. You're free to use it for personal or commercial projects.

**Q: How do I add more pages/routes?**
A: This is a single-page application (SPA). To add routes, you would need to:
1. Install a routing library: `npm install react-router-dom`
2. Set up routes in `App.tsx`
3. Create page components

### Customization Questions

**Q: How do I change the color scheme?**
A: Edit the color values in the component styles. Look for color definitions in:
- `App.tsx` - Main color palette
- Individual component files for component-specific colors

**Q: Can I add more sections to the portfolio?**
A: Yes! Create a new modal type in `App.tsx` and add corresponding data in `data/portfolioData.ts`.

**Q: How do I customize the Bento Grid layout?**
A: The layout is defined in `App.tsx`. Modify the grid structure by adjusting the card sizes and positions in the main render method.

### Technical Questions

**Q: What's the difference between .env and .env.local?**
A: 
- `.env` - Committed to Git (don't put secrets here)
- `.env.local` - Not committed (good for secrets)

**Q: How do I optimize the build for production?**
A: Vite automatically optimizes builds. Additional optimization:
```bash
npm run build
# Check build size
du -sh dist/
```

**Q: Can I use this with Next.js instead of Vite?**
A: You would need to:
1. Migrate to Next.js structure
2. Update build configuration
3. Adjust imports and routing

---

## API Reference

<!-- TODO: Add detailed API reference once TypeDoc or similar is configured -->

For now, refer to the TypeScript types in:
- `types.ts` - Type definitions
- Component prop types in each component file

---

## Additional Resources

### External Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Google Generative AI Documentation](https://ai.google.dev/docs)

### Deployment Guides
- [Deploy to Vercel](https://vercel.com/docs)
- [Deploy to Netlify](https://docs.netlify.com/)
- [Deploy to GitHub Pages](https://pages.github.com/)

### Development Tools
- [VS Code React Extension Pack](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [TypeScript VS Code](https://code.visualstudio.com/docs/languages/typescript)

---

## Need More Help?

- 📖 Check the [Development Guide](./development.md)
- 🏗️ Read the [Architecture Overview](./architecture.md)
- 🐛 [Report a Bug](https://github.com/jea022/PortfolioJea/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/jea022/PortfolioJea/issues/new?template=feature_request.md)
- 💬 [Start a Discussion](https://github.com/jea022/PortfolioJea/discussions)

---

**Last Updated**: 2026-02-01
