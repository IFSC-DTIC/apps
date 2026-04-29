# 📂 Catálogo Detalhado de Aplicações IA - IFSC

Este documento fornece uma análise técnica e funcional detalhada de cada aplicação integrada ao portal, dividida entre ferramentas locais e externas.

---

## 🛠️ Aplicações Internas (Locais)

Estas aplicações rodam diretamente no domínio do portal e foram desenvolvidas com foco em privacidade e processamento no cliente.

### 1. Gerador de Termo de Consentimento (LGPD/ECA)
- **Caminho:** `/termo`
- **Funcionalidade:** Gera um PDF personalizado de termo de consentimento para pais ou responsáveis de alunos menores de idade. Cobre autorização para uso de biometria facial e criação de contas em plataformas de nuvem (Google/Microsoft).
- **Tecnologias:** Tailwind CSS, `html2pdf.js`.
- **Destaque de Segurança:** Não armazena nenhum dado preenchido; o processamento do PDF ocorre inteiramente no navegador do usuário.

### 2. Redirecionador do I Seminário de IA
- **Caminho:** `/evento`
- **Funcionalidade:** Página de redirecionamento otimizada para o site oficial do evento.
- **Técnica:** Utiliza `meta http-equiv="refresh"` e `window.location.replace` para garantir compatibilidade e manter o histórico de navegação limpo.

---

## 🌐 Aplicações Externas (AI Studio)

Aplicações desenvolvidas utilizando o **Google AI Studio**, focadas em automação administrativa e acadêmica.

### Categoria: LGPD
1.  **Guardião LGPD:** Focado na anonimização de dados sensíveis dentro do contexto do IFSC.
2.  **Chatbot de Relatórios:** Assistente conversacional para auxiliar na conformidade e geração de documentos de impacto.
3.  **Form2RIPD:** Ferramenta específica para converter formulários em Relatórios de Impacto à Proteção de Dados (RIPD).
4.  **Automação de Mapeamento:** Auxilia no inventário de dados pessoais da instituição.

### Categoria: BPMN (Processos)
1.  **sez.iO:** Agente focado em modelagem de processos e relatórios.
2.  **LaRDiC:** Laboratório de roteirização que transforma modelos BPMN/DMN em documentação formal (.docx).
3.  **Pé-de-Meia:** Assistente especializado na formatação e fluxos do programa SGP - Pé-de-Meia.
4.  **Texto -> Processo:** Converte descrições textuais em especificações de sistema e diagramas de processo.

### Categoria: SIADS & Administrativo
1.  **Padronização de Inventário:** IA para limpeza e unificação de dados de inventário de múltiplos campi.
2.  **RSC-TAE Assistente:** Ferramenta de referência para extração de dados relativos ao Reconhecimento de Saberes e Competências (RSC).

---

## ❓ Perguntas para Refinamento

Para melhorar esta documentação, preciso de mais detalhes sobre o funcionamento interno de algumas ferramentas:

1.  **LaRDiC:** Como é feita a conversão técnica de BPMN para `.docx`? Existe algum serviço intermediário ou a lógica está toda contida no prompt do AI Studio?
2.  **Guardião LGPD:** Quais são as regras de anonimização utilizadas? (Ex: Mascaramento, Generalização, Pseudonimização).
3.  **Pé-de-Meia:** Este assistente acessa algum endpoint da API do SGP ou trabalha apenas com extração de informações de documentos fornecidos pelo usuário?
4.  **Integração:** Existe o desejo de migrar alguma dessas ferramentas de "AI Studio" para uma interface local customizada dentro deste repositório no futuro?

---

## 🚀 Como contribuir com a Documentação
Se você é o autor de um desses apps, pode editar este arquivo para adicionar detalhes técnicos sobre o modelo utilizado (ex: Gemini 1.5 Pro) ou limitações conhecidas da ferramenta.
