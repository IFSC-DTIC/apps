# 🛡️ Análise de Segurança e Guia de Implementação

Este documento apresenta uma análise técnica da postura de segurança atual do Portal de Aplicações IFSC-DTIC-CGD e fornece diretrizes estruturadas para o **Antigravity** realizar as correções necessárias.

---

## 📋 Checklist de Segurança

| Status | Item de Segurança | Descrição | Impacto |
| :---: | :--- | :--- | :--- |
| [ ] | **Subresource Integrity (SRI)** | Scripts externos (Tailwind, Material Icons, Isotope) não possuem hashes de integridade. | Alto (Risco de Supply Chain Attack) |
| [ ] | **Content Security Policy (CSP)** | Ausência de meta tag CSP restringindo as origens de recursos. | Alto (Injeção de Scripts/XSS) |
| [ ] | **Segurança de Links Externos** | Links para aplicações externas não utilizam `rel="noopener noreferrer"`. | Médio (Tabnabbing / Vazamento de Referer) |
| [ ] | **Sanitização de Dados (XSS)** | O uso de `innerHTML` para renderizar `apps.json` pode permitir injeção de script caso o JSON seja comprometido. | Alto (XSS de Persistência/DOM) |
| [ ] | **Segurança de Cabeçalhos HTTP** | Embora estático (GitHub Pages), pode-se configurar cabeçalhos via `jekyll-redirect-from` ou meta tags. | Baixo |

---

## 🚀 Prompts para o Antigravity

Use os prompts abaixo para instruir o agente a realizar as melhorias de forma segura e eficiente.

### 1. Implementação de SRI e Atualização de Dependências
**Persona:** Especialista em Segurança Web.
**Contexto:** O projeto carrega scripts críticos de CDNs (Tailwind, Isotope, Google Fonts) sem verificar a integridade dos arquivos.
**Tarefa:** Adicione os atributos `integrity` (SRI) e `crossorigin` a todas as tags `<script>` e `<link>` que apontam para recursos externos no `index.html` e `beta/index.html`.
**Resultado Esperado:** Código atualizado com hashes SHA-384/512 válidos para as versões atuais das bibliotecas.

### 2. Configuração de Content Security Policy (CSP)
**Persona:** Arquiteto de Software com foco em Defesa em Profundidade.
**Contexto:** O portal é uma aplicação estática que precisa se comunicar com domínios específicos (Google Fonts, Google Tag Manager, CDNs e os apps no ai.studio).
**Tarefa:** Crie e insira uma meta tag `<meta http-equiv="Content-Security-Policy" content="...">` que permita apenas scripts e estilos de domínios confiáveis, bloqueando execuções de terceiros não autorizados.
**Resultado Esperado:** Meta tag configurada sem quebrar as funcionalidades de análise (GA) e estilização (Tailwind).

### 3. Proteção de Links e Navegação
**Persona:** Desenvolvedor Frontend Sênior.
**Contexto:** O portal abre várias aplicações externas em novas abas.
**Tarefa:** Varra o código JavaScript e HTML e garanta que todo link (`<a>`) ou redirecionamento via `window.open` que aponte para fora do domínio `ifsc.edu.br` inclua `rel="noopener noreferrer"`.
**Resultado Esperado:** Prevenção de ataques de acesso ao objeto `window.opener`.

### 4. Refatoração para Prevenção de XSS no DOM
**Persona:** Especialista em Segurança JavaScript.
**Contexto:** A função `renderApps` utiliza template strings e injeta o conteúdo diretamente no DOM via `innerHTML` a partir de um arquivo `apps.json`.
**Tarefa:** Refatore o processo de renderização para usar métodos mais seguros como `textContent`, `createElement` ou implemente uma biblioteca de sanitização leve (ex: DOMPurify) antes da inserção.
**Resultado Esperado:** Código resiliente a entradas maliciosas no arquivo de configuração de apps.

---

## 🛠️ Notas Técnicas para o Desenvolvedor
- **GitHub Pages:** Lembre-se que as opções de cabeçalhos de resposta HTTP são limitadas. Foque em proteções baseadas em meta tags e integridade de arquivos.
- **Isotope.js:** A versão beta utiliza uma versão via `unpkg`. Garanta que a versão seja fixa (ex: `v3.0.6`) para gerar um hash SRI estável.
