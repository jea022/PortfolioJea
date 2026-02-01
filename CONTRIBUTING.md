# Contributing to PortfolioJea

Thank you for your interest in contributing to PortfolioJea! We welcome contributions from the community and are pleased to have you here.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [How to Contribute](#how-to-contribute)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing Guidelines](#testing-guidelines)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Prerequisites

- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Git
- A Gemini API key (for chat feature development)

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/PortfolioJea.git
   cd PortfolioJea
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/jea022/PortfolioJea.git
   ```

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Create a `.env` file:**
   ```bash
   echo "GEMINI_API_KEY=your_api_key_here" > .env
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

See the [Development Guide](docs/development.md) for more detailed instructions.

## Development Process

### Branch Model

We use a simplified Git Flow model:

- `main` - Production-ready code
- `develop` - Integration branch for features (if applicable)
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `hotfix/*` - Emergency fixes for production

### Workflow

1. **Sync your fork:**
   ```bash
   git checkout main
   git fetch upstream
   git merge upstream/main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit regularly

4. **Keep your branch up to date:**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, Node version, browser, etc.)
- Any error messages or console output

Use our [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md).

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- A clear and descriptive title
- A detailed description of the proposed feature
- Why this enhancement would be useful
- Possible implementation approach (optional)
- Examples from other projects (if applicable)

Use our [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md).

### Code Contributions

1. **Choose an issue** to work on, or create one
2. **Comment on the issue** to let others know you're working on it
3. **Follow the development process** outlined above
4. **Write meaningful commit messages** (see guidelines below)
5. **Submit a pull request** when ready

#### Good First Issues

Look for issues labeled `good first issue` - these are great for newcomers!

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for clear and consistent commit messages.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring (no feature or bug fix)
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependencies updates
- `ci:` - CI/CD changes
- `build:` - Build system changes

### Examples

```bash
# Feature
feat(components): add dark mode toggle to navbar

# Bug fix
fix(chat): resolve API key loading issue in production

# Documentation
docs(readme): update installation instructions

# Refactoring
refactor(modal): simplify modal state management

# Multiple files
feat: add new portfolio section
- Add experience timeline component
- Update portfolio data structure
- Add styling for timeline
```

### Subject Line Rules

- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter
- No period at the end
- Limit to 50 characters
- Be specific and descriptive

### Body (Optional)

- Explain **what** and **why**, not **how**
- Wrap at 72 characters
- Separate from subject with blank line

### Footer (Optional)

- Reference issues: `Closes #123`, `Fixes #456`
- Breaking changes: `BREAKING CHANGE: description`

## Pull Request Process

### Before Submitting

**Checklist:**
- [ ] Code follows project style guidelines
- [ ] Self-reviewed your own code
- [ ] Commented code in complex areas
- [ ] Updated documentation if needed
- [ ] Changes generate no new warnings
- [ ] Tested in multiple browsers (Chrome, Firefox, Safari)
- [ ] Tested responsive design on different screen sizes
- [ ] Production build works (`npm run build && npm run preview`)
- [ ] No console errors or warnings
- [ ] Branch is up to date with main

### PR Title

Use the same format as commit messages:
```
feat(component): add new feature
fix(chat): resolve connection issue
```

### PR Description

Use our [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md) which includes:

1. **Description:** What changes does this PR introduce?
2. **Motivation:** Why is this change needed?
3. **Related Issues:** Link to related issues
4. **Type of Change:** Feature, bug fix, documentation, etc.
5. **Testing:** How has this been tested?
6. **Screenshots:** For UI changes
7. **Checklist:** Confirmation of requirements

### Review Process

1. **Automated checks** must pass (if configured)
2. **At least one maintainer** must approve
3. **Address feedback** from reviewers
4. **Keep PR focused** - one feature/fix per PR
5. **Be responsive** to review comments

### After Approval

- Maintainers will merge your PR
- Your contribution will be included in the next release
- You'll be added to the contributors list

## Code Style Guidelines

### TypeScript / JavaScript

- Use TypeScript for all new code
- Define interfaces for props and state
- Avoid `any` type - use proper types
- Use meaningful variable names
- Keep functions small and focused
- Add JSDoc comments for complex logic

**Example:**
```typescript
/**
 * Handles opening a modal with specific content
 * @param type - The type of modal to open
 */
const openModal = (type: ModalType): void => {
  setModalType(type);
};
```

### React Components

- Use functional components with hooks
- Extract reusable logic into custom hooks
- Keep components focused on one responsibility
- Use proper prop types with interfaces
- Organize imports: React → Third-party → Local

**Component Structure:**
```typescript
import React, { useState, useEffect } from 'react';

interface ComponentProps {
  title: string;
  onAction: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
  const [state, setState] = useState<string>('');
  
  useEffect(() => {
    // Effect logic
  }, []);
  
  const handleClick = (): void => {
    onAction();
  };
  
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Component;
```

### File Organization

```
ComponentName.tsx
├── Imports (React, then libraries, then local)
├── Type definitions / Interfaces
├── Component definition
├── Styles (if inline)
└── Export
```

### Naming Conventions

- **Components:** PascalCase (`BentoCard.tsx`)
- **Functions:** camelCase (`handleClick`)
- **Constants:** UPPER_SNAKE_CASE (`API_URL`)
- **Interfaces:** PascalCase with 'I' prefix optional (`IComponentProps` or `ComponentProps`)
- **Files:** Match component name or use kebab-case for utilities

### Comments

- Write self-documenting code first
- Add comments for complex logic
- Keep comments up to date with code changes
- Use JSDoc for public APIs

```typescript
// Good: Explains why, not what
// Using setTimeout to debounce rapid clicks
setTimeout(handleClick, 300);

// Avoid: Explains obvious code
// Set the count to 0
setCount(0);
```

## Testing Guidelines

<!-- TODO: Update when testing framework is implemented -->

### Manual Testing

Currently, the project relies on manual testing. Before submitting a PR:

1. **Functionality Testing:**
   - Test all modified features
   - Test edge cases
   - Test error scenarios

2. **Cross-Browser Testing:**
   - Chrome/Chromium
   - Firefox
   - Safari (if available)
   - Edge

3. **Responsive Testing:**
   - Mobile (375px, 414px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1920px+)

4. **Performance Testing:**
   - Check build size
   - Test on slower connections
   - Monitor console for warnings

### Future Testing

When automated testing is implemented, ensure:
- Write tests for new features
- Update tests for modified code
- All tests pass before submitting PR
- Aim for >80% code coverage

## Issue Reporting Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check documentation** for solutions
3. **Verify** the issue with latest version
4. **Prepare** reproduction steps

### Issue Content

Include:
- Clear, descriptive title
- Detailed description
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots/GIFs if applicable
- Possible solutions (if any)

### Issue Labels

Maintainers will add appropriate labels:
- `bug` - Something isn't working
- `enhancement` - New feature request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `wontfix` - Won't be worked on

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes
- Project README (major contributions)

## Questions?

- Check [Documentation](docs/README.md)
- Ask in [GitHub Discussions](https://github.com/jea022/PortfolioJea/discussions)
- Review existing [Issues](https://github.com/jea022/PortfolioJea/issues)

---

## Thank You! 🎉

Your contributions make this project better for everyone. We appreciate your time and effort!

**Happy Contributing!**
