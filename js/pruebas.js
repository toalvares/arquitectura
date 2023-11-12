// function validarFormulario() 
// {
//   //evento.preventDefault();
//   var rut = document.getElementById('rut').value;
//   var alerta = document.getElementById("alert"); 
//   if(Fn.validaRut(rut) == false) {
//     // alert('No has escrito nada en el campo rut');
//     alerta.innerHTML = `<div class="alert alert-danger"> Rut ingresado no valido </div>`;
//     return false;
//   }else{
//     alerta.innerHTML = '';
//   }
//   var clave = document.getElementById('clave').value;
//   if (clave.length < 6) {
//     // alert('La clave no es válida');
//     alerta.innerHTML = `<div class="alert alert-danger"> Contraseña no ingresada </div>`;
//     return false;
//   }

//   return true;
// }


// var Fn = {
//   // Valida el rut con su cadena completa "XXXXXXXX-X"
//   validaRut : function (rutCompleto) {
//     rutCompleto = rutCompleto.replace("‐","-");
//     if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
//     return false;
//     var tmp 	= rutCompleto.split('-');
//     var digv	= tmp[1]; 
//     var rut 	= tmp[0];
//     if ( digv == 'K' ) digv = 'k' ;
    
//     return (Fn.dv(rut) == digv );
//   },
//   dv : function(T){
//     var M=0,S=1;
//     for(;T;T=Math.floor(T/10))
//       S=(S+T%10*(9-M++%6))%11;
//     return S?S-1:'k';
//   }
// };

// let refresh  = document.querySelectorAll('.btnrefresh');

// refresh.forEach(button => {
//   button.addEventListener('click', () => {
//     location.reload();
//   });
// });

// document.getElementById("btn_registro").addEventListener("click", function(){ 

//   const fecha = document.getElementById("fecha").value
//   const incidente = document.getElementById("incidente").value
//   const personas_afectadas = document.getElementById("personas_afectadas").value
//   const descripcion = document.getElementById("descripcion").value
  
//   document.getElementById("fecha_modal").innerHTML = `<strong>Fecha: </strong>` + fecha
//   document.getElementById("incidente_modal").innerHTML = `<strong>Indicente: </strong>` + incidente
//   document.getElementById("afectadas_modal").innerHTML = `<strong>Personas afectadas: </strong>` + personas_afectadas
//   document.getElementById("descripcion_modal").innerHTML = `<strong>Descripción: </strong>` + descripcion

// });
