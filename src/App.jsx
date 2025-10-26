import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
