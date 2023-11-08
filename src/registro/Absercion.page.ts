import { Page, PageContext } from "@testing/wdio-page-objects";


@PageContext({
    path: '/',
    wrapper: `body`,
  })

export class LoginExitosoPage extends Page {
    async VerificaP(nombreUsuario: string) {
        const usuarioExito=`b[normalize-space()='${nombreUsuario}']`;
        await (await $(usuarioExito)).waitUntil(async () => {
            return (await $(usuarioExito)).isDisplayed();
        }, {
            timeout: 9000,
            timeoutMsg: "El botón de envío no se volvió visible en 9000ms."
        });
        return (await $(usuarioExito)).isExisting();
      
    }
}