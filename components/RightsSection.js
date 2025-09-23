import AppItem from './CallToAction.js';
import type { App } from '../types.js';
import {
  PrivacyIcon,
  InscricoesIcon,
  RepositorioIcon,
  MoodleIcon,
  AIStudioIcon,
  SIGAAIcon,
  SUAPIcon
} from './icons/FeatureIcons.js';


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


const AppGrid = () => {
  return (
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-4">
        {appsData.map((app) => (
          <AppItem key={app.name} app={app} />
        ))}
      </div>
  );
};

export default AppGrid;