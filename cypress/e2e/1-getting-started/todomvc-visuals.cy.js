/// <reference types="cypress" />
import * as todoPage from '../../page-objects/todo-page'

describe('Visual Validations', ()=>{
before(()=> todoPage.navigate())

beforeEach(()=> cy.eyesOpen({appName:'Todo MVC App', batchName:'Testing is cute',
browser:[
    {name:'chrome', height:'1024', width:'768'},
    {name:'chrome', height:'800', width:'600'},
    {name:'firefox', height:'1024', width:'728'},
    {name:'firefox', height:'800', width:'600'}, // here we can add multiple browsers and multiple height and widths
    {deviceName:'iPhone 13'}
]
}))
afterEach(()=> cy.eyesClose())

it('Should add todos into the tasks', ()=>{
    cy.eyesCheckWindow('Get the empty list') // Applitools command for take snapshot on the screen

    todoPage.addTodo('Clean the room')
    todoPage.addTodo('Go to gym')

    cy.eyesCheckWindow('Added todo list two sections')

    todoPage.toggleTodo(0)

    cy.eyesCheckWindow('Mark as completed')
})

})