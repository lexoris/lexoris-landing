import { useEffect, useRef, useState, useCallback } from 'react';

// Single shared observer for all animated sections
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, (isIntersecting: boolean) => void>();

const getSharedObserver = () => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observerCallbacks.get(entry.target);
          if (callback && entry.isIntersecting) {
            callback(true);
            // Unobserve after triggering (once only)
            sharedObserver?.unobserve(entry.target);
            observerCallbacks.delete(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
  }
  return sharedObserver;
};

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver();
    observerCallbacks.set(element, setIsVisible);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observerCallbacks.delete(element);
    };
  }, []);

  return { ref, isVisible };
};

export const AnimatedSection = ({ 
  children, 
  className = '',
  delay = 0
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref} 
      className={`${className} transition-none ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </section>
  );
};
