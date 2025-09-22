import Header from './components/Header.js';
import Hero from './components/Hero.js';
import AppGrid from './components/RightsSection.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <AppGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;