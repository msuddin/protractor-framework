let login = require('../pages/login_page')
let customers = require('../pages/customer_selection_page')
let customer = require('../pages/customer_page')

describe('XYZ Bank Customer', function(){

    beforeEach(() => {
        login.nagivateTo('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        login.customerLogin();
        customers.selectFirstCustomer();
        customers.login();
    })

    it('should have an account balance of 5096', function(){
        // Then
        let currentBalance = customer.accountBalance();
        expect(currentBalance).toBe('5096');
    });

    it('should be able to deposite 100 into account', function(){
        // When
        let amountToDeposit = 100;
        customer.deposit(amountToDeposit);
        
        // Then
        let balanceAfterDeposit = customer.accountBalance();
        expect(balanceAfterDeposit).toBe('5196');
    });

});