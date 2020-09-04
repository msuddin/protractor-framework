describe('fendi catalogue', function(){

    it('should be able to set background', function(){
        // Login to Okta which needs to be removed
        browser.ignoreSynchronization = true;
        browser.get("http://localhost:3010/");
        browser.sleep(5000);
        element(by.id('okta-signin-username')).sendKeys('mo.uddin@drest.com');
        element(by.id('okta-signin-password')).sendKeys('!1 dSha290886');
        element(by.id('okta-signin-submit')).click();
        browser.sleep(15000);
        element(by.css('[href="/catalog"]')).click();

        // Given
        element(by.css('[href="/backgrounds"]')).click();
        expect(element(by.css('[class="column is-one-fifths"] p')).getText()).toBe('No items selected');
        let currentNumberOfBackgroundElemnts = element.all(by.css('[class="Model big"] [alt="background"]')).count();
        expect(currentNumberOfBackgroundElemnts).toBe(0);

        // When
        browser.sleep(2000);
        element(by.css('[class="BackgroundsList"] ul li')).click();

        // Then
        currentNumberOfBackgroundElemnts = element.all(by.css('[class="Model big"] [alt="background"]')).count();
        expect(currentNumberOfBackgroundElemnts).toBe(1);
    });

    it('should be able to change models', function(){
        // Given
        element(by.css('[href="/models"]')).click();
        browser.sleep(2000);
        let modelName = element(by.css('[class="Model big"] [class="half-width "]')).getAttribute('alt');
        expect(modelName).toBe('Xun');

        // When
        let modelsOnList = element.all(by.css('[class="ModelsList"] li'));
        modelsOnList.get(1).click();

        // Then
        modelName = element(by.css('[class="Model big"] [class="half-width "]')).getAttribute('alt');
        expect(modelName).toBe('Ela');
    });

    it('should be able to select a brand', function(){
        // Given
        element(by.css('[href="/brands"]')).click();
        browser.sleep(2000);
        expect(element(by.css('[class="column is-one-fifths"] p ')).getText()).toBe('No items selected');

        // When
        let itemName = element(by.css('[class="selectable slide-in"] div img')).getAttribute('alt');
        //expect(itemName).toBe('blah');
        browser.sleep(5000);
        element(by.css('[class="selectable slide-in"] li')).click();
        element(by.css('[class="selectable slide-in"] li')).click();
        browser.sleep(5000);

        // Then
        let selectedItem = element(by.css('[class="name"]')).getText();
        expect(selectedItem).toBe(itemName);
    });
});