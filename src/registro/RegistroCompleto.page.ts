import { Page, PageContext } from "@testing/wdio-page-objects";
import { faker } from '@faker-js/faker';


const select = {
  bntPerfil :`//a[@class='Account-module_icon-container__0tgoQ']//*[name()='svg']`,
  bntCrear :`//div[@class='jsx-2980194456 sign-up-text-container']//button[@id='testId-btn-signup-button']`,
  Name:`//input[@id='testId-firstName']`,
  Apellido:`//input[@id='testId-lastName']`,
  formDocumento: `//span[normalize-space()='Cédula de Ciudadanía']`,
  NumeroCedula: `//input[@id='testId-document']`,
  formNumber: `//input[@id='testId-input-phoneNumber']`,
  formTipo: `//div[@id='testId-Dropdown-taxpayerType-value']`,
  formTipos: `#testId-li-testId-DropdownList-testId-Dropdown-taxpayerType-dropdown-list-item-1`,
  email: `//input[@id='testId-email']`,
  formPassword: `//input[@id='testId-password']`,
  bntAcuerdos :`//span[@id='checkbox-testId-acceptTermsAndConditions']`,
  bntCrearCuenta :`//span[@class='jsx-1721195599 submit-button-text']`,
  bntIrACuenta :`//span[@class='jsx-3470068517 redirect-button-text']`,
  bntIniciarCompra :`//button[@id='testId-btn-testId-addNewOrder']//i[@id='testId-plusIcon']`,
  
  bntMaterialesConstruccion :`//span[normalize-space()='Materiales de Construcción']`,

  //a[@data-cta='true']//div//button[@class='Button-module_locationv3__button__1eA5g Button-module_locationv3__button--secondary__3nYrz'][normalize-space()='Mantener']
  
}

const variables = { 
  NumeroGuion : faker.phone.number()
    
}


@PageContext({
  path: '/homecenter-co/',
  wrapper: `body`,
})
export class PreregistroPagex extends Page {

  async preregistro() {
    await (await $(select.bntPerfil)).click();
    await (await $(select.bntCrear)).click();
    
    // -------------------------------------------------------------------------------------- //
    await (await $(select.Name)).isExisting();
    let nombres = ["Juan", "Ana", "Luis", "María", "Carlos", "Sofía", "Pedro", "Laura", "Diego", "Isabella"];
    await (await $(select.Name)).addValue(nombres[Math.floor(Math.random() * nombres.length)]);
    
    await (await $(select.Apellido)).isExisting();
    let apellido = ["Lopez", "Gomez", "Perez", "Gonzalez", "Medrano", "Castaño", "Dominguez", "Rodriguez", "Casierra", "Pizo"];
    await (await $(select.Apellido)).addValue(apellido[Math.floor(Math.random() * apellido.length)]);

    await (await $(select.formDocumento)).click();
    await (await $(select.formDocumento)).click();
    await (await $(select.formDocumento)).isExisting();
    
    
    await (await $(select.NumeroCedula)).isExisting();
    await (await $(select.NumeroCedula)).addValue(faker.datatype.number({ min: 100000000, max: 999999999 }));
    
    await (await $(select.formNumber)).isExisting();
    const Celular = variables.NumeroGuion.replace(/[-\s.,()]/g, '');
    await (await $(select.formNumber)).addValue(Celular);

    await (await $(select.formTipo)).click();
    await (await $(select.formTipos)).click();
    await (await $(select.formTipo)).isExisting();
    

    await (await $(select.email)).isExisting();
    await (await $(select.email)).addValue(faker.internet.exampleEmail());
    
     await (await $(select.formPassword)).isExisting();
     await (await $(select.formPassword)).addValue(faker.internet.password());

     await (await $(select.bntAcuerdos)).click();
     await (await $(select.bntAcuerdos)).click();

     await (await $(select.bntCrearCuenta)).click();
    
     await (await $(select.bntIrACuenta)).click();

     await(await $(select.bntIniciarCompra)).click();
  // -------------------------------------------------------------------------------------- //


    }
  

}



