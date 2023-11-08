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
    
    @Given(/^que estoy en la página de registro de Homecenter$/)
    async sesion() {
        await pageProvider.go(PreregistroPagex); //
    }
   
    @When(/^lleno el formulario de registro$/) 
    async credenciales2() {
        await ((await this.PrerregistroPagex)).preregistro(); 
    }

     @Then(/^verifico que el registro se completa exitosamente$/) 
     async UsuarioExitoso() {
         const nombreUsuario = await (await this.PrerregistroPage).registro();
         expect (await (await this.LoginExitosoPage).VerificaP(nombreUsuario)).to.be.true; 
        
     }
    

}