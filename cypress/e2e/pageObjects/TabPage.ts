class TabPage
{
get seeMore(){
    return cy.get('.a-section').contains('See more')
}

get checkboxJETech(){
    return cy.contains('JETech')
}

get lowestPricedItem(){
    return cy.get('.a-size-base-plus').eq(1)
}



}

export default TabPage