<?php header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['name'];
$phone = $_POST['phone'];
$mes = $_POST['message'];

$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$mes = htmlspecialchars($mes);
$fio = urldecode($fio);
$phone = urldecode($phone);
$mes = urldecode($mes);
$fio = trim($fio);
$phone = trim($phone);
$mes = trim($mes);

$address = "sergey-nv@mail.ru";
$sub = "Сообщение с сайта web-nv";
$headers = "Сообщение";

$message = "Сообщение с сайта web-nv \n
Имя отправителя: $fio
Телефон: $phone
$mes";

$mail = mail($address, $sub, $message, $headers);
 
?>