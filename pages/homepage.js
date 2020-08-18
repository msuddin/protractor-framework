let homepage = function(){

    let firstNumber_inputField = element(by.model('first'));
    let secondNumber_InputField = element(by.model('second'));
    let go_button = element(by.css('[ng-click="doAddition()"]'));

    this.nagivateTo = function(url){
        browser.get(url);
    }

    this.enterFirstNumber = function(number){
        firstNumber_inputField.sendKeys(number);
    };

    this.enterSecondNumber = function(number){
        secondNumber_InputField.sendKeys(number);
    };

    this.clickGo = function(){
        go_button.click();
    };

    this.getResult = function(){
        return element(by.css('.ng-binding')).getText();
    };
};

module.exports = new homepage();