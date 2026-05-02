# HuongMinri Spa — Premium Herbal Hair Wash & Nail Services

Production-grade Astro SSG landing page optimized for booking conversion.

## 🏢 Business Info
- **Phone**: `093 778 78 07`
- **Branch 1**: `444 Thống Nhất, phường 16, Hồ Chí Minh` → [Google Maps](https://maps.app.goo.gl/9MGKrCHH8yy4AP9V9)
- **Branch 2**: `1183 Phan Văn Trị, phường 10, Hồ Chí Minh` → [Google Maps](https://maps.app.goo.gl/wfarWyHYKu9XWzBY6)

## 🚀 Stack
- Astro 4 (Static Site Generation)
- TypeScript (strict)
- Vanilla CSS (no UI framework — keeps Lighthouse 95+)
- Built-in i18n (6 languages: vi, en, zh, ko, de, fr)

## 🛠️ Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321

## 🏗️ Build

```bash
npm run build
npm run preview
```

Outputs static files to `dist/`.

## ☁️ Deploy to Cloudflare Pages

1. Push to GitHub.
2. Connect the repo in Cloudflare Pages.
3. Build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Node version**: 20

That's it — no server, no API, fully static.

## 📁 Structure

```
src/
  components/    # Hero, Pricing, Reviews, StickyCTA, BookingModal, Experience, ServicesOverview, Combos
  data/          # services.ts (typed 2-group data model), reviews.ts, contact.ts
  i18n/          # translations.ts (6 languages)
  layouts/       # BaseLayout.astro (SEO core)
  pages/
    index.astro          # browser language redirect
    [lang]/index.astro   # localized homepage
  styles/        # globals.css (Korean minimal design system)
```

## 🎯 Two-funnel architecture

- **🌿 Herbal Spa (Dưỡng sinh)** — emotional selling: relax, healing, sleep
- **💅 Nail Services** — visual selling: trendy, premium, Korean beauty

Pricing UI uses tab toggle between the two with smart defaults and recommended cards.

## ✨ Features

✅ **6-language i18n**: `/vi/`, `/en/`, `/zh/`, `/ko/`, `/de/`, `/fr/`  
✅ **2-funnel UX**: Herbal Spa (emotional) + Nail Services (visual)  
✅ **Advanced pricing psychology**: Recommended cards, badges, visual hierarchy  
✅ **Mobile-first conversion**: Sticky CTA bar, booking modal, tel/Zalo links  
✅ **SEO optimized**: hreflang, schema.org BeautySalon, sitemap, robots.txt  
✅ **Performance**: Lighthouse 95+, static SSG, minimal CSS, no JS frameworks  
✅ **Real data**: All HuongMinri services, pricing, contact info + Google Maps  
✅ **Premium logo**: Korean minimal + herbal design system
