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
import {SEL, WAIT} from "../config/constants";

Cypress.Commands.add('interceptProtocols', () => {
    // Intercept the jsonp requests to protocols made that triggers 'unexpected' while running in cypress
    const randomJsonForNoError = 'https://ingest-board.dev.sennetconsortium.org/content/banners/index.json'
    cy.intercept('google-analytics.com*', (req) => {
        req.url = randomJsonForNoError
    })
})

Cypress.Commands.add('search', (keyword) => {
    cy.get('#appSearch').clear().type(`${keyword}{enter}`)
})

/**
 * @param filter
 */
Cypress.Commands.add('appFilter', (filter, keyword) => {
    cy.get(`[aria-label="${filter}"] .anticon.anticon-filter`).as('filterMenu')
    cy.get('@filterMenu').click()
    cy.get('.ant-dropdown-menu-item').contains(keyword).click()
    cy.get('.ant-btn-primary').contains('OK').click()
})

Cypress.Commands.add('download', (filename, sel = '.js-gtm--btn-cta-csvDownload') => {
    cy.get(SEL.bulk).click()
    cy.get(sel).click()
    cy.wait(WAIT.time * 2)
    cy.readFile(`cypress/downloads/${filename}`)
        .should('exist')

})

Cypress.Commands.add('sort', (id,  className, checkClass, checkText, upto = 5) => {
    cy.get(`th${id}`).click()

    cy.get(className).each(($el, index, $list) => {
        if (index < upto) {
            if (checkClass) {
                $el.hasClass(checkClass)
            } else {
                cy.get(className).eq(index).contains(checkText)
            }
        }

    })
})