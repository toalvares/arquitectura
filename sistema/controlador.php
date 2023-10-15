<?php 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
     // Recupera los datos del formulario
     $fecha = $_POST["fecha"];
     $incidente = $_POST["incidente"];
     $afectadas = $_POST["afectadas"];
     $descripcion = $_POST["descripcion"];
 
     // Lógica para guardar los datos en la base de datos si es necesario
 
     // Genera la respuesta que se mostrará en el modal
     $response = '
         <p><strong>Fecha:</strong> ' . $fecha . '</p>
         <p><strong>Incidente:</strong> ' . $incidente . '</p>
         <p><strong>Personas Afectadas:</strong> ' . $afectadas . '</p>
         <p><strong>Descripción:</strong> ' . $descripcion . '</p>
     ';
 
     echo $response;
 }

?>