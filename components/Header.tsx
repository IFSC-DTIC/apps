
import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldCheckIcon className="w-8 h-8 text-green-600" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800 tracking-tight">Portal da Privacidade</span>
              <span className="text-sm font-medium text-gray-500">Instituto Federal de Santa Catarina</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
