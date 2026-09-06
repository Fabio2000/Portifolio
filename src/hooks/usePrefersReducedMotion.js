import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

// Nem todo ambiente tem matchMedia (jsdom nos testes, por exemplo).
function getMediaQuery() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return null;
  }
  return window.matchMedia(QUERY);
}

/**
 * Diz se a pessoa pediu menos movimento no sistema.
 * O CSS já desliga animações e transições, mas efeitos feitos em
 * JavaScript (como o de digitação) precisam checar isso na mão.
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    const media = getMediaQuery();
    return media ? media.matches : false;
  });

  useEffect(() => {
    const media = getMediaQuery();
    if (!media) return undefined;

    const onChange = (event) => setPrefersReduced(event.matches);

    setPrefersReduced(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return prefersReduced;
}
