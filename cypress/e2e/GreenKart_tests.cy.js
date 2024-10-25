/// <reference = cypress >

describe("Testes de adição, remoção, busca e valores", () => {

    it("Teste de adição de itens na sacola", () => {
        let itensCount = 0;
        const produtosParaAdicionar = [1, 4, 7, 10, 15, 21, 30]; // Índices dos produtos que deseja adicionar

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Loop para adicionar produtos na sacola
        produtosParaAdicionar.forEach((index) => {
            cy.get(`:nth-child(${index}) > .product-action > button`).click();
            itensCount++;
            cy.wait(1000);
        });

        // Verifique se o número de itens no carrinho corresponde ao esperado
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', itensCount.toString());
    });    

    it("Teste de busca de itens", () => {
    
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword')
            .type('Brocolli')
            cy.get('.product > .product-name').should('have.text', 'Brocolli - 1 Kg');
        
        cy.get('.search-keyword').clear();
        cy.get('.search-keyword')
            .type('Cauliflower')
            cy.get('.product > .product-name').should('have.text', 'Cauliflower - 1 Kg');

        cy.get('.search-keyword').clear();
        cy.get('.search-keyword')
            .type('Cucumber')
            cy.get('.product > .product-name').should('have.text', 'Cucumber - 1 Kg');
    });

    it('Teste de busca de itens não disponíveis', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword')
            .type('Watermelon')
            cy.get('.no-results > h2').should('have.text', 'Sorry, no products matched your search!');
            cy.wait(1000);
        
        cy.get('.search-keyword').clear();
        cy.get('.search-keyword')
            .type('Avocado')
            cy.get('.no-results > h2').should('have.text', 'Sorry, no products matched your search!');
            cy.wait(1000);

            cy.get('.search-keyword').clear();
            cy.get('.search-keyword')
                .type('Apricot')
                cy.get('.no-results > h2').should('have.text', 'Sorry, no products matched your search!');
    });

    it('Teste cálculo total da compra', () => {
        let totalValue = 309;
        const produtosParaAdicionar = [1, 4, 7, 10];
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    
        produtosParaAdicionar.forEach((index) => {
            cy.get(`:nth-child(${index}) > .product-action > button`).click();
            cy.wait(1000);
        });

        cy.get(':nth-child(2) > :nth-child(3) > strong').should('have.text', totalValue);
    
    });
    
    
    it("Teste de caminho para pagina de checkout da compra", () => {
        const produtosParaAdicionar = [1, 4, 7, 10, 15, 21, 30]; // Índices dos produtos que deseja adicionar

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Loop para adicionar produtos na sacola
        produtosParaAdicionar.forEach((index) => {
            cy.get(`:nth-child(${index}) > .product-action > button`).click();
            cy.wait(1000);
        });

        cy.get('.cart-icon > img').click();

        cy.get('.cart-preview > .action-block > button').click();

        cy.url().should('include', '/cart');
        
    }); 

    it("Teste para finalização da compra", () => {
        const produtosParaAdicionar = [1, 4, 7, 10, 15, 21, 30]; // Índices dos produtos que deseja adicionar

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Loop para adicionar produtos na sacola
        produtosParaAdicionar.forEach((index) => {
            cy.get(`:nth-child(${index}) > .product-action > button`).click();
            cy.wait(1000);
        });

        cy.get('.cart-icon > img').click();

        cy.get('.cart-preview > .action-block > button').click();

        cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click();

        cy.get('select').select('Brazil');

        cy.get('.chkAgree').click();

        cy.get('button').click();

        cy.get('[style="color:green;font-size:25px"]').should('have.text', 'Thank you, your order has been placed successfully  You\'ll be redirected to Home page shortly!!');
        
    }); 
})