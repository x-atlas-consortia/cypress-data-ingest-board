import {MSGS, PATHS, SEL, WAIT} from "../../config/constants";

describe(`${MSGS.name}.Table.Btn`, () => {

    beforeEach(() => {
        cy.login()
        cy.visit(PATHS.home)
    })

    it('Switches table type', () => {
        cy.get(SEL.switchBtn).contains('SWITCH TO UPLOADS').click()
        cy.wait(WAIT.time)
        cy.get(SEL.switchBtn).contains('SWITCH TO DATASETS')

    })
})