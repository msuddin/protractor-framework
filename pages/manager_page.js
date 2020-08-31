let manager_page = function(){

    let add_customer_btn = element(by.css('[ng-click="addCust()"]'));
    let new_customer_first_name_field = element(by.model('fName'));
    let new_customer_last_name_field = element(by.model('lName'));
    let new_customer_postcode_field = element(by.model('postCd'));
    let new_customer_submit_btn = element(by.css('[type="submit"]'));

    this.addCustomer = function(){
        add_customer_btn.click();
    };

    this.setFirstName = function(fName){
        new_customer_first_name_field.sendKeys(fName);
    };

    this.setLastName = function(lName){
        new_customer_last_name_field.sendKeys(lName);
    };

    this.setPostCode = function(postCode){
        new_customer_postcode_field.sendKeys(postCode);
    };

    this.submitNewCustomer = function(){
        new_customer_submit_btn.click();
    };

    this.getAlertWindowText = function(){
        let alert_text = browser.switchTo().alert().getText();
        browser.switchTo().alert().accept();
        return alert_text;
    };
};

module.exports = new manager_page();