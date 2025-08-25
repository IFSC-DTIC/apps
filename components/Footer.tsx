
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Instituto Federal de Santa Catarina. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Esta é uma página de demonstração para uma Prova de Conceito (PoC).
        </p>
        <div className="mt-4">
          <a href="https://www.ifsc.edu.br" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 hover:underline transition-colors">
            Site Oficial do IFSC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
