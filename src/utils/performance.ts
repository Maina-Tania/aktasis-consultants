// Performance optimization utilities

// Lazy loading utility for images
export const lazyLoadImage = (src: string, alt: string, className?: string): string => {
  return `
    <img 
      src="${src}" 
      alt="${alt}" 
      class="${className || ''}" 
      loading="lazy" 
      decoding="async"
      onload="this.style.opacity='1'"
      style="opacity: 0; transition: opacity 0.3s ease-in-out;"
    />
  `;
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch non-critical resources
export const prefetchResource = (href: string): void => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

// Memory usage monitoring
export const getMemoryUsage = (): string => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    return `Used: ${Math.round(memory.usedJSHeapSize / 1048576)}MB / Total: ${Math.round(memory.totalJSHeapSize / 1048576)}MB`;
  }
  return 'Memory usage not available';
};

// Image optimization helper
export const optimizeImageUrl = (
  url: string, 
  width: number, 
  quality: number = 80
): string => {
  if (url.includes('unsplash.com')) {
    return `${url}?w=${width}&q=${quality}&fit=crop&auto=format`;
  }
  return url;
};

// Critical CSS inlining helper
export const inlineCriticalCSS = (css: string): void => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Service Worker registration helper
export const registerServiceWorker = async (swPath: string): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(swPath);
      console.log('SW registered: ', registration);
    } catch (error) {
      console.log('SW registration failed: ', error);
    }
  }
};

// Cache management
export const clearOldCaches = async (cacheNames: string[]): Promise<void> => {
  if ('caches' in window) {
    const cacheNamesToDelete = await caches.keys();
    const cachesToDelete = cacheNamesToDelete.filter(
      cacheName => !cacheNames.includes(cacheName)
    );
    await Promise.all(cachesToDelete.map(cacheName => caches.delete(cacheName)));
  }
};

// Network status monitoring
export const getNetworkInfo = (): { effectiveType: string; downlink: number } => {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return {
      effectiveType: connection.effectiveType || 'unknown',
      downlink: connection.downlink || 0
    };
  }
  return { effectiveType: 'unknown', downlink: 0 };
};

// Bundle size monitoring
export const getBundleSize = (): void => {
  if (process.env.NODE_ENV === 'development') {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('chunk')) {
        // This is a simplified version - in production you'd want more sophisticated tracking
        console.log(`Script loaded: ${src}`);
      }
    });
  }
};

// Error boundary performance tracking
export const trackError = (error: Error, errorInfo: any): void => {
  console.error('Error caught by boundary:', error, errorInfo);
  
  // In production, you'd send this to your error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }
};

// Component render optimization
export const shouldComponentUpdate = <T>(
  prevProps: T,
  nextProps: T,
  keys: (keyof T)[]
): boolean => {
  return keys.some(key => prevProps[key] !== nextProps[key]);
};

// Virtual scrolling helper
export const getVisibleItems = (
  items: any[],
  containerHeight: number,
  itemHeight: number,
  scrollTop: number
): { startIndex: number; endIndex: number; visibleItems: any[] } => {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  return {
    startIndex,
    endIndex,
    visibleItems: items.slice(startIndex, endIndex)
  };
};

// Web Vitals monitoring
export const reportWebVitals = (metric: any): void => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log('Web Vital:', metric);
  }
}; 