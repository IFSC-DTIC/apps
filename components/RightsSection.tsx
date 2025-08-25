
import React from 'react';
import type { Right } from '../types';
import {
  UserCircleIcon,
  PencilIcon,
  EyeSlashIcon,
  ArrowRightLeftIcon,
  TrashIcon,
  InfoIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowUturnLeftIcon,
  QuestionMarkCircleIcon,
} from './icons/FeatureIcons';

const rightsData: Right[] = [
  {
    icon: <UserCircleIcon />,
    title: 'Confirmação e Acesso',
    description: 'Você pode confirmar se seus dados são tratados por nós e solicitar o acesso a eles.',
  },
  {
    icon: <PencilIcon />,
    title: 'Correção de Dados',
    description: 'Solicite a correção de dados incompletos, inexatos ou desatualizados a qualquer momento.',
  },
  {
    icon: <EyeSlashIcon />,
    title: 'Anonimização e Bloqueio',
    description: 'Direito de solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.',
  },
  {
    icon: <ArrowRightLeftIcon />,
    title: 'Portabilidade',
    description: 'Seus dados podem ser transferidos para outro fornecedor de serviço, mediante sua requisição.',
  },
  {
    icon: <TrashIcon />,
    title: 'Eliminação de Dados',
    description: 'Peça a eliminação dos seus dados pessoais tratados com base no seu consentimento.',
  },
  {
    icon: <InfoIcon />,
    title: 'Informação de Compartilhamento',
    description: 'Saiba com quais entidades públicas ou privadas o IFSC compartilhou seus dados.',
  },
  {
    icon: <ChatBubbleBottomCenterTextIcon />,
    title: 'Informação sobre Consentimento',
    description: 'Receba informações claras sobre a possibilidade de não fornecer consentimento e suas consequências.',
  },
  {
    icon: <ArrowUturnLeftIcon />,
    title: 'Revogação do Consentimento',
    description: 'Você pode revogar seu consentimento para o tratamento de dados a qualquer momento.',
  },
];

const RightCard: React.FC<{ right: Right }> = ({ right }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0 bg-green-100 text-green-600 p-3 rounded-full">
        {right.icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{right.title}</h3>
      </div>
    </div>
    <p className="mt-4 text-gray-600">{right.description}</p>
  </div>
);

const RightsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Conheça Seus Direitos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            A LGPD garante a você, titular dos dados, uma série de direitos. Entenda os principais:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rightsData.map((right) => (
            <RightCard key={right.title} right={right} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightsSection;
