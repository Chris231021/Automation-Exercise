import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";

const selectors = {
    userTextField: `(//b[normalize-space()='christian'])[1]`
};

@PageContext({
    path: '/', 
    wrapper: `body`, //Padre  o nodo principal
})

export class absercionPage extends Page {

    async obtainText() {
        await (await $(selectors.userTextField)).waitUntil(async () => {
            return (await $(selectors.userTextField)).isDisplayed();
        }, {
            timeout: 5000,
            timeoutMsg: "El botón de envío no se volvió visible en 5000ms."
        });
        return (await $(selectors.userTextField)).isExisting();
    
    }

}

