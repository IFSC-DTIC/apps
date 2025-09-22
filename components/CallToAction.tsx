import React from 'react';
import { GitHubIcon, ExternalLinkIcon } from './icons/FeatureIcons.js';
import type { App } from '../types.js';

interface AppCardProps {
  app: App;
  tagColors: { [key: string]: string };
}

// FIX: Explicitly type AppCard as a React Function Component (React.FC) to resolve the type error
// with the 'key' prop. This ensures TypeScript understands it's a React component.
const AppCard: React.FC<AppCardProps> = ({ app, tagColors }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 flex flex-col overflow-hidden">
      <img src={app.imageUrl} alt={`Imagem de ${app.name}`} className="w-full h-40 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{app.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {app.tags.map(tag => (
            <span key={tag} className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColors[tag] || tagColors.default}`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-4">
           <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <ExternalLinkIcon />
            <span className="ml-2">Acessar</span>
          </a>
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center bg-gray-800 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
          >
            <GitHubIcon />
            <span className="ml-2">Ver no GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;