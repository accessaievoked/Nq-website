import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    // Small delay to let DOM paint
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible)');
      const io = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      els.forEach(el => io.observe(el));
      return () => io.disconnect();
    }, 60);
    return () => clearTimeout(timer);
  });
}
