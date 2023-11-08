

Feature: Proceso de Compra en Línea desde el login

  Background:
    Given estoy en la página de inicio de sesión
    When ingreso mi nombre de usuario "cvela7120@gmail.com" y mi contraseña "123456789"
    And presiono el botón "Login"
    Then me he logueado correctamente

   @compra
  Scenario: Compra exitosa de productos 
    When selecciono algunos productos
    # And completo la compra con los detalles de tarjeta 
    # And la compra se realiza con éxito
    # Then soy redirigido a la página de inicio de sesión
    