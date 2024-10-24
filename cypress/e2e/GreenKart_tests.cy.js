/// <reference = cypress >

const { it } = require("node:test");

describe("Testes de adição, remoção e busca", () => {

    it.skip("Teste de adição de itens na sacola", () => {
        let itensCount = 0;
        const produtosParaAdicionar = [1, 4, 7, 10, 15, 21, 30]; // Índices dos produtos que deseja adicionar

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Loop para adicionar produtos na sacola
        produtosParaAdicionar.forEach((index) => {
            cy.get(`:nth-child(${index}) > .product-action > button`).click();
            itensCount++;
        });

        // Verifique se o número de itens no carrinho corresponde ao esperado
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', itensCount.toString());
    });

    // it("Teste de remoção de itens da sacola", () => {
    //     let itensCount = 0;
    //     const produtosParaAdicionar = [1, 4, 7, 10, 15, 21, 30]; // Índices dos produtos que deseja adicionar
    //     const produtosParaRemover = [1, 2, 3, 4, 5]; // Índices dos produtos que deseja remover (índices referentes a lista criada na sacola e não ao atribuido na seleção)

    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    //     // Loop para adicionar produtos na sacola
    //     produtosParaAdicionar.forEach((index) => {
    //         cy.get(`:nth-child(${index}) > .product-action > button`).click();
    //         itensCount++;
    //     });

    //     // Abre a sacola para listar os itens adicionados
    //     cy.get('.cart-icon > img').click();

    //     // Loop para remover produtos da sacola
    //     produtosParaRemover.forEach((index) => {
    //         cy.get(`.cart-preview > [style="position: relative; overflow: hidden; width: 360px; height: 320px;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .cart-items > :nth-child(${index}) > .product-remove`).click();
    //         itensCount--;
    //     });

    //     // Verifique se o número de itens no carrinho corresponde ao esperado
    //     cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', itensCount.toString());
    // });

    it("Teste de busca de itens", () => {
        const produtosParaBuscar = ['ca', 'broc', 'tomat']; // Produtos que deseja buscar

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // Loop para buscar produtos
        produtosParaBuscar.forEach((produto) => {
            cy.get('.search-keyword').type(produto);
            cy.get('.product').should('have.length', 1);
            cy.get('.product').should('have.text', produto);
        });
    });

})