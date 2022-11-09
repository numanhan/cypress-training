/// <reference types="cypress"/>
describe("to-do actions", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo") // we can add timeout which delay the action, it waits for element in the page.
      .type("Clean the room {enter}");
  });

  it("should add new task to todo", () => {
    cy.get("label").should("have.text", "Clean the room");

    cy.get(".toggle").should("not.be.checked");
  });

  it("should mark todo as completed", () => {
    cy.get(".toggle").click();

    cy.get("label").should("have.css", "text-decoration-line", "line-through");
  });

  it("should clear completed todos", () => {
    cy.get(".toggle").click();

    cy.contains("Clear completed").click();

    cy.get(".todo-list").should("not.have.descendants", "li");
  });
});
