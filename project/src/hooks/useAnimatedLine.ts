import { useState, useEffect, useRef } from 'react';

interface UseAnimatedLineOptions {
  itemCount: number;
  itemHeight?: number;
  delay?: number;
}

export const useAnimatedLine = ({ 
  itemCount, 
  itemHeight = 200, 
  delay = 300 
}: UseAnimatedLineOptions) => {
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>(new Array(itemCount).fill(null));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            
            // Mark item as visible
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });

            // Animate line height
            setTimeout(() => {
              const targetHeight = (index + 1) * itemHeight;
              setLineHeight(targetHeight);
            }, delay);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [itemCount, itemHeight, delay]);

  const setItemRef = (index: number) => (ref: HTMLDivElement | null) => {
    itemRefs.current[index] = ref;
    if (ref) {
      ref.setAttribute('data-index', index.toString());
    }
  };

  return {
    containerRef,
    lineHeight,
    visibleItems,
    setItemRef
  };
};
