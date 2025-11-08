import { useEffect, useState, useRef } from 'react';

interface UseCounterAnimationOptions {
  duration?: number;
  startValue?: number;
  endValue: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  threshold?: number;
}

export const useCounterAnimation = ({
  duration = 2000,
  startValue = 0,
  endValue,
  suffix = '',
  prefix = '',
  decimals = 0,
  threshold = 0.1
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const start = startValue;
    const end = endValue;
    const range = end - start;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + range * easeOut;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, startValue, endValue, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals)
    : Math.floor(count).toString();

  return [ref, `${prefix}${formattedCount}${suffix}`, isVisible] as const;
};

