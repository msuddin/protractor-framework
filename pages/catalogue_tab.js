let catalogue_tab = function(){
    
    let allAvailableCatalogueItems = element.all(by.css('[class="content"]'));
    let allAvailableCatalogueItemNames = element.all(by.css('[class="bottom"] [class="title"]'));

    this.getAvailableCatalogueItemNameByNumber = function(index){
        return allAvailableCatalogueItemNames.get(index).getText();
    };

    this.selectFromAvailableCatalogueItemByNumber = function(index){
        allAvailableCatalogueItems.get(index).click();
    };
};

module.exports = new catalogue_tab();