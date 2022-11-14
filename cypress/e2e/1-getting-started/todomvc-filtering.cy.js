/// <reference types="cypress"/>

describe('Filtering Process', () => {
    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh/");

        cy.get('.new-todo').type('Clean the room {enter}')
        cy.get('.new-todo').type('Learn Cypress {enter}')
        cy.get('.new-todo').type('Make Plan weekly{enter}')

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('Should filter "Active" tasks', ()=>{
        cy.contains('Active').click()

        cy.get('.todo-list li').should('have.length', 2)
    })

    it('Should filter "Completed" tasks', ()=>{
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })

    it('Should filter "All" tasks', ()=>{
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)
    })
})