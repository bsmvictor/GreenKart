# Projeto de Testes Automatizados com Cypress
Este projeto utiliza Cypress para realizar testes automatizados end-to-end na aplicação Green Kart (https://rahulshettyacademy.com/seleniumPractise/#/). O objetivo é validar o funcionamento de funcionalidades específicas, como adição e remoção de produtos da sacola, cálculo de valores totais, e navegação entre páginas.

 # Descrição
Este projeto visa automatizar testes para a aplicação Green Kart, verificando a correta exibição e manipulação de elementos da interface e calculando valores de produtos adicionados ao carrinho. O Cypress permite que os testes sejam executados diretamente no navegador, fornecendo um ambiente confiável e visual para validar o comportamento da aplicação.

# Pré-requisitos
- Node.js (v12 ou superior)
- npm (gerenciador de pacotes do Node.js)
Verifique se você tem essas dependências instaladas executando:
```
node -v
npm -v
```

# Instalação
1. Clone o repositório do projeto:
```
git clone https://github.com/bsmvictor/GreenKart.git
```
2. Acesse o diretório do projeto:
```
cd GreenKart
```
3. Instale as dependências do Cypress:
```
npm install
```
# Estrutura de Arquivos
```
|-- cypress/
|   |-- e2e/
|   |   |-- GreenKart_tests.cy.js      # Arquivo principal de testes
|   |-- support/                       # Arquivos de configuração e comandos customizados
|-- node_modules/                      # Módulos instalados pelo npm
|-- cypress.config.js                  # Configurações do Cypress
|-- package.json                       # Dependências e scripts do projeto
|-- README.md                          # Documentação do projeto
```
- cypress/e2e/GreenKart_tests.cy.js: Contém os testes para funcionalidades específicas da aplicação Green Kart.
- cypress.config.js: Arquivo de configuração do Cypress, onde você pode ajustar a base URL, tempo limite de espera, etc.

# Como Executar os Testes
1. Executar os testes no modo interativo
Para abrir o Cypress no modo interativo, onde você pode acompanhar os testes rodando no navegador:
```
npx cypress open
```

Escolha o arquivo de teste desejado (por exemplo, `GreenKart_tests.cy.js`) na interface e observe os testes sendo executados.

2. Executar os testes no modo headless
Para executar os testes no modo headless (sem interface gráfica), execute:
```
npx cypress run
```
Os resultados dos testes serão exibidos diretamente no terminal.

# Referências
- [Documentação do Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- [Cypress GitHub](https://github.com/cypress-io/cypress)
- [Green Kart Application](https://rahulshettyacademy.com/seleniumPractise/#/)
