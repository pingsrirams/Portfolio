<?php     
$to_email = 'pingsrirams@gmail.com';
$subject = 'Testing PHP Mail';
$subject = 'Form Submitted from imsriram.com';
$message = $_POST['message'];
$headers = 'From: pingsrirams@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$service = $_POST['service'];
$fullmessage = "Name: ".$name."\n\n"."Email: ".$email."\n\n"."Service: ".$service."\n\n"."Message: ".$message;
mail($to_email,$subject,$fullmessage,$headers);

header('Location: '.'index.html');
?>