import React from 'react';
import Header from './components/Header.tsx';
import AppGrid from './components/RightsSection.tsx';
import Footer from './components/Footer.tsx';
import { 
  PlusIcon, 
  LayoutGridIcon, 
  SparklesIcon, 
  SettingsIcon,
  PrivacyIcon,
  InscricoesIcon,
  RepositorioIcon,
  MoodleIcon,
  AIStudioIcon,
  SIGAAIcon,
  SUAPIcon
} from './components/icons/FeatureIcons.tsx';
import type { App } from './types.ts';

// Colleagues can add their apps to this list via a GitHub PR.
const appsData: App[] = [
  {
    name: 'Portal da Privacidade',
    url: '#',
    icon: PrivacyIcon,
    description: 'Acesse informações e políticas de privacidade do IFSC.',
  },
  {
    name: 'Sistema de Inscrições',
    url: 'https://inscricoes.ifsc.edu.br/',
    icon: InscricoesIcon,
    description: 'Realize sua inscrição para cursos e eventos do IFSC.',
  },
  {
    name: 'Repositório Institucional',
    url: 'https://repositorio.ifsc.edu.br/',
    icon: RepositorioIcon,
    description: 'Explore a produção acadêmica e científica da instituição.',
  },
  {
    name: 'Moodle Institucional',
    url: 'https://moodle.ifsc.edu.br/',
    icon: MoodleIcon,
    description: 'Ambiente virtual de aprendizagem para alunos e professores.',
  },
  {
    name: 'SIGAA',
    url: '#',
    icon: SIGAAIcon,
    description: 'Sistema Integrado de Gestão de Atividades Acadêmicas.',
  },
  {
    name: 'SUAP',
    url: '#',
    icon: SUAPIcon,
    description: 'Sistema Unificado de Administração Pública.',
  },
  {
    name: 'AI Studio: Roteiros',
    url: '#',
    icon: AIStudioIcon,
    description: 'Crie roteiros de estudo personalizados com IA.',
  },
  {
    name: 'AI Studio: Análise',
    url: '#',
    icon: AIStudioIcon,
    description: 'Ferramenta de IA para análise de dados e textos.',
  },
];


const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-300 antialiased flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-8 flex-grow">
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
            <AppGrid apps={appsData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;