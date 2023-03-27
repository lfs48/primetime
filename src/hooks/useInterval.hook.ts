import { useRef, useEffect } from 'react';

// Taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// React hook to allow use of setInterval
export const useInterval = (callback:any, delay:number) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      //@ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
