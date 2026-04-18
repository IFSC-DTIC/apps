# Agregador de Ferramentas com IA - IFSC

🛡️ Um portal dinâmico desenvolvido para centralizar, apresentar e facilitar o acesso a **Ferramentas Virtuais (Apps)** e **Agentes Especialistas (Gems/RAG)** criados pela comunidade do Instituto Federal de Santa Catarina (IFSC), com foco na automação acadêmica e administrativa.

Este portal funciona como uma vitrine de inteligência artificial aplicada. Ele agrega duas frentes principais:
1. **Ferramentas (Apps):** Aplicações construídas majoritariamente em plataformas como Google AI Studio para automatizar e otimizar tarefas administrativas e acadêmicas (ex: geradores de termos, formatação de textos).
2. **Agentes Especialistas (Gems):** Assistentes conversacionais baseados no Gemini (Gems), treinados com documentação institucional específica de setores do IFSC (ex: DGP, SiBI, Licitações). Operam utilizando frequentemente o NotebookLM como base de RAG (Retrieval-Augmented Generation).

---

## 🚀 Funcionalidades

- **Duas Abas Especializadas:** O sistema separa claramente as ferramentas utilitárias ("Ferramentas Apps") dos agentes consultivos ("Agentes Especialistas").
- **Grid Responsivo e Moderno:** Interface visual rica com suporte a "Dark Mode" nativo (Modo Claro/Escuro), utilizando a tecnologia Tailwind CSS via CDN.
- **Leitura Dinâmica de Dados (Data-Driven):** O portal é totalmente alimentado por arquivos JSON independentes (`apps.json` e `agents.json`). Adicionar uma ferramenta não requer tocar no HTML principal.
- **Cache Busting Automático:** O carregamento dos dados inclui controle automático de versão (timestamp) nas requisições HTTP (`fetch`) para garantir que os usuários sempre recebam o catálogo mais atual das ferramentas, sem problemas persistentes de cache local nos navegadores.
- **Categorização e Filtros:** Filtros de navegação independentes para cada aba (ex: Processos, Administrativo, Gestão de Pessoas, Servidores, Professores, Alunos).
- **Integração Fluida:** Botão de ação direto para o ambiente onde a ferramenta/agente está hospedado e Deep Linking nativo.

---

## 🛠 Tecnologias Utilizadas

Este projeto foi desenhado sob o princípio arquitetural "*Zero-Build*" ou "*Vanilla*", priorizando manutenção simplificada sem esteiras complexas de NPM/Node:
- **Frontend / Lógica:** HTML5, JavaScript (Vanilla ES6+).
- **Estilização e UI:** [Tailwind CSS](https://tailwindcss.com/) (importação via script CDN).
- **Iconografia:** Google Material Icons.
- **Armazenamento de Estado:** `localStorage` (para salvar preferências de Tema Escuro e sistema de Favoritos [⭐]).
- **Armazenamento de Dados:** Arquivos de registro estáticos JSON.

---

## 📚 Documentação e Governança

Para desenvolvedores, colaboradores e futuros agentes autônomos que desejam trabalhar no repositório, consulte nossos Guias Estruturais antes de enviar _Pull Requests_ ou executar alterações arquiteturais:

- 🏛️ **[ARQUITETURA.md](ARQUITETURA.md)**: Regras de engajamento multi-agentes e padrões do sistema *zero-backend*.
- 🛡️ **[SEGURANCA.md](SEGURANCA.md)**: Análise de vulnerabilidades, limites do *GitHub Pages*, *SRI*, *CSP* e proteção de menores e adequação a LGPD.
- 💡 **[FUNCIONALIDADES.md](FUNCIONALIDADES.md)**: Roadmap de novas soluções, como buscas offline, *BYOK (Bring Your Own Key)*, processamento focado em *Client-Side* apenas.

---

## 🔒 Segurança e Boas Práticas (CUIDADOS IMPORTANTES)

A arquitetura do portal exige responsabilidade contínua. Por tratar com potenciais fluxos de inteligência artificial, regras essenciais de segurança devem ser observadas no desenvolvimento e na avaliação dos Pull Requests:

1. **NUNCA exponha chaves de API (API Keys):** Este frontend opera 100% no cliente (no navegador). Jamais insira variáveis de ambiente, _tokens_ do Google AI Studio, da OpenAI ou senhas de banco de dados no `index.html` ou arquivos `.json`.
2. **Delegação de Segurança:** Todo o processamento algorítmico, o RAG documental e autenticações são delegados às plataformas hospedeiras (Google Gemini, AI Studio, etc.). O portal funciona **estritamente como um agregador/diretório de _links_ (hub)**.
3. **Validação de Links Submetidos:** No arquivo `.json`, todas as URLs de destino (`url`) fornecidas devem pertencer a ecossistemas institucionalmente seguros e autorizados ou domínios da bigtech fornecedora (como `gemini.google.com/gem/...`).
4. **Proteção contra XSS Frameworks:** O design do código nativo realiza a separação entre conteúdo de dado estrito (`JSON`) e injeção do HTML. Evite adicionar novas funcionalidades visuais que imprimam texto cru inserido pelo usuário diretamente no DOM via `innerHTML` sem a devida sanitização. As descrições atualmente exibidas devem ser sempre cadastradas via JSON e controladas via Pull Request.

---

## 🤝 Como Contribuir

A manutenção e enriquecimento deste ecossistema depende das inovações dos próprios servidores, alunos e professores! 

A inclusão de novos agentes/aplicativos não exige alteração do Javascript do `index.html`. Basta mexer nos arquivos de dados (`.json`):

1. **Faça um Fork:** Crie uma cópia deste repositório para a sua conta via GitHub.
2. **Edite as Fontes de Dados:**
   - Se for um novo utilitário geral ou automação sistêmica: edite o arquivo **`apps.json`**.
   - Se for um novo Assistente/Gem especializado baseado num RAG normativo (ex: Assistente de Legislação PROEN): edite o arquivo **`agents.json`**.
3. **Cadastre as Informações Necessárias:**
   Escolha a categoria correta dentro do arquivo JSON (ex: `Servidores`, `Professores` ou `LGPD`), e anexe seu objeto informando:
   ```json
   {
     "id": "identificador_unico_sem_espacos",
     "name": "Nome da Sua Ferramenta",
     "url": "https://link-da-ferramenta.com",
     "description": "Explicação detalhada (até 2-3 frases curtas) sobre o que essa IA resolve.",
     "tags": ["Servidores"]
   }
   ```
4. **Commit e Pull Request:** Salve suas edições e solicite um _Pull Request_ para o repositório principal da DTIC. Após a curadoria e revisão da gerência, seu projeto estará no ar imediatamente para toda a comunidade!

---

## 🖥 Onde/Como Executar Localmente

Sua simplicidade extrema dispensa containers locais complicados.
- Baixe/clone o repósitorio.
- Como o projeto faz requisições por `fetch` aos arquivos JSON locais (imposto pela política CORS de browsers modernos), **não** é possível dar dois cliques no `index.html` (o arquivo `file:///...` bloqueará a requisição JSON).
- Utilize qualquer servidor local microscópico para testar:
  - Ex: Extensão "Live Server" do VS Code.
  - Ex: Com Python instalado: execute `python -m http.server 8000` na pasta.
  - Ex: Com PHP instalado: execute `php -S localhost:8000`.

---
*Portal gerido e orquestrado pela equipe da Diretoria de Tecnologia da Informação e Comunicação (DTIC).*
