# Portal de Inteligência Artificial e Aplicações - IFSC

[![Status: Homologado OT 04/2025](https://img.shields.io/badge/IFSC-OT%2004%2F2025-00823B.svg)](https://www.ifsc.edu.br/web/portal-do-servidor/gestao-de-dados)
[![Arquitetura: Zero-Backend](https://img.shields.io/badge/Arquitetura-Zero--Backend-blue.svg)](ARQUITETURA.md)
[![Conformidade: LGPD & ECA](https://img.shields.io/badge/Conformidade-LGPD%20%26%20ECA-success.svg)](SEGURANCA.md)
[![Hospedagem: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-informational.svg)](https://apps.ifsc.edu.br/)

🛡️ **Portal oficial de diretrizes, ferramentas homologadas e agentes especialistas de Inteligência Artificial (IA)** do Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina (IFSC), coordenado pela **Diretoria de Tecnologia da Informação e Comunicação (DTIC)** e pela **Coordenadoria de Gestão de Dados (CGD)**.

Disponível em: **[https://apps.ifsc.edu.br/](https://apps.ifsc.edu.br/)**

---

## 🏛️ Orientação Técnica nº 04/2025 (CGD / DTIC - IFSC)

Este portal foi concebido e configurado para operacionalizar as diretrizes da **Orientação Técnica nº 04/2025**, elaborada pela Coordenadoria de Gestão de Dados (CGD/DTIC) do IFSC, que normatiza o uso seguro, ético e responsável de IA por toda a comunidade acadêmica (estudantes, docentes e servidores):

1. **Priorização de Plataformas Homologadas:** Servidores e alunos devem priorizar o uso das ferramentas integradas às suas contas institucionais (`@ifsc.edu.br` e `@aluno.ifsc.edu.br`) nos ecossistemas **Google for Education** e **Microsoft 365 Education (A1)**. Nesses ambientes, os contratos do IFSC asseguram que dados e prompts **não sejam utilizados no treinamento de modelos públicos**.
2. **Proibição de "Shadow AI" e Proteção de Dados (LGPD / ECA Digital):** É terminantemente vedada a inserção ou processamento de dados pessoais (nomes, CPFs, contatos, dados de menores de idade, dados acadêmicos ou de saúde) e documentos sigilosos em ferramentas externas pessoais não homologadas.
3. **Primazia da Decisão Humana (*Human-in-the-Loop*):** A IA atua estritamente como suporte ao ensino, pesquisa, extensão e administração. Toda informação ou resultado gerado por IA deve ser **obrigatoriamente validado por um ser humano**.
4. **Transparência Acadêmica e Não-Coautoria:** A IA não possui autoria nem coautoria em produções acadêmicas. O uso de IA deve ser declarado expressamente, sob pena de caracterização de má conduta acadêmica.
5. **Filosofia *Local-First* e Governança:** O portal opera sob o princípio *Zero-Backend*, sem banco de dados intermediário, sem coleta ou transmissão de prompts a terceiros.

---

## 🚀 Funcionalidades do Portal

- **4 Abas Temáticas Homologadas:**
  - 🛠️ **Aplicações com IA (ai.studio):** Ferramentas públicas desenvolvidas para automação de processos, auditoria e apoio administrativo (Guardião LGPD, sez.iO, LaRDiC, Form2RIPD, Mapeamento de Dados, SIADS, etc.). **Acesso público aberto para qualquer conta `@gmail.com` ou institucional.**
  - 🤖 **Agentes Especialistas (Gems & RAG):** Assistentes inteligentes no Gemini treinados na documentação e rotinas do IFSC (SiBI, Silv.IA Licitações, DGP, CGD Governança TI). **Acesso restrito e exclusivo para contas do domínio IFSC (`@ifsc.edu.br` para servidores e `@aluno.ifsc.edu.br` para alunos). Não abrem com @gmail.com pessoal.**
  - 🎓 **Google for Education (Workspace IFSC):** Recursos de IA integrados com suporte a `@gmail.com` e garantia de não-treinamento sob login `@ifsc.edu.br` (AI Studio, Gemini, NotebookLM, Colab com GPU T4, etc.).
  - 💼 **Microsoft 365 Education (A1):** Copilot Web, Office Web, Teams, OneDrive (1 TB), Power BI e guia de autocadastro institucional para servidores e estudantes.
- **Banner e Modal Interativo da OT 04/2025:** Apresentação didática dos 5 preceitos da norma técnica institucional.
- **Gerador de Termos de Consentimento ([`/termo/`](termo/index.html)):** Aplicação client-side para emissão de termos LGPD e ECA Digital com exportação em PDF.
- **Deep Linking e Roteamento Inteligente ([`404.html`](404.html)):** Suporte a links diretos para cada ferramenta (`apps.ifsc.edu.br/?app=guardiao` ou `apps.ifsc.edu.br/?tab=google`).
- **Busca Resiliente:** Pesquisa por nome, descrição, categoria, tags pedagógicas e conformidade "OT04".
- **Privacidade por Design:** Tema claro/escuro e lista de favoritos salvos exclusivamente no `localStorage` do usuário.

---

## 🔒 Postura de Segurança e Blindagem para GitHub Pages

- **Gestão de Segredos:** Zero tokens ou chaves embutidos. Chaves de IA operam no modelo BYOK (*Bring Your Own Key*) quando aplicável.
- **Content Security Policy (CSP):** Meta tags CSP restritivas ativas em todas as páginas, bloqueando origens não autorizadas.
- **Subresource Integrity e CDNs Homologadas:** Carregamento controlado via CDNs institucionais e oficiais.
- **Anonimização de Telemetria:** Google Analytics 4 (`G-T49JX2YJMT`) com `anonymize_ip: true` e sinais de personalização desativados; Microsoft Clarity (`wddq8jjbkx`) para telemetria de usabilidade sem captura de campos de texto.

---

## 📁 Estrutura de Arquivos

```text
├── index.html            # Portal principal (4 abas, banners OT 04/2025, modais)
├── 404.html              # Roteador SPA / Deep linking para GitHub Pages
├── apps.json             # Catálogo oficial de ferramentas institucionais IFSC
├── agents.json           # Catálogo oficial de Agentes Especialistas (Gems)
├── CNAME                 # Domínio customizado (apps.ifsc.edu.br)
├── .nojekyll             # Instrução para GitHub Pages ignorar Jekyll
├── .gitignore            # Bloqueio rigoroso de segredos e temporários
├── sitemap.xml           # Sitemap XML estruturado para Googlebot
├── robots.txt            # Regras de rastreamento para indexação
├── metadata.json         # Metadados do projeto
├── termo/                # Módulo do Gerador de Termos LGPD / ECA Digital
│   └── index.html
├── public/               # Espelho de assets estáticos e marcas oficiais
│   ├── assets/brand/     # Logos oficiais do Manual de Marca do IFSC
│   └── favicon.svg
├── ARQUITETURA.md        # Diretrizes de arquitetura e governança multi-agentes
├── SEGURANCA.md          # Análise de segurança, LGPD e compliance
└── FUNCIONALIDADES.md    # Backlog de inovação ética
```

---

## 🤝 Como Contribuir (Governança de Dados)

Conforme a **Governança Multi-Agentes** ([`ARQUITETURA.md`](ARQUITETURA.md)), **nunca adicione aplicações alterando o HTML diretamente**. 

Para sugerir ou atualizar uma ferramenta:
1. Faça um Fork deste repositório.
2. Adicione sua ferramenta ao arquivo [`apps.json`](apps.json) ou [`agents.json`](agents.json) seguindo o esquema padrão:
   ```json
   {
     "id": "nome-do-app",
     "name": "Nome da Ferramenta",
     "url": "https://link-da-ferramenta",
     "badge": "Categoria",
     "iconKey": "lgpd",
     "description": "Breve descrição focada na utilidade.",
     "ot04_status": "Homologado IFSC",
     "safety_rating": "LGPD OK",
     "tags": ["palavra-chave", "ot04"]
   }
   ```
3. Abra um Pull Request para revisão da equipe da DTIC/CGD.

---

## 📄 Licença

Distribuído sob a licença MIT. Desenvolvido para a comunidade do Instituto Federal de Santa Catarina.
