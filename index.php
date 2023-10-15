<?php

include("clases/conexion.php");
include("clases/template.php");

$t = new Template();
$t->set_file(array("Salida" => "login.html"));

session_start();
if(isset($_SESSION["usuario"]))
{
     header("location: sistema/");
}
else
{
     if (isset($_POST["btningresar"])) 
     {
         if (isset($_POST["rut"]) && isset($_POST["clave"])) 
         {
     
              $usuario=$_POST["rut"];
              $clave=$_POST["clave"];
              $claveMd5=MD5($clave);
              $sql = mysqli_query($conn,"SELECT * FROM usuario WHERE usuario='$usuario' AND clave='$claveMd5'");

     
              if (mysqli_affected_rows($conn) > 0) 
              {
                   $obj=mysqli_fetch_object($sql);
                   session_start();
                   $_SESSION['usuario']= $obj->nombre_user;
                   header("location: sistema/");
              } 
              else 
              {
                  session_destroy();
                   $t->set_var(array(
                    "mensajeError"=>'<div class="alert alert-danger">Rut no existe en el sistema</div>',
                    "usuario"=>"no existe"
     
                   ));
     
              }
         }
     }
     else 
     {
        
     }
}



$t->parse("Salida","Salida");
$t->p("Salida")

?>