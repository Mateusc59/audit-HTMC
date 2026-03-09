# Audit Generator HTMC - Vercel Deployment

## Structure
```
audit-vercel/
├── public/           # Static files (HTML, CSS, JS)
├── api/             # Serverless functions (Python)
│   └── generate-pdf.py
├── vercel.json      # Vercel configuration
└── requirements.txt # Python dependencies
```

## Deploy to Vercel

1. Create account on vercel.com
2. Install Vercel CLI: `npm i -g vercel`
3. Run: `vercel`
4. Follow prompts
5. Done!

Or connect GitHub repo and auto-deploy.

## How it works

- Static files served from `/public`
- PDF generation via `/api/generate-pdf` serverless function
- Uses Playwright + Chromium for perfect HTML→PDF conversion