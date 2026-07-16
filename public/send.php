<?php

header("Content-Type: application/json; charset=UTF-8");

$data = json_decode(file_get_contents("php://input"),true);

$telegram = htmlspecialchars($data['telegram']);
$phone = htmlspecialchars($data['phone']);

$message = "
Новая заявка с сайта

Telegram: @$telegram

Телефон:
$phone
";

$result = mail(
"centeriskra@yandex.ru",
"Новая заявка с сайта",
$message
);

echo json_encode([
"success"=>$result
]);

?>