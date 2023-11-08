import { Given, Then, When } from "@testing/cucumber-runner"; 
import { pageProvider } from "@testing/wdio-page-objects"; // Importa la función pageProvider desde el módulo @testing/wdio-page-objects.
import { BotonpPage } from "./Botonprincipal.page"; // Importa la clase BotonpPage desde el archivo "botonp.page" en el directorio actual.

export class BotonpSteps { // Define una clase llamada BotonpSteps.

    get BotonpPage() {
        return pageProvider.wait(BotonpPage); 
    }
    
    @Given(/^que estoy en la página de inicio de sesión$/) 
    async inicio() {
        await pageProvider.go(BotonpPage); // Navega a la página BotonpPage utilizando pageProvider.go.
    }
    @Then(/^verifico que la página de inicio se carga exitosamente$/) 
    async verificacion() {
        await ((await this.BotonpPage)).Verifica(); // Llama al método "Verifica" en la instancia de BotonpPage obtenida a través del getter BotonpPage.
    }
    @When(/^hago clic en el botón "singnup"$/) 
    async botonLogin() {
        await ((await this.BotonpPage)).bntLogin(); // Llama al método "bntLogin" en la instancia de BotonpPage obtenida a través del getter BotonpPage.
    }
}