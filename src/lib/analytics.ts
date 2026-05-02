/**
 * HuongMinri Analytics & Conversion Tracking
 * Google Analytics 4 integration with custom events
 */

export interface AnalyticsConfig {
  gaId: string;
  debug?: boolean;
}

export interface ConversionEvent {
  event_name: string;
  service_id?: string;
  service_group?: 'herbal_spa' | 'nail_services';
  contact_method?: 'phone' | 'zalo' | 'modal';
  value?: number;
  currency?: string;
}

// Global gtag function declaration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export class Analytics {
  private config: AnalyticsConfig;
  private initialized = false;

  constructor(config: AnalyticsConfig) {
    this.config = config;
  }

  /**
   * Initialize Google Analytics 4
   */
  init(): void {
    if (this.initialized || typeof window === 'undefined') return;

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };

    // Configure GA4
    window.gtag('js', new Date());
    window.gtag('config', this.config.gaId, {
      debug_mode: this.config.debug,
      // Enhanced measurement
      enhanced_measurements: {
        scrolls: true,
        outbound_clicks: true,
        site_search: false,
        video_engagement: false,
        file_downloads: false,
      },
      // Custom dimensions
      custom_map: {
        custom_parameter_1: 'service_group',
        custom_parameter_2: 'contact_method',
      },
    });

    this.initialized = true;

    if (this.config.debug) {
      console.log('🔍 Analytics initialized:', this.config.gaId);
    }
  }

  /**
   * Track conversion events
   */
  trackConversion(event: ConversionEvent): void {
    if (!this.initialized || !window.gtag) return;

    const eventData: Record<string, any> = {
      event_category: 'conversion',
      event_label: event.service_id || 'unknown',
    };

    // Add optional parameters
    if (event.service_group) eventData.service_group = event.service_group;
    if (event.contact_method) eventData.contact_method = event.contact_method;
    if (event.value) eventData.value = event.value;
    if (event.currency) eventData.currency = event.currency;

    window.gtag('event', event.event_name, eventData);

    if (this.config.debug) {
      console.log('📊 Conversion tracked:', event.event_name, eventData);
    }
  }

  /**
   * Track service engagement
   */
  trackServiceView(serviceId: string, serviceGroup: 'herbal_spa' | 'nail_services'): void {
    this.trackConversion({
      event_name: 'view_item',
      service_id: serviceId,
      service_group: serviceGroup,
    });
  }

  /**
   * Track booking attempts
   */
  trackBookingStart(contactMethod: 'phone' | 'zalo' | 'modal', serviceId?: string): void {
    this.trackConversion({
      event_name: 'begin_checkout',
      service_id: serviceId,
      contact_method: contactMethod,
    });
  }

  /**
   * Track phone calls
   */
  trackPhoneCall(serviceId?: string): void {
    this.trackConversion({
      event_name: 'generate_lead',
      service_id: serviceId,
      contact_method: 'phone',
    });
  }

  /**
   * Track Zalo contacts
   */
  trackZaloContact(serviceId?: string): void {
    this.trackConversion({
      event_name: 'generate_lead',
      service_id: serviceId,
      contact_method: 'zalo',
    });
  }

  /**
   * Track pricing tab engagement
   */
  trackTabSwitch(fromTab: string, toTab: string): void {
    window.gtag?.('event', 'tab_switch', {
      event_category: 'engagement',
      from_tab: fromTab,
      to_tab: toTab,
    });
  }

  /**
   * Track page views (for SPA-like behavior)
   */
  trackPageView(pagePath: string, pageTitle?: string): void {
    if (!window.gtag) return;

    window.gtag('config', this.config.gaId, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}

// Export singleton instance (will be initialized in BaseLayout)
export const analytics = new Analytics({
  gaId: 'G-XXXXXXXXXX', // TODO: Replace with actual GA4 Measurement ID
  debug: false, // Set to true for development
});

/**
 * Convenience functions for easy tracking
 */
export const trackServiceView = (serviceId: string, serviceGroup: 'herbal_spa' | 'nail_services') => 
  analytics.trackServiceView(serviceId, serviceGroup);

export const trackBookingStart = (contactMethod: 'phone' | 'zalo' | 'modal', serviceId?: string) => 
  analytics.trackBookingStart(contactMethod, serviceId);

export const trackPhoneCall = (serviceId?: string) => analytics.trackPhoneCall(serviceId);

export const trackZaloContact = (serviceId?: string) => analytics.trackZaloContact(serviceId);

export const trackTabSwitch = (fromTab: string, toTab: string) => analytics.trackTabSwitch(fromTab, toTab);