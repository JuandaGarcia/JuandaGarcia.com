  
<?php
    $email="juandagarciadev@gmail.com";
    $nombre= $_POST["name"];
    $correo= $_POST["email"];
    $mensaje= $_POST["mensaje"];
    $message="
    nombre:".$nombre."
    correo:".$correo."
    mensaje:".$mensaje."
    ";
    $listo="/contacto";
    if(mail($email,"Contacto",$message)){
        header('Location: /');
    }
?>