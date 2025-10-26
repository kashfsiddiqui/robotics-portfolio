import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SpotProject from './components/SpotProject';
import SpotPage from './pages/spot';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL path on component mount and when URL changes
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/portfolio/spot' || path === '/spot') {
        setCurrentPage('spot');
      } else {
        setCurrentPage('home');
      }
    };

    // Listen for URL changes
    window.addEventListener('popstate', handleRouteChange);
    
    // Check initial route
    handleRouteChange();

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Handle navigation programmatically
  const navigateToSpot = () => {
    window.history.pushState({}, '', '/spot');
    setCurrentPage('spot');
  };

  // Handle back navigation
  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
  };

  if (currentPage === 'spot') {
    return <SpotPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Projects onSpotClick={navigateToSpot} />
      <Footer />
    </div>
  );
}

export default App;
