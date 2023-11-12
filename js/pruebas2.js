$(document).ready(function () {
  $('.btnrefresh').click(function () {
    location.reload();
  });

  $('#btn_registro').click(function () {
    var rut = $('#rut').val();
    var alerta = $('#alert');

    if (!Fn.validaRut(rut)) {
      alerta.html('<div class="alert alert-danger">Rut ingresado no válido</div>');
      return false;
    } else {
      alerta.html('');
    }

    var clave = $('#clave').val();
    if (clave.length < 6) {
      alerta.html('<div class="alert alert-danger">Contraseña no ingresada</div>');
      return false;
    }

    const fecha = $('#fecha').val();
    const incidente = $('#incidente').val();
    const personas_afectadas = $('#personas_afectadas').val();
    const descripcion = $('#descripcion').val();

    $('#fecha_modal').html('<strong>Fecha: </strong>' + fecha);
    $('#incidente_modal').html('<strong>Incidente: </strong>' + incidente);
    $('#afectadas_modal').html('<strong>Personas afectadas: </strong>' + personas_afectadas);
    $('#descripcion_modal').html('<strong>Descripción: </strong>' + descripcion);
  });
});

var Fn = {
  validaRut: function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐", "-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) {
      return false;
    }
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') {
      digv = 'k';
    }

    return Fn.dv(rut) === digv;
  },
  dv: function (T) {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10)) {
      S = (S + T % 10 * (9 - M++ % 6)) % 11;
    }
    return S ? S - 1 : 'k';
  }
};
