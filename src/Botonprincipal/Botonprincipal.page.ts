import {Page, PageContext} from "@testing/wdio-page-objects";
import { expect } from "chai";


const select = {
    bntLogin :`//a[@class='Account-module_icon-container__0tgoQ']//*[name()='svg']`, //Definimos un objeto select que contiene un selector CSS para un botón de inicio de sesión en la página web.
}

@PageContext({  //Usamos la anotación @PageContext para establecer el contexto de la página, especificando la ruta y el contenedor principal de la página.
    path: '/homecenter-co/', 
    wrapper: `body`, 
})
export class BotonpPage extends Page {
    static llenarCampo(campo: any, valor: any) {
        throw new Error("Method not implemented.");
    }   //Creamos una clase llamada BotonpPage que hereda de la clase Page. Esto representa la página web y sus capacidades.

    async Verifica() {  //Definimos un método llamado Verifica que se encarga de verificar el título de la página.

        const pageTitle =await browser.getTitle();  //Obtenemos el título de la página actual y lo almacenamos en pageTitle.
            expect(pageTitle).to.equal('Automation Exercise');  //Usamos expect para realizar una afirmación: el título de la página debe ser igual a "Automation Exercise
    }


    async bntLogin(){  //Definimos un método llamado bntLogin que se utiliza para hacer clic en el botón de inicio de sesión en la página.
         await (await $(select.bntLogin)).waitForDisplayed({timeout: 9000 });
        // await (await $(select.bntLogin)).isExisting(); //Realizamos una serie de acciones en el botón de inicio de sesión, como esperar a que esté visible, comprobar su existencia y hacer clic en él.
        await (await $(select.bntLogin)).click();
    }
}
