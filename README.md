# Portal de Inteligência Artificial e Aplicações - IFSC

[![Status: Homologado OT 04/2025](https://img.shields.io/badge/IFSC-OT%2004%2F2025-00823B.svg)](https://www.ifsc.edu.br/web/portal-do-servidor/gestao-de-dados)
[![Arquitetura: Zero-Backend](https://img.shields.io/badge/Arquitetura-Zero--Backend-blue.svg)](ARQUITETURA.md)
[![Conformidade: LGPD & ECA](https://img.shields.io/badge/Conformidade-LGPD%20%26%20ECA-success.svg)](SEGURANCA.md)
[![Hospedagem: GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-informational.svg)](https://apps.ifsc.edu.br/)
[![Analytics: GA4 + Clarity](https://img.shields.io/badge/Telemetria-GA4%20%2B%20Clarity-orange.svg)](#-observabilidade-telemetria-ética--seo)

🛡️ **Portal oficial de diretrizes, ferramentas homologadas e agentes especialistas de Inteligência Artificial (IA)** do Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina (IFSC), mantido e coordenado pela **Diretoria de Tecnologia da Informação e Comunicação (DTIC)** e pela **Coordenadoria de Gestão de Dados (CGD)**.

Disponível publicamente em: **[https://apps.ifsc.edu.br/](https://apps.ifsc.edu.br/)**

---

## 🏛️ Orientação Técnica nº 04/2025 (CGD / DTIC - IFSC)

Este portal foi concebido e estruturado para operacionalizar as diretrizes da **Orientação Técnica nº 04/2025**, elaborada pela Coordenadoria de Gestão de Dados (CGD/DTIC/PRODIN) do IFSC, normatizando o uso seguro, ético e responsável de IA por toda a comunidade acadêmica (estudantes, docentes e servidores técnico-administrativos):

1. **Priorização de Plataformas Homologadas:** Servidores e alunos devem priorizar o uso das ferramentas integradas às suas contas institucionais (`@ifsc.edu.br` e `@aluno.ifsc.edu.br`) nos ecossistemas **Google for Education** e **Microsoft 365 Education (A1)**. Nesses ambientes, os acordos institucionais asseguram que dados e prompts **não sejam utilizados no treinamento de modelos públicos de IA**.
2. **Proibição de "Shadow AI" e Proteção de Dados (LGPD / ECA Digital):** É terminantemente vedada a inserção ou processamento de dados pessoais (nomes, CPFs, contatos, dados de menores de idade, dados acadêmicos ou de saúde) e documentos sigilosos em ferramentas externas pessoais não homologadas.
3. **Primazia da Decisão Humana (*Human-in-the-Loop*):** A IA atua estritamente como suporte ao ensino, pesquisa, extensão e administração. Toda informação ou resultado gerado por IA deve ser **obrigatoriamente validado por um ser humano**.
4. **Transparência Acadêmica e Não-Coautoria:** A IA não possui autoria nem coautoria em produções acadêmicas. O uso de IA deve ser declarado expressamente, sob pena de caracterização de má conduta acadêmica.
5. **Filosofia *Local-First* e Governança:** O portal opera sob o princípio *Zero-Backend*, sem banco de dados intermediário, sem coleta ou retenção de prompts ou dados de usuários.

---

## 🚀 Funcionalidades do Portal

### 1. 5 Abas Temáticas Homologadas (Navegação em Fichário)
- 🛠️ **Aplicações com IA (ai.studio):** Ferramentas públicas desenvolvidas para automação de processos, auditoria e apoio administrativo (Guardião LGPD, sez.iO, LaRDiC, Form2RIPD, Mapeamento de Dados, SIADS, etc.). **Acesso público aberto para qualquer conta `@gmail.com` ou institucional.**
- 🤖 **Agentes Especialistas (Gems & RAG):** Assistentes inteligentes no Gemini treinados na documentação e rotinas do IFSC (SiBI, Silv.IA Licitações, DGP, CGD Governança TI). **Acesso restrito e exclusivo para contas do domínio IFSC (`@ifsc.edu.br` para servidores e `@aluno.ifsc.edu.br` para alunos). Não abrem com @gmail.com pessoal.**
- 🤝 **Parcerias Oficiais para Estudantes:** Hub de ferramentas de ponta com planos educacionais e gratuidades verificadas por e-mail `@aluno.ifsc.edu.br` ou `@edu.br`:
  - **Google AI Pro (Gemini Advanced):** Gemini 2.5 Pro, Veo 3 Fast, Flow, Whisk, NotebookLM expandido e 2 TB de armazenamento.
  - **Microsoft Copilot:** Assistente de IA integrado ao MS365 na licença educacional A1.
  - **Canva para Educação (Canva Pro):** Acesso a Magic Write e Magic Media para discentes e docentes.
  - **GitHub Copilot (Education Pack):** Autocomplete e pair programming inteligente para estudantes.
  - **Notion AI (Plano Plus):** Assistente de redação e organização acadêmica com IA.
  - **Perplexity Pro (Parceria RNP):** Assinatura Pro de busca conversacional com fontes acadêmicas via RNP.
  - **Adobe Creative Cloud & Firefly:** Descontos educacionais superiores a 60% com IA generativa.
  - **Grammarly for Education:** Revisor inteligente de redação, estilo e clareza.
- 🎓 **Google for Education (Workspace IFSC):** Recursos de IA integrados com suporte institucional e garantia contratual de não-treinamento sob login `@ifsc.edu.br` (AI Studio, Gemini, NotebookLM, Colab com GPU T4, Jules, Antigravity, Opal, Pomelli, Stitch).
- 💼 **Microsoft 365 Education (A1):** Copilot Web, Office Web, Teams, OneDrive (**100 GB por usuário**, conforme política global da Microsoft de 2024), Power BI e guia de autocadastro institucional.

### 2. Filtros Unificados e Responsivos
- **Segmentação por Público-Alvo:** Filtros em linha única para `Todos`, `Servidores`, `Alunos` e `Comunidade`, permitindo refinar o catálogo de forma instantânea sem poluição visual.
- **Categorias Dinâmicas & Favoritos:** Filtros por categoria funcional e aba exclusiva de favoritos salvos localmente.

### 3. Segurança e Privacidade no Cliente
- **Proteção Anti-Scraping de E-mails com JS/Base64:** Todos os e-mails institucionais exibidos no portal são ofuscados no HTML estático e reconstruídos dinamicamente apenas durante a interação do navegador, neutralizando bots coletores de spam.
- **Gerador de Termos de Consentimento ([`/termo/`](termo/index.html)):** Aplicação 100% client-side (Vue 3 + html2pdf) para emissão de termos LGPD e ECA Digital em PDF, sem transmissão de dados para servidores externos.
- **Deep Linking e Roteamento Inteligente ([`404.html`](404.html)):** Suporte a links diretos para ferramentas (`apps.ifsc.edu.br/?app=guardiao`) e abas (`apps.ifsc.edu.br/?tab=partnerships`) em servidores estáticos do GitHub Pages.

---

## 🔒 Auditoria de Segurança, Riscos e Privacidade

| Critério | Status | Implementação |
| :--- | :---: | :--- |
| **Zero Secrets / API Keys** | ✅ Conforme | Nenhuma credencial ou token privado está versionada no repositório. Uso estrito de BYOK (*Bring Your Own Key*) quando aplicável. |
| **Zero PII de Desenvolvedores** | ✅ Conforme | Nenhum dado pessoal (CPF, e-mails privados, telefones, caminhos locais) de desenvolvedores ou servidores consta nos códigos estáticos públicos. |
| **Proteção contra Spam** | ✅ Conforme | E-mails institucionais protegidos por codificação Base64 e hidratados via JavaScript no cliente (`js-safe-email`). |
| **Content Security Policy (CSP)** | ✅ Ativo | Meta tags restritivas em `index.html`, `404.html` e `termo/index.html` limitando fontes de scripts, estilos, conexões e fontes externas. |
| **Anonimização de Telemetria** | ✅ Conforme | Google Analytics 4 com `anonymize_ip: true` e flags de personalização desligadas; Microsoft Clarity com máscara para privacidade total. |
| **Hospedagem Estática Segura** | ✅ Conforme | Execução exclusiva via GitHub Pages com arquivo `.nojekyll`, eliminando riscos de vulnerabilidades do lado servidor. |

---

## 📊 Observabilidade, Telemetria Ética & SEO

O portal conta com infraestrutura de observabilidade e otimização para motores de busca devidamente homologada:

- **Google Analytics 4 (GA4):**
  - **ID de Medição:** `G-T49JX2YJMT`
  - **Configuração:** `anonymize_ip: true`, `allow_google_signals: false`, `allow_ad_personalization_signals: false`.
  - **Eventos Homologados:** Cliques em ferramentas (`app_click`), alternância de abas (`tab_view`), buscas realizadas (`search`), cliques na OT 04/2025 (`ot04_document_access`) e filtros de público (`filter_audience_change`).
- **Microsoft Clarity:**
  - **ID de Projeto:** `wddq8jjbkx`
  - **Configuração:** Heatmaps e métricas de navegação com mascaramento automático de campos sensíveis para conformidade LGPD.
- **SEO & Indexação:**
  - **`robots.txt`:** Regras para Googlebot, Bingbot, Applebot, bloqueio de rotas de diagnóstico interno e indicação do sitemap canônico.
  - **`sitemap.xml`:** Catálogo XML atualizado com prioridades, datas de modificação e rotas diretas para todas as 5 abas e ferramentas.
  - **Open Graph & Twitter Cards:** Imagem em formato raster PNG oficial (`ifsc-logo-oficial-colorido.png`) em resolução 1200x630 para exibição correta em WhatsApp, LinkedIn e redes sociais.
  - **Schema.org (JSON-LD):** Metadados estruturados de `WebSite` e `GovernmentService` vinculando formalmente o portal à DTIC e ao IFSC.

---

## 📁 Estrutura do Repositório

```text
├── index.html                   # Portal principal (5 abas, filtros unificados, modais da OT 04)
├── 404.html                     # Roteador SPA e deep-linking resiliente para GitHub Pages
├── apps.json                    # Catálogo JSON das Aplicações com IA
├── agents.json                  # Catálogo JSON dos Agentes Especialistas Gems IFSC
├── partnerships.json            # Catálogo JSON das Parcerias Oficiais para Estudantes
├── robots.txt                   # Regras de rastreamento e indexação otimizadas
├── sitemap.xml                  # Mapa XML do site completo e atualizado
├── favicon.svg                  # Favicon vetorial com o logo oficial do IFSC
├── CNAME                        # Domínio canônico de produção (apps.ifsc.edu.br)
├── .nojekyll                    # Instrução para GitHub Pages ignorar Jekyll
├── .gitignore                   # Bloqueio de arquivos locais, segredos e logs
├── termo/                       # Módulo do Gerador de Termos de Consentimento (LGPD / ECA)
│   └── index.html               # Aplicação SPA client-side com geração de PDF
├── assets/
│   ├── css/
│   │   └── portal.css           # Estilos e customizações do design system do IFSC
│   └── js/
│       ├── app.js               # Ponto de entrada modular do frontend
│       ├── data/
│       │   └── catalog.js       # Fonte de dados local-first com fallback resiliente
│       └── modules/
│           ├── analytics.js     # Módulo de telemetria ética (GA4 e Clarity)
│           ├── router.js        # Gerenciamento de rotas e deep-linking
│           └── ui.js            # Renderização de componentes, acessibilidade e temas
└── public/
    └── img/                     # Identidade visual oficial do IFSC e logos homologados
```

---

## 💻 Desenvolvimento Local

Para executar o portal localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/IFSC-DTIC/apps.git
   cd apps
   ```
2. Inicie um servidor HTTP estático (por exemplo, com Python):
   ```bash
   python3 -m http.server 8080
   ```
3. Acesse `http://localhost:8080/` no seu navegador. O portal funcionará completamente offline graças ao catálogo embutido de fallback.

---

## 🤝 Como Contribuir (Governança de Dados)

Conforme as diretrizes de governança do IFSC, **não altere a estrutura do HTML diretamente** para cadastrar ou modificar ferramentas:

1. Faça um Fork deste repositório.
2. Edite os arquivos JSON correspondentes:
   - Aplicações institucionais: [`apps.json`](apps.json)
   - Agentes especialistas (Gems): [`agents.json`](agents.json)
   - Benefícios educacionais: [`partnerships.json`](partnerships.json)
3. Siga o esquema padrão e garanta conformidade com a Orientação Técnica nº 04/2025.
4. Abra um Pull Request para validação da equipe técnica da DTIC/CGD.

---

## 📄 Licença

Distribuído sob a licença de software livre e aberto. Desenvolvido para a comunidade do Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina (IFSC).