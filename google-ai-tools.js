/**
 * Portal IFSC - Módulo de Ferramentas de IA (Google Education)
 * Diretoria de Tecnologia da Informação e Comunicação - IFSC
 */

export const googleAiToolsData = [
  // CATEGORIA: Assistentes de IA e Pesquisa Acadêmica
  {
    id: "gemini",
    name: "Gemini (Versão Gratuita)",
    category: "Assistentes de IA e Pesquisa Acadêmica",
    categoryId: "assistentes",
    description: "Assistente de IA do Google para brainstorming de projetos, explicações de conceitos complexos e suporte na escrita acadêmica com proteção de dados institucionais.",
    url: "https://gemini.google.com/",
    targetAudience: "Discentes, Docentes e Servidores",
    badgeTier: "Free Tier Educacional",
    instructions: "Acesse usando seu e-mail institucional do IFSC (@aluno.ifsc.edu.br ou @ifsc.edu.br). No ecossistema educacional, suas interações contam com proteções corporativas de privacidade e não são utilizadas no treinamento de modelos públicos.",
    pedagogicalTip: "Excelente para solicitar explicações didáticas em múltiplos níveis de complexidade, criar roteiros de estudos para semanas de provas e debater hipóteses preliminares de TCC ou projetos integradores.",
    keywords: ["brainstorming", "pesquisa", "escrita acadêmica", "conceitos complexos", "estudo", "tcc", "prompt", "texto"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1a73e8"/>
          <stop offset="50%" stop-color="#8ab4f8"/>
          <stop offset="100%" stop-color="#1e8e3e"/>
        </linearGradient>
      </defs>
      <path d="M24 4C24 15.0457 15.0457 24 4 24C15.0457 24 24 32.9543 24 44C24 32.9543 32.9543 24 44 24C32.9543 24 24 15.0457 24 4Z" fill="url(#geminiGrad)"/>
      <circle cx="24" cy="24" r="3" fill="#ffffff"/>
    </svg>`
  },
  {
    id: "notebooklm",
    name: "NotebookLM",
    category: "Assistentes de IA e Pesquisa Acadêmica",
    categoryId: "assistentes",
    description: "Seu bloco de notas inteligente alimentado por IA. Faça upload de PDFs de disciplinas, notas de aula ou links e gere resumos, guias de estudo e tire dúvidas com base estrita nos seus documentos.",
    url: "https://notebooklm.google.com/",
    targetAudience: "Alunos, Professores e Pesquisadores",
    badgeTier: "100% Gratuito no Ecossistema",
    instructions: "Crie cadernos organizados por Unidade Curricular. Carregue apostilas em PDF, anotações de aula do Google Docs ou links web. Todas as respostas da IA exibem citações exatas com números de página para conferência.",
    pedagogicalTip: "Experimente a função 'Audio Overview' para gerar uma discussão em áudio (estilo podcast sintetizado) entre dois debatedores virtuais explicando as principais ideias dos seus PDFs.",
    keywords: ["resumo", "pdf", "bloco de notas", "guia de estudo", "notas de aula", "audio overview", "citação", "pesquisa"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="32" height="36" rx="6" fill="#00823B"/>
      <rect x="14" y="12" width="20" height="4" rx="2" fill="#ffffff"/>
      <rect x="14" y="20" width="14" height="3" rx="1.5" fill="#a7f3d0"/>
      <rect x="14" y="26" width="18" height="3" rx="1.5" fill="#a7f3d0"/>
      <path d="M26 34L34 26" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="34" cy="34" r="5" fill="#eab308"/>
      <path d="M33 32L35 34L33 36" stroke="#161b22" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    id: "lens",
    name: "Google Lens",
    category: "Assistentes de IA e Pesquisa Acadêmica",
    categoryId: "assistentes",
    description: "Pesquisa visual e OCR avançado. Digitalize equações matemáticas, traduza textos de livros físicos instantaneamente e busque referências visuais com a câmera do celular.",
    url: "https://lens.google/",
    targetAudience: "Estudantes em Laboratórios e Bibliotecas",
    badgeTier: "Disponível na Web & Mobile",
    instructions: "Acesse pelo aplicativo Google no celular ou diretamente no navegador Chrome clicando com botão direito em qualquer imagem. Aponte a câmera para páginas de livros físicos ou quadros brancos.",
    pedagogicalTip: "Utilize a aba 'Trabalhos Escolares' (Homework) para enquadrar equações matemáticas manuscritas ou impressas e conferir o passo a passo da resolução algébrica.",
    keywords: ["ocr", "matemática", "equações", "câmera", "tradução", "livros físicos", "digitalização", "pesquisa"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="10" stroke="#00823B" stroke-width="3"/>
      <circle cx="24" cy="24" r="8" stroke="#1d4ed8" stroke-width="3"/>
      <circle cx="32" cy="16" r="3" fill="#cd191e"/>
      <circle cx="16" cy="32" r="2.5" fill="#facc15"/>
    </svg>`
  },

  // CATEGORIA: IA Integrada à Produtividade Estudantil e Docente
  {
    id: "docs-voice",
    name: "Ditado e Digitação por Voz (Documentos Google)",
    category: "IA Integrada à Produtividade Estudantil e Docente",
    categoryId: "produtividade",
    description: "Recurso de IA com transcrição avançada de fala para texto, ideal para ditar relatórios, artigos ou registrar ideias rapidamente sem digitar.",
    url: "https://docs.google.com/",
    targetAudience: "Docentes, Discentes e Inclusão/NAPNE",
    badgeTier: "Nativo no Google Docs",
    instructions: "No Google Docs aberto no Chrome, acesse o menu Ferramentas > Digitação por voz (ou utilize o atalho Ctrl + Shift + S). Clique no ícone de microfone e fale com voz clara. Você pode ditar pontuações dizendo 'ponto', 'vírgula' ou 'nova linha'.",
    pedagogicalTip: "Ferramenta essencial para estudantes com dificuldades motoras ou tendinite (LER/DORT), além de ser ótimo para professores ditarem notas de aulas e atas de reuniões pedagógicas.",
    keywords: ["texto", "transcrição", "fala para texto", "ditado", "acessibilidade", "relatórios", "google docs"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="6" width="28" height="36" rx="4" fill="#2563eb"/>
      <path d="M16 14H32M16 20H32M16 26H26" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
      <rect x="28" y="24" width="14" height="18" rx="7" fill="#00823B"/>
      <path d="M35 29V35M32 32C32 33.6569 33.3431 35 35 35C36.6569 35 38 33.6569 38 32M35 38V40M33 40H37" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: "docs-summary",
    name: "Resumos Automáticos por IA (Google Docs/Chat)",
    category: "IA Integrada à Produtividade Estudantil e Docente",
    categoryId: "produtividade",
    description: "Geração automática de resumos executivos no topo de documentos longos ou recapitulações de conversas em canais de projetos.",
    url: "https://docs.google.com/",
    targetAudience: "Comunidade IFSC e Grupos de Pesquisa",
    badgeTier: "Nativo no Workspace IFSC",
    instructions: "Ao redigir ou abrir um documento com mais de 3 páginas no Google Docs, abra a barra lateral esquerda (Estrutura do documento). Um resumo sugerido por IA estará disponível para inclusão com um clique.",
    pedagogicalTip: "Ajuda na síntese de projetos de extensão, relatórios de estágio e recapitulações de tópicos no Google Chat entre equipes acadêmicas.",
    keywords: ["resumo", "síntese", "documentos longos", "chat", "produtividade", "google docs", "texto"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="6" fill="#f8fafc" stroke="#00823B" stroke-width="2.5"/>
      <path d="M14 16H24M14 22H34M14 28H30M14 34H22" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M34 10L36 14L40 16L36 18L34 22L32 18L28 16L32 14L34 10Z" fill="#eab308"/>
    </svg>`
  },
  {
    id: "meet-captions",
    name: "Transcrição e Legendas Otimizadas (Google Meet)",
    category: "IA Integrada à Produtividade Estudantil e Docente",
    categoryId: "produtividade",
    description: "Acessibilidade e registro com legendas geradas por IA em tempo real e tradução automática durante reuniões e orientações virtuais.",
    url: "https://meet.google.com/",
    targetAudience: "Orientações, Bancas e Aulas Virtuais",
    badgeTier: "Nativo no Google Meet",
    instructions: "Durante qualquer videochamada no Google Meet com a conta institucional, clique no botão 'CC' (Ativar legendas). Em Configurações > Legendas, selecione o idioma e ative a tradução simultânea para português caso a palestra seja em inglês ou espanhol.",
    pedagogicalTip: "Recurso indispensável de inclusão e acessibilidade para alunos surdos ou com baixa audição, além de garantir concentração em ambientes ruidosos.",
    keywords: ["legendas", "acessibilidade", "transcrição", "google meet", "aulas virtuais", "tradução", "inclusão"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="10" width="26" height="28" rx="6" fill="#00823B"/>
      <path d="M32 20L42 14V34L32 28V20Z" fill="#15803d"/>
      <rect x="11" y="20" width="16" height="8" rx="2" fill="#ffffff" fill-opacity="0.25"/>
      <text x="14" y="26.5" font-family="sans-serif" font-weight="bold" font-size="7" fill="#ffffff">CC</text>
    </svg>`
  },
  {
    id: "gmail-smart",
    name: "Smart Compose e Respostas Inteligentes (Gmail)",
    category: "IA Integrada à Produtividade Estudantil e Docente",
    categoryId: "produtividade",
    description: "Preenchimento preditivo de texto baseado em IA para responder e-mails institucionais de forma mais rápida e formal.",
    url: "https://mail.google.com/",
    targetAudience: "Comunidade Acadêmica e Servidores",
    badgeTier: "Nativo no Gmail IFSC",
    instructions: "Habilitado por padrão no Webmail institucional IFSC. Ao compor mensagens formais para docentes, coordenações ou alunos, o Gmail sugere complementos de frases em tom suave. Pressione 'Tab' ou 'Seta Direita' para aceitar.",
    pedagogicalTip: "Contribui para a familiarização dos estudantes com normas de comunicação formal institucional e acelera respostas de rotina dos professores aos discentes.",
    keywords: ["texto", "gmail", "comunicação formal", "preditivo", "smart compose", "respostas inteligentes", "e-mail"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="10" width="32" height="28" rx="4" fill="#ffffff" stroke="#cd191e" stroke-width="2.5"/>
      <path d="M8 12L24 24L40 12" stroke="#cd191e" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M30 26L31.5 29.5L35 31L31.5 32.5L30 36L28.5 32.5L25 31L28.5 29.5L30 26Z" fill="#00823B"/>
    </svg>`
  },

  // CATEGORIA: IA para Programação e Ciência de Dados
  {
    id: "colab",
    name: "Google Colab (Plano Gratuito)",
    category: "IA para Programação e Ciência de Dados",
    categoryId: "programacao",
    description: "Ambiente em nuvem baseado em Jupyter Notebooks com acesso gratuito a GPUs e recursos de IA (como autocompletar código) para estudantes de tecnologia e pesquisadores executarem scripts de Python e Machine Learning.",
    url: "https://colab.research.google.com/",
    targetAudience: "Cursos de TI, Engenharias e Pesquisadores",
    badgeTier: "GPU T4 Gratuita (Free Tier)",
    instructions: "Acesse o site com sua conta Google e crie um novo notebook. Para utilizar a aceleração por GPU sem custos, vá em Ambiente de Execução > Alterar tipo de ambiente de execução > Acelerador de Hardware: T4 GPU. A assistência de IA para autocompletar código e correção de erros já vem integrada.",
    pedagogicalTip: "Permite que turmas inteiras de computação e engenharias treinem modelos de redes neurais, gráficos e análise estatística de dados sem depender de computadores com placas de vídeo caras nos laboratórios.",
    keywords: ["código", "python", "jupyter", "gpu gratuita", "machine learning", "ciência de dados", "ia", "programação"],
    icon: `<svg viewBox="0 0 48 48" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C12 18.4772 16.4772 14 22 14C25.5 14 28.5 15.8 30.2 18.6L26.6 20.8C25.6 19.1 23.9 18 22 18C18.6863 18 16 20.6863 16 24C16 27.3137 18.6863 30 22 30C23.9 30 25.6 28.9 26.6 27.2L30.2 29.4C28.5 32.2 25.5 34 22 34C16.4772 34 12 29.5228 12 24Z" fill="#f59e0b"/>
      <path d="M36 24C36 29.5228 31.5228 34 26 34C22.5 34 19.5 32.2 17.8 29.4L21.4 27.2C22.4 28.9 24.1 30 26 30C29.3137 30 32 27.3137 32 24C32 20.6863 29.3137 18 26 18C24.1 18 22.4 19.1 21.4 20.8L17.8 18.6C19.5 15.8 22.5 14 26 14C31.5228 14 36 18.4772 36 24Z" fill="#00823B"/>
    </svg>`
  }
];

export const categoriesList = [
  { id: "all", name: "Todas as Ferramentas", count: 8 },
  { id: "assistentes", name: "Assistentes & Pesquisa", count: 3 },
  { id: "produtividade", name: "Produtividade Acadêmica", count: 4 },
  { id: "programacao", name: "Programação & Dados", count: 1 }
];
