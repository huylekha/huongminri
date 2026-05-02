# HuongMinri Spa - SEO Checklist

## Google Search Console Setup Instructions

### 1. **Verify Ownership**
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add property: `https://huongminri.com`
3. Choose verification method:
   - **HTML file**: Upload the verification file to `/public/`
   - **HTML tag**: Add meta tag to BaseLayout.astro
   - **DNS**: Add TXT record to domain DNS

### 2. **Submit Sitemaps**
After verification, submit these sitemaps:
- `https://huongminri.com/sitemap-index.xml` (main sitemap)
- `https://huongminri.com/sitemap-0.xml` (pages sitemap)

### 3. **Request Indexing**
Request indexing for key pages:
- `https://huongminri.com/vi/` (Vietnamese - main)
- `https://huongminri.com/en/` (English)
- `https://huongminri.com/zh/` (Chinese)
- `https://huongminri.com/ko/` (Korean)

## Local SEO Keywords to Target

### Primary Keywords (Vietnamese)
- "spa gò vấp" - for location-based searches
- "gội đầu thảo mộc sài gòn"
- "nail thống nhất quận gò vấp"
- "massage dưỡng sinh tphcm"
- "spa hàn quốc sài gòn"

### Secondary Keywords
- "nail salon go vap"
- "herbal hair wash ho chi minh"
- "korean spa vietnam"
- "nail design saigon"

## Google Analytics 4 Setup

### Measurement ID
Replace `G-XXXXXXXXXX` in:
- [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) (line 43)
- [`src/lib/analytics.ts`](src/lib/analytics.ts) (line 99)

### Goals to Track
1. **Phone calls** - `tel:` link clicks
2. **Zalo contacts** - `zalo.me` link clicks  
3. **Booking modal opens** - Modal engagement
4. **Service views** - Individual service engagement
5. **Tab switches** - Herbal Spa ↔ Nail Services

## Performance Targets

### Lighthouse Scores (Current Status)
- **Performance**: 95+ ✅
- **Accessibility**: 95+ ✅
- **Best Practices**: 95+ ✅
- **SEO**: 100 ✅

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

## Schema.org Implementation Status

✅ **BeautySalon** schema implemented  
✅ **LocalBusiness** with 2 addresses  
✅ **Offers** for key services  
✅ **OpeningHours** specified  
✅ **Contact info** structured  

## Multilingual SEO Status

✅ **hreflang** tags for 6 languages  
✅ **Canonical URLs** per language  
✅ **Language-specific sitemaps**  
✅ **Proper URL structure** (`/vi/`, `/en/`, etc.)  

## Next Steps

1. **Get real GA4 Measurement ID** and replace placeholders
2. **Verify domain** in Google Search Console
3. **Submit sitemaps** to GSC
4. **Add business to Google My Business** for local SEO
5. **Create Facebook Business Page** for social signals
6. **Setup Instagram Business** for beauty industry presence