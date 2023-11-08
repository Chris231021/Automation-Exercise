
@botonprincipal
Feature:  Abrir el navegador y navegar a la página de inicio

  Scenario: Navegar a 'https://www.homecenter.com.co/homecenter-co/' y hacer clic en el botón 'Perfil'
    Given que estoy en la página de inicio de sesión
    And hago clic en el botón "singnup"
    Then verifico que la página de inicio se carga exitosamente
    