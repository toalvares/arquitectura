function validarFormulario() {
  //evento.preventDefault();
  var rut = document.getElementById('rut').value;
  var alerta = document.getElementById("alert");
  if (Fn.validaRut(rut) == false) {
    // alert('No has escrito nada en el campo rut');
    alerta.innerHTML = `<div class="alert alert-danger"> Rut ingresado no valido </div>`;
    return false;
  } else {
    alerta.innerHTML = '';
  }
  var clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    // alert('La clave no es válida');
    alerta.innerHTML = `<div class="alert alert-danger"> Contraseña no ingresada </div>`;
    return false;
  }

  return true;
}


var Fn = {
  // Valida el rut con su cadena completa "XXXXXXXX-X"
  validaRut: function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐", "-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
      return false;
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';

    return (Fn.dv(rut) == digv);
  },
  dv: function (T) {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
  }
};

let refresh = document.querySelectorAll('.btnrefresh');

refresh.forEach(button => {
  button.addEventListener('click', () => {
    location.reload();
  });
});

document.getElementById("btn_registro").addEventListener("click", function () {

  var modalBody = document.querySelector("#myModal .modal-body");
  if(fecha.value == '' || incidente.value == '' || personasAfectadas.value == '' || descripcion.value == '') {
    event.preventDefault();
    alert('Debe llenar todos los campos');
    return false;
}
var fecha = document.getElementById('fecha').value;
var incidente = document.getElementById('incidente').value;
var personasAfectadas = document.getElementById('personas_afectadas').value;
var descripcion = document.getElementById('descripcion').value;
  var datos = `
  <p>Fecha: ${fecha}</p>
  <p>Incidente: ${incidente}</p>
  <p>Personas Afectadas: ${personasAfectadas}</p>
  <p>Descripción: ${descripcion}</p>
`;

  modalBody.innerHTML = datos;

})


