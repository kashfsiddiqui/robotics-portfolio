import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SpotProject from './components/SpotProject';
import SpotPage from './pages/spot';
import CobotPage from './pages/cobot';
import GuadaloopPage from './pages/guadaloop';
import ClawPage from './pages/claw';
import ThrustVectorPage from './pages/thrustvector';
import HCRLPage from './pages/hcrl';
import SpotHeadPage from './pages/spot-head';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Check URL path on component mount and when URL changes
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/portfolio/spot') {
        setCurrentPage('spot');
      } else if (path === '/portfolio/guadaloop') {
        setCurrentPage('guadaloop');
      } else if (path === '/portfolio/cobot') {
        setCurrentPage('cobot');
      } else if (path === '/portfolio/thrustvector') {
        setCurrentPage('thrustvector');
      } else if (path === '/portfolio/claw') {
        setCurrentPage('claw');
      } else if (path === '/portfolio/hcrl') {
        setCurrentPage('hcrl');
      } else if (path === '/portfolio/spot-head') {
        setCurrentPage('spot-head');
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
    window.history.pushState({}, '', '/portfolio/spot');
    setCurrentPage('spot');
  };

  const navigateToCobot = () => {
    window.history.pushState({}, '', '/portfolio/cobot');
    setCurrentPage('cobot');
  };

  // Handle back navigation
  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPage('home');
  };

  if (currentPage === 'spot') {
    return <SpotPage />;
  }

  if (currentPage === 'cobot') {
    return <CobotPage />;
  }

  if (currentPage === 'guadaloop') {
    return <GuadaloopPage />;
  }

  if (currentPage === 'claw') {
    return <ClawPage />;
  }

  if (currentPage === 'thrustvector') {
    return <ThrustVectorPage />;
  }

  if (currentPage === 'hcrl') {
    return <HCRLPage />;
  }

  if (currentPage === 'spot-head') {
    return <SpotHeadPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Projects onSpotClick={navigateToSpot} onCobotClick={navigateToCobot} />
      <Footer />
    </div>
  );
}

export default App;
