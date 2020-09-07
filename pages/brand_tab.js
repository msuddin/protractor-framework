let brand_tab = function(){

    let availableBrandsForSelection = element.all(by.css('[class="selectable slide-in"] div img'));

    this.selectFirstAvailabeBrandByNumber = function(index){
        availableBrandsForSelection.get(index).click();
        browser.sleep(3000);
    };

    this.getFirstAvailableBrandNameByNumber = function(index){
        return availableBrandsForSelection.get(index).getAttribute('alt');
    };
};

module.exports = new brand_tab();