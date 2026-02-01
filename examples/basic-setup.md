# Basic Setup Example

This guide will walk you through setting up PortfolioJea from scratch to a working local development environment.

## 📋 Overview

In this example, you will:
1. Clone the repository
2. Install dependencies
3. Configure environment variables
4. Run the development server
5. Make your first customization
6. Build for production

**Time Required**: ~15 minutes  
**Difficulty**: Beginner

## ✅ Prerequisites

Before you begin, make sure you have:

- **Node.js** v18.0.0 or higher installed
  - Check: `node --version`
  - Download: [nodejs.org](https://nodejs.org/)

- **npm** v9.0.0 or higher (comes with Node.js)
  - Check: `npm --version`

- **Git** installed
  - Check: `git --version`
  - Download: [git-scm.com](https://git-scm.com/)

- **A Gemini API Key** (free tier available)
  - Get yours at: [Google AI Studio](https://ai.google.dev/)

- **A code editor** (VS Code recommended)
  - Download: [code.visualstudio.com](https://code.visualstudio.com/)

## 🚀 Step-by-Step Instructions

### Step 1: Clone the Repository

Open your terminal and run:

```bash
# Navigate to where you want to store the project
cd ~/projects  # Or your preferred location

# Clone the repository
git clone https://github.com/jea022/PortfolioJea.git

# Navigate into the project directory
cd PortfolioJea
```

**Expected Output:**
```
Cloning into 'PortfolioJea'...
remote: Enumerating objects: 100, done.
remote: Counting objects: 100% (100/100), done.
remote: Compressing objects: 100% (80/80), done.
remote: Total 100 (delta 20), reused 100 (delta 20)
Receiving objects: 100% (100/100), done.
Resolving deltas: 100% (20/20), done.
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

**Expected Output:**
```
added 150 packages, and audited 151 packages in 15s

30 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

**What's Installed:**
- React & React DOM (UI framework)
- TypeScript (type safety)
- Vite (build tool)
- Google Generative AI SDK (chat feature)
- Lucide React (icons)

**Troubleshooting:**
- If you get permission errors, don't use `sudo`
- If installation fails, delete `node_modules` and try again
- Check your internet connection

### Step 3: Configure Environment Variables

Create a `.env` file in the project root:

```bash
# Create the .env file
touch .env

# Or on Windows
# type nul > .env
```

Open `.env` in your code editor and add your Gemini API key:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

**How to Get a Gemini API Key:**

1. Visit [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Click "Get API Key" or "Create API Key"
4. Copy the generated key
5. Paste it in your `.env` file

**Example `.env` file:**
```env
GEMINI_API_KEY=AIzaSyDkj3h5kjh3kjh3kjh3kjh3kjh3kjh3kjh
```

⚠️ **Important Security Notes:**
- Never commit your `.env` file to Git
- Don't share your API key publicly
- The `.env` file is already in `.gitignore`

### Step 4: Start the Development Server

Run the development server:

```bash
npm run dev
```

**Expected Output:**
```
  VITE v6.2.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open your browser and navigate to: **http://localhost:5173**

🎉 **Success!** You should see the portfolio website running.

**Features to Test:**
- Click on different cards to open modals
- Try the AI chat feature (click the chat icon)
- Resize your browser to see responsive design
- Check the navigation and footer

**Development Server Features:**
- **Hot Module Replacement (HMR)**: Changes appear instantly
- **Fast Refresh**: Component state is preserved
- **Error Overlay**: Shows errors directly in browser
- **TypeScript Checking**: Type errors shown in terminal

### Step 5: Make Your First Customization

Let's customize the personal information to make it yours!

**Edit the Portfolio Data:**

1. Open `data/portfolioData.ts` in your code editor

2. Find the `personalInfo` export (around line 10):

```typescript
export const personalInfo = {
  name: "Your Name",  // Change this
  title: "Your Title",  // Change this
  location: "Your Location",  // Change this
  // ... more fields
};
```

3. Update with your information:

```typescript
export const personalInfo = {
  name: "Jane Doe",
  title: "Full Stack Developer",
  location: "San Francisco, CA",
  email: "jane@example.com",
  phone: "+1 (555) 123-4567",
  // ... other fields
};
```

4. **Save the file** (Ctrl+S or Cmd+S)

5. **Watch the browser** - it should update automatically!

✨ **That's it!** Your changes are live.

### Step 6: Build for Production

When you're ready to deploy, create a production build:

```bash
# Build the project
npm run build
```

**Expected Output:**
```
vite v6.2.0 building for production...
✓ 150 modules transformed.
dist/index.html                   1.20 kB │ gzip:  0.60 kB
dist/assets/index-abc123.js     150.30 kB │ gzip: 50.00 kB
✓ built in 2.50s
```

**Preview the Production Build:**

```bash
npm run preview
```

Open: **http://localhost:4173**

The production build is:
- Optimized and minified
- Smaller file sizes
- Faster loading
- Ready for deployment

**Build Output Location:**
```
dist/
├── assets/
│   ├── index-[hash].js      # Optimized JavaScript
│   └── [other assets]
├── index.html               # Entry HTML file
└── [other files]
```

## 🎓 What You've Learned

- ✅ How to clone and set up the project
- ✅ How to install dependencies
- ✅ How to configure environment variables
- ✅ How to run the development server
- ✅ How to customize portfolio data
- ✅ How to build for production

## 🔍 Exploring Further

### Project Structure

```
PortfolioJea/
├── components/          # React components
│   ├── BentoCard.tsx   # Reusable card component
│   ├── Footer.tsx      # Footer with links
│   ├── Modal.tsx       # Modal dialog
│   └── Navbar.tsx      # Navigation bar
├── data/               # Your content
│   └── portfolioData.ts # Edit this to customize!
├── public/             # Static assets
├── docs/               # Documentation
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── package.json        # Project configuration
```

### Key Files to Customize

1. **data/portfolioData.ts** - Your content (name, projects, etc.)
2. **public/** - Your images and assets
3. **components/** - UI components (advanced)
4. **.env** - Environment variables (API keys)

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npx tsc --noEmit
```

## 🐛 Troubleshooting

### Issue: Port 5173 already in use

**Solution:**
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: API key not working

**Solutions:**
1. Check the API key is correct (no extra spaces)
2. Verify variable name is `GEMINI_API_KEY`
3. Restart the dev server after adding the key
4. Check the key has proper permissions in Google AI Studio

### Issue: Node modules error

**Solution:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build fails

**Solutions:**
1. Check for TypeScript errors: `npx tsc --noEmit`
2. Clear Vite cache: `rm -rf node_modules/.vite`
3. Update dependencies: `npm update`

### Issue: Changes not appearing

**Solutions:**
1. Make sure the dev server is running
2. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check for JavaScript errors in browser console
4. Restart the dev server

## 📚 Next Steps

Now that you have a working setup, explore:

1. **Customize Your Portfolio**
   - Add your projects to `projects` array
   - Add your credentials to `credentials` array
   - Update social links in `socialLinks`
   - Add your services to `services` array

2. **Learn the Architecture**
   - Read [Architecture Guide](../docs/architecture.md)
   - Understand component structure
   - Learn about data flow

3. **Explore Components**
   - Open `components/BentoCard.tsx`
   - Check out `components/Modal.tsx`
   - Study the styling approach

4. **Deploy Your Portfolio**
   - Choose a platform (Vercel, Netlify, GitHub Pages)
   - Set up continuous deployment
   - Configure custom domain

5. **Advanced Customization**
   - Add new components
   - Modify the layout
   - Implement new features
   - Add routing (optional)

## 📖 Helpful Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Google Generative AI Docs](https://ai.google.dev/docs)

## 💬 Getting Help

Stuck? Here's how to get help:

1. Check the [FAQ](../docs/README.md#faq)
2. Search [GitHub Issues](https://github.com/jea022/PortfolioJea/issues)
3. Ask in [Discussions](https://github.com/jea022/PortfolioJea/discussions)
4. Create a new issue with the `question` label

## 🤝 Contributing

Found an issue with this guide? Want to improve it?

1. Fork the repository
2. Edit this file
3. Submit a pull request

---

**Congratulations!** 🎉 You've successfully set up PortfolioJea!

**Next**: Customize the portfolio data to make it truly yours. Happy coding! 💻
