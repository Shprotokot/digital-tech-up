<?php
// Настройки
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Защита от спама - honeypot
if (!empty($_POST['honeypot'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected']);
    exit;
}

// Получаем данные из формы
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Валидация
$errors = [];

if (empty($name)) {
    $errors[] = 'Имя обязательно для заполнения';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Некорректный email адрес';
}

if (empty($message)) {
    $errors[] = 'Сообщение обязательно для заполнения';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Настройки email
$to = 'noreply@digital-tu.ru';
$subject = 'Новая заявка с сайта DIGITALTechUp';

// Формируем тело письма
$emailBody = "
=== Новая заявка с сайта ===

Имя: {$name}
Email: {$email}
Телефон: " . ($phone ?: 'Не указан') . "

Сообщение:
{$message}

---
Отправлено: " . date('d.m.Y H:i:s') . "
IP адрес: " . $_SERVER['REMOTE_ADDR'] . "
";

// Заголовки письма
$headers = "From: noreply@digital-tu.ru\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправляем email
$mailSent = mail($to, $subject, $emailBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при отправке. Попробуйте позже.'
    ]);
}
?>
