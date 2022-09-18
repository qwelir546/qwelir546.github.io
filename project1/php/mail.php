<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$sms = $_POST['user_sms'];

$mail->setFrom('exampleru92@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('antochka.gusev@gmail.com'); // Кому будет уходить письмо
//$mail->addAddress('ellen@example.com'); // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name
$mail->isHTML(true); // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body = ''. "скрипт сработал <br>". $phone. "<br>". $name. "<br>". $sms;
$mail->AltBody = '';

if(!$mail->send()) {
return 'false';
} else {
return 'true';
}
?>