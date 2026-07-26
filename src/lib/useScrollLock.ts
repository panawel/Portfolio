import { useEffect } from 'react';
import { getLenis } from './lenisInstance';

/**
 * Locks page scroll while `isLocked` is true.
 *
 * Lenis scrolls the window programmatically, which `body { overflow: hidden }`
 * does not prevent — so Lenis has to be stopped as well. Nodes matching the
 * `prevent` option in App.tsx (.modal-scroll-area / .modal-content) keep
 * scrolling natively while stopped, because Lenis checks `prevent` before
 * `isStopped`.
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    getLenis()?.stop();

    return () => {
      document.body.style.overflow = previousOverflow;
      getLenis()?.start();
    };
  }, [isLocked]);
};
