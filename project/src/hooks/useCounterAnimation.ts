import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const useCounterAnimation = ({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  suffix = '',
  prefix = '',
  decimals = 0
}: UseCounterAnimationOptions) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  // Intersection Observer to trigger animation when element is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  // Counter animation logic
  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    const timer = setTimeout(() => {
      setHasAnimated(true);
      
      const startTime = Date.now();
      const startValue = start;
      const endValue = end;
      const totalDuration = duration;

      const updateCount = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);

        // Easing function (ease-out cubic)
        const easeOutCubic = (t: number): number => {
          return 1 - Math.pow(1 - t, 3);
        };

        const easedProgress = easeOutCubic(progress);
        const currentValue = startValue + (endValue - startValue) * easedProgress;

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(endValue); // Ensure we end exactly at the target value
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, hasAnimated, start, end, duration, delay]);

  // Format the display value
  const formatValue = (value: number): string => {
    let formattedValue: string;

    if (decimals > 0) {
      formattedValue = value.toFixed(decimals);
    } else {
      formattedValue = Math.floor(value).toString();
    }

    return `${prefix}${formattedValue}${suffix}`;
  };

  return {
    ref: elementRef,
    value: formatValue(count),
    rawValue: count,
    isAnimating: isVisible && !hasAnimated,
    hasCompleted: hasAnimated
  };
};

// Utility hook for percentage values
export const usePercentageCounter = (
  percentage: number,
  options?: Omit<UseCounterAnimationOptions, 'end' | 'suffix'>
) => {
  return useCounterAnimation({
    ...options,
    end: percentage,
    suffix: '%'
  });
};

// Utility hook for values with + suffix
export const usePlusCounter = (
  value: number,
  options?: Omit<UseCounterAnimationOptions, 'end' | 'suffix'>
) => {
  return useCounterAnimation({
    ...options,
    end: value,
    suffix: '+'
  });
};

// Utility hook for currency values
export const useCurrencyCounter = (
  amount: number,
  currency: string = '₺',
  options?: Omit<UseCounterAnimationOptions, 'end' | 'suffix'>
) => {
  return useCounterAnimation({
    ...options,
    end: amount,
    suffix: ` ${currency}`
  });
};
