let model_tab = function(){

    let availableModelNames = element.all(by.css('[class="title"]'));
    let availableModels = element.all(by.css('[class="ModelsList"] li'));
    let selectModel = element(by.css('[class="Model big"] [class="half-width "]'))

    this.getSelectableModelNameByNumber = function(index){
        return availableModelNames.get(index).getText();
    };
    
    this.getCurrentModelName = function(){
        return selectModel.getAttribute('alt');
    };

    this.selectAvailableModelByNumber = function(model){
        availableModels.get(model).click();
    };
};

module.exports = new model_tab();