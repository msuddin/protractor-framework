let login_page = function(){

    let customer_login = element(by.css('[ng-click="customer()"]'));

    this.nagivateTo = function(url){
        browser.get(url);
    }
    
    this.customerLogin = function(){
        customer_login.click();
    };
};

module.exports = new login_page();