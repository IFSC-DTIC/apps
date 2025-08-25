
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RightsSection from './components/RightsSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

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
