let customer_selection_page = function(){

    let customers = element.all(by.css('[ng-repeat="cust in Customers"]'));
    let loginBtn = element(by.css('[ng-show="custId != \'\'\"]'));

    this.numberOfCustomers = function(){
        return customers.count();
    };

    this.selectFirstCustomer = function(){
        customers.get(0).click();
    }

    this.login = function(){
        loginBtn.click();
    }
};

module.exports = new customer_selection_page();