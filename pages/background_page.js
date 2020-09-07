let background_page = function(){

    let selectListState = element(by.css('[class="column is-one-fifths"] p'));
    let currentBackground = element.all(by.css('[class="Model big"] [alt="background"]'));
    let allAvailableBackgrounds = element.all(by.css('[class="BackgroundsList"] ul li'));
    let backgroundElementTagsInDom = element.all(by.css('[class="Model big"] [alt="background"]'));

    this.selectedListStateText = function(){
        return selectListState.getText();
    };

    this.currentBackgroundCount = function(){
        return currentBackground.count();
    };

    this.selectFirstAvailableBackground = function(){
        browser.sleep(2000);
        return allAvailableBackgrounds.get(0).click();
    };

    this.backgroundElementTagsInDomCount = function(){
        return backgroundElementTagsInDom.count();
    };
};

module.exports = new background_page();