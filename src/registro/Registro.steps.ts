import { Given, Then, When } from "@testing/cucumber-runner"; 
import { pageProvider } from "@testing/wdio-page-objects"; // Importa la función pageProvider desde el módulo @testing/wdio-page-objects.
import { PreregistroPage } from "./Registro.page";
import {PreregistroPagex} from "./RegistroCompleto.page";
import { LoginExitosoPage } from "./Absercion.page";
import { expect } from "chai";



export class BotonpSteps { // Define una clase llamada BotonpSteps.
    private PreregistroPagex: PreregistroPagex;
    constructor() {
        this.PreregistroPagex = new PreregistroPagex();
        // this.absercionPage= new absercionPage();
    }
    get PrerregistroPage() {
        return pageProvider.wait(PreregistroPage); 
    }
    get LoginExitosoPage(){
        return pageProvider.wait(LoginExitosoPage);
    }
    get PrerregistroPagex() {
        return pageProvider.wait(PreregistroPagex); 
    }
    
    @Given(/^que estoy en la página de preregistro$/)
    async sesion() {
        await pageProvider.go(PreregistroPagex); //
    }
   
   
    @When(/^ingreso mi Username y mi Email$/)
    async credenciales() {
         await ((await this.PrerregistroPage)).registro();  
}
    @When(/^hago clic en el botón "Registrarse"$/) 
    async botonLogin() {
        await ((await this.PrerregistroPage)).bntLogin(); 
    }

    @When(/^continuo con el formulario$/) 
    async credenciales2() {
        await ((await this.PrerregistroPagex)).preregistro(); 
    }

     @Then(/^verifico que el Lógin se carga exitosamente$/) 
     async UsuarioExitoso() {
         const nombreUsuario = await (await this.PrerregistroPage).registro();
         expect (await (await this.LoginExitosoPage).VerificaP(nombreUsuario)).to.be.true; 
        
     }
    

}