import { useCallback, useRef } from 'react';

/**
 * useThrottle hook to limit the execution of a function
 * @param {Function} callback - The function to throttle
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} - Throttled function
 */
export function useThrottle(callback, delay) {
  const lastCall = useRef(0);

  return useCallback((...args) => {
    const now = new Date().getTime();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  }, [callback, delay]);
}
