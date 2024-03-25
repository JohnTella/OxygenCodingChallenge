import LandingPage from '../pageObjects/LandingPage'
import TabPage from '../pageObjects/TabPage'
import ProductPage from '../pageObjects/productPage'

describe('Amazon Web Automation', () => {
  
  it('Validate details of lowest priced item', () => {
    cy.visit('/')
    const landingPage = new LandingPage()
      landingPage.hamburgerMenu.click()
      cy.wait(2000)
      landingPage.computersOptions.click({force:true});
      landingPage.tabletAccessoriesOption.click({force:true});
      
      const tabPage = new TabPage()
      tabPage.seeMore.click({force:true});
      tabPage.checkboxJETech.click()
      cy.get('select').eq(1).select('Newest Arrivals',{force:true})
      cy.wait(2000)
      cy.get('select').eq(1).select('Price: Low to High',{force:true})
      tabPage.lowestPricedItem.click({force:true})
      
      const productPage = new ProductPage()
      productPage.aboutThisItemHeader.should('exist')
      productPage.aboutThisItem.each(($e1, index, $list) =>{
        const aboutThisItemText = $e1.find('span.a-list-item').text()
        cy.log(aboutThisItemText)

      })
      
      



    
   

  })
})