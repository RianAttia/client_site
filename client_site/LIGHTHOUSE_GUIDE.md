# Lighthouse Setup Guide

Lighthouse has been successfully installed to help you audit your website's formatting, performance, accessibility, SEO, and best practices.

## Quick Start

### 1. Start the development server (if not already running)
```bash
cd client_site
python3 server.py
```
The server will run on `http://localhost:8000`

### 2. Run Lighthouse

In a new terminal, navigate to the client_site directory and choose one of these commands:

#### View the report in your browser immediately:
```bash
npm run lighthouse
```

#### Generate an HTML report (saved as `lighthouse-report.html`):
```bash
npm run lighthouse:report
```

#### Generate a JSON report (saved as `lighthouse-report.json`):
```bash
npm run lighthouse:json
```

## What Lighthouse Checks

Lighthouse audits your website in these categories:

- **Performance**: Page load speed, rendering efficiency, and optimization
- **Accessibility**: WCAG compliance and screen reader compatibility
- **Best Practices**: Security, browser compatibility, and web standards
- **SEO**: Meta tags, structured data, and search engine optimization
- **PWA**: Progressive Web App readiness

## Understanding the Results

Each category receives a score from 0-100:
- **90-100**: Green (Good)
- **50-89**: Yellow (Needs Improvement)
- **0-49**: Red (Poor)

## Tips for Improvement

1. **Performance**: Minimize unused CSS/JS, optimize images, enable compression
2. **Accessibility**: Add proper ARIA labels, ensure color contrast, use semantic HTML
3. **SEO**: Verify meta descriptions, structured data, mobile-friendliness
4. **Best Practices**: Use HTTPS, avoid deprecated APIs, add security headers

## Running Multiple Times

You can run Lighthouse multiple times as you make improvements. Each time you run a report command, it will overwrite the previous report file.

## Troubleshooting

If you get a connection error, make sure:
1. Your Python server is still running on port 8000
2. You haven't opened the same report file in another browser tab while trying to generate a new one
3. Lighthouse has time to fully audit the page (may take 30-60 seconds)
