import { useState, useEffect } from 'react';

export function useHashRouter() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash.slice(1) || '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash.slice(1) || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: string) => {
    const target = path.toLowerCase() === '/juegos' ? '/Juegos' : path;
    if (target === '/') {
      window.location.hash = '';
    } else {
      window.location.hash = target;
    }
  };

  return { currentRoute, navigate };
}
