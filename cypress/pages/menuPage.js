class MenuPage {
    selectorsList() {
        const selectors = {
           myInfoMenu: '[href="/web/index.php/pim/viewMyDetails"]',
           adminMenu: '[href="/web/index.php/admin/viewAdminModule"]',
           pimMenu: '[href="/web/index.php/pim/viewPimModule"]',
        }

        return selectors
    }

    accessMyInfo() {
       cy.get(this.selectorsList().myInfoMenu).click()
    }
    accessAdmin() {
        cy.get(this.selectorsList().adminMenu).click()
    }

    accessPIM() {
        cy.get(this.selectorsList().pimMenu).click()
    }

    


}

export default MenuPage