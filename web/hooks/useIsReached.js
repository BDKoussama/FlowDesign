import { useState, useEffect } from 'react';

export function useIsReached(ref) {
  const [isReached, setIsReached] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const elementBottom = ref.current.getBoundingClientRect().bottom;
        if (elementTop <= window.innerHeight && elementBottom >= 0) {
          setIsReached(true);
        } else {
          setIsReached(false);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return isReached;
}


/**
 * import { useRef } from 'react';

function MyComponent() {
  const myElementRef = useRef(null);
  const isReached = useIsReached(myElementRef);

  return (
    <div ref={myElementRef}>
      {isReached ? 'Element is reached' : 'Element is not reached'}
    </div>
  );
}

 */