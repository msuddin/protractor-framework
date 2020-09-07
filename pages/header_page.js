let header_page = function(){

    let backgroundTab = element(by.css('[href="/backgrounds"]'));
    let modelTab = element(by.css('[href="/models"]'));
    let brandTab = element(by.css('[href="/brands"]'));
    let catalogueTab = element(by.css('[href="/catalog"]'));
    
    this.selectBackgroundTab = function(){
        backgroundTab.click();
        browser.sleep(3000);
    };

    this.selectModelsTab = function(){
        modelTab.click();
        browser.sleep(3000);
    };

    this.selectBrandsTab = function(){
        brandTab.click();
        browser.sleep(2000);
    };

    this.selectCatalogueTab = function(){
        catalogueTab.click();
        browser.sleep(2000);
    };
};

module.exports = new header_page();