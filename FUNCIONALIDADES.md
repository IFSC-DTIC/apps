# 💡 Sugestões de Funcionalidades (Foco: Processamento Local e Privacidade)

Este documento detalha funcionalidades inovadoras que respeitam a natureza estática do portal (GitHub Pages), garantindo que os dados permaneçam sob controle do usuário (Local-First).

---

## 📋 Checklist de Funcionalidades Éticas e Seguras

| Status | Funcionalidade | Descrição | Foco |
| :---: | :--- | :--- | :--- |
| [ ] | **Busca Fuzzy Local** | Pesquisa resiliente a erros usando Fuse.js sem chamadas de API. | UX / Privacidade |
| [ ] | **Cofre de Prompts Pessoal** | Salvar prompts favoritos apenas no LocalStorage do usuário. | Utilidade / Segurança |
| [ ] | **Filtro de Idade/Perfil** | Tags claras para apps adequados para menores de idade. | Proteção de Dados |
| [ ] | **Dashboard de Uso Local** | Estatísticas de quais apps o usuário mais abre (apenas no browser dele). | Produtividade |
| [ ] | **Validador de Privacidade** | Pequena ferramenta que verifica se um prompt contém dados sensíveis antes de enviar para a IA. | Prevenção LGPD |

---

## 🚀 Prompts para o Antigravity

### 1. Sistema de Busca "Zero Latência" com Fuse.js
**Persona:** Desenvolvedor Frontend Sênior.
**Contexto:** Precisamos de uma busca potente que funcione offline e sem banco de dados.
**Tarefa:** Integre a Fuse.js carregada via CDN (com SRI). Configure-a para indexar o `apps.json` localmente. A busca deve considerar `name`, `description` e uma nova chave `tags` que adicionaremos ao JSON.
**Resultado:** Busca rápida, inteligente e privada.

### 2. Implementação do "Cofre Local" (BYOK & Prompts)
**Persona:** Especialista em UX e Segurança.
**Contexto:** Usuários querem salvar seus prompts, mas não queremos um banco de dados centralizado por razões de custo e privacidade.
**Tarefa:** Crie uma interface de "Configurações" no portal que use o `LocalStorage`. O usuário pode salvar seus prompts favoritos e até mesmo sua própria API Key do Google AI Studio (criptografada localmente com uma senha simples via biblioteca JS de criptografia, se necessário).
**Resultado:** Personalização avançada sem necessidade de login ou servidor.

### 3. Badge de Conformidade e Classificação
**Persona:** Designer de Produto / Especialista em Ética IA.
**Contexto:** Precisamos sinalizar quais apps são seguros para menores e quais seguem a LGPD rigorosamente.
**Tarefa:** Adicione ao `apps.json` um campo `safety_rating` e implemente ícones/badges visuais nos cards dos apps (ex: "🛡️ LGPD OK", "👶 Seguro para Menores"). Crie um filtro na barra lateral para estes critérios.
**Resultado:** Navegação segura e informada para a comunidade acadêmica.

---

## 🌟 Ideias de "Apps IA" Locais para o IFSC

1.  **Anonimizador de Documentos (Client-Side):** Um app que usa Regex e processamento local para remover nomes e CPFs de um texto antes que o usuário o cole em uma IA externa.
2.  **Organizador de Estudos Offline:** IA que ajuda a estruturar cronogramas de estudo baseados nos calendários do IFSC, salvando tudo no navegador.
3.  **Tradutor de Siglas IFSC:** Um pequeno glossário inteligente para novos alunos e servidores entenderem a "sopa de letrinhas" institucional (TAE, RNP, SUAP, etc).
4.  **Verificador de Referências ABNT:** Ferramenta que ajuda a formatar citações acadêmicas localmente antes da submissão de trabalhos.

---

## 🛠️ Notas para Implementação
- **Performance:** O portal deve permanecer leve. Evite bibliotecas pesadas.
- **Privacidade:** Nunca use scripts de rastreamento de terceiros que capturem o que o usuário digita na busca.
- **Transparência:** Sempre que algo for salvo no `LocalStorage`, informe o usuário via um pequeno aviso no rodapé ou na página de configurações.
