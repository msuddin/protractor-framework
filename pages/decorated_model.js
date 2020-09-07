let decorated_model = function(){

    let listState = element(by.css('[class="column is-one-fifths"] p'));
    let listItems = element.all(by.css('[class="name"]'));
    let summaryButton = element(by.css('[href="/viewer"]'));

    this.selectedListStateText = function(){
        return listState.getText();
    };

    this.getListItemNameByNumber = function(index){
        return listItems.get(index).getText();
    };

    this.selectDecoratedModelSummary = function(){
        summaryButton.click();
        browser.sleep(3000);
    };
};

module.exports = new decorated_model();