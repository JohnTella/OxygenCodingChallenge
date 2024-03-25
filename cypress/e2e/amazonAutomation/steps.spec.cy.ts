import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LandingPage from '../pageObjects/LandingPage'
const landingPage = new LandingPage()
import TabPage from '../pageObjects/TabPage'
const tabPage = new TabPage()
import ProductPage from '../pageObjects/productPage'
const productPage = new ProductPage()


Given(/^I am on the Amazon website$/, () => {
	cy.visit('/')
      
});

When(/^I navigate to Computers -> Tablet accessories$/, () => {
	landingPage.hamburgerMenu.click()
    cy.wait(2000)
    landingPage.computersOptions.click({force:true});
    landingPage.tabletAccessoriesOption.click({force:true});
});

When(/^I click on the JETech checkbox$/, () => {
	tabPage.seeMore.click({force:true});
    tabPage.checkboxJETech.click()
});

When(/^I sort by newest arrivals and from lowest to highest$/, () => {
	cy.get('select').eq(1).select('Newest Arrivals',{force:true})
    cy.wait(2000)
    cy.get('select').eq(1).select('Price: Low to High',{force:true})
      
});

When(/^I click on the least expensive item to check the item$/, () => {
	tabPage.lowestPricedItem.click({force:true})
});

Then(/^I should see the details and be able to log it in the console$/, () => {
	productPage.aboutThisItemHeader.should('exist')
    productPage.aboutThisItem.each(($e1, index, $list) =>{
    const aboutThisItemText = $e1.find('span.a-list-item').text()
        cy.log(aboutThisItemText)
    })
});
