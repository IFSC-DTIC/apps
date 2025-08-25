
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tighter">
          Seus Dados, Seus Direitos.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          O Portal da Privacidade do IFSC é o seu centro de informações sobre como tratamos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>
      </div>
    </section>
  );
};

export default Hero;
