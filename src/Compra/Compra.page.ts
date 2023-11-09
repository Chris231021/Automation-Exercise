import { Page, PageContext, pageProvider } from "@testing/wdio-page-objects";
import { faker } from '@faker-js/faker';

const selectors = {
	
	productos: `a[href='/products']`,
	
	
	
};

const Variables = {
	
	numeroAleatorio:faker.datatype.number({ min: 0, max: 4 }),
	numeroAleatoriofila:faker.datatype.number({min:0, max: 2}),
	numeroAleatoriocolum:faker.datatype.number({min:0, max: 5}),
};


@PageContext({
	path: '/homecenter-co/',
	wrapper: `body`, //Padre  o nodo principal
})
export class compraPage extends Page {
	async enterCredentials() {

		// --------------------- Menú Principal -------------------------------- //
		let MenuPrincipal = [
			"Construcción y Ferretería",
			"Pisos, Pinturas y Terminaciones",
			"Electrohogar, Tecnología y Climatización",
			"Muebles y Organización",
			"Automóviles y Carcenter"
		  ];
		  
		  const BtnMenuPrincipal=`//a[contains(text(),"${MenuPrincipal[Variables.numeroAleatorio]}")]/..`;
		  await (await $(BtnMenuPrincipal)).click();

		// --------------------------------------------------------------------- //

		switch (MenuPrincipal[Variables.numeroAleatorio]) {
			         case 'Construcción y Ferretería':
						let ConstrucciónFerreteria=[
						["Cementos, Concreto y Morteros",
						"Arenas y Gravas",
						"Ladrillos, Bloques y Adoquines",
						"Estucos, Yesos e Imprimantes",
						"Impermeabilizantes y Barreras de Humedad",
						"Varillas de Hierro y Acero"
						], 

						["Tubos PVC",
						"Accesorios PVC",
						"Tubos de Cobre y Accesorios",
						"Tubos Polietileno y Galvanizado",
						"Tubos Polipropileno y Termofusión",
						"Tanques de Agua y Accesorios"
						],

						["Botas de Seguridad",
						"Tapabocas y Respiradores",
						"Guantes de Seguridad",
						"Caretas y Cascos de Seguridad",
						"Monogafas, Caretas y Gafas de Seguridad",
						"Protectores Auditivos y Tapaoidos"
						]
						]
						const BtnSelectorSubmenu=`//a[contains(text(),"${ConstrucciónFerreteria[Variables.numeroAleatoriofila][Variables.numeroAleatoriocolum]}")]/..`;
		  				await (await $(BtnSelectorSubmenu)).click();

					 break;

					 case 'Pisos, Pinturas y Terminaciones':
						let PisosPinturas=[
						["Pintura para Interior",
						"Brochas, Rodillos y Herramientas para Pintar",
						"Pinturas de Exterior",
						"Preparación de Superficies",
						"Pinturas para Metales",
						"Pinturas Especializadas e Industriales"
						], 

						["Puertas en Madera",
						"Puertas Metálicas",
						"Puertas Corredizas y Plegables",
						"Puertas de Seguridad",
						"Puertas Cortafuego",
						"Puertas de Garaje"
						],

						["Cajas Fuertes",
						"Candados",
						"Cerraduras y Chapas",
						"Cerraduras Inteligentes y Digitales",
						"Herrajes para Muebles",
						"Herrajes Puertas y Ventanas"
						]
						]
						const BtnSelectorSubmenuP=`//a[contains(text(),"${PisosPinturas[Variables.numeroAleatoriofila][Variables.numeroAleatoriocolum]}")]/..`;
		  				await (await $(BtnSelectorSubmenuP)).click();

					 break;

					 case 'Electrohogar, Tecnología y Climatización':
						let ElectrohogarClima=[
						["Televisores y Smart TV",
						"Tarjetas Netflix, Xbox y Otros",
						"Celulares y Smartphones",
						"Computadores, Tablets e Impresoras",
						"Equipos de Sonido y Dispositivos de Audio",
						"Teléfonos Fijos"
						], 

						["Freidoras de Aire y Air Fryer",
						"Hornos Microondas",
						"Hornos Tostadores",
						"Sanducheras y Wafleras",
						"Cafeteras Eléctricas y Grecas",
						"Ollas Arroceras y Multifuncionales"
						],

						["Aspiradoras",
						"Hidrolavadoras y Accesorios",
						"Planchas a Vapor",
						"Secadores y Planchas para el Cabello",
						"Máquinas de Afeitar y Corta Pelo",
						"Spa y Estética"
						]
						]
						const BtnSelectorSubmenuE=`//a[contains(text(),"${ElectrohogarClima[Variables.numeroAleatoriofila][Variables.numeroAleatoriocolum]}")]/..`;
		  				await (await $(BtnSelectorSubmenuE)).click();

					 break;

					 case 'Muebles y Organización':
						let MueblesOrgan=[
						["Sillas",
						"Juegos de Sala",
						"Zapateros y Recibidores",
						"Sofás",
						"Sofá Camas",
						"Sillas Reclinables y Descanso"
						], 

						["Sillas para Oficina y Escritorio",
						"Escritorios",
						"Bibliotecas",
						"Archivadores",
						"Lockers",
						"Sillas Tandem y para Salas de Espera"
						],

						["Oferta Colchones del Mes",
						"Base Cama y Colchón",
						"Colchones Sencillos",
						"Colchones Dobles",
						"Colchones Inflables y Colchonetas",
						"Colchones King"
						]
						]
						const BtnSelectorSubmenuM=`//a[contains(text(),"${MueblesOrgan[Variables.numeroAleatoriofila][Variables.numeroAleatoriocolum]}")]/..`;
		  				await (await $(BtnSelectorSubmenuM)).click();

					 break;
		       
			         default:
						
					 let AutoCarcenter=[
						["Aspiradoras para Carros",
						"Hidrolavadoras y Accesorios",
						"Polichadoras y Accesorios",
						"Shampoo para Carros",
						"Cera para Carros y Quita Rayones",
						"Limpiadores y Silicona para Carros"
						], 

						["Tapetes para Carro",
						"Forros para Sillas de Carro",
						"Forro para Timón de Carro",
						"Parasol para Carros",
						"Cables, Cargadores y Porta Celulares para Carro",
						"Maletines y Accesorios para Organizar Carros"
						],

						["Compresor de Aire para Carro",
						"Hidrolavadoras y Accesorios",
						"Liquido de Frenos",
						"Crucetas",
						"Polichadoras y Accesorios",
						"Gatos Hidraúlicos"
						]
						]
						const BtnSelectorSubmenuA=`//a[contains(text(),"${AutoCarcenter[Variables.numeroAleatoriofila][Variables.numeroAleatoriocolum]}")]/..`;
		  				await (await $(BtnSelectorSubmenuA)).click();

					 break;
			
		    }

		 
		// await browser.pause(5000);
		// await browser.refresh();

		// await (await $(selectors.women)).click();
		// await (await $(selectors.tops)).click();
		// await browser.pause(5000)
		// await browser.refresh();
		// await (await $(selectors.add1)).click();
		// await (await $(selectors.continueShopping)).click();
		// // scroll to specific element
		// await (await $(selectors.men)).scrollIntoView();
		// await (await $(selectors.men)).click();
		// await (await $(selectors.jeans)).click();
		// await browser.pause(5000)
		// await browser.refresh();
		// await (await $(selectors.add2)).click();
		// await (await $(selectors.continueShopping)).click();
		// await (await $(selectors.kids)).scrollIntoView();
		// await (await $(selectors.kids)).click();
		// await (await $(selectors.dress)).click();
		// await browser.pause(5000)
		// await browser.refresh();
		// await (await $(selectors.add3)).click();
		// await (await $(selectors.viewCart)).click();
		// await (await $(selectors.checkout)).click();
		// await (await $(selectors.placeOrder)).scrollIntoView();
		// await (await $(selectors.placeOrder)).click();
		// await (await $(selectors.nameCard)).addValue(faker.finance.accountName());
		// await (await $(selectors.cardNumber)).addValue(faker.finance.accountNumber());
		// await (await $(selectors.cvc)).addValue(faker.finance.creditCardCVV());
		// await (await $(selectors.expiration)).addValue(faker.finance.creditCardIssuer());
		// await (await $(selectors.year)).addValue(faker.finance.creditCardNumber());
		// await (await $(selectors.payConfirm)).click();

	}
}



