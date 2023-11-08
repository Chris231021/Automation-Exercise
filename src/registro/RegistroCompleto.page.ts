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
  

  //a[@data-cta='true']//div//button[@class='Button-module_locationv3__button__1eA5g Button-module_locationv3__button--secondary__3nYrz'][normalize-space()='Mantener']
  
  // botonGenero:`input[id="id_gender1"]`,
  
  // formBirthDay: `select[id='days']`,
  // formBirthMonth: `select[data-qa="months"]`,
  // formBirthYear:`select[data-qa="years"]`,
  
  // lastName:`input[data-qa="last_name"]`,
  // nameCompany:`input[data-qa="company"]`,
  // addressCompany:`input[data-qa="address"]`,
  // formCountry: `select[data-qa="country"]`,
  // formState: `input[data-qa="state"]`,
  // formCity: `input[id='city']`,
  // formCode: `input[data-qa="zipcode"]`,
  // formNumber: `input[data-qa="mobile_number"]`,
  // bntCrearUsuario: `button[data-qa="create-account"]`,
  // bntContinue: `a[data-qa="continue-button"]`,
  
}

const variables = {
  numeroAleatorio:faker.datatype.number({ min: 1, max: 30 }),
  mesAleatorio: faker.datatype.number({ min: 1, max: 12 }),
  TipoAleatorio: faker.datatype.number({ min: 1, max: 3 }),
  anoAleatorio: Math.floor(Math.random() * (2005 - 1940 + 1)) + 1940,
  CountryAleatorio:Math.floor(Math.random() * (2005 - 1 + 1)) + 1,
  
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
    const NumeroGuion = faker.phone.number();
    const Celular = NumeroGuion.replace(/[-\s.,()]/g, '');
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


  //   //////      -----------------   Metodo Password con Faker   ---------------------       ////
  
    

  //   //////    ------------------   Metodo Dia Aleatorio con Faker ---------------------    ////
    
  //   await (await $(select.formBirthDay)).click();
  //   await browser.waitUntil(async () => {
  //     return (await $(`option[value="${variables.numeroAleatorio}"]`)).isExisting();
  //   }, 
  //   {
  //     timeout: 10000,
  //     timeoutMsg: 'Elemento no encontrado después de 10 segundos'
  //   });
    
  //   await (await $(`option[value="${variables.numeroAleatorio}"]`)).click();    // Una vez que el elemento está presente, haz clic en él

  //   //////     ------------------   Metodo Mes Aleatorio con Faker ---------------------    ////
    
  //   await (await $(select.formBirthMonth)).click();  
  //   // Utilizar el valor del mes aleatorio para seleccionar la opción en el menú desplegable
  //   await (await browser.$(select.formBirthMonth)).selectByIndex(variables.mesAleatorio); 
  //   await (await browser.$(select.formBirthMonth)).click();
      
  //   //////     ------------------   Metodo Año Aleatorio sin Faker ---------------------    //// 
  //   await (await $(select.formBirthYear)).click();  
  //   await  (await $(select.formBirthYear)).waitForExist({ timeout: 5000 });
  //   await (await $(select.formBirthYear)).selectByVisibleText(variables.anoAleatorio.toString());
  //   await (await browser.$(select.formBirthYear)).click();

  //   //////      -----------------   Metodo Llenado de datos   ---------------------       ////
  //   // await (await $(select.firstName)).isExisting();
  //   // let nombres = ["Juan", "Ana", "Luis", "María", "Carlos", "Sofía", "Pedro", "Laura", "Diego", "Isabella"];
  //   // await (await $(select.firstName)).addValue(nombres[Math.floor(Math.random() * nombres.length)]);
  //   // ------------------------------------------------------------------------------------- //
  //   // await (await $(select.lastName)).isExisting();
  //   // await (await $(select.lastName)).addValue(faker.person.lastName());
  //  // ------------------------------------------------------------------------------------- //
  //  await (await $(select.nameCompany)).isExisting();
  //  await (await $(select.nameCompany)).addValue(faker.company.name());
  //   // ------------------------------------------------------------------------------------- //
  //   await (await $(select.addressCompany)).isExisting();
  //   await (await $(select.addressCompany)).addValue(faker.address.streetAddress());
    
  //   // ------------------------------------------------------------------------------------- //
   
  //   await (await $(select.formState)).isExisting();
  //   if (select.formCountry) 
  //    {
  //         const selectCountry = await $(select.formCountry);
  //         const opciones = await selectCountry.$$('option');
      
  //       if (opciones.length > 1) {
  //         const indiceAleatorio = Math.floor(Math.random() * (opciones.length - 1)) + 1;
  //         await selectCountry.selectByIndex(indiceAleatorio);
      
  //         const opcionSeleccionada = opciones[indiceAleatorio];
  //         const textoOpcionSeleccionada = await opcionSeleccionada.getText();
      
  //         switch (textoOpcionSeleccionada) {
  //           case 'India':
  //             let estadoIndia = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka"];
  //             const estadoAleatorioIndia = estadoIndia[Math.floor(Math.random() * estadoIndia.length)];
  //             await (await $(select.formState)).addValue(estadoAleatorioIndia);
  //             await (await browser.$(select.formState)).click();
  //             break;

  //           case 'United States':
  //             let estadoUnited = ["Michigan", "Minnesota", "Mississippi", "Nevada", "New Hampshire", "New Jersey"];
  //             const estadoAleatorioUnited = estadoUnited[Math.floor(Math.random() * estadoUnited.length)];
  //             await (await $(select.formState)).addValue(estadoAleatorioUnited);
  //             await (await browser.$(select.formState)).click();
  //             break;

  //           case 'Canada':
  //             let estadoCanada = ["Ontario", " Isla del Príncipe Eduardo", "Saskatchewan"];
  //             const estadoAleatorioCanada = estadoCanada[Math.floor(Math.random() * estadoCanada.length)];
  //             await (await $(select.formState)).addValue(estadoAleatorioCanada);
  //             await (await browser.$(select.formState)).click();
  //             break;

  //           case 'Australia':
  //             let estadoAustralia = ["Nueva Gales del Sur", "Queensland", "Tasmania", "Australia Meridional"];
  //             const estadoAleatorioAustralia = estadoAustralia[Math.floor(Math.random() * estadoAustralia.length)];
  //             await (await $(select.formState)).addValue(estadoAleatorioAustralia);
  //             await (await browser.$(select.formState)).click();
  //             break;

  //           case 'Israel':
  //             let estadoIsrael = ["Jerusalén", " Tel Aviv", "Meridional", "Haifa"];
  //             const estadoAleatorioIsrael = estadoIsrael[Math.floor(Math.random() * estadoIsrael.length)];
  //             await (await $(select.formState)).addValue(estadoAleatorioIsrael);
  //             await (await browser.$(select.formState)).click();
  //             break;

  //             case 'New Zealand':
  //               let estadoZealand = ["Canterbury", "Manawatu-Wanganui", "Otaqo", "Southland"];
  //               const estadoAleatorioZealand = estadoZealand[Math.floor(Math.random() * estadoZealand.length)];
  //               await (await $(select.formState)).addValue(estadoAleatorioZealand);
  //               await (await browser.$(select.formState)).click();
  //               break;
            
  //             case 'Singapore':
  //             let estadoSingapur = ["Orchard Road", "East Coas", "Marina Bay"];
  //             const estadoAleatorioSingapur = estadoSingapur[Math.floor(Math.random() * estadoSingapur.length)];
  //             await (await $(select.formState)).addValue(estadoAleatorioSingapur);
  //             await (await browser.$(select.formState)).click();
  //             break;

  //             default:
  //             await (await $(select.formState)).addValue("No hay estados disponibles para este País");
  //             await (await browser.$(select.formState)).click();
  //             break;
  //           }
  //         }
  //     }
  //     // -------------------------------------------------------------------------------------- //
  //     await (await $(select.formCity)).waitForDisplayed({ timeout: 2000 });
  //     await (await $(select.formCity)).isExisting();
  //     await (await $(select.formCity)).addValue(faker.location.city());
      
  //     // ------------------------------------------------------------------------------------- //

  //     await (await $(select.formCode)).isExisting();
  //     await (await $(select.formCode)).addValue(faker.address.zipCode());
  //     // ------------------------------------------------------------------------------------- //

  //     await (await $(select.formNumber)).isExisting();
  //     await (await $(select.formNumber)).addValue(faker.phone.number());
  //     // ------------------------------------------------------------------------------------- //
      
  //     await (await $(select.bntCrearUsuario)).waitForDisplayed({ timeout: 2000 });
  //     await (await $(select.bntCrearUsuario)).isExisting();
  //     await (await $(select.bntCrearUsuario)).click();
  //     // ------------------------------------------------------------------------------------- //
  //       await (await $(select.bntContinue)).isExisting();
  //       await (await $(select.bntContinue)).click();
  //       await browser.refresh();
  //       await (await $(select.bntContinue)).isExisting();
  //       await (await $(select.bntContinue)).click();
  //       await browser.refresh();
    }
  

}



