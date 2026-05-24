import { useEffect, useRef } from 'react';

/**
 * Hook that adds animation classes when element enters viewport.
 * @param {string} hiddenClass - CSS class for hidden state
 * @param {string} visibleClass - CSS class for visible state
 * @param {object} options - IntersectionObserver options
 */
export function useScrollAnimation(
  hiddenClass = 'animate-hidden',
  visibleClass = 'animate-visible',
  options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${hiddenClass}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [hiddenClass, visibleClass]);
}

/**
 * Hook that returns a ref; when element enters viewport, adds visible class.
 */
export function useInView(threshold = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
