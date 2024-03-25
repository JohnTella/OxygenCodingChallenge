class LandingPage
{
get hamburgerMenu(){
    return cy.get('#nav-hamburger-menu')
}

get computersOptions(){
    return cy.get('.hmenu-item').contains('Computers')
}

get tabletAccessoriesOption(){
    return cy.get('.hmenu-item').contains('Tablet Accessories')
}



}

export default LandingPage