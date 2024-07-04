<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php-mailer/Exception.php';
require 'php-mailer/PHPMailer.php';
require 'php-mailer/SMTP.php';

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$empresa = $_POST['empresa'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$mail = new PHPMailer(true);

try {

    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = '';
    $mail->SMTPAuth   = true;
    $mail->Username   = '';
    $mail->Password   = '';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('', 'WebSite');
    $mail->addAddress('');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Prueba';
    $mail->Body    = 
    "<b>Nombre y apellido: </b>" . $nombre . "<br>
    <b>Email: </b>" . $email . "<br>
    <b>Teléfono: </b>" . $telefono . "<br>
    <b>Empresa: </b>" . $empresa . "<br>
    <b>Asunto: </b>" . $asunto . "<br>
    <b>Mensaje: </b>" . $mensaje . "<br>"
    ;

    $mail->send();
    header('Location: index.html');
    exit;
} catch (Exception $e) {
    echo "Hubo un error al enviar el mensaje {$mail->ErrorInfo}";
}