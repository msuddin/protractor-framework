let customer_page = function(){

    let account_balance = element.all(by.css('[ng-hide="noAccount"] strong'));
    let deposit_btn = element(by.css('[ng-click="deposit()"]'));
    let deposit_field = element(by.model('amount'));
    let deposit_submit = element(by.css('[type="submit"]'));

    this.accountBalance = function(){
        return account_balance.get(1).getText();
    }

    this.deposit = function(amount){
        deposit_btn.click();
        deposit_field.sendKeys(amount);
        deposit_submit.click();
    }
};

module.exports = new customer_page();