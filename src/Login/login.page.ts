import {Page, PageContext} from "@testing/wdio-page-objects";



const select = {
    
    username :`input[data-qa='login-email']`,
    password : `input[placeholder='Password']`,
    bntLogin :`.btn.btn-default[data-qa='login-button']`,
}

@PageContext({  //Usamos la anotación @PageContext para establecer el contexto de la página, especificando la ruta y el contenedor principal de la página.
    path: '/login', 
    wrapper: `body`, 
})
export class InicioSesionPage extends Page {
    
    async Login(user: string ,password :string) {

        await (await $(select.username)).waitForDisplayed({timeout: 9000 });
        await (await $(select.username)).isExisting();
        await (await $(select.username)).setValue(user);

        await (await $(select.password)).waitForDisplayed({timeout: 9000 });
        await (await $(select.password)).isExisting();
        await (await $(select.password)).setValue(password);
    }

    async bntLogin(){
        await (await $(select.bntLogin)).waitForDisplayed({timeout: 9000 });
        await (await $(select.bntLogin)).isExisting();
        await (await $(select.bntLogin)).click();
    }
}