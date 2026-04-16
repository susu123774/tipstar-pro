# TipStar Pro — Deployment Guide

## Quick Start

Open `index.html` in any browser to preview locally.

## Deploy to Free Hosting (5 minutes)

### Option A: Netlify (Recommended — Easiest)
1. Go to **netlify.com** → Sign up (use GitHub or email)
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag the entire `tipstar-pro` folder into the browser window
4. Done! You get a free URL like `random-name-123.netlify.app`
5. (Optional) Buy a domain (e.g. from Namecheap ~$12/yr) and connect it in Netlify dashboard

### Option B: Cloudflare Pages
1. Go to **pages.cloudflare.com** → Sign in
2. Create a project → Upload this folder
3. Gets a free `.pages.dev` URL

### Option C: GitHub Pages (Free)
1. Create a GitHub account at **github.com**
2. Create a new repository named `tipstar-pro`
3. Upload all files from this folder
4. Go to Settings → Pages → Select "main" branch → Save
5. Your site will be live at `yourusername.github.io/tipstar-pro`

## What to Customize Before Launch

### 1. Payment Links (REQUIRED)
Search and replace these placeholder values in `index.html`:

| Find | Replace With |
|------|-------------|
| `onclick="alert('Gumroad payment link...'` | Your Gumroad product URL |
| `onclick="confirmPayment('paypal')"` | Actual PayPal payment link |
| `onclick="confirmPayment('gumroad')"` | Your Gumroad product link |

### 2. Discord Links
Find all `href="#"` that say "Join Discord" and replace `#` with your Discord invite URL.

### 3. Site Title & Branding
```javascript
// In the <title> tag:
<title>TipStar Pro — Live Scores & Expert Predictions</title>

// In the nav logo:
<a href="#" class="nav-logo">⚡ Tip<span>Star</span> Pro</a>
```

### 4. Domain Name
After deploying, buy a domain (~$12/year on Namecheap) and:
- **Netlify**: Dashboard → Domain management → Add custom domain
- **Cloudflare Pages**: Settings → Custom domains → Add
- **GitHub Pages**: Settings → Pages → Custom domain

## Backend Options (for real data)

The current version uses JavaScript arrays for demo data.
For a production site with real data persistence:

### Option 1: PocketBase (Free, Self-hosted)
- Download from pocketbase.io
- Run locally, create an "analysts" and "posts" collection
- Update the JS to use PocketBase API calls
- Deploy PocketBase to a VPS ($5/month on DigitalOcean)

### Option 2: Supabase (Free tier available)
- supabase.com — Firebase alternative
- Create tables for analysts, posts, payments
- Use Supabase JS client in the frontend

### Option 3: WordPress + Plugin (Easiest for non-coders)
- Install WordPress on your hosting
- Use a membership plugin like "Paid Memberships Pro"
- Import this HTML as a custom landing page

### Option 4: Firebase (Free tier)
- firebase.google.com
- Create a Realtime Database
- Use Firebase SDK in the frontend

## Adding Payment (Real Implementation)

### Gumroad (Recommended — Easiest)
1. Go to gumroad.com → Create account
2. Create a product for each analyst tier ($5-50)
3. Get the product URL (e.g. `gumroad.com/l/yourproduct`)
4. Replace `confirmPayment()` with:
```javascript
function confirmPayment(method) {
  window.open('YOUR_GUMROAD_URL', '_blank');
  // After user returns, check URL for purchase confirmation
}
```

### PayPal
1. Create a PayPal Business account
2. Create payment links via PayPal.me or PayPal buttons
3. Replace placeholders with your PayPal payment URLs

### Stripe (More complex but professional)
1. Create Stripe account at stripe.com
2. Use Stripe Payment Links (no coding required)
3. Create payment links from Stripe Dashboard
4. Replace placeholders with Stripe Payment Link URLs

## Legal Checklist (Before Launch)

- [ ] Add Terms of Service page
- [ ] Add Privacy Policy page
- [ ] Verify age restriction (18+) is enforced
- [ ] Add proper disclaimer on all prediction pages
- [ ] Ensure payment provider (Stripe/PayPal) has proper compliance
- [ ] Check laws in your target country regarding sports tipping services

## Support

For template customization, contact the developer.
