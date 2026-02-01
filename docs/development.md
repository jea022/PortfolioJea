# Development Guide

This guide will help you set up your development environment and understand the development workflow for the PortfolioJea project.

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- **Node.js** v18.0.0 or higher
  - Check version: `node --version`
  - Download: [nodejs.org](https://nodejs.org/)
  
- **npm** v9.0.0 or higher
  - Check version: `npm --version`
  - Comes with Node.js installation
  
- **Git**
  - Check version: `git --version`
  - Download: [git-scm.com](https://git-scm.com/)

- **Code Editor** (Recommended: VS Code)
  - Download: [code.visualstudio.com](https://code.visualstudio.com/)

### Recommended VS Code Extensions

Install these extensions for the best development experience:

- **ES7+ React/Redux/React-Native snippets** - Code snippets for React
- **TypeScript and JavaScript Language Features** - Built-in TypeScript support
- **ESLint** - JavaScript linter (if configured)
- **Prettier** - Code formatter (if configured)
- **vscode-icons** - File icons for better visibility
- **GitLens** - Enhanced Git integration

## 📥 Setting Up Your Development Environment

### 1. Clone the Repository

```bash
git clone https://github.com/jea022/PortfolioJea.git
cd PortfolioJea
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`:
- React & React DOM
- TypeScript
- Vite
- Google Generative AI SDK
- Lucide React (icons)

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Copy from .env if it exists, or create new
cp .env .env.local
```

Add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

**Getting a Gemini API Key:**
1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Create a new API key
4. Copy and paste it into your `.env` file

### 4. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (default Vite port).

**Expected Output:**
```
  VITE v6.2.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## 🔧 Development Workflow

### Project Structure

```
PortfolioJea/
├── components/              # React components
│   ├── BentoCard.tsx       # Bento grid card component
│   ├── Footer.tsx          # Footer component
│   ├── Modal.tsx           # Modal dialog component
│   └── Navbar.tsx          # Navigation bar
│
├── data/                   # Data and content
│   └── portfolioData.ts    # Portfolio data configuration
│
├── public/                 # Static assets (images, fonts, etc.)
│
├── App.tsx                 # Main application component
├── index.tsx               # Application entry point
├── types.ts                # TypeScript type definitions
│
├── vite.config.ts          # Vite build configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
│
├── .env                    # Environment variables (not committed)
├── .gitignore              # Git ignore rules
└── README.md               # Project documentation
```

### Making Changes

#### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

#### 2. Make Your Changes

Edit the relevant files:

**Updating Content:**
- Edit `data/portfolioData.ts` for content changes

**Component Changes:**
- Modify existing components in `components/`
- Create new components as needed

**Styling Changes:**
- Update inline styles in component files

**Type Changes:**
- Update `types.ts` for new TypeScript types

#### 3. Test Your Changes

The development server has Hot Module Replacement (HMR), so your changes will appear immediately in the browser.

**Manual Testing:**
- Test all interactive elements
- Check responsive design (resize browser)
- Test on different browsers
- Verify modal functionality
- Test chat feature (if using Gemini API)

#### 4. Build for Production

Test that your changes work in production mode:

```bash
npm run build
npm run preview
```

This creates an optimized build and previews it locally.

### Common Development Tasks

#### Adding a New Component

1. Create the component file:
   ```bash
   # In components/ directory
   touch components/NewComponent.tsx
   ```

2. Component template:
   ```typescript
   import React from 'react';
   
   interface NewComponentProps {
     title: string;
     // Add more props
   }
   
   const NewComponent: React.FC<NewComponentProps> = ({ title }) => {
     return (
       <div>
         <h2>{title}</h2>
       </div>
     );
   };
   
   export default NewComponent;
   ```

3. Import in `App.tsx`:
   ```typescript
   import NewComponent from './components/NewComponent';
   ```

#### Adding New Portfolio Data

Edit `data/portfolioData.ts`:

```typescript
// Add new data export
export const newSection = [
  {
    id: 1,
    title: "Item Title",
    description: "Item Description",
    // ... more fields
  },
  // ... more items
];
```

#### Updating Styles

Inline styles example:

```typescript
const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
  }
};

<div style={styles.container}>
  {/* Content */}
</div>
```

#### Adding New Modal Type

1. Update type definition in `App.tsx`:
   ```typescript
   type ModalType = 'existing' | 'newType' | null;
   ```

2. Add modal content handler:
   ```typescript
   const renderModalContent = () => {
     switch (modalType) {
       case 'newType':
         return <div>New modal content</div>;
       // ... other cases
     }
   };
   ```

## 🧪 Testing

### Manual Testing Checklist

Before submitting your changes, test:

- [ ] Development server starts without errors
- [ ] All pages/sections load correctly
- [ ] Interactive elements work (buttons, modals, chat)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No console errors in browser DevTools
- [ ] Production build completes successfully
- [ ] Production preview works correctly

### Browser Testing

Test in multiple browsers:
- Chrome/Chromium
- Firefox
- Safari (if on Mac)
- Edge

### Responsive Testing

Test at different screen sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## 🐛 Debugging

### Common Issues and Solutions

#### Issue: Cannot find module errors

**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Port already in use

**Solution:**
```bash
# Use a different port
npm run dev -- --port 3000
```

#### Issue: TypeScript errors

**Solution:**
```bash
# Check TypeScript errors
npx tsc --noEmit

# Clear TypeScript cache
rm -rf node_modules/.vite
```

#### Issue: Environment variables not loading

**Solution:**
- Ensure `.env` file is in root directory
- Variable name must start with `VITE_` or be `GEMINI_API_KEY`
- Restart dev server after changing `.env`

### Using Browser DevTools

**Chrome DevTools:**
1. Right-click → Inspect Element
2. Console tab - View JavaScript errors
3. Network tab - Monitor API requests
4. React DevTools - Inspect component hierarchy

**Debugging Tips:**
- Add `console.log()` statements to track data flow
- Use `debugger;` statement to pause execution
- Check Network tab for failed API calls
- Use React DevTools to inspect component state

## 📦 Build Process

### Development Build

```bash
npm run dev
```

**Features:**
- Fast startup time
- Hot Module Replacement (HMR)
- Source maps for debugging
- Detailed error messages

### Production Build

```bash
npm run build
```

**What happens:**
1. TypeScript compilation
2. Code minification
3. Tree shaking (removes unused code)
4. Asset optimization
5. Creates optimized bundle in `dist/`

**Output:**
```
dist/
├── assets/
│   ├── index-[hash].js    # Minified JavaScript
│   └── [other assets]
└── index.html
```

### Preview Production Build

```bash
npm run preview
```

Tests the production build locally before deployment.

## 🔍 Code Quality

### TypeScript Type Checking

```bash
# Check types without building
npx tsc --noEmit
```

**Best Practices:**
- Define interfaces for all props
- Use proper types, avoid `any`
- Enable strict mode in `tsconfig.json`

### Code Style

Follow these conventions:

**File Naming:**
- Components: PascalCase (e.g., `BentoCard.tsx`)
- Utilities: camelCase (e.g., `helpers.ts`)
- Types: PascalCase (e.g., `types.ts`)

**Component Structure:**
```typescript
// 1. Imports
import React from 'react';

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Component
const Component: React.FC<ComponentProps> = (props) => {
  // 4. State and hooks
  const [state, setState] = useState();
  
  // 5. Functions
  const handleClick = () => {};
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 7. Export
export default Component;
```

**Naming Conventions:**
- Components: PascalCase
- Functions: camelCase
- Constants: UPPER_SNAKE_CASE
- Props: camelCase

## 🚀 Deployment

### Preparing for Deployment

1. **Test production build:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check build size:**
   ```bash
   du -sh dist/
   ```

3. **Verify environment variables:**
   - Ensure production API keys are set
   - Check deployment platform environment config

### Deployment Platforms

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Configuration:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: Add `GEMINI_API_KEY`

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

#### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run build
npm run deploy
```

## 🤝 Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed contribution guidelines.

**Quick Steps:**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📚 Additional Resources

### Documentation
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vite Guide](https://vitejs.dev/guide/)
- [Google Generative AI Docs](https://ai.google.dev/docs)

### Tools
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Learning Resources
- [React Tutorial](https://react.dev/learn)
- [TypeScript for React Developers](https://www.typescriptlang.org/docs/handbook/react.html)
- [Modern JavaScript](https://javascript.info/)

## 🆘 Getting Help

If you encounter issues:

1. Check the [FAQ](./README.md#faq) in documentation
2. Search existing [GitHub Issues](https://github.com/jea022/PortfolioJea/issues)
3. Ask in [Discussions](https://github.com/jea022/PortfolioJea/discussions)
4. Create a new issue with details

---

**Last Updated:** 2026-02-01

**Happy Coding! 🎉**
