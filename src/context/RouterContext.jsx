import React, { createContext, useContext, useState } from 'react';

const RouterContext = createContext({ page: 'home', navigate: () => {} });

export function RouterProvider({ children }) {
  const [page, setPage] = useState('home');
  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export const useRouter = () => useContext(RouterContext);
