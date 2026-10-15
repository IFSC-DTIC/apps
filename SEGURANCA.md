# 🛡️ Diretrizes de Segurança, Privacidade e Melhores Práticas (ia.ifsc.edu.br)

Este documento estabelece as diretrizes técnicas, arquiteturais e normativas de segurança da informação adotadas no **Portal de Inteligência Artificial do IFSC** ([ia.ifsc.edu.br](https://ia.ifsc.edu.br/)), em conformidade com a **Orientação Técnica nº 04/2025 (DTIC/CGD)**, a **Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)** e as normativas do **ECA Digital (Estatuto da Criança e do Adolescente)**.

---

## 📋 Checklist de Segurança e Melhores Práticas Implementadas

| Status | Mecanismo | Implementação Técnica | Nível de Risco Mitigado |
| :---: | :--- | :--- | :--- |
| ✅ | **Gestão de Segredos (Zero Secrets)** | Repositório 100% público sem credenciais, API Keys ou senhas. Filosofia BYOK (*Bring Your Own Key*) quando aplicável. | Crítico (Prevenção de vazamento) |
| ✅ | **Anonimização de Telemetria** | Google Analytics 4 com `anonymize_ip: true`, `allow_google_signals: false` e personalização desativada. Microsoft Clarity com máscara LGPD. | Crítico (Privacidade de servidores e discentes) |
| ✅ | **Proteção de Menores (ECA Digital)** | Avisos normativos da OT 04/2025 e vedação expressa à submissão de dados de menores ou de saúde em IAs públicas externas. | Crítico (Conformidade legal e ética) |
| ✅ | **Content Security Policy (CSP)** | Meta tags CSP ativas em `index.html`, `404.html` e `termo/index.html` limitando fontes confiáveis de scripts, fontes e conexões. | Alto (Prevenção de injeção de código) |
| ✅ | **Cabeçalhos de Segurança Client-Side** | `Referrer-Policy: strict-origin-when-cross-origin` e `X-Content-Type-Options: nosniff` ativos em todas as páginas HTML. | Alto (Prevenção de vazamento de URL e MIME-sniffing) |
| ✅ | **Sanitização contra XSS** | Parâmetros de pesquisa e entradas de usuário tratados via `escapeHtml()` e `textContent` antes da renderização no DOM. | Alto (Prevenção de Cross-Site Scripting) |
| ✅ | **Links Externos Seguros** | Todas as âncoras para sistemas de terceiros utilizam `target="_blank"` e `rel="noopener noreferrer"`. | Médio (Prevenção de *Reverse Tabnabbing*) |
| ✅ | **Ofuscação Anti-Scraping de E-mails** | E-mails institucionais ofuscados em Base64 no HTML estático e reconstruídos via JavaScript (`js-safe-email`) para bloquear bots coletores de spam. | Médio (Proteção contra SPAM/Phishing) |
| ✅ | **Arquitetura Zero-Backend (Local-First)** | Sem banco de dados em nuvem, sem coleta de prompts. Preferências e termos gerados 100% no navegador do dispositivo do usuário. | Crítico (Superfície de ataque zero no servidor) |

---

## 🏛️ Princípios de Arquitetura e Privacidade

### 1. Modelo Local-First e Zero-Backend
O portal foi projetado para operar como um **Hub de Diretrizes e Aplicações Estáticas**. Ele não possui backend próprio, banco de dados ou endpoints capazes de interceptar as conversas ou consultas de IA dos usuários. Todas as interações ocorrem diretamente entre o navegador do usuário e os serviços homologados (ex.: Google Workspace institucional ou Microsoft 365).

### 2. Tratamento de Dados no Gerador de Termos (`/termo/`)
O módulo do Gerador de Termos de Consentimento (LGPD / ECA Digital) processa os dados de estudantes e responsáveis exclusivamente na memória do navegador (via Vue 3 e `html2pdf.js`). **Nenhum dado é enviado para servidores da nuvem ou mantido em cache persistente de rede.**

### 3. Delimitação de Contas Institucionais vs. Contas Pessoais
- **Gems Especialistas do IFSC:** São exclusivas do domínio `@ifsc.edu.br` e `@aluno.ifsc.edu.br`, operando com a garantia contratual do Google Workspace for Education de não utilização dos dados institucionais para treinamento de modelos públicos.
- **Ferramentas Públicas:** Funcionam com qualquer login `@gmail.com`, com alertas explícitos para que os usuários **nunca insiram documentos sigilosos ou dados pessoais protegidos**.

---

## 💻 Orientações para Contribuidores

Ao submeter Pull Requests para o repositório `IFSC-DTIC/ia.ifsc.edu.br`:

1. **Nunca inclua arquivos `.env`, chaves de API ou dados pessoais** nos commits.
2. **Utilize sempre `escapeHtml()` ou `textContent`** para renderização de dados que dependam de entradas dinâmicas.
3. **Mantenha todos os links externos com `rel="noopener noreferrer"` e `target="_blank"`.**
4. **Verifique se novos domínios ou serviços de terceiros estão declarados na meta tag de CSP.**
