import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { RouterProvider, useRouter } from './context/RouterContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './sections/Footer';
import { useReveal } from './hooks/useReveal';

function PageRenderer() {
  const { page } = useRouter();
  useReveal(); // Re-run observer every render (new page content)

  const pages = {
    home:     <HomePage />,
    services: <><ServicesPage /><Footer /></>,
    about:    <><AboutPage /><Footer /></>,
    contact:  <><ContactPage /><Footer /></>,
  };

  return pages[page] || pages.home;
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <div style={{ fontFamily: "'Inter', sans-serif", background: 'var(--bg-primary)', minHeight: '100vh' }}>
          <Navbar />
          <main>
            <PageRenderer />
          </main>
        </div>
      </RouterProvider>
    </ThemeProvider>
  );
}
