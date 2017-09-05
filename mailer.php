<?php

$message = '<h2>Новая заявка с сайта "IE 100000"</h2>';

if (isset($_POST['name']))
    $message .= '<p>ФИО <b>' . $_POST['name'] . '</b></p>';

if (isset($_POST['phone']))
    $message .= '<p>Контактный телефон <b>' . $_POST['phone'] . '</b></p>';



include "class.phpmailer.php";

$mail = new PHPMailer();
$mail->From = $_REQUEST['email'] ? $_REQUEST['email'] : "orders@next-team.ru";
$mail->FromName = $_REQUEST['name'];
$mail->AddAddress('lp@next-team.ru');
$mail->IsHTML(true);
$mail->Subject = "Новая заявка с сайта «IE 100000»";
$mail->Body = $message;

if (!$mail->Send()) print ('Mailer Error: ' . $mail->ErrorInfo);

?>
