# 🚀 Deployment Guide - bogryashovDev

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Project Settings
   - Add your custom domain (e.g., bogryashov.dev)
   - Update DNS records as instructed

## Environment Variables

No environment variables required for basic deployment.

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Performance Optimization

The site is already optimized for:
- ✅ Static generation where possible
- ✅ Image optimization with Next.js Image
- ✅ CSS purging with Tailwind
- ✅ Code splitting
- ✅ SEO meta tags
- ✅ Accessibility compliance

## Customization Before Deploy

### 1. Update Contact Information
Edit `src/lib/copy.ts`:
```typescript
contact: {
  email: "your-email@domain.com",
  telegram: "Your Telegram Handle",
  // ...
}
```

### 2. Update Meta Information
Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  // ...
}
```

### 3. Add Real Project Images
Replace placeholder images in `public/images/` with actual project screenshots.

### 4. Update Project Data
Edit `src/lib/projects.ts` to add your real projects.

## Alternative Deployment Options

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

### Railway
1. Connect GitHub repository
2. Auto-detects Next.js
3. Deploys automatically

### Self-Hosted
1. Run `npm run build`
2. Upload `.next` folder to your server
3. Install Node.js and run `npm start`

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify contact forms work
- [ ] Check mobile responsiveness
- [ ] Test page speed with Lighthouse
- [ ] Verify SEO meta tags
- [ ] Test accessibility with screen reader
- [ ] Update social media links
- [ ] Set up analytics (Google Analytics, etc.)

## Monitoring & Maintenance

- Monitor Core Web Vitals
- Keep dependencies updated
- Regular content updates
- Backup project data
- Monitor uptime

---

**Need help?** Contact: hello@bogryashov.dev
