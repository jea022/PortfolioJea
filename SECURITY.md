# Security Policy

## Reporting a Vulnerability

The PortfolioJea team takes security issues seriously. We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them using one of the following methods:

1. **GitHub Security Advisories** (Preferred)
   - Go to the [Security tab](https://github.com/jea022/PortfolioJea/security/advisories) of this repository
   - Click "Report a vulnerability"
   - Fill out the form with details

2. **Private Disclosure**
   - Email the maintainer directly (check profile for contact information)
   - Include "SECURITY" in the subject line

### What to Include in Your Report

Please include as much of the following information as possible:

- **Type of vulnerability** (e.g., XSS, SQL injection, authentication bypass)
- **Location of the affected source code** (file path, line numbers, or commit)
- **Step-by-step instructions to reproduce the issue**
- **Proof of concept or exploit code** (if possible)
- **Impact of the vulnerability** (what an attacker could do)
- **Suggested fix** (if you have one)
- **Your name/handle** (for credit in the security advisory)

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt within 48 hours
- **Communication**: We'll keep you informed about the progress
- **Timeline**: We aim to address critical vulnerabilities within 7 days
- **Credit**: You'll be credited in the security advisory (if you wish)
- **Disclosure**: We'll coordinate disclosure timing with you

### Security Update Process

1. **Triage**: We'll verify and assess the severity of the report
2. **Fix Development**: We'll develop a fix in a private branch
3. **Testing**: We'll thoroughly test the fix
4. **Release**: We'll release a patched version
5. **Advisory**: We'll publish a security advisory
6. **Credit**: We'll credit the reporter (unless they prefer to remain anonymous)

## Supported Versions

We release patches for security vulnerabilities in the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

**Note**: As this is a portfolio template project, we recommend always using the latest version.

## Security Best Practices for Users

### API Key Management

**Critical**: Never commit your Gemini API key to version control!

✅ **Do:**
- Store API keys in `.env` files
- Add `.env` to `.gitignore`
- Use different API keys for development and production
- Rotate API keys periodically
- Revoke unused API keys

❌ **Don't:**
- Commit `.env` files to Git
- Share API keys publicly
- Use production keys in development
- Hardcode API keys in source code

### Deployment Security

When deploying your portfolio:

1. **Environment Variables**
   - Use platform-specific environment variable management
   - Never expose API keys in client-side code
   - Consider using a backend proxy for API calls in production

2. **HTTPS**
   - Always use HTTPS in production
   - Enable HSTS headers
   - Use secure cookies if implementing authentication

3. **Content Security Policy**
   - Implement CSP headers
   - Restrict external resource loading
   - Prevent inline script execution where possible

4. **Dependencies**
   - Regularly update dependencies
   - Run `npm audit` to check for vulnerabilities
   - Use `npm audit fix` to automatically fix issues

### Code Security Practices

If you're extending this project:

1. **Input Validation**
   - Sanitize all user inputs
   - Validate data before processing
   - Use proper encoding when rendering user content

2. **XSS Prevention**
   - Avoid `dangerouslySetInnerHTML` in React
   - Escape user-generated content
   - Use Content Security Policy headers

3. **API Security**
   - Implement rate limiting for API calls
   - Use proper authentication and authorization
   - Validate API responses

4. **Data Privacy**
   - Don't log sensitive information
   - Implement proper data encryption
   - Follow GDPR/privacy regulations if collecting user data

## Known Security Considerations

### Current Architecture

This project is a client-side React application with:

- ✅ No backend server (reduced attack surface)
- ✅ No user authentication (no credential theft risk)
- ✅ No database (no SQL injection risk)
- ⚠️ Client-side API key usage (requires careful handling)
- ⚠️ Third-party API integration (Google Gemini)

### Third-Party Dependencies

We use the following third-party libraries:

- **React**: Actively maintained with security updates
- **Vite**: Modern build tool with security focus
- **Google Generative AI SDK**: Official Google library
- **Lucide React**: Icon library with no security concerns

**Recommendation**: Run `npm audit` regularly to check for vulnerabilities.

## Security Checklist for Contributors

Before submitting code:

- [ ] No hardcoded secrets or API keys
- [ ] No sensitive data in console logs
- [ ] Input validation for user-provided data
- [ ] Proper error handling (no sensitive info in errors)
- [ ] Dependencies are up to date
- [ ] `npm audit` shows no high/critical vulnerabilities
- [ ] No use of `eval()` or similar dangerous functions
- [ ] No `dangerouslySetInnerHTML` without sanitization

## Security Resources

### Tools

- **npm audit**: Check for known vulnerabilities
  ```bash
  npm audit
  npm audit fix
  ```

- **Snyk**: Advanced vulnerability scanning
  ```bash
  npm install -g snyk
  snyk test
  ```

### Learning Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/escape-hatches)
- [Google's Web Security Guidelines](https://developers.google.com/web/fundamentals/security)

## Vulnerability Disclosure Policy

We follow a coordinated vulnerability disclosure policy:

1. **Private Disclosure**: Report to us privately first
2. **Fix Development**: We develop and test a fix
3. **Patch Release**: We release a patched version
4. **Public Disclosure**: We publish a security advisory with details
5. **Credit**: We credit the reporter in the advisory

**Typical Timeline:**
- Critical vulnerabilities: 7 days
- High severity: 30 days  
- Medium/Low severity: 90 days

We kindly ask security researchers to:
- Give us reasonable time to fix issues before public disclosure
- Not exploit vulnerabilities beyond proof of concept
- Not access or modify other users' data
- Act in good faith toward our users and the project

## Questions?

If you have questions about:
- This security policy
- How to report a vulnerability
- Security best practices for this project

Please open a [GitHub Discussion](https://github.com/jea022/PortfolioJea/discussions) or contact the maintainers directly.

---

**Last Updated**: 2026-02-01

Thank you for helping keep PortfolioJea and its users safe! 🔒
