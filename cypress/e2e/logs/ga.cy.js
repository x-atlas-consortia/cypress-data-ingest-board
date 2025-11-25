import {MSGS, PATHS, DATA, SEL, WAIT} from "../../config/constants";
import 'cypress-iframe';

describe(`${MSGS.name}.Usage.GA`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.logs + '/ga')
    })

    it('Loads report', () => {
        cy.get('iframe').should('have.length', 1)
    })

    describe('Check report content', () => {
    it('Elements in iframe loads and are interactive', () => {

        cy.get('.ant-menu-submenu').eq(0).as('gaMenu')
        cy.get('@gaMenu').find('.ant-menu-title-content').click()
        cy.get('@gaMenu').find('.ant-menu-sub li').each(($el, index, collection) => {

            cy.log($el.text())
            $el.trigger('click')

            cy.frameLoaded('.ant-layout iframe');

            // Interact with elements inside the iframe
            cy.iframe('.ant-layout iframe').within(() => {

            cy.wait(WAIT.time * 7)
            //cy.get('ng2-date-range-picker button').click()
            cy.contains('Active users').should('be.visible')
            cy.contains('Export to PDF').should('be.visible')
            });
        })
        
    });
    })


})