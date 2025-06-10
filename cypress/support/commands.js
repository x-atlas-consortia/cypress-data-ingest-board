// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import './auth'

Cypress.Commands.add('interceptProtocols', () => {
    // Intercept the jsonp requests to protocols made that triggers 'unexpected' while running in cypress
    const randomJsonForNoError = 'https://ingest-board.dev.sennetconsortium.org/content/banners/index.json'
    cy.intercept('google-analytics.com*', (req) => {
        req.url = randomJsonForNoError
    })
})