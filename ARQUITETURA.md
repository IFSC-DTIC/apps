# 🏛️ Arquitetura e Regras de Segurança (Governança Multi-Agentes)

Este documento define a arquitetura estática do portal, o fluxo de dados e, sobretudo, as **Regras de Engajamento para Agentes Autônomos (Multi-Agents Governance)** que vierem a trabalhar neste repositório.

---

## 1. Arquitetura do Sistema (Local-First e Estática)
O portal foi concebido sob a filosofia **Zero-Backend (Vanilla)**. Por estar hospedado primariamente no *GitHub Pages*, não existe um servidor processando dados do usuário, bancos de dados ativos ou complexidade de infraestrutura. 

*   **Linguagens Core:** HTML5, CSS e JS (ES6+) puros.
*   **Estilização:** Tailwind CSS (via script CDN).
*   **Armazenamento de Estado:** `localStorage` do navegador do usuário.
*   **Fontes de Dados:** Arquivos JSON locais e autônomos (`apps.json` para ferramentas e `agents.json` para especialistas), lidos de forma assíncrona com versionamento dinâmico temporário (*Cache Busting*).

---

## 2. Governança Multi-Agentes (Especial para IAs como Jules, Antigravity, etc.)

Para manter um ecossistema estável quando múltiplos agentes de codificação ou humanos trabalharem no código de forma concorrente ou contínua, os seguintes princípios **DEVERÃO** ser rigorosamente respeitados:

### A. Sincronização Obrigatória (Rebase/Pull)
Antes de desenvolver qualquer nova funcionalidade ou realizar audições de segurança, o Agente Inteligente **deve** usar seus comandos Git/Shell para realizar o `git pull origin main` (ou equivalente na ramificação de trabalho) garantindo que está desenvolvendo em cima da versão mais contemporânea.

### B. Isolamento de Responsabilidade (Componentização)
*   **Edições de Interface:** Devem ocorrer puramente em `index.html` (e suas ramificações, como `404.html` de deep linking).
*   **Adições ao Catálogo de Ferramentas/Gems:** Nunca devem ocorrer preenchendo HTML diretamente (via *hardcode*). Para isso existem `apps.json` e `agents.json`.
*   **Arquiteturas Experimentais (`beta/` e Protótipos):** Projetos que quebrem a estrutura estabelecida não devem ser injetados ou desenvolvidos na árvore raiz sem o consentimento direto do Humano/Revisor. Trabalhos de larga reengenharia (ex: PWA, Webpack) necessitam de aprovação de design prévia e isolamento em *branches* especializadas, nunca submetendo "pastas teste" à `main`.

### C. Manutenção do Contexto (State Recovery)
Todo agente, ao "acordar" no ambiente do IFSC, subentenderá as seguintes premissas organizacionais de categorias:
*   **Para Apps Administrativos:** Processos (antigo BPMN), Administrativo (antigo SIADS), Gestão de Pessoas (antigo RSC-TAE), LGPD.
*   **Para Agentes Especialistas:** Servidores (antigo TAEs), Professores, Alunos.

Nunca reinterprete, abrevie ou use padrões antigos. Quando o agente duvidar dos nomes oficiais a usar no `agents.json` ou `apps.json`, ele deve reler este documento de arquitetura.

### D. Segurança Rigorosa (Privacy-by-Design e Client-Side Limits)
Compreenda que a escola tem estudantes (ECA Digital), servidores e segue a LGPD. 
A IA/Agente de Desenvolvimento **está proibida** de:
1. Inserir componentes que exijam dependências invasivas (trackers terceiros não homologados).
2. Escrever lógicas que transmitam os "Prompts", "Favoritos" ou dados formulados pelos usuários para bancos de dados de monitoramento sombrio ou APIs de terceiros não expressamente exigidas na especificação do Humano. (Ferramentas de coleta local funcionam sempre com `localStorage`).
3. Comitar credenciais ou _API Keys_ diretas no repositório público. A chave e a autenticação, se necessárias num fluxo de App JS ou integração de ML, devem operar num modelo BYOK (*Bring Your Own Key*) onde a lógica lê o cofre do cliente.

---

> ℹ️ **Nota à DTIC:** Este framework de governança visa proteger o ecossistema e ser de rápido consumo (_token-efficient_) para os LLMs (Language Learning Models) subjacentes aos futuros Agentes colaboradores, mantendo a produtividade alta e a frustração ou *rollbacks* em zero.
