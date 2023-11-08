
Feature: Login en Automation Exercise

    @loginx
    Scenario: Inicio de Sesión exitoso en la página
    Given estoy en la página de inicio de sesión
    When ingreso mi nombre de usuario "cvela7120@gmail.com" y mi contraseña "123456789"
    And presiono el botón "Login"
    Then me he logueado correctamente



