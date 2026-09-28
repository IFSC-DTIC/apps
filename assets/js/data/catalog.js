/**
 * Módulo de Dados e Catálogo de Ferramentas Institucionais do IFSC
 * Suporte a carregamento dinâmico de apps.json e agents.json com dados embutidos de alta disponibilidade
 */

const CDN_ICONS = 'https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png';

// Coleção base de ferramentas institucionais IFSC (Fallback resiliente offline-first)
export const defaultToolsCategories = [
  {
    "name": "LGPD",
    "slug": "lgpd",
    "iconKey": "lgpd",
    "apps": [
      {
        "id": "guardiao",
        "name": "Guardião LGPD - IFSC",
        "url": "https://ai.studio/apps/drive/1M1hyJa3d3JFzhXOpZVoVRFsWJZLiUXwv?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Conformidade",
        "iconKey": "lgpd",
        "description": "Ferramenta de Anonimização de Dados para o Contexto do IFSC.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "LGPD OK",
        "tags": [
          "lgpd",
          "anonimização",
          "privacidade",
          "dados sensíveis",
          "conformidade",
          "ot04",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "chatbot",
        "name": "Chatbot LGPD para Relatórios",
        "url": "https://ai.studio/apps/drive/1Dgn-dkUoaGxiGLFwFXDBrEGPuu1kzUPR?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Relatórios",
        "iconKey": "lgpd",
        "description": "Assistente Conversacional para Conformidade e Geração de Relatórios no IFSC.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "LGPD OK",
        "tags": [
          "lgpd",
          "chatbot",
          "relatórios",
          "conformidade",
          "cgd",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "ripd",
        "name": "IFSC-DTIC-CGD: Form2RIPD",
        "url": "https://ai.studio/apps/drive/1fv20kTnlkPYefuOFIXP2bEo3ld8p8th7?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Gerador RIPD",
        "iconKey": "lgpd",
        "description": "Gerador de Relatórios de Impacto à Proteção de Dados (RIPD) para LGPD no IFSC.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "LGPD OK",
        "tags": [
          "ripd",
          "lgpd",
          "relatório de impacto",
          "cgd",
          "dtic",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "mapeamento",
        "name": "Automação de Mapeamento de Dados LGPD",
        "url": "https://ai.studio/apps/drive/1EvvVk2lZ0-4HHPokSV-ZBQHkwbHELDxA?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Mapeamento",
        "iconKey": "lgpd",
        "description": "Plataforma do Instituto Federal de Santa Catarina para inventário e mapeamento de dados.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "LGPD OK",
        "tags": [
          "mapeamento",
          "inventário",
          "lgpd",
          "dados institucionais",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      }
    ]
  },
  {
    "name": "Processos",
    "slug": "processos",
    "iconKey": "bpmn",
    "apps": [
      {
        "id": "sezio",
        "name": "sez.iO - Agente IA",
        "url": "https://ai.studio/apps/drive/1z-e1wW2LvCStdG9ElsIeNt3x4-Q5tqOZ?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Modelagem",
        "iconKey": "bpmn",
        "description": "Assistente de Modelagem de Processos e Relatórios LGPD.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "tags": [
          "bpmn",
          "processos",
          "modelagem",
          "sezio",
          "fluxos",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "lardic",
        "name": "LaRDiC - Laboratório de Roteirização e Documentação",
        "url": "https://ai.studio/apps/drive/1UDGQ0KWeFrb47zM5koH2NJooFXos7Q46?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "CProc DocX",
        "iconKey": "bpmn",
        "description": "Sistema CProc: Conversão BPMN/DMN para ProcessoIFSC em formato DocX.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "tags": [
          "lardic",
          "bpmn",
          "dmn",
          "docx",
          "cproc",
          "processos",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "pedemeia",
        "name": "Pé-de-Meia",
        "url": "https://ai.studio/apps/c3f584f3-25d8-48b5-b8af-dd0ac9e001d9?fullscreenApplet=true",
        "badge": "SGP IFSC",
        "iconKey": "bpmn",
        "description": "Assistente de formatação SGP - Programa Pé-de-Meia.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Seguro para Estudantes",
        "tags": [
          "pé-de-meia",
          "sgp",
          "estudantes",
          "formatação",
          "apoio financeiro",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "pedemeia-api",
        "name": "ApPé-de-MeIA-API",
        "url": "https://ai.studio/apps/73333497-5550-41ad-a464-f63f8e87b0f7?fullscreenApplet=true",
        "badge": "API REST",
        "iconKey": "bpmn",
        "description": "API de integração do assistente de formatação SGP - Pé-de-Meia.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "tags": [
          "api",
          "pé-de-meia",
          "integração",
          "rest",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "processo",
        "name": "Texto ➔ Processo ➔ Especificação",
        "url": "https://ai.studio/apps/drive/1GvqPgG2sjuoaw2XM89jj7Hfk3z4V9GO9?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "BPMN Automágico",
        "iconKey": "bpmn",
        "description": "Texto -> Processo -> Especificação de Sistema automatizada com IA.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "tags": [
          "bpmn",
          "especificação",
          "processos",
          "automação",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      }
    ]
  },
  {
    "name": "Administrativo",
    "slug": "administrativo",
    "iconKey": "siads",
    "apps": [
      {
        "id": "padronizacao",
        "name": "Ferramenta de Padronização de Inventário",
        "url": "https://ai.studio/apps/drive/12kTlPi2J1wxLKOskn_xAeb-CwJsBMv09?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Inventário SIADS",
        "iconKey": "siads",
        "description": "SIADS - Unifique e higienize dados de inventário de múltiplos campi do IFSC de forma inteligente.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "tags": [
          "siads",
          "inventário",
          "patrimônio",
          "padronização",
          "bens",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      },
      {
        "id": "siads",
        "name": "SIADS - Agregador de Inventário com IA",
        "url": "https://ai.studio/apps/drive/1yZm3Z3PbrXS0316yJVm12ScHfSqxFFJ0?showAssistant=true&showPreview=true&fullscreenApplet=true",
        "badge": "Agregador SIADS",
        "iconKey": "siads",
        "description": "Agregador e consolidador de inventário de bens com suporte de IA para o IFSC.",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "tags": [
          "siads",
          "inventário",
          "consolidação",
          "bens",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      }
    ]
  },
  {
    "name": "Gestão de Pessoas",
    "slug": "gestao-de-pessoas",
    "iconKey": "rsctae",
    "apps": [
      {
        "id": "rsctae",
        "name": "RSC-TAE - Assistente AI",
        "url": "https://ai.studio/apps/da771d45-41e2-413d-b159-67aed31b50c4?fullscreenApplet=true",
        "badge": "RSC-TAE Referência",
        "iconKey": "rsctae",
        "description": "Assistente de extração e organização preliminar de dados para RSC-TAE (caráter de referência técnica).",
        "ot04_status": "Apoio de Referência",
        "safety_rating": "Sem Caráter Normativo",
        "tags": [
          "rsc-tae",
          "gestão de pessoas",
          "carreira",
          "servidores",
          "taes",
          "publico",
          "gmail"
        ],
        "access_scope": "publico_gmail",
        "domain_requirement": "Público: funciona com qualquer @gmail.com ou conta institucional"
      }
    ]
  }
];

// Coleção base de especialistas Gems IFSC (Fallback resiliente offline-first)
export const defaultGemsCategories = [
  {
    "name": "Servidores",
    "slug": "servidores",
    "iconKey": "taes",
    "apps": [
      {
        "id": "agent-sibi",
        "name": "Especialista SiBI",
        "url": "https://gemini.google.com/gem/98588692d34c",
        "badge": "Bibliotecas",
        "description": "Assistente especializado para os profissionais do Sistema Integrado de Bibliotecas do IFSC (SiBI). Focado em normalização ABNT, consultas ao catálogo SophiA e políticas de acervo institucional. (Acesso restrito às contas institucionais @ifsc.edu.br e @aluno.ifsc.edu.br).",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "LGPD OK",
        "access_scope": "exclusivo_ifsc",
        "domain_requirement": "Exclusivo @ifsc.edu.br e @aluno.ifsc.edu.br (Não abre com @gmail.com)",
        "tags": [
          "sibi",
          "biblioteca",
          "abnt",
          "sophia",
          "livros",
          "acervo",
          "servidores",
          "ot04",
          "exclusivo-ifsc"
        ]
      },
      {
        "id": "agent-srp",
        "name": "Silv.IA - Compras e Licitações",
        "url": "https://gemini.google.com/gem/10GI7VXwtapdgUxFfCp-14-kKJULn7Ord?usp=sharing",
        "badge": "Compras & SIPAC",
        "description": "Assistente virtual para Gestão Pública. Automatiza a geração de Atas de Registro de Preços (ARPs) pelo SIPAC e fornece consultoria técnica sobre compras baseada na Lei nº 14.133/2021. (Acesso restrito às contas institucionais @ifsc.edu.br e @aluno.ifsc.edu.br).",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "access_scope": "exclusivo_ifsc",
        "domain_requirement": "Exclusivo @ifsc.edu.br e @aluno.ifsc.edu.br (Não abre com @gmail.com)",
        "tags": [
          "licitações",
          "compras",
          "sipac",
          "arp",
          "lei 14.133",
          "servidores",
          "ot04",
          "exclusivo-ifsc"
        ]
      },
      {
        "id": "agent-dgp",
        "name": "DGP (FAQs - Tira Dúvidas)",
        "url": "https://gemini.google.com/gem/1qDLyL7Tm_wuF-1zhFVK7ZZV7xcI4p41I?usp=sharing",
        "badge": "Gestão Pessoas",
        "description": "Consultor especializado em Gestão de Pessoas do IFSC. Auxilia na interpretação da Resolução Consup nº 11/2019 e em FAQs sobre normas, desenvolvimento profissional, progressão e licença capacitação. (Acesso restrito às contas institucionais @ifsc.edu.br e @aluno.ifsc.edu.br).",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "Apoio Técnico",
        "access_scope": "exclusivo_ifsc",
        "domain_requirement": "Exclusivo @ifsc.edu.br e @aluno.ifsc.edu.br (Não abre com @gmail.com)",
        "tags": [
          "dgp",
          "gestão de pessoas",
          "carreira",
          "progressão",
          "capacitação",
          "servidores",
          "ot04",
          "exclusivo-ifsc"
        ]
      },
      {
        "id": "agent-cgd",
        "name": "CGD - Governança de TI",
        "url": "https://gemini.google.com/gem/1QNvQjzJVhZF8B71gJBdX_0G3_HrU4Fyb?usp=sharing",
        "badge": "Governança TI",
        "description": "Especialista em Governança de TI e Gestão de Dados do IFSC. Fornece respostas técnicas e precisas estritamente baseadas nas normativas oficiais do IFSC e preceitos da OT 04/2025. (Acesso restrito às contas institucionais @ifsc.edu.br e @aluno.ifsc.edu.br).",
        "ot04_status": "Homologado IFSC",
        "safety_rating": "LGPD OK",
        "access_scope": "exclusivo_ifsc",
        "domain_requirement": "Exclusivo @ifsc.edu.br e @aluno.ifsc.edu.br (Não abre com @gmail.com)",
        "tags": [
          "cgd",
          "governança",
          "dtic",
          "ti",
          "dados",
          "ot04",
          "servidores",
          "exclusivo-ifsc"
        ]
      }
    ]
  },
  {
    "name": "Professores",
    "slug": "professores",
    "iconKey": "professores",
    "apps": []
  },
  {
    "name": "Alunos",
    "slug": "alunos",
    "iconKey": "alunos",
    "apps": []
  }
];

export const googleEduCategories = [
  {
    name: "Assistentes & Criação IA",
    slug: "assistentes-criacao",
    apps: [
      {
        id: "g-gemini",
        name: "Google Gemini",
        url: "https://gemini.google.com/",
        badge: "IA Geral Multimodal",
        iconUrl: "https://www.gstatic.com/images/branding/productlogos/gemini/v1/web-96dp/logo_gemini_color_1x_web_96dp.png",
        description: "Assistente multimodal inteligente para análise de documentos, elaboração pedagógica e tutoria personalizada."
      },
      {
        id: "g-notebook",
        name: "Google Notebook",
        url: "https://notebook.google.com/",
        badge: "Caderno & RAG",
        iconUrl: "https://www.gstatic.com/images/branding/productlogos/notebooklm/v1/web-96dp/logo_notebooklm_color_1x_web_96dp.png",
        description: "Caderno inteligente baseado em IA que sintetiza fontes, PDFs e documentos em notas e podcasts didáticos."
      },
      {
        id: "g-ai-studio",
        name: "Google AI Studio",
        url: "https://aistudio.google.com/",
        badge: "Vibe Coding & IA",
        iconUrl: "https://www.gstatic.com/images/branding/productlogos/ai_studio/v1/web-96dp/logo_ai_studio_color_1x_web_96dp.png",
        description: "Plataforma de prototipagem rápida e desenvolvimento com modelos Gemini 3 e deploy no Cloud Run."
      },
      {
        id: "g-stitch",
        name: "Google Stitch (Google Labs)",
        url: "https://stitch.withgoogle.com/",
        badge: "Vibe Design & UI",
        iconUrl: "https://www.gstatic.com/labs-code/stitch/favicon-192x192.png",
        description: "Tela de Vibe Design que transforma comandos em linguagem natural em interfaces web/mobile prontas."
      },
      {
        id: "g-flowmusic",
        name: "Flow Music (MusicFX)",
        url: "https://www.flowmusic.app/",
        badge: "Música & Áudio IA",
        iconUrl: `${CDN_ICONS}/google-gemini.png`,
        description: "Criação e exploração musical generativa com IA do Google Labs e DeepMind a partir de prompts em linguagem natural."
      },
      {
        id: "g-vids",
        name: "Google Vids",
        url: "https://workspace.google.com/products/vids/",
        badge: "Vídeos com IA",
        iconUrl: "https://www.gstatic.com/images/branding/productlogos/vids/v1/web-96dp/logo_vids_color_1x_web_96dp.png",
        description: "Criação colaborativa de videoaulas, roteiros didáticos e apresentações animadas assistidas por IA."
      }
    ]
  },
  {
    name: "Produtividade Acadêmica (Workspace IFSC)",
    slug: "produtividade-workspace",
    apps: [
      {
        id: "g-docs-voice",
        name: "Ditado e Digitação por Voz (Docs)",
        url: "https://docs.google.com/",
        badge: "Acessibilidade & Fala",
        iconUrl: `${CDN_ICONS}/google-docs.png`,
        ot04_status: "Homologado OT 04",
        safety_rating: "LGPD OK",
        description: "Transcrição avançada de fala para texto no Google Docs com a conta institucional IFSC. Ideal para ditar relatórios e projetos de inclusão.",
        tags: ["fala", "ditado", "acessibilidade", "docs", "transcrição", "ot04"]
      },
      {
        id: "g-docs-summary",
        name: "Resumos Automáticos por IA (Docs/Chat)",
        url: "https://docs.google.com/",
        badge: "Síntese de Texto",
        iconUrl: `${CDN_ICONS}/google-docs.png`,
        ot04_status: "Homologado OT 04",
        safety_rating: "LGPD OK",
        description: "Geração de resumos executivos automáticos no topo de documentos longos e recapitulações didáticas em canais do Google Chat.",
        tags: ["resumo", "síntese", "docs", "chat", "texto", "ot04"]
      },
      {
        id: "g-meet-captions",
        name: "Legendas e Transcrição em Tempo Real (Meet)",
        url: "https://meet.google.com/",
        badge: "Legendas & Inclusão",
        iconUrl: `${CDN_ICONS}/google-meet.png`,
        ot04_status: "Homologado OT 04",
        safety_rating: "LGPD OK",
        description: "Legendas instantâneas com IA e tradução simultânea durante aulas, bancas de TCC e reuniões pedagógicas virtuais.",
        tags: ["legendas", "meet", "acessibilidade", "aulas", "tradução", "ot04"]
      },
      {
        id: "g-gmail-smart",
        name: "Smart Compose e Respostas Inteligentes (Gmail)",
        url: "https://mail.google.com/",
        badge: "Comunicação Formal",
        iconUrl: `${CDN_ICONS}/gmail.png`,
        ot04_status: "Homologado OT 04",
        safety_rating: "LGPD OK",
        description: "Preenchimento preditivo de texto no e-mail institucional IFSC para agilizar respostas pedagógicas e comunicação formal.",
        tags: ["gmail", "smart compose", "e-mail", "comunicação", "ot04"]
      },
      {
        id: "g-lens",
        name: "Google Lens (OCR, Matemática & Tradução)",
        url: "https://lens.google/",
        badge: "OCR & Matemática",
        iconUrl: "https://www.gstatic.com/images/branding/productlogos/lens/v1/web-96dp/logo_lens_color_1x_web_96dp.png",
        ot04_status: "Uso Educacional",
        safety_rating: "Apoio a Estudos",
        description: "Digitalização de equações matemáticas manuscritas com passo a passo algébrico, OCR de livros e tradução visual instantânea.",
        tags: ["lens", "ocr", "matemática", "equações", "câmera", "tradução", "estudo", "ot04"]
      }
    ]
  },
  {
    name: "Engenharia, Agentes & Código",
    slug: "engenharia-codigo",
    apps: [
      {
        id: "g-antigravity-2",
        name: "Antigravity 2.0",
        url: "https://antigravity.google/download#antigravity-2",
        badge: "Hub & Orquestração",
        iconUrl: "https://antigravity.google/apple-touch-icon.png",
        description: "Central de comando para gerenciar projetos, automações e orquestrar múltiplos agentes de IA locais em paralelo."
      },
      {
        id: "g-antigravity-ide",
        name: "Antigravity IDE (Standalone)",
        url: "https://antigravity.google/download#antigravity-ide",
        badge: "IDE Autônoma",
        iconUrl: "https://antigravity.google/assets/image/antigravity-logo.png",
        description: "Ambiente de desenvolvimento integrado (IDE) autônomo com motor nativo de agentes, autocompletamento e artefatos."
      },
      {
        id: "g-antigravity-cli",
        name: "Google Antigravity CLI",
        url: "https://antigravity.google/product/antigravity-cli",
        badge: "Terminal & Agentes",
        iconUrl: "https://antigravity.google/apple-touch-icon.png",
        description: "Interface de linha de comando (TUI) leve e veloz para invocar, monitorar e interagir com agentes no terminal."
      },
      {
        id: "g-jules",
        name: "Jules (Google Labs)",
        url: "https://jules.google.com/",
        badge: "Agente de Código",
        iconUrl: "https://www.gstatic.com/labs-code/code-app/favicon-48x48.png",
        description: "Agente autônomo integrado ao GitHub que clona repositórios e programa backend, testes unitários e correções."
      },
      {
        id: "g-colab",
        name: "Google Colab",
        url: "https://colab.research.google.com/",
        badge: "Python & IA",
        iconUrl: "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/google-colab.png",
        description: "Ambiente Jupyter interativo na nuvem com assistência de código IA e aceleração por GPU/TPU."
      }
    ]
  },
  {
    name: "Google Labs & Micro-Aplicações",
    slug: "google-labs",
    apps: [
      {
        id: "g-labs-hub",
        name: "Google Labs (Hub Experimental)",
        url: "https://labs.google/",
        badge: "Hub Experimental",
        iconUrl: `${CDN_ICONS}/google.png`,
        description: "Hub de experimentos de IA (ImageFX, VideoFX, MusicFX, Pomelli, Opal). Nota: Nem todas as ferramentas estão disponíveis na licença IFSC ou podem exigir lista de espera."
      },
      {
        id: "g-opal",
        name: "Google Opal (Google Labs)",
        url: "https://opal.google",
        badge: "No-Code & Mini-Apps",
        iconUrl: "https://opal.google/images/favicon.png",
        description: "Criação de miniaplicativos de IA descrevendo fluxos em linguagem natural com link compartilhável sem código."
      },
      {
        id: "g-pomelli",
        name: "Google Pomelli (Google Labs)",
        url: "https://labs.google/pomelli",
        badge: "Marketing & Branding",
        iconUrl: "https://www.gstatic.com/_/bettany/MjAyNjA5MjMuMDJfcDA/foundry_about%2Fassets/favicon-48x48.png",
        description: "Assistente de marketing que analisa a identidade visual e tom de voz de um site para gerar postagens e criativos."
      },
      {
        id: "g-workspace-studio",
        name: "Google Workspace Studio",
        url: "https://studio.workspace.google.com/",
        badge: "Workspace & IA",
        iconUrl: "https://www.gstatic.com/images/branding/productlogos/workspace_studio/v1/web-96dp/logo_workspace_studio_color_1x_web_96dp.png",
        description: "Plataforma de criação, automação e desenvolvimento de soluções inteligentes e fluxos no Workspace."
      }
    ]
  }
];

// Coleção oficial de soluções Microsoft 365 Copilot (Plano A1 IFSC)
export const microsoftCategories = [
  {
    name: "Assistentes & Chat",
    slug: "assistentes-chat",
    apps: [
      {
        id: "ms-copilot",
        name: "Microsoft Copilot",
        url: "https://copilot.microsoft.com/",
        badge: "IA Geral & Web",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-copilot.png`,
        description: "Assistente inteligente da Microsoft para pesquisa web, geração de textos e resolução de problemas acadêmicos."
      },
      {
        id: "ms-bing",
        name: "Copilot no Bing",
        url: "https://www.bing.com/chat",
        badge: "Busca & DALL-E",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-bing.png`,
        description: "Mecanismo de busca fundamentado com IA generativa, síntese de páginas da web e geração de imagens."
      },
      {
        id: "ms-github-copilot",
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        badge: "Código & Programação",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/github-copilot.png`,
        description: "Parceiro de programação por IA para professores, técnicos de TI e estudantes de cursos de computação do IFSC."
      },
      {
        id: "ms-edge",
        name: "Microsoft Edge (com Copilot)",
        url: "https://www.microsoft.com/edge",
        badge: "Navegador com IA",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-edge.png`,
        description: "Navegador com barra lateral inteligente para resumir artigos, comparar documentos e redigir e-mails."
      }
    ]
  },
  {
    name: "Produtividade & Office Web",
    slug: "produtividade-escrita",
    apps: [
      {
        id: "ms-office-web",
        name: "Office Web (Portal Central)",
        url: "https://www.office.com/",
        badge: "Office Web (sem Desktop)",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-office.png`,
        description: "Portal central do Office Web online com Word, Excel, PowerPoint e OneNote (sem instalador desktop)."
      },
      {
        id: "ms-word",
        name: "Microsoft Word (Office Web)",
        url: "https://word.office.com/",
        badge: "Word Web (sem Desktop)",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-word.png`,
        description: "Criação, reescrita e resumo de artigos científicos, relatórios e projetos no navegador com IA."
      },
      {
        id: "ms-excel",
        name: "Microsoft Excel (Office Web)",
        url: "https://excel.office.com/",
        badge: "Excel Web (sem Desktop)",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-excel.png`,
        description: "Exploração de planilhas de dados, fórmulas automatizadas, gráficos preditivos e análises estatísticas."
      },
      {
        id: "ms-powerpoint",
        name: "Microsoft PowerPoint (Office Web)",
        url: "https://powerpoint.office.com/",
        badge: "PowerPoint Web (sem Desktop)",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-powerpoint.png`,
        description: "Geração de apresentações e slides conceituais rápidos diretamente no navegador."
      },
      {
        id: "ms-onenote",
        name: "Microsoft OneNote (Office Web)",
        url: "https://www.onenote.com/",
        badge: "OneNote Web (sem Desktop)",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-onenote.png`,
        description: "Caderno digital para anotações de aulas e reuniões com planos de estudo organizados."
      }
    ]
  },
  {
    name: "Colaboração & Nuvem",
    slug: "colaboracao-nuvem",
    apps: [
      {
        id: "ms-teams",
        name: "Microsoft Teams",
        url: "https://teams.microsoft.com/",
        badge: "Reuniões & Aulas",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-teams.png`,
        description: "Videoconferências e chats com transcrição ao vivo, geração de atas automáticas e ativação da licença A1."
      },
      {
        id: "ms-onedrive",
        name: "Microsoft OneDrive (1 TB)",
        url: "https://onedrive.live.com/",
        badge: "Nuvem 1 TB",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-onedrive.png`,
        description: "1 TB de armazenamento online gratuito institucional com pesquisa inteligente em PDFs, imagens e arquivos."
      },
      {
        id: "ms-powerbi",
        name: "Power BI (com IA)",
        url: "https://app.powerbi.com/",
        badge: "Incluso no A1",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/powerbi.png`,
        description: "Dashboards analíticos inteligentes e relatórios com IA inclusos no licenciamento A1 do IFSC."
      },
      {
        id: "ms-powerautomate",
        name: "Power Automate (Copilot)",
        url: "https://make.powerautomate.com/",
        badge: "Automação de Fluxos",
        platform: "microsoft",
        iconUrl: `${CDN_ICONS}/microsoft-power-automate.png`,
        description: "Criação de fluxos de trabalho e automações de processos em linguagem natural assistida por IA."
      }
    ]
  }
];

// Utilitário para achatar coleções
export function flattenCategories(categories) {
  const list = [];
  if (!Array.isArray(categories)) return list;
  categories.forEach(cat => {
    (cat.apps || []).forEach(app => {
      list.push({
        ...app,
        categoryName: cat.name,
        categorySlug: cat.slug,
        iconKey: cat.iconKey || app.iconKey
      });
    });
  });
  return list;
}

/**
 * Carrega bases de dados com cache-busting e fallback resiliente
 */
export async function loadCatalog() {
  const ts = Date.now();
  let toolsCategories = defaultToolsCategories;
  let gemsCategories = defaultGemsCategories;

  try {
    const [appsRes, agentsRes] = await Promise.allSettled([
      fetch('./apps.json?v=' + ts).then(r => r.ok ? r.json() : null),
      fetch('./agents.json?v=' + ts).then(r => r.ok ? r.json() : null)
    ]);

    if (appsRes.status === 'fulfilled' && Array.isArray(appsRes.value) && appsRes.value.length > 0) {
      toolsCategories = appsRes.value;
    }
    if (agentsRes.status === 'fulfilled' && Array.isArray(agentsRes.value) && agentsRes.value.length > 0) {
      gemsCategories = agentsRes.value;
    }
  } catch (_) {
    // Fallback garantido
  }

  const allTools = flattenCategories(toolsCategories);
  const allGems = flattenCategories(gemsCategories);
  const allGoogle = flattenCategories(googleEduCategories);
  const allMicrosoft = flattenCategories(microsoftCategories);

  const appMap = {};
  [...allTools, ...allGems, ...allGoogle, ...allMicrosoft].forEach(app => {
    appMap[app.id] = app;
  });

  return {
    toolsCategories,
    gemsCategories,
    googleEduCategories,
    microsoftCategories,
    allTools,
    allGems,
    allGoogle,
    allMicrosoft,
    appMap
  };
}
