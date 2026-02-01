# Architecture Overview

This document provides a comprehensive overview of the PortfolioJea project architecture, including component structure, data flow, and design decisions.

## 📐 High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │              React Application                     │  │
│  │  ┌─────────────────────────────────────────────┐  │  │
│  │  │           App.tsx (Root)                    │  │  │
│  │  │  - State Management                         │  │  │
│  │  │  - Modal Logic                              │  │  │
│  │  │  - Chat Integration                         │  │  │
│  │  └─────────────────────────────────────────────┘  │  │
│  │         ↓             ↓              ↓             │  │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐        │  │
│  │  │ Navbar   │  │  Bento   │  │  Footer  │        │  │
│  │  │          │  │  Grid    │  │          │        │  │
│  │  └──────────┘  └──────────┘  └──────────┘        │  │
│  │                      ↓                             │  │
│  │              ┌──────────────┐                      │  │
│  │              │    Modal     │                      │  │
│  │              │   System     │                      │  │
│  │              └──────────────┘                      │  │
│  └───────────────────────────────────────────────────┘  │
│                         ↓                                │
│              External API (Google Gemini AI)             │
└─────────────────────────────────────────────────────────┘
```

## 🏗️ Project Structure

```
PortfolioJea/
├── App.tsx                 # Main application component
│   ├── State management
│   ├── Modal control
│   ├── Chat functionality
│   └── Layout composition
│
├── components/            # Reusable UI components
│   ├── BentoCard.tsx     # Grid card component
│   ├── Footer.tsx        # Footer with links
│   ├── Modal.tsx         # Modal dialog
│   └── Navbar.tsx        # Navigation bar
│
├── data/                 # Data layer
│   └── portfolioData.ts  # Content and configuration
│
├── public/               # Static assets
│   └── [images, fonts, etc.]
│
├── types.ts              # TypeScript type definitions
├── index.tsx             # Application entry point
└── vite.config.ts        # Build configuration
```

## 🔄 Data Flow

### Component Hierarchy

```
App (Root Component)
├── Navbar
├── Main Content Area
│   ├── Hero Section (Bento Grid)
│   │   ├── Profile Card (BentoCard)
│   │   ├── Stats Card (BentoCard)
│   │   ├── Credentials Card (BentoCard)
│   │   ├── Projects Card (BentoCard)
│   │   ├── Services Card (BentoCard)
│   │   └── Contact Card (BentoCard)
│   │
│   └── Chat Widget (Conditional)
│       └── Chat Interface
│
├── Modal System (Conditional)
│   └── Dynamic Content
│
└── Footer
```

### State Management Flow

```
1. User Interaction
   ↓
2. Event Handler (App.tsx)
   ↓
3. State Update (useState)
   ↓
4. Re-render Components
   ↓
5. UI Update
```

### Data Loading Flow

```
portfolioData.ts (Static Data)
   ↓
Import in App.tsx
   ↓
Props passed to Components
   ↓
Rendered in UI
```

## 🧩 Component Architecture

### App.tsx (Main Container)

**Responsibilities:**
- Application state management
- Modal state and content control
- Chat functionality integration
- Layout composition
- Event handling

**State Variables:**
```typescript
const [modalType, setModalType] = useState<ModalType>(null);
const [isChatOpen, setIsChatOpen] = useState(false);
const [chatMessages, setChatMessages] = useState<Message[]>([]);
const [isLoading, setIsLoading] = useState(false);
```

**Key Functions:**
- `openModal(type: ModalType)` - Opens modal with specific content
- `closeModal()` - Closes active modal
- `handleSendMessage()` - Sends chat message to Gemini API
- `toggleChat()` - Shows/hides chat widget

### BentoCard Component

**Purpose:** Reusable card component for the Bento Grid layout

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

**Features:**
- Flexible sizing
- Custom styling via className
- Click handlers for interactivity
- Icon support
- Custom content via children

### Modal Component

**Purpose:** Display detailed content in an overlay

**Props:**
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
```

**Features:**
- Backdrop overlay
- Close on outside click
- Escape key support
- Smooth animations
- Scrollable content area

### Navbar & Footer Components

**Purpose:** Navigation and branding

**Features:**
- Responsive design
- Social links
- Logo/branding
- Navigation menu

## 🎨 Styling Architecture

### Approach: Inline CSS with Utility Patterns

**Why Inline Styles:**
- No external CSS dependencies
- Component-scoped styles
- No build-time CSS processing needed
- Easy to understand and modify

**Pattern:**
```typescript
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '20px',
    // ... more styles
  }
};

<div style={styles.container}>
  {/* Content */}
</div>
```

### Responsive Design Strategy

**Breakpoints handled via:**
- CSS media queries in inline styles
- Conditional rendering based on screen size
- Flexible layouts (flexbox, grid)

## 🤖 AI Integration Architecture

### Google Generative AI (Gemini)

**Integration Points:**
1. API initialization in App.tsx
2. Environment variable for API key
3. Message handling and streaming
4. Error handling and fallbacks

**Flow:**
```
User Input
   ↓
handleSendMessage()
   ↓
Google Generative AI API
   ↓
Response Processing
   ↓
State Update (setChatMessages)
   ↓
UI Update (Chat Interface)
```

**Error Handling:**
- API key validation
- Network error handling
- Rate limit handling
- Graceful degradation

## 📦 Data Architecture

### Portfolio Data Structure

**File:** `data/portfolioData.ts`

**Exports:**
```typescript
export const personalInfo: PersonalInfo;
export const stats: Stat[];
export const credentials: Credential[];
export const services: Service[];
export const projects: Project[];
export const socialLinks: SocialLinks;
export const brandInfo: BrandInfo;
export const experience: Experience[];
export const softSkills: SoftSkill[];
export const conocimientos: Conocimiento[];
```

**Benefits:**
- Single source of truth
- Type safety via TypeScript
- Easy to update and maintain
- Separation of content from presentation

## 🔐 Security Considerations

### API Key Management

**Current Implementation:**
- API key stored in `.env` file
- Not committed to version control
- Loaded via import.meta.env

**Recommendations:**
- Never commit API keys to Git
- Use different keys for development and production
- Consider server-side API proxy for production
- Implement rate limiting

### Content Security

**Best Practices:**
- Validate user input in chat
- Sanitize data before rendering
- Avoid XSS vulnerabilities
- Use HTTPS in production

## 🚀 Performance Considerations

### Current Optimizations

1. **Code Splitting:** Vite handles automatic code splitting
2. **Asset Optimization:** Images and assets optimized during build
3. **Lazy Loading:** Modal content loaded on-demand
4. **React Optimization:** Proper use of hooks and state

### Future Improvements

<!-- TODO: These can be implemented by maintainers as needed -->

1. **Image Optimization:**
   - Use next-gen formats (WebP)
   - Implement lazy loading for images
   - Add responsive images

2. **Code Splitting:**
   - Dynamic imports for heavy components
   - Route-based code splitting (if routing added)

3. **Caching:**
   - Service worker for offline support
   - Cache API responses
   - Static asset caching

4. **Bundle Optimization:**
   - Tree shaking (already handled by Vite)
   - Minimize dependencies
   - Use production builds

## 🧪 Testing Strategy

<!-- TODO: Testing framework to be implemented -->

### Recommended Testing Approach

**Unit Tests:**
- Test individual components in isolation
- Test utility functions
- Test data transformations

**Integration Tests:**
- Test component interactions
- Test modal opening/closing
- Test chat functionality

**E2E Tests:**
- Test complete user flows
- Test responsive behavior
- Test cross-browser compatibility

**Tools:**
- Vitest for unit/integration tests
- React Testing Library for component tests
- Playwright for E2E tests

## 🔄 Build Process

### Development

```bash
npm run dev
```

**Process:**
1. Vite starts dev server
2. HMR (Hot Module Replacement) enabled
3. TypeScript type checking
4. Instant updates on file changes

### Production Build

```bash
npm run build
```

**Process:**
1. TypeScript compilation
2. Code optimization and minification
3. Asset optimization
4. Output to `dist/` directory

**Output Structure:**
```
dist/
├── assets/
│   ├── index-[hash].js      # Bundled JavaScript
│   ├── index-[hash].css     # Bundled CSS (if any)
│   └── [images]             # Optimized images
└── index.html               # Entry HTML file
```

## 📈 Scalability

### Current Architecture Scalability

**Good For:**
- Small to medium portfolios
- Single-page applications
- Personal websites
- Simple showcases

**Limitations:**
- No built-in routing (single page only)
- No state persistence (page refresh resets state)
- No backend integration (except Gemini API)
- Limited SEO optimization

### Scaling Recommendations

**For Larger Applications:**

1. **Add Routing:**
   - Install React Router
   - Create dedicated pages
   - Implement navigation

2. **State Management:**
   - Add Zustand or Redux for complex state
   - Implement state persistence
   - Add URL state synchronization

3. **Backend Integration:**
   - Create API layer
   - Implement authentication
   - Add database integration

4. **SEO Improvements:**
   - Server-side rendering (SSR)
   - Static site generation (SSG)
   - Meta tags and OpenGraph

## 🔌 Extension Points

### Adding New Features

**New Modal Type:**
```typescript
// 1. Add to ModalType union
type ModalType = 'existing' | 'newType' | null;

// 2. Add handler
const handleNewModal = () => setModalType('newType');

// 3. Add modal content in renderModalContent()
```

**New Bento Card:**
```typescript
// 1. Add data in portfolioData.ts
export const newSection = [ /* ... */ ];

// 2. Add card in App.tsx
<BentoCard
  title="New Section"
  onClick={() => openModal('newType')}
/>
```

**New Component:**
```typescript
// 1. Create component file
// components/NewComponent.tsx

// 2. Import in App.tsx
import NewComponent from './components/NewComponent';

// 3. Use in render
<NewComponent {...props} />
```

## 📝 Architectural Decisions

### Why Single-Page Application (SPA)?

**Pros:**
- Simpler architecture
- Faster page transitions
- No routing complexity
- Better for portfolio use case

**Cons:**
- Limited SEO (can be mitigated)
- No deep linking to sections
- Full page reload on navigation

### Why Inline Styles?

**Pros:**
- No CSS file management
- Component-scoped styles
- Easy to understand
- No build step for styles

**Cons:**
- Harder to reuse styles
- No CSS preprocessor features
- Larger JavaScript bundle

### Why Vite Over CRA?

**Pros:**
- Much faster build times
- Better developer experience
- Modern tooling
- Smaller bundle sizes

**Cons:**
- Less documentation
- Newer ecosystem

## 🔄 Future Architecture Considerations

<!-- TODO: For future maintainers to consider -->

### Potential Improvements

1. **Component Library:** Extract components to a reusable library
2. **Design System:** Implement consistent design tokens
3. **Accessibility:** Add ARIA labels and keyboard navigation
4. **Internationalization:** Add multi-language support
5. **Analytics:** Add page view and interaction tracking
6. **PWA:** Make it a Progressive Web App
7. **Dark Mode:** Add theme switching capability

---

**Last Updated:** 2026-02-01

**Maintainers:** Please update this document when making significant architectural changes.
