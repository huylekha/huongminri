/**
 * HuongMinri contact info — single source of truth for CTAs.
 * Update phone & Zalo here to propagate everywhere.
 */
export const CONTACT = {
  phone: '0937787807',          // tel: friendly (digits only)
  phoneDisplay: '093 778 78 07', // pretty
  zalo: '0937787807',           // zalo.me/<phone>
  address: '444 Thống Nhất, Phường 16, Hồ Chí Minh',
  addressSecondary: '1183 Phan Văn Trị, Phường 10, Hồ Chí Minh',
  addressLocality: 'Hồ Chí Minh',
  region: 'VN',
  url: 'https://huongminri.com',
  // Google Maps links for both locations
  mapLink1: 'https://maps.app.goo.gl/9MGKrCHH8yy4AP9V9', // 444 Thống Nhất
  mapLink2: 'https://maps.app.goo.gl/wfarWyHYKu9XWzBY6', // 1183 Phan Văn Trị
  // Social media links
  social: {
    facebook: 'https://facebook.com/huongminrispa',
    instagram: 'https://instagram.com/huongminri.spa', 
    tiktok: 'https://tiktok.com/@huongminrispa',
    youtube: 'https://youtube.com/@huongminrispa',
  },
  // Image used for OpenGraph & schema.org
  ogImage: '/og.svg',
} as const;

export function telHref(): string {
  return `tel:${CONTACT.phone}`;
}

export function zaloHref(message?: string): string {
  if (!message) return `https://zalo.me/${CONTACT.zalo}`;
  return `https://zalo.me/${CONTACT.zalo}?body=${encodeURIComponent(message)}`;
}
