import type Lenis from 'lenis';

let _lenis: Lenis | null = null;

export const setLenis = (l: Lenis | null) => { _lenis = l; };
export const getLenis = () => _lenis;
