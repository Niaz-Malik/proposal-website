<?php

include "db.php";

$meeting=$_POST['meeting'];
$phone=$_POST['phone'];
$instagram=$_POST['instagram'];
$snapchat=$_POST['snapchat'];
$whatsapp=$_POST['whatsapp'];
$message=$_POST['message'];

$sql="INSERT INTO responses
(meeting,phone,instagram,snapchat,whatsapp,message)
VALUES
('$meeting','$phone','$instagram','$snapchat','$whatsapp','$message')";

if(mysqli_query($conn,$sql)){

echo "Success";

}else{

echo "Failed";

}

?>
