# 🛡️ Análise de Segurança e Guia de Implementação (Foco: GitHub Pages & LGPD)

Este documento apresenta uma análise técnica da postura de segurança atual do Portal de Aplicações IFSC-DTIC-CGD, adaptada para hospedagem estática e conformidade com a LGPD.

---

## 📋 Checklist de Segurança e Privacidade

| Status | Item de Segurança | Descrição | Impacto |
| :---: | :--- | :--- | :--- |
| [x] | **Gestão de Segredos (Tokens/Keys)** | Verificado em 02/06/2026. Zero chaves ou segredos expostos na árvore e histórico do Git. | Crítico |
| [x] | **Conformidade LGPD** | Anonimização de IP configurada no GA, aviso de privacidade no gerador de termos ativo. | Crítico |
| [ ] | **Proteção de Menores** | Filtros de conteúdo e avisos claros para usuários menores de idade. | Crítico |
| [ ] | **Subresource Integrity (SRI)** | Scripts externos sem hashes de integridade. | Alto |
| [ ] | **Content Security Policy (CSP)** | Ausência de restrição de origens de recursos via meta tag. | Alto |
| [ ] | **Sanitização de Dados (XSS)** | Risco de injeção via `innerHTML` ao processar o `apps.json`. | Alto |

---

## 🚀 Prompts para o Antigravity

### 1. Auditoria de Segredos e Prevenção de Vazamento
**Persona:** Auditor de Segurança Cloud/DevSecOps.
**Contexto:** O projeto é público no GitHub e utiliza GitHub Pages. Qualquer segredo (tokens, chaves de IA) colocado no JS será visível para todos.
**Tarefa:** Analise todo o repositório em busca de strings que pareçam chaves de API ou tokens. Crie um guia no README instruindo como os contribuidores devem usar variáveis de ambiente (se houver build process) ou como configurar chaves de forma que o usuário final forneça a sua própria chave no navegador (armazenada apenas no LocalStorage do usuário).
**Resultado:** Repositório livre de segredos expostos e documentação de "Bring Your Own Key" (BYOK).

### 2. Implementação de Privacy-by-Design (LGPD)
**Persona:** Consultor Jurídico-Tecnológico (LGPD).
**Contexto:** O IFSC lida com dados de alunos, muitos dos quais são menores de idade. O portal deve ser um exemplo de privacidade.
**Tarefa:** Implemente um banner de "Aviso de Privacidade" que explique que o portal não coleta dados pessoais e que toda a inteligência artificial é processada em servidores externos (Google AI Studio), alertando para não inserir dados sensíveis ou de identificação de menores nos prompts.
**Resultado:** Portal em conformidade ética e legal com a LGPD.

### 3. Fortalecimento Técnico (SRI & CSP)
**Persona:** Especialista em Segurança Web.
**Contexto:** Hospedagem no GitHub Pages limita o controle sobre cabeçalhos HTTP.
**Tarefa:** Adicione SRI a todas as CDNs e implemente uma meta tag CSP rigorosa que bloqueie `eval()` e limite `script-src` apenas aos domínios estritamente necessários (Google Analytics e as URLs do AI Studio).
**Resultado:** Proteção contra ataques de injeção e comprometimento de CDNs.

---

## 🛡️ Segurança em Ambiente Estático e Delegação de Plataforma (Zero Backend)

Como o portal roda no **GitHub Pages**, todas as melhorias devem ser **Client-Side** e a segurança operacional é fundamentalmente baseada na delegação e no redirecionamento:
1.  **Portal como Diretório:** O portal é estritamente um hub de agregação e links rápidos. Ele não se conecta a bancos de dados centrais, não coleta credenciais e não intercepta dados inseridos nos chats/prompts das ferramentas. A proteção de dados e a segurança das APIs de IA são tarefas integralmente resolvidas nas plataformas de destino (Google AI Studio, Gemini, etc.).
2.  **Persistência Local:** Qualquer persistência de preferências de interface (como modo escuro e favoritos) é salva exclusivamente no `LocalStorage` ou `IndexedDB` do próprio navegador do usuário.
3.  **Processamento Isolado:** O preenchimento e a geração de termos (como no Gerador de Termos) ocorrem inteiramente no ambiente do cliente (navegador). Nenhuma informação é transmitida ou salva em servidores do IFSC ou de terceiros.
4.  **Privacidade de Menores:** Garanta que as descrições dos apps não contenham links para conteúdos inadequados e que haja avisos em conformidade com o ECA Digital e a LGPD.

---

## 🛠️ Notas Técnicas
- **NUNCA** submeta arquivos `.env` ou chaves no código-fonte.
- **DADOS DE MENORES:** Se um app sugerido for voltado para menores, ele deve seguir a regra de "Coleta Zero" de dados pessoais.
- **XSS:** Substitua `element.innerHTML = ...` por `element.textContent = ...` ou use métodos de criação de elementos do DOM para evitar execução de scripts maliciosos injetados via JSON.
