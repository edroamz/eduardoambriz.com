import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;
const getIsMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? getIsMobile() : false
  );

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return isMobile;
}
