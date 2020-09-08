let landing_page = function(){

    let catalogueButton = element(by.css('[href="/catalog"]'));

    this.selectCatalogueTab = function(){
        catalogueButton.click();
    };

    this.drestAuthentication = function(){
        browser.ignoreSynchronization = true;
        browser.get("http://localhost:3010/");
        browser.sleep(5000);
        element(by.id('okta-signin-username')).sendKeys('***');
        element(by.id('okta-signin-password')).sendKeys('***');
        element(by.id('okta-signin-submit')).click();
        browser.sleep(5000);
    };
};

module.exports = new landing_page();