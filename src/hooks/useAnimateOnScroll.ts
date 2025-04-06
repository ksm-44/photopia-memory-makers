
import { useEffect, useRef, RefObject } from 'react';

interface UseAnimateOnScrollProps {
  threshold?: number;
  rootMargin?: string;
}

export const useAnimateOnScroll = <T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = '0px',
}: UseAnimateOnScrollProps = {}): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.classList.add('animate-on-scroll');
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};
