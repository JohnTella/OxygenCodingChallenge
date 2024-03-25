class ProductPage
{
get aboutThisItemHeader(){
    return cy.get('#featurebullets_feature_div')
}

get aboutThisItem(){
    return cy.get('#featurebullets_feature_div').find('.a-unordered-list.a-vertical.a-spacing-mini')
    .find('.a-spacing-mini')
}



}

export default ProductPage