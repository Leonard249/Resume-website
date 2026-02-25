import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Access the current location object from React Router
  const { pathname } = useLocation();

  useEffect(() => {
    // Whenever the pathname changes (e.g., from "/" to "/project/audio2tabs")
    // scroll the window to the very top instantly.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component renders nothing to the DOM
};

export default ScrollToTop;