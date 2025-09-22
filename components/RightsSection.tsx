import AppCard from './CallToAction.js';
import type { App } from '../types.js';

// Colleagues can add their apps to this list via a GitHub PR.
const appsData: App[] = [
  {
    name: 'Portal da Privacidade',
    description: 'Página informativa sobre a Lei Geral de Proteção de Dados (LGPD) no IFSC. O app original deste repositório.',
    url: '#',
    githubUrl: 'https://github.com/ifsc/app-portal-poc',
    imageUrl: 'https://picsum.photos/seed/privacy/400/200',
    tags: ['Institucional', 'LGPD', 'Segurança'],
  },
  {
    name: 'Sistema de Inscrições',
    description: 'Plataforma para gerenciar inscrições em eventos e cursos de extensão do IFSC.',
    url: 'https://inscricoes.ifsc.edu.br/',
    githubUrl: 'https://github.com/ifsc/sistema-inscricoes',
    imageUrl: 'https://picsum.photos/seed/inscricoes/400/200',
    tags: ['Extensão', 'Eventos', 'Acadêmico'],
  },
  {
    name: 'Repositório Institucional',
    description: 'Acesso à produção científica, acadêmica e administrativa do Instituto Federal de Santa Catarina.',
    url: 'https://repositorio.ifsc.edu.br/',
    githubUrl: 'https://github.com/ifsc/repositorio',
    imageUrl: 'https://picsum.photos/seed/repo/400/200',
    tags: ['Pesquisa', 'Educação', 'Repositório'],
  },
    {
    name: 'Moodle Institucional',
    description: 'Ambiente virtual de ensino e aprendizagem para os cursos e atividades do IFSC.',
    url: 'https://moodle.ifsc.edu.br/',
    githubUrl: 'https://github.com/moodle/moodle',
    imageUrl: 'https://picsum.photos/seed/moodle/400/200',
    tags: ['EAD', 'Ensino', 'Acadêmico'],
  },
];

const tagColorClasses = {
  default: 'bg-gray-200 text-gray-700',
  Institucional: 'bg-blue-100 text-blue-800',
  LGPD: 'bg-yellow-100 text-yellow-800',
  Segurança: 'bg-red-100 text-red-800',
  Extensão: 'bg-green-100 text-green-800',
  Eventos: 'bg-purple-100 text-purple-800',
  Acadêmico: 'bg-indigo-100 text-indigo-800',
  Pesquisa: 'bg-pink-100 text-pink-800',
  Educação: 'bg-teal-100 text-teal-800',
  Repositório: 'bg-orange-100 text-orange-800',
  EAD: 'bg-cyan-100 text-cyan-800',
  Ensino: 'bg-lime-100 text-lime-800',
};

const AppGrid = () => {
  return (
    <section id="apps" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nossas Aplicações</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Ferramentas e sistemas desenvolvidos para facilitar o dia a dia da comunidade acadêmica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FIX: The key prop is special in React and should not cause a type error.
              The underlying issue is in how AppCard is typed. I've fixed that in CallToAction.tsx.
              The error about 'key' not being assignable to 'AppCardProps' is resolved by correctly typing AppCard as a React Function Component. */}
          {appsData.map((app) => (
            <AppCard key={app.name} app={app} tagColors={tagColorClasses} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppGrid;