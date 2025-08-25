
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
          Transparência e Controle ao seu Alcance
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Nosso portal completo está sendo desenvolvido para oferecer a você uma experiência completa na gestão da sua privacidade.
        </p>
        <div className="mt-8">
          <button
            disabled
            className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Acessar o Portal Completo (Em Breve)
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
