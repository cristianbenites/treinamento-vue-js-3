const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('Home', () => {
  it('should render create account modal when CTA create account button is clicked', () => {
    cy.visit(APP_URL)

    cy.get('#cta-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('should render create account modal when header create account button is clicked', () => {
    cy.visit(APP_URL)

    cy.get('#header-create-account-button').click()

    cy.get('#modal-create-account')
  })

  it('should render login modal when header login button is clicked', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()

    cy.get('#modal-login')
  })

  it('should log in with an email and a password', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
  })

  it('should show an error when an invalid email is inserted', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igorme')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.get('#email-error')
  })

  it('should logout button work correctly', () => {
    cy.visit(APP_URL)

    cy.get('#header-login-button').click()
    cy.get('#modal-login')

    cy.get('#email-field').type('igor@igor.me')
    cy.get('#password-field').type('1234')
    cy.get('#submit-button').click()

    cy.url().should('include', '/feedbacks')
    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
