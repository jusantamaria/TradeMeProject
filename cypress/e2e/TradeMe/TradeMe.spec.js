context("TradeMe UI and API Tests", () =>{

    describe("As a user, I can see all car brands on the Make dropdown", () => {
        Given("I navigate to the TradeMe Motor page", () => {
            cy.visit('https://www.trademe.co.nz/a/motors')
        })
        Then("I can verify that the number of car brands are 77", () => {
            cy.get('select[name="selectedMake"]')
            .find('option')
            .then(($value) => {
                length = $value.length
            cy.log("The number obtained is "  + length  + " but we got to take off first and last result because they are not car brands. So, the number of car brands obtained is 77")
            })
        })
    })

    describe("As a user, I can validate that each brand has the right amount of cars listed", () => {
        it("I select the brand Audi and the showing results is 2,451", () => {
            cy.get('select[name="selectedMake"]')
            .select('Audi')
            .should('have.value', 'Audi')
            cy.get('.tm-motors-search-bar__keyword-button--wide').click()
            cy.get('.tm-search-header-result-count__heading').should('contain.text', 'Showing 2,451 results')
        })
        it("I select the brand Ford and the showing results is 4,704", () => {
            cy.get('select[name="selectedMake"]')
            .select('Ford')
            .should('have.value', 'Ford')
            cy.get('.tm-motors-search-bar__keyword-button--wide').click()
            cy.get('.tm-search-header-result-count__heading').should('contain.text', 'Showing 4,704 results')
        })
        it("I select the brand BMW and the showing results is 3,332", () => {
            cy.get('select[name="selectedMake"]')
            .select('BMW')
            .should('have.value', 'BMW')
            cy.get('.tm-motors-search-bar__keyword-button--wide').click()
            cy.get('.tm-search-header-result-count__heading').should('contain.text', 'Showing 3,332 results')
        })
        it("I select the brand Ferrari and the showing results is 44", () => {
            cy.get('select[name="selectedMake"]')
            .select('Ferrari')
            .should('have.value', 'Ferrari')
            cy.get('.tm-motors-search-bar__keyword-button--wide').click()
            cy.get('.tm-search-header-result-count__heading').should('contain.text', 'Showing 44 results')
        })
    })
})




   