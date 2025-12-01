# Deployment Guide

Complete guide to deploying your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is made by the creators of Next.js and provides the best experience.

### Method 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch auto-deploys
   - Pull requests get preview URLs
   - Zero configuration needed!

### Method 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd webportfolio
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (If Needed)
- Go to Project Settings → Environment Variables
- Add any API keys or secrets
- Redeploy for changes to take effect

---

## 🟦 Netlify

Great alternative with similar features.

### Deploy via Drag & Drop

1. **Build your site:**
   ```bash
   pnpm build
   ```

2. **Deploy:**
   - Visit [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area
   - Wait for deployment to complete

### Deploy via Git

1. **Push to GitHub** (same as Vercel method)

2. **Connect to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build settings:
     ```
     Build command: pnpm build
     Publish directory: .next
     ```
   - Click "Deploy site"

---

## 🐙 GitHub Pages

**Note:** GitHub Pages requires additional configuration for Next.js.

### Using Static Export

1. **Update `next.config.ts`:**
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and export:**
   ```bash
   pnpm build
   ```

3. **Deploy:**
   - Enable GitHub Pages in repo settings
   - Choose `gh-pages` branch
   - Use GitHub Actions or push to `gh-pages` branch

---

## 🌊 DigitalOcean App Platform

1. **Connect repository:**
   - Visit [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
   - Create new app from GitHub
   - Select your repository

2. **Configure:**
   ```
   Build command: pnpm build
   Run command: pnpm start
   Port: 3000
   ```

3. **Deploy:**
   - Click "Create Resources"
   - Wait for deployment

---

## 🔷 Azure Static Web Apps

1. **Install Azure CLI:**
   ```bash
   npm install -g @azure/static-web-apps-cli
   ```

2. **Deploy:**
   ```bash
   swa deploy
   ```

3. **Configure in Azure Portal:**
   - Set build configuration
   - Connect to GitHub for CI/CD

---

## 🐳 Docker Deployment

### Create Dockerfile

Already included in the project (if not, create):

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000

CMD ["node", "server.js"]
```

### Build and Run

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio
```

### Deploy to Docker Hub

```bash
docker tag portfolio your-username/portfolio
docker push your-username/portfolio
```

---

## 🔧 Custom Server (VPS)

### Requirements
- Node.js 18+
- PM2 or similar process manager
- Nginx (optional, for reverse proxy)

### Setup

1. **Clone and install:**
   ```bash
   git clone YOUR_REPO_URL
   cd webportfolio
   pnpm install
   pnpm build
   ```

2. **Start with PM2:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx (optional):**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **Enable HTTPS with Certbot:**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

---

## 🎯 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] All placeholder images are replaced
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] All projects have proper images
- [ ] Build completes successfully: `pnpm build`
- [ ] No console errors in production build
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Lighthouse score is good (90+)
- [ ] All links are working
- [ ] 404 page works correctly
- [ ] Metadata (SEO) is optimized

---

## 🔍 Testing Production Build Locally

Before deploying, test the production build:

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Visit http://localhost:3000
```

Check:
- All animations work
- Images load properly
- Navigation works smoothly
- Project pages load correctly
- Mobile responsiveness
- Performance (use Lighthouse in Chrome DevTools)

---

## 📊 Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Create `src/components/Analytics.tsx`:
   ```tsx
   import Script from 'next/script';

   export function Analytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'GA_MEASUREMENT_ID');
           `}
         </Script>
       </>
     );
   }
   ```

3. Add to `src/app/layout.tsx`:
   ```tsx
   import { Analytics } from '@/components/Analytics';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### Performance Monitoring

- Use [Vercel Analytics](https://vercel.com/analytics)
- Use [web.dev/measure](https://web.dev/measure) for Lighthouse scores
- Monitor Core Web Vitals

---

## 🐛 Troubleshooting Deployment

### Build fails on deployment platform

1. Check Node.js version matches locally
2. Ensure all dependencies are in `package.json`
3. Check build logs for specific errors
4. Try building locally first: `pnpm build`

### Images not loading

1. Check image paths start with `/`
2. Verify images are in `public` folder
3. For external images, add to `next.config.ts`:
   ```typescript
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'your-image-host.com',
       },
     ],
   },
   ```

### 404 on project pages

1. Ensure `generateStaticParams` is working
2. Check project IDs match URLs
3. Verify build output includes project pages

### Styles not working

1. Check Tailwind CSS is building
2. Verify `postcss.config.mjs` is present
3. Check `globals.css` is imported in layout

---

## 📱 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for SSL certificate (automatic)

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Follow DNS instructions
4. SSL is automatic

### DigitalOcean
1. Go to Settings → Domains
2. Add your domain
3. Update nameservers or DNS records
4. SSL via Let's Encrypt

---

## 🎉 Post-Deployment

After successful deployment:

1. **Test thoroughly:**
   - All pages load
   - All links work
   - Forms submit correctly
   - Mobile works perfectly

2. **Share your portfolio:**
   - Update LinkedIn
   - Share on Twitter
   - Add to GitHub profile
   - Include in resume

3. **Monitor:**
   - Check analytics
   - Monitor performance
   - Watch for errors

4. **Maintain:**
   - Keep projects updated
   - Add new work regularly
   - Update dependencies monthly

---

Need help? Check the [README.md](README.md) or [QUICKSTART.md](QUICKSTART.md)


