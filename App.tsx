import Header from './components/Header.tsx';
import AppGrid from './components/RightsSection.tsx';
import { PlusIcon, LayoutGridIcon, SparklesIcon, SettingsIcon } from './components/icons/FeatureIcons.tsx';


const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-300 antialiased">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Painel de aplicativos
          </h1>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0 text-sm font-medium">
            <a href="#" className="flex items-center text-blue-600 hover:underline dark:text-blue-400">
              <PlusIcon />
              <span className="ml-1">Adicionar aplicativos</span>
            </a>
            <a href="#" className="flex items-center text-blue-600 hover:underline dark:text-blue-400">
              <LayoutGridIcon />
              <span className="ml-1">Criar coleção</span>
            </a>
            <a href="#" className="flex items-center text-blue-600 hover:underline dark:text-blue-400">
              <SparklesIcon />
              <span className="ml-1">Personalizar</span>
            </a>
          </div>
        </div>
        
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Apps</h2>
                <a href="#" className="flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                    <SettingsIcon />
                    <span className="ml-1">Configurações</span>
                </a>
            </div>
            <AppGrid />
        </div>
      </main>
    </div>
  );
};

export default App;