import { pageProvider } from "@testing/wdio-page-objects";
import { compraPage } from "./Compra.page";
import { dashboardPage } from "./ordenPlaced.page";
import { Given, When, Then, World } from "@testing/cucumber-runner";
import { expect } from "chai";


export class loginStep {
    private loginPage: compraPage;
    private dashboardPage: dashboardPage;

    constructor() {
        this.loginPage = new compraPage();
        this.dashboardPage = new dashboardPage();
    }

    @Given(/^Yo como usuario de Automation Exercise$/)
    async navigateToLoginPage() {
        await pageProvider.go(compraPage);
    }

    @When(/^selecciono algunos productos$/)
    async enterCredentials() {
        await this.loginPage.enterCredentials();
    }
   
//     @When(/^selecciono algunos productos$/)
//     async credenciales() {
//          await ((await this.PrerregistroPage)).registro();  
// }
//     @When(/^completo la compra con los detalles de tarjeta$/) 
//     async botonLogin() {
//         await ((await this.PrerregistroPage)).bntLogin(); 
//     }

    // @When(/^la compra se realiza con éxito$/) 
    // async credenciales2() {
    //     await ((await this.PrerregistroPagex)).preregistro(); 
    // }

    //  @Then(/^verifico que el Lógin se carga exitosamente$/) 
    //  async UsuarioExitoso() {
    //      const nombreUsuario = await (await this.PrerregistroPage).registro();
    //      expect (await (await this.LoginExitosoPage).VerificaP(nombreUsuario)).to.be.true; 
        
    //  }
    

}