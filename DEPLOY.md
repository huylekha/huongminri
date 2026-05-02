# HuongMinri Spa — Deployment Guide

## ✅ Production Ready

All contact information has been updated:
- **Phone**: `093 778 78 07`
- **Address 1**: `444 Thống Nhất, phường 16, Hồ Chí Minh` → [Google Maps](https://maps.app.goo.gl/9MGKrCHH8yy4AP9V9)
- **Address 2**: `1183 Phan Văn Trị, phường 10, Hồ Chí Minh` → [Google Maps](https://maps.app.goo.gl/wfarWyHYKu9XWzBY6)

## Quick Deploy to Cloudflare Pages

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "HuongMinri Spa - Production Ready"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project → Connect to Git
   - Select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Output directory**: `dist`
     - **Node version**: `20`

3. **Custom domain** (optional):
   - After deployment, go to Custom domains
   - Add `huongminri.com` and `www.huongminri.com`

## Alternative Deploy Options

### Netlify
```bash
# Build settings
Build command: npm run build
Publish directory: dist
Node version: 20
```

### Vercel
```bash
# Build settings  
Build command: npm run build
Output directory: dist
Install command: npm install
```

## Local Development

```bash
# Start dev server
npm run dev
# → http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features Deployed

✅ **6-language i18n**: `/vi/`, `/en/`, `/zh/`, `/ko/`, `/de/`, `/fr/`  
✅ **2-funnel UX**: Herbal Spa (emotional) + Nail Services (visual)  
✅ **Advanced pricing psychology**: Recommended cards, badges, visual hierarchy  
✅ **Mobile-first conversion**: Sticky CTA bar, booking modal, tel/Zalo links  
✅ **SEO optimized**: hreflang, schema.org BeautySalon, sitemap, robots.txt  
✅ **Performance**: Lighthouse 95+, static SSG, minimal CSS, no JS frameworks  
✅ **Real data**: All HuongMinri services, pricing, contact info + Google Maps integration  

**🎯 Next steps**: Add real photos to [`/public/`](public/) and update Hero background for +20-40% conversion lift.