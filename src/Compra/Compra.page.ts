import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";
import { faker } from '@faker-js/faker';

const selectors = {
	productos: `a[href='/products']`,
	add1: `(//a[contains(text(),'Add to cart')])[1]`,
	add2: `(//a[contains(text(),'Add to cart')])[3]`,
	add3: `(//a[contains(text(),'Add to cart')])[5]`,
	add4: `(//a[contains(text(),'Add to cart')])[7]`,
	continueShopping: `.btn.btn-success.close-modal.btn-block`,
	women: `a[href='#Women']`,
	tops: `a[href='/category_products/2']`,
	men: `a[href='#Men']`,
	jeans: `a[href='/category_products/6']`,
	kids: `a[href='#Kids']`,
	dress: `a[href='/category_products/4']`,
	viewCart: `(//u[normalize-space()='View Cart'])[1]`,
	checkout: `.btn.btn-default.check_out`,
	placeOrder: `.btn.btn-default.check_out`,
	nameCard: `input[name='name_on_card']`,
	cardNumber: `input[name='card_number']`,
	cvc: `input[placeholder='ex. 311']`,
	expiration: `input[placeholder='MM']`,
	year: `input[placeholder='YYYY']`,
	payConfirm: `#submit`



};
@PageContext({
	path: '/',
	wrapper: `body`, //Padre  o nodo principal
})
export class compraPage extends Page {
	async enterCredentials() {
		await (await $(selectors.productos)).click();
		await browser.pause(5000);
		await browser.refresh();

		await (await $(selectors.women)).click();
		await (await $(selectors.tops)).click();
		await browser.pause(5000)
		await browser.refresh();
		await (await $(selectors.add1)).click();
		await (await $(selectors.continueShopping)).click();
		// scroll to specific element
		await (await $(selectors.men)).scrollIntoView();
		await (await $(selectors.men)).click();
		await (await $(selectors.jeans)).click();
		await browser.pause(5000)
		await browser.refresh();
		await (await $(selectors.add2)).click();
		await (await $(selectors.continueShopping)).click();
		await (await $(selectors.kids)).scrollIntoView();
		await (await $(selectors.kids)).click();
		await (await $(selectors.dress)).click();
		await browser.pause(5000)
		await browser.refresh();
		await (await $(selectors.add3)).click();
		await (await $(selectors.viewCart)).click();
		await (await $(selectors.checkout)).click();
		await (await $(selectors.placeOrder)).scrollIntoView();
		await (await $(selectors.placeOrder)).click();
		await (await $(selectors.nameCard)).addValue(faker.finance.accountName());
		await (await $(selectors.cardNumber)).addValue(faker.finance.accountNumber());
		await (await $(selectors.cvc)).addValue(faker.finance.creditCardCVV());
		await (await $(selectors.expiration)).addValue(faker.finance.creditCardIssuer());
		await (await $(selectors.year)).addValue(faker.finance.creditCardNumber());
		await (await $(selectors.payConfirm)).click();

	}
}



