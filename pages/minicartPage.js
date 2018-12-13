// page is non-angular
browser.ignoreSynchronization = true;
import BasePage from './basePage';

class MinicartPage extends BasePage {
    constructor() {
        super();
        this.products = $$('.product');
        this.productNames = $$('.product_name');
        this.compareLinks = $$('.view_details');
        // a good ID would be better than this generic selector but...
        this.comparisonChart = $('.row.compare');

        this.url = 'https://sheltered-tor-18362.herokuapp.com';
        // pageLoaded is used by goto()/loaded() to test that we're on a page
        this.pageLoaded = this.and(
            this.isClickable(this.products.first())
        );
    }

    /**
     * get the current number of displayed products
     * @return {int}
     */
    getNumberOfProducts() {
        return this.products.count();
    }

    /**
     * click the Compare button for a given product name
     * @param  {string} productName
     * @return {promise}
     */
    compareProductByName(productName) {
        return this.productNames.each((elm, index) => {
            return elm.getText().then(text => {
                if(text === productName) {
                    return this.compareLinks.get(index).click();
                }
            });
        });
    }
}
export default new MinicartPage();