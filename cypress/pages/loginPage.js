class LoginPage {
    selectorsList() {
        const selectors = {
            usenameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "button[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }

        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usenameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}

export default LoginPage