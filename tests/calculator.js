let homepage = require('../pages/homepage')

describe('protractor demo app for calculator', function(){

    beforeEach(() => {
        homepage.nagivateTo('http://juliemr.github.io/protractor-demo/');
    })

    it('adding numbers', function(){
        homepage.enterFirstNumber(6);
        homepage.enterSecondNumber(4);
        homepage.clickGo();
        
        expect(homepage.getResult()).toEqual('10');
    });

    it('adding numbers', function(){
        homepage.enterFirstNumber(6);
        homepage.enterSecondNumber(4);
        homepage.clickGo();
        
        expect(homepage.getResult()).toEqual('11');
    });

});