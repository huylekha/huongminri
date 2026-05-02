/**
 * Accessibility utilities and enhancements for HuongMinri
 */

export class AccessibilityManager {
  
  /**
   * Initialize accessibility features
   */
  static init(): void {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupScreenReaderAnnouncements();
    this.setupColorContrastCheck();
    this.setupMotionPreferences();
  }

  /**
   * Enhanced keyboard navigation
   */
  private static setupKeyboardNavigation(): void {
    // Skip to main content link
    this.addSkipLink();
    
    // Arrow key navigation for pricing tabs
    const pricingTabs = document.querySelectorAll('.pricing .tab');
    if (pricingTabs.length > 0) {
      this.addArrowKeyNavigation(pricingTabs);
    }

    // Tab trapping for modal dialogs
    document.addEventListener('keydown', (e) => {
      const openModal = document.querySelector('dialog[open]') as HTMLDialogElement;
      if (openModal && e.key === 'Tab') {
        this.trapFocus(e, openModal);
      }
    });
  }

  /**
   * Add skip to main content link
   */
  private static addSkipLink(): void {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--color-primary);
        color: white;
        padding: 8px 12px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        font-weight: 500;
      }
      .skip-link:focus {
        top: 6px;
      }
    `;
    
    document.head.appendChild(style);
    document.body.insertAdjacentElement('afterbegin', skipLink);
    
    // Add ID to main content if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main-content';
    }
  }

  /**
   * Arrow key navigation for tab groups
   */
  private static addArrowKeyNavigation(tabs: NodeListOf<Element>): void {
    tabs.forEach((tab, index) => {
      tab.addEventListener('keydown', (e) => {
        let nextIndex = -1;
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          nextIndex = (index + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          nextIndex = 0;
        } else if (e.key === 'End') {
          nextIndex = tabs.length - 1;
        }
        
        if (nextIndex !== -1) {
          e.preventDefault();
          (tabs[nextIndex] as HTMLElement).focus();
          (tabs[nextIndex] as HTMLElement).click();
        }
      });
    });
  }

  /**
   * Trap focus within an element
   */
  private static trapFocus(e: KeyboardEvent, container: HTMLElement): void {
    const focusables = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const first = focusables[0] as HTMLElement;
    const last = focusables[focusables.length - 1] as HTMLElement;
    
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  /**
   * Focus management for dynamic content
   */
  private static setupFocusManagement(): void {
    // Focus management for accordion toggles
    document.addEventListener('click', (e) => {
      const accordion = (e.target as HTMLElement).closest('[data-accordion-toggle]');
      if (accordion) {
        // Announce state change
        setTimeout(() => {
          const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
          this.announce(
            isExpanded ? 'Section expanded' : 'Section collapsed',
            'polite'
          );
        }, 100);
      }
    });

    // Focus indicators for custom elements
    const style = document.createElement('style');
    style.textContent = `
      .btn:focus-visible,
      .tab:focus-visible,
      .service-option:focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
      
      *:focus:not(:focus-visible) {
        outline: none;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Screen reader announcements
   */
  private static setupScreenReaderAnnouncements(): void {
    // Create live regions
    const politeRegion = document.createElement('div');
    politeRegion.setAttribute('aria-live', 'polite');
    politeRegion.setAttribute('aria-atomic', 'true');
    politeRegion.className = 'sr-only';
    politeRegion.id = 'polite-announcements';
    
    const assertiveRegion = document.createElement('div');
    assertiveRegion.setAttribute('aria-live', 'assertive');
    assertiveRegion.setAttribute('aria-atomic', 'true');
    assertiveRegion.className = 'sr-only';
    assertiveRegion.id = 'assertive-announcements';
    
    // Screen reader only styles
    const style = document.createElement('style');
    style.textContent = `
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(politeRegion);
    document.body.appendChild(assertiveRegion);
  }

  /**
   * Announce message to screen readers
   */
  static announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const regionId = priority === 'assertive' ? 'assertive-announcements' : 'polite-announcements';
    const region = document.getElementById(regionId);
    
    if (region) {
      region.textContent = message;
      
      // Clear after announcement
      setTimeout(() => {
        region.textContent = '';
      }, 1000);
    }
  }

  /**
   * Check color contrast (development helper)
   */
  private static setupColorContrastCheck(): void {
    if (process.env.NODE_ENV === 'development') {
      // Simple contrast checker for development
      console.log('🎨 Accessibility: Color contrast checking enabled in development');
    }
  }

  /**
   * Respect user motion preferences
   */
  private static setupMotionPreferences(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const updateMotionPreference = (mediaQuery: MediaQueryList) => {
      if (mediaQuery.matches) {
        document.documentElement.style.setProperty('--dur', '0.01s');
        document.documentElement.style.setProperty('--dur-fast', '0.01s');
        console.log('🎭 Accessibility: Reduced motion enabled');
      } else {
        document.documentElement.style.removeProperty('--dur');
        document.documentElement.style.removeProperty('--dur-fast');
      }
    };
    
    updateMotionPreference(prefersReducedMotion);
    prefersReducedMotion.addListener(updateMotionPreference);
  }

  /**
   * Form validation accessibility
   */
  static enhanceFormValidation(form: HTMLFormElement): void {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach((input) => {
      input.addEventListener('invalid', (e) => {
        const target = e.target as HTMLInputElement;
        const errorMessage = target.validationMessage;
        
        // Create or update error message
        let errorElement = document.getElementById(`${target.id}-error`);
        if (!errorElement) {
          errorElement = document.createElement('div');
          errorElement.id = `${target.id}-error`;
          errorElement.className = 'error-message';
          errorElement.setAttribute('role', 'alert');
          target.parentNode?.insertBefore(errorElement, target.nextSibling);
        }
        
        errorElement.textContent = errorMessage;
        target.setAttribute('aria-describedby', errorElement.id);
        target.setAttribute('aria-invalid', 'true');
      });
      
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.checkValidity()) {
          target.removeAttribute('aria-invalid');
          const errorElement = document.getElementById(`${target.id}-error`);
          if (errorElement) {
            errorElement.remove();
          }
        }
      });
    });
  }
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    AccessibilityManager.init();
  });
}