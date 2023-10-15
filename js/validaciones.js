function validarFormulario() 
{
  //evento.preventDefault();
  var rut = document.getElementById('rut').value;
  var alerta = document.getElementById("alert"); 
  if(Fn.validaRut(rut) == false) {
    // alert('No has escrito nada en el campo rut');
    alerta.innerHTML = `<div class="alert alert-danger"> Rut ingresado no valido </div>`;
    return false;
  }else{
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
  validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
    return false;
    var tmp 	= rutCompleto.split('-');
    var digv	= tmp[1]; 
    var rut 	= tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (Fn.dv(rut) == digv );
  },
  dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
      S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
  }
};

let refresh  = document.querySelectorAll('.btnrefresh');

refresh.forEach(button => {
  button.addEventListener('click', () => {
    location.reload();
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var formulario = document.getElementById("miFormulario");
  
  formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita la redirección

      // Obtén los datos del formulario
      var formData = new FormData(this);

      // Crea una nueva solicitud XMLHttpRequest
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "../sistema/controlador.php", true);

      // Configura el evento "load" para manejar la respuesta
      xhr.onload = function() {
          if (xhr.status === 200) {
              // Muestra la respuesta en el modal
              var modalBody = document.querySelector("#myModal .modal-body");
              modalBody.innerHTML = xhr.responseText;

              // Abre el modal
              var modal = new bootstrap.Modal(document.getElementById("myModal"));
              modal.show();

          }
      };
      // Envía los datos del formulario
      xhr.send(formData);
      modal.dispose();

  });
});
