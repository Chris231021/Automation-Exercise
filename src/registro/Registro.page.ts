import { Page, PageContext } from "@testing/wdio-page-objects";
import { faker } from '@faker-js/faker';


const select = {
  
  bntLogin: `.btn.btn-default[data-qa='signup-button']`, // Selector para el botón de inicio de sesión
  username: `input[placeholder='Name']`, // Selector para el campo "Username"
  email: `input[data-qa='signup-email']`, // Selector para el campo "Email"
  
}

@PageContext({
  path: '/login',
  wrapper: `[id="form"]`,
})
export class PreregistroPage extends Page {

  public async registro() {

     //////      -----------------   Metodo Llenado de Username   ---------------------       ////
     const nombreUsuario = faker.person.fullName();
     await (await $(select.username)).addValue(nombreUsuario);
    //////      -----------------   Metodo Llenado de Email   ---------------------       ////
    await (await $(select.email)).isExisting();
    await (await $(select.email)).addValue(faker.internet.exampleEmail());

    return nombreUsuario;
  }

  public async bntLogin() {

    await (await $(select.bntLogin)).waitForDisplayed({ timeout: 9000 });
    await (await $(select.bntLogin)).isExisting();
    await (await $(select.bntLogin)).click();
    
  }

}



