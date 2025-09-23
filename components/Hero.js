import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter">
          Portal de Aplicações do IFSC
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          Explore projetos e ferramentas incríveis desenvolvidos pela nossa comunidade. Adicione sua aplicação e colabore!
        </p>
         <div className="mt-8">
           <a
            href="#apps"
            className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Ver Aplicações
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;