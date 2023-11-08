@primerRegistro

Feature: Como un nuevo usuario, quiero registrarme en el sitio web para acceder a sus servicios.

  Scenario: Registro de nuevo usuario con nombre y correo electrónico
    Given que estoy en la página de preregistro
    When continuo con el formulario
    Then verifico que el Lógin se carga exitosamente
    