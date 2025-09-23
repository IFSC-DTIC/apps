import { ShieldCheckIcon } from './icons/FeatureIcons.tsx';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldCheckIcon className="w-7 h-7 text-green-600" />
            <span className="text-lg font-bold text-gray-800 dark:text-white tracking-tight">Portal de Aplicações IFSC-DTIC-CGD</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;