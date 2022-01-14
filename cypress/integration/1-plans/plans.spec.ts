/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/plans')
    cy.intercept('GET', '/api/plans').as('getPlans')
  })

  it('displays list plans', () => {
    cy.get('h2').contains('Plans')
  })

  it('displays list plans', () => {
    cy.get('[data-cy=plan-item]').should('not.exist')
    cy.get('button').click()
    cy.wait(2000)
    cy.get('[data-cy=plan-item]').should('exist')
  })
})
