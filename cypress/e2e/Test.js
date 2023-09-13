/// <reference types= "cypress" />



describe('These tests to check the trip details', () => {
    it('First check: make sure that the departure is set to be todays date +1', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let day = String(tomorrow.getDate());
        let month = tomorrow.toLocaleDateString('ar-AE', { month: 'long' });
        let WeekDay = tomorrow.toLocaleDateString('ar-AE', { weekday: 'long' });
        cy.get('[data-testid="FlightSearchBox__FromDateButton"]')
        .should('include.text', `${month}${day} ${WeekDay}`); });
    it('Second check : To make sure that the return date is set to be todays date +2', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 2);
        let day = String(tomorrow.getDate());
        let month = tomorrow.toLocaleDateString('ar-AE', { month: 'long' });
        let WeekDay = tomorrow.toLocaleDateString('ar-AE', { weekday: 'long' });
        cy.get('[data-testid="FlightSearchBox__ToDateButton"]')
        .should('include.text', `${month}${day}${WeekDay}`);  });
    it('Third check : to make sure that the flight class is set to be economy by default ', () => {
        cy.visit("https://www.almosafer.com/ar")
        cy.get('.cta__saudi').click()
        cy.get('.sc-jWxkHr').should('contain.text', 'السياحية');  });});