

Feature: Registro de nuevos usuarios en Homecenter
@primerRegistro
 Scenario: Registro de un nuevo usuario con nombre y correo electrónico
    Given que estoy en la página de registro de Homecenter
    When lleno el formulario de registro
    Then verifico que el registro se completa exitosamente
    