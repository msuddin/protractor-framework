let login = require('../pages/login_page')
let manager = require('../pages/manager_page');

describe('XYZ Bank Manager', function(){

    beforeEach(() => {
        login.nagivateTo('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        login.managerLogin();
    });

    it('should be able to add new customer', function(){
        manager.addCustomer();
        manager.setFirstName('Jimmy');
        manager.setLastName('Bimmy');
        manager.setPostCode('ABC123');
        manager.submitNewCustomer();

        expect(manager.getAlertWindowText()).toContain('Customer added successfully');
    });
});