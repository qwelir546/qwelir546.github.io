<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$sms = $_POST['user_sms'];

$mail->setFrom('exampleru92@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('gusevanton05@mail.ru'); // Кому будет уходить письмо
$mail->isHTML(true);
$mail->Subject = 'Заявка с сайта';
$mail->Body = ''. $phone. "<br>". $name. "<br>". $sms;
$mail->AltBody = '';

if(!$mail->send()) {
return 'false';
} else {
return 'true';
}
?>