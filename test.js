import { Selector } from 'testcafe';

fixture('Prueba inicio sesion')
    .page(`http://localhost/alertmed/`)

test('Inicio sesion con credenciales', async t => {
    await t
        //Primero se inicia con credenciales que no se encuentran en el sistema
        .typeText('#rut', '11111111-1')
        .typeText('#clave', '123456')
        .click('#btningresar')
        .wait(1000)
    if (await t.expect(Selector('#alert').innerText).eql('Rut o contraseña no existe en el sistema')) {
    }
    else {
        //Se inicia sesion con credencial que se encuentra en el sistema
        await t
            .typeText('#rut', '21173299-7')
            .typeText('#clave', '123456')
            .click('#btningresar')
            .wait(1000)
    }
})


fixture('Prueba')

