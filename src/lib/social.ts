/**
 * Social sharing utilities for HuongMinri
 */

export interface ShareData {
  title: string;
  description: string;
  url: string;
  image?: string;
  hashtags?: string[];
}

/**
 * Generate social sharing URLs
 */
export class SocialShare {
  
  static facebook(data: ShareData): string {
    const params = new URLSearchParams({
      u: data.url,
      quote: `${data.title} - ${data.description}`,
    });
    return `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
  }

  static twitter(data: ShareData): string {
    const hashtags = data.hashtags?.join(',') || 'HuongMinriSpa,Beauty,Spa';
    const text = `${data.title} - ${data.description}`;
    const params = new URLSearchParams({
      text,
      url: data.url,
      hashtags,
    });
    return `https://twitter.com/intent/tweet?${params.toString()}`;
  }

  static linkedin(data: ShareData): string {
    const params = new URLSearchParams({
      mini: 'true',
      url: data.url,
      title: data.title,
      summary: data.description,
    });
    return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
  }

  static whatsapp(data: ShareData): string {
    const text = `${data.title} - ${data.description} ${data.url}`;
    const params = new URLSearchParams({ text });
    return `https://wa.me/?${params.toString()}`;
  }

  static telegram(data: ShareData): string {
    const text = `${data.title} - ${data.description}`;
    const params = new URLSearchParams({
      text,
      url: data.url,
    });
    return `https://t.me/share/url?${params.toString()}`;
  }

  static email(data: ShareData): string {
    const subject = data.title;
    const body = `${data.description}\n\nXem thêm tại: ${data.url}`;
    const params = new URLSearchParams({
      subject,
      body,
    });
    return `mailto:?${params.toString()}`;
  }

  /**
   * Native Web Share API (if supported)
   */
  static async nativeShare(data: ShareData): Promise<boolean> {
    if (!navigator.share) return false;

    try {
      await navigator.share({
        title: data.title,
        text: data.description,
        url: data.url,
      });
      return true;
    } catch (error) {
      console.warn('Native sharing failed:', error);
      return false;
    }
  }

  /**
   * Get default sharing data for HuongMinri
   */
  static getDefaultShareData(lang: string = 'vi'): ShareData {
    const baseUrl = 'https://huongminri.com';
    
    const content = {
      vi: {
        title: 'HuongMinri Spa - Gội đầu thảo mộc & Nail cao cấp',
        description: 'Trải nghiệm spa Hàn Quốc tại HuongMinri: gội đầu thảo mộc dưỡng sinh và nail nghệ thuật. Đặt lịch ngay!',
        hashtags: ['HuongMinriSpa', 'SpaHanQuoc', 'GoiDauThaoMoc', 'NailCaoCap', 'DuongSinh'],
      },
      en: {
        title: 'HuongMinri Spa - Korean Herbal Hair Wash & Premium Nail',
        description: 'Experience Korean-style spa at HuongMinri: herbal hair wash and artisan nail design. Book now!',
        hashtags: ['HuongMinriSpa', 'KoreanSpa', 'HerbalHairWash', 'NailArt', 'Beauty'],
      },
    };

    const langContent = content[lang as keyof typeof content] || content.vi;
    
    return {
      title: langContent.title,
      description: langContent.description,
      url: `${baseUrl}/${lang}/`,
      image: `${baseUrl}/og.svg`,
      hashtags: langContent.hashtags,
    };
  }
}

/**
 * Track social sharing events
 */
export function trackSocialShare(platform: string, serviceId?: string): void {
  // Dynamic import to avoid SSR issues
  import('./analytics.js').then(({ analytics }) => {
    if (analytics && window.gtag) {
      window.gtag('event', 'share', {
        event_category: 'social',
        method: platform,
        content_type: 'service',
        item_id: serviceId || 'homepage',
      });
    }
  }).catch(console.error);
}