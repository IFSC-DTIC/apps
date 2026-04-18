# 💡 Sugestões de Funcionalidades e Inovações

Este documento explora melhorias de Experiência do Usuário (UX) e novas ideias de aplicações de IA que fazem sentido para o contexto do IFSC, focando em utilidade pública e produtividade acadêmica sem a necessidade de acoplamento com sistemas internos sensíveis.

---

## 📋 Checklist de Evolução

| Status | Funcionalidade | Descrição | Objetivo |
| :---: | :--- | :--- | :--- |
| [ ] | **Busca Avançada (Fuzzy)** | Implementar busca por aproximação de caracteres (Fuse.js). | Melhorar descoberta de apps com erros de digitação. |
| [ ] | **Categorização por Perfil** | Filtros para "Docentes", "Discentes", "TAEs" e "Comunidade Externa". | Direcionar o usuário para o que é relevante para ele. |
| [ ] | **Assistente de Editais** | App de IA para resumir editais de pesquisa e extensão do IFSC. | Facilitar a leitura de documentos longos e complexos. |
| [ ] | **Guia de Normas Acadêmicas** | Chatbot baseado nas normas de TCC e formatação do IFSC. | Auxiliar estudantes na produção científica. |
| [ ] | **Feedback de Utilidade** | Sistema simples de "Like/Dislike" ou "Útil/Não Útil" (armazenado localmente). | Entender quais ferramentas são mais valiosas para a comunidade. |

---

## 🚀 Prompts para o Antigravity

Use estes prompts para expandir as capacidades do portal.

### 1. Implementação de Busca Fuzzy (Fuse.js)
**Persona:** Especialista em UX/UI.
**Contexto:** Atualmente a busca é baseada em `includes()` simples, o que exige digitação exata.
**Tarefa:** Integre a biblioteca `Fuse.js` (via CDN com SRI) para permitir que a barra de pesquisa encontre aplicativos mesmo com pequenos erros ortográficos ou buscas por sinônimos definidos no `apps.json`.
**Resultado Esperado:** Uma experiência de busca muito mais fluida e tolerante a erros.

### 2. Sistema de Favoritos Persistente (Melhorado)
**Persona:** Desenvolvedor Web Fullstack.
**Contexto:** Já existe um sistema básico de favoritos no LocalStorage.
**Tarefa:** Melhore o sistema para incluir uma seção visual de "Destaques" ou "Mais Acessados" baseada no uso local, e garanta que o estado visual dos favoritos seja sincronizado instantaneamente entre a grid e o modal.
**Resultado Esperado:** Maior engajamento e personalização da home do portal.

### 3. Gerador de Prompt para Novos Apps (IA Tool)
**Persona:** Engenheiro de Prompt.
**Contexto:** O portal incentiva a contribuição de novos apps criados com IA.
**Tarefa:** Crie uma funcionalidade (pode ser um novo app na lista ou um modal especial) que ajude o usuário a estruturar um prompt para o Google AI Studio, seguindo os padrões de segurança e utilidade do IFSC.
**Resultado Esperado:** Aumento na quantidade e qualidade das contribuições da comunidade.

### 4. Modo Offline Completo (PWA)
**Persona:** Desenvolvedor PWA Sênior.
**Contexto:** A versão beta já possui um `service-worker.js`.
**Tarefa:** Melhore o cache do Service Worker para garantir que a lista de apps, ícones e fontes funcionem perfeitamente mesmo sem conexão à internet (offline-first), permitindo a consulta rápida de descrições e IDs dos apps.
**Resultado Esperado:** Aplicativo instalável com robustez offline.

---

## 🌟 Ideias de "Apps IA" para o IFSC (Fora da Caixa)

1.  **Simplificador de Linguagem Administrativa:** Uma ferramenta para traduzir memorandos e resoluções complexas em linguagem simples para os alunos.
2.  **Sugestor de Bibliografia IFSC:** IA que, baseada na ementa de um curso, sugere livros disponíveis na biblioteca (Pergamum) ou recursos abertos.
3.  **Assistente de Acessibilidade:** Ferramenta para gerar textos alternativos (Alt-text) para imagens de materiais didáticos produzidos por professores.
4.  **Mapa de Projetos de Extensão:** IA que analisa os nomes dos projetos de extensão e gera tags de interesse para facilitar a conexão entre diferentes campi.

---

## 🛠️ Notas para Implementação
- **Performance:** Ao adicionar Fuse.js ou outras bibliotecas, monitore o tempo de carregamento (LCP).
- **Sem Back-end:** Todas as funcionalidades devem ser pensadas para rodar Client-Side (JavaScript no navegador), mantendo a facilidade de hospedagem no GitHub Pages.
