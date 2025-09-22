const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <h3 className="text-lg font-semibold text-gray-700">Quer adicionar sua aplicação?</h3>
        <p className="mt-2 max-w-lg mx-auto">
          Este portal é um projeto colaborativo. Se você desenvolveu uma aplicação de interesse para a comunidade IFSC, contribua!
        </p>
        <div className="mt-4 mb-8">
            <a href="https://github.com/ifsc/app-portal-poc"
               target="_blank" rel="noopener noreferrer" 
               className="inline-block bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                Contribua no GitHub
            </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Instituto Federal de Santa Catarina. Todos os direitos reservados.</p>
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