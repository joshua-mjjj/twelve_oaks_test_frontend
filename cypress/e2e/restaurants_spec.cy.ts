describe('Search Restaurants', () =>  {
    it('user can enter location and search and initiate search', () => {
      
      // Visit app
      cy.visit('http://localhost:3000')

      // Enter location and search term
      cy.findByRole('textbox', {  name: /location/i}).type('Texas')
      cy.findByRole('textbox', {  name: /search term/i}).type('sushi')
      cy.findByRole('button', {  name: /search restaurants/i}).click()

      // Asserting for non existence because this component will not render when no results were found
      cy.findByRole('heading', {  name: /no restaurants found\./i}).should('not.exist')

    })
  })

  describe('Searching Restaurants but no results and search again', () =>  {
    it('User can search again after getting no results found', () => {
      
      // Visit app
      cy.visit('http://localhost:3000')

      // Enter location and search term
      cy.findByRole('textbox', {  name: /location/i}).type('Florida')
      cy.findByRole('textbox', {  name: /search term/i}).type('sushi')
      cy.findByRole('button', {  name: /search restaurants/i}).click()

      // Asserting for existence because this component only renders when no results were found
      cy.findByRole('heading', {  name: /no restaurants found\./i}).should('exist')

      // Enter location and search term again
      cy.findByRole('textbox', {  name: /location/i}).clear().type('Texas')
      cy.findByRole('textbox', {  name: /search term/i}).clear().type('sushi')
      cy.findByRole('button', {  name: /search/i}).click()

      // Asserting for existence because this component only renders when no results were found
      cy.findByRole('heading', {  name: /no restaurants found\./i}).should('not.exist')
      
    })
  })

  describe('Single Restaurant Detail Page', () =>  {
    it('user can search, view single restuarant detail page and go back', () => {
      
      // Visit app
      cy.visit('http://localhost:3000')

      // Enter location and search term
      cy.findByRole('textbox', {  name: /location/i}).clear().type('Texas')
      cy.findByRole('textbox', {  name: /search term/i}).clear().type('sushi')
      cy.findByRole('button', {  name: /search restaurants/i}).click()

      cy.findByText(/jellyfish/i).click()
      cy.findByRole('heading', {  name: /jellyfish/i}).should('exist')
      cy.findByTestId('ArrowBackIcon').click()
      
    })
  })
 
  