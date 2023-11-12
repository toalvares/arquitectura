<?php

include("../clases/conexion.php");
include("../clases/template.php");

$t = new Template();
$t->set_file(array("Salida" => "home.html"));
$t->set_block("Salida","listaEqClave","listaEqClaveT");
$t->set_block("Salida","listaUsuarios","listaUsuariosT");
$t->set_block("Salida","rastreoRespuesta","rastreoRespuestaT");

session_start();


if(isset($_POST["grabar"])){

     $fecha = $_POST["fecha"];
     $incidente = $_POST["incidente"];
     $afectadas = $_POST["afectadas"];
     $descripcion = $_POST["descripcion"];
     $nueva_fecha = date("Y-m-d", strtotime($fecha));

     $query = "INSERT INTO registro_accidente (fecha, incidente, personas_afectadas, descripcion) 
     VALUES ('$nueva_fecha' , '$incidente', '$afectadas', '$descripcion')";

     $sql = mysqli_query($conn, $query);
}	

if(isset($_SESSION["usuario"]))
{
     $t->set_var(array("usuario"=>$_SESSION["usuario"],
     ));

     $query = "SELECT nombre, snombre, apellidop, apellidom FROM equipo_clave";
     $result = mysqli_query($conn,$query);
     while($p =  mysqli_fetch_object($result))
     {
          $t->set_var(array("datos_persona"=>$p->nombre." ".$p->snombre." ".$p->apellidop." ".$p->apellidom));
          $t->parse("listaEqClaveT","listaEqClave",true);
     }


     $query = "SELECT nombre, snombre, apellidop, apellidom FROM lista_personal";
     $result = mysqli_query($conn,$query);
     while($p =  mysqli_fetch_object($result))
     {
          $t->set_var(array("lista_personal"=>$p->nombre." ".$p->snombre." ".$p->apellidop." ".$p->apellidom));
          $t->parse("listaUsuariosT","listaUsuarios",true);
     }

     $query = "SELECT nombre, snombre, apellidop, apellidom FROM rastreo_respuesta";
     $result = mysqli_query($conn,$query);
     while($p =  mysqli_fetch_object($result))
     {
          $t->set_var(array("rastreo_respuesta"=>$p->nombre." ".$p->snombre." ".$p->apellidop." ".$p->apellidom));
          $t->parse("rastreoRespuestaT","rastreoRespuesta",true);
     }

     // if(isset($_POST["datos_form"])){

     //      $query = "INSERT INTO registro_accidente (id_alerta, fecha, incidente, personas_afectadas, descripcion) 
     //      VALUES (NULL, '2023-10-17', 'dsadasdas', '1', '1')";

     //      $sql = mysqli_query($conn, $query);
     // }

}
else
{
     header('Location: ../');
     exit();
}


$t->parse("Salida","Salida");
$t->p("Salida")


?>