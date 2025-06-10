import {MSGS, PATHS, WAIT} from "../../config/constants";
import {AUTH} from "../../config/auth";

describe(`${MSGS.name}.Auth`, () => {

    it('Can login', () => {
        cy.login()
        cy.visit(PATHS.home)
        // cy.loginProcess()
        // cy.wait(WAIT.time * 1)
        // cy.contains(AUTH.displayName)
    })
})