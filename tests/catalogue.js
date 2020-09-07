let headerPage = require('../pages/header_page');
let landingPage = require('../pages/landing_page');
let backgroundPage = require('../pages/background_page');
let modelsTab = require('../pages/model_tab');
let decoratedModel = require('../pages/decorated_model')
let brandsTab = require('../pages/brand_tab');
let catalogueTab = require('../pages/catalogue_tab');

describe('fendi catalogue', function(){
    
    let brandItemName;
    let catalogueItemName;

    it('should be able to set background', function(){
        // Login to Okta which needs to be removed
        landingPage.drestAuthentication();
        
        // Given
        landingPage.selectCatalogueTab();
        headerPage.selectBackgroundTab();
        expect(decoratedModel.selectedListStateText()).toBe('No items selected');
        expect(backgroundPage.currentBackgroundCount()).toBe(0);

        // When
        backgroundPage.selectFirstAvailableBackground();

        // Then
        expect(backgroundPage.backgroundElementTagsInDomCount()).toBe(1);
    });

    it('should be able to change models', function(){
        // Given
        headerPage.selectModelsTab();
        expect(modelsTab.getCurrentModelName()).toBe(modelsTab.getSelectableModelNameByNumber(0));

        // When
        modelsTab.selectAvailableModelByNumber(1);

        // Then
        expect(modelsTab.getCurrentModelName()).toBe(modelsTab.getSelectableModelNameByNumber(1));
    });

    it('should be able to select a brand', function(){
        // Given
        headerPage.selectBrandsTab();
        expect(decoratedModel.selectedListStateText()).toBe('No items selected');

        // When
        brandsTab.selectFirstAvailabeBrandByNumber(0);
        brandItemName = brandsTab.getFirstAvailableBrandNameByNumber(0);
        brandsTab.selectFirstAvailabeBrandByNumber(0);

        // Then
        let selectedItemName = decoratedModel.getListItemNameByNumber(0);
        expect(selectedItemName).toBe(brandItemName);
    });

    it('should be able to select item from catalogue', function(){
        // Given
        headerPage.selectCatalogueTab();

        // When
        catalogueItemName = catalogueTab.getAvailableCatalogueItemNameByNumber(0);
        catalogueTab.selectFromAvailableCatalogueItemByNumber(0);

        // Then
        let firstItemOnSelectedItemName = decoratedModel.getListItemNameByNumber(0);
        expect(catalogueItemName).toBe(firstItemOnSelectedItemName);
    });

    it('should be able to see summary list', function(){
        // Given
        decoratedModel.selectDecoratedModelSummary();

        // Then
        expect(decoratedModel.getListItemNameByNumber(0).getText()).toBe(catalogueItemName);
        expect(decoratedModel.getListItemNameByNumber(1).getText()).toBe(brandItemName);
    });
});