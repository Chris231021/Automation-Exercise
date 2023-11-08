import { Given,  When } from "@testing/cucumber-runner"; 
import { pageProvider } from "@testing/wdio-page-objects"; 
import { InicioSesionPage } from "./login.page";
import { absercionPage } from "./absercion.page";
import { expect } from "chai";

export class loginStep {
    private InicioSesionPage: InicioSesionPage;
    private absercionPage: absercionPage;
    
    constructor() {
        this.InicioSesionPage = new InicioSesionPage();
        this.absercionPage= new absercionPage();
    }
   
    
    @Given(/^estoy en la página de inicio de sesión$/)
    async sesion() {
        await pageProvider.go(InicioSesionPage); //
    }
   
    @When(/^ingreso mi nombre de usuario "(.*)" y mi contraseña "(.*)"$/)
    async credenciales(user:string,password:string) {
        await((await this.InicioSesionPage)).Login(user,password);  
    }
    @When(/^presiono el botón "Login"$/)
    async botonLogin() {
        await ((await this.InicioSesionPage)).bntLogin();
    }
    @When(/^me he logueado correctamente$/)
    async verifySuccessfulLogin() {
        expect(await this.absercionPage.obtainText()).to.be.true;
    }
   
}