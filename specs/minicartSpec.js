import minicartPage from '../pages/minicartPage';

describe('Minicart', () => {
    beforeEach(() => {
        // goto() loads the page via its url AND tests that it's loaded()
        minicartPage.goto();
    });

    it('comparison chart should NOT display by default', () => {
        // we use isPresent instead of isDisplayed to avoid stale ref error for
        // non existing elements...
        expect(minicartPage.comparisonChart.isPresent()).toBe(false);
    });

    it('clicking only one product should NOT display comparison chart', () => {
        minicartPage.compareProductByName('Cherry');

        expect(minicartPage.comparisonChart.isPresent()).toBe(false);
    });

    it('clicking 2+ products should display comparison chart', () => {
        minicartPage.compareProductByName('Cherry');
        minicartPage.compareProductByName('Orange');

        expect(minicartPage.comparisonChart.isDisplayed()).toBe(true);
    });

    // BUG #1: Clementine product is hidden when compared
    it('product should continue to display when compared', () => {
        const startingNumProducts = minicartPage.getNumberOfProducts();
        minicartPage.compareProductByName('Clementine');

        // this will fail until fixed... if only jasmine had some way of dealing with this
        expect(minicartPage.getNumberOfProducts()).toBe(startingNumProducts);
    });

    /*
        TODO:
        - add test(s) to verify chart data matches expected
        - add remove test(s)
    */
});