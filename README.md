# Portal de Aplicações IFSC-DTIC-CGD

🛡️ Um portal dinâmico para apresentar e descobrir aplicações desenvolvidas pela comunidade do IFSC, com foco na Diretoria de Tecnologia da Informação e Comunicação (DTIC) e Coordenadoria Geral de Desenvolvimento (CGD).

Este portal é uma vitrine centralizada para as diversas ferramentas e sistemas criados para auxiliar a comunidade acadêmica e administrativa do Instituto Federal de Santa Catarina. O objetivo é facilitar o acesso, a descoberta e a colaboração em torno de soluções tecnológicas que otimizam processos, gerenciam dados e promovem a conformidade com a LGPD.

## Funcionalidades

- **Painel Visual:** Navegue por um grid de aplicações com design limpo e moderno.
- **Categorias:** Aplicações organizadas por categorias temáticas (LGPD, Processos, Dados).
- **Filtragem Rápida:** Filtre as aplicações por categoria com um clique.
- **Busca Instantânea:** Encontre rapidamente a aplicação que você precisa com a barra de pesquisa.
- **Responsivo:** Acesso e visualização otimizados para desktops, tablets e smartphones.
- **Colaborativo:** Projeto aberto a contribuições da comunidade IFSC.
- **Segurança e Evolução:** [Diretrizes de Segurança](./SEGURANCA.md) e [Sugestões de Funcionalidades](./FUNCIONALIDADES.md) para evolução contínua do portal.

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Layout e Filtragem:** [Isotope.js](https://isotope.metafizzy.co/)
- **Fonte:** [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)

## Como Contribuir

Este é um projeto colaborativo! Se você desenvolveu uma aplicação de interesse para a comunidade IFSC, siga os passos abaixo para adicioná-la ao portal:

1.  **Faça um Fork:** Crie uma cópia (fork) deste repositório para a sua conta do GitHub.
2.  **Clone o Repositório:** `git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git`
3.  **Modifique o Código:** Abra o arquivo `index.html` em seu editor de código.
4.  **Adicione sua Aplicação:** Localize a constante `categoriesData` dentro da tag `<script>`. Você pode adicionar sua aplicação a uma categoria existente ou criar uma nova.

    **Exemplo de adição a uma categoria existente:**

    ```javascript
    // ...
    {
      name: 'Dados',
      iconKey: 'dados',
      apps: [
         { name: 'Automação de Mapeamento de Dados LGPD', url: '...', description: '...' },
         { name: 'Ferramenta de Padronização de Inventário', url: '...', description: '...'},
         // Adicione seu app aqui
         { name: 'Nome do Seu App', url: 'URL_DO_SEU_APP', description: 'Uma breve descrição do seu app.' }
      ]
    }
    // ...
    ```

5.  **Commit e Push:** Salve suas alterações e envie-as para o seu fork:
    ```bash
    git add index.html
    git commit -m "feat: Adiciona a aplicação [Nome do App]"
    git push origin main
    ```
6.  **Abra um Pull Request:** Volte para o repositório original no GitHub e crie um Pull Request com suas alterações para que elas sejam revisadas e integradas ao portal.

## Como Executar Localmente

Como este é um projeto frontend simples, não há necessidade de um servidor ou dependências complexas. Basta clonar o repositório e abrir o arquivo `index.html` diretamente em seu navegador.

```bash
git clone https://github.com/IFSC-DTIC/app-portal.git # (Substitua pelo nome correto do repositório)
cd app-portal
# Abra o arquivo index.html no seu navegador preferido
```

## Licença

Distribuído sob a licença MIT.
