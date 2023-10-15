<?php

include("../clases/conexion.php");
include("../clases/template.php");

$t = new Template();
$t->set_file(array("Salida" => "home.html"));
$t->set_block("Salida","listaEqClave","listaEqClaveT");
$t->set_block("Salida","listaUsuarios","listaUsuariosT");
$t->set_block("Salida","rastreoRespuesta","rastreoRespuestaT");

session_start();
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


}
else
{
     header('Location: ../');
     exit();
}


$t->parse("Salida","Salida");
$t->p("Salida")


?>