<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php-mailer/Exception.php';
require 'php-mailer/PHPMailer.php';
require 'php-mailer/SMTP.php';

$email = $_POST['email'];

$mail = new PHPMailer(true);

try {

    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host       = 'mail.duartecacavelos.com.py';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-responder@duartecacavelos.com.py';
    $mail->Password   = 'Secret10$%';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    //Recipients
    $mail->setFrom('no-responder@duartecacavelos.com.py', 'WebSite');
    $mail->addAddress('tadeo25.molinas@gmail.com');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Prueba';
    $mail->Body    = 
    "<b>Email: </b>" . $email . "<br>";

    // $mail->send();
    echo 'success';
    exit;
} catch (Exception $e) {
    echo 'success';
}