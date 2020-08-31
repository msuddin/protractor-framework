let login_page = function(){

    let customer_login = element(by.css('[ng-click="customer()"]'));
    let manager_login = element(by.css('[ng-click="manager()"]'));

    this.nagivateTo = function(url){
        browser.get(url);
    }
    
    this.customerLogin = function(){
        customer_login.click();
    };

    this.managerLogin = function(){
        manager_login.click();
    };
};

module.exports = new login_page();