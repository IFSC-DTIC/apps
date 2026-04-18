# 🧪 Roteiros de Teste e Estratégia de QA (QEA)

Este documento detalha a estratégia de teste para o Portal de Apps IFSC, incluindo roteiros manuais, sugestões de automação e o papel do agente **Jules** no "Double Check" de qualidade.

---

## 🎯 Estratégia de Teste

A estratégia foca em garantir que o portal permaneça funcional como uma aplicação estática, com foco em UX, busca e integridade dos dados exibidos.

| Tipo de Teste | Descrição | Ferramenta Sugerida |
| :--- | :--- | :--- |
| **E2E (Ponta a Ponta)** | Fluxos de usuário: busca, filtro e abertura de apps. | Playwright |
| **Acessibilidade** | Verificação de contrastes, labels e navegação por teclado. | Axe-core / Lighthouse |
| **Visual Regression** | Garantir que o layout não "quebre" em diferentes viewports. | Playwright Screenshots |
| **Integridade de Dados** | Validar se o `apps.json` está bem formatado e com IDs únicos. | Script JS / Ajv (JSON Schema) |

---

## 📝 Roteiros de Teste (Test Cases)

### 1. Busca e Filtragem
- **Cenário:** O usuário busca por "LGPD".
- **Passos:**
    1. Acessar a home.
    2. Digitar "LGPD" na barra de busca.
- **Resultado Esperado:** Apenas apps da categoria LGPD devem ser exibidos.

### 2. Navegação por Categorias (Filtros)
- **Cenário:** Clicar no botão "BPMN".
- **Passos:**
    1. Clicar no botão de filtro "BPMN".
- **Resultado Esperado:** A grid deve atualizar para mostrar apenas apps de BPMN. O botão deve ganhar a classe `active`.

### 3. Detalhes do App (Modal)
- **Cenário:** Abrir informações detalhadas.
- **Passos:**
    1. Clicar no card do app "Guardião LGPD".
- **Resultado Esperado:** O modal deve abrir com título, descrição correta e o botão "Abrir App" funcional.

### 4. Modo Escuro (Dark Mode)
- **Cenário:** Alternar tema.
- **Passos:**
    1. Clicar no botão de toggle de tema.
- **Resultado Esperado:** A classe `dark` deve ser adicionada ao `html`.

---

## 🤖 Jules como "QA Tester" no Antigravity

Para um processo de "Double Check", o agente Jules pode ser instruído com o seguinte prompt:

### Prompt para Jules (Validador de Mudanças):
> **Persona:** Engenheiro de QEA Sênior.
> **Contexto:** Uma nova funcionalidade foi implementada no Portal de Apps.
> **Tarefa:** Antes de dar o OK para o merge, execute os testes E2E definidos em `tests/` e analise o `index.html` em busca de quebras de acessibilidade ou problemas de performance.
> **Formato de Saída:** Relatório técnico de bugs encontrados e sugestão de correção imediata.
