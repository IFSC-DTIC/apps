
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import RightsSection from './components/RightsSection.tsx';
import CallToAction from './components/CallToAction.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <RightsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;