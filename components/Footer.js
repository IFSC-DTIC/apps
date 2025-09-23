import { InformationCircleIcon } from './icons/FeatureIcons.js';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Quer adicionar sua aplicação?</h3>
        <p className="mt-2 max-w-lg mx-auto">
          Este portal é um projeto colaborativo. Se você desenvolveu uma aplicação de interesse para a comunidade IFSC, contribua!
        </p>
        <div className="mt-4 mb-8">
            <a href="https://github.com/ifsc/app-portal-poc"
               target="_blank" rel="noopener noreferrer" 
               className="inline-block bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white">
                Contribua no GitHub
            </a>
        </div>
        
        <div className="max-w-3xl mx-auto text-sm text-yellow-800 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-8 flex items-start text-left">
            <InformationCircleIcon />
            <div>
              <strong className="font-semibold">Aviso Importante</strong>
              <p className="mt-1">Aplicações que utilizam Inteligência Artificial (IA) devem ter seus resultados revisados por um humano antes da publicação para garantir a precisão e a adequação das informações.</p>
            </div>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Instituto Federal de Santa Catarina. Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="https://www.ifsc.edu.br" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500 hover:underline transition-colors">
            Site Oficial do IFSC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;