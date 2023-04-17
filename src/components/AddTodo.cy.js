import React from "react";
import AddTodo from "./AddTodo";

describe("<AddTodo />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AddTodo />);
  });

  it("stepper should default to 0", () => {
    cy.mount(<AddTodo />);
    cy.get("[data-cy=addTodo]").should("be.disabled");
  });
});
