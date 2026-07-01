<?php

include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $meeting = mysqli_real_escape_string($conn, $_POST['meeting']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $instagram = mysqli_real_escape_string($conn, $_POST['instagram']);
    $snapchat = mysqli_real_escape_string($conn, $_POST['snapchat']);
    $whatsapp = mysqli_real_escape_string($conn, $_POST['whatsapp']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    $sql = "INSERT INTO responses
    (meeting,phone,instagram,snapchat,whatsapp,message)

    VALUES

    ('$meeting','$phone','$instagram','$snapchat','$whatsapp','$message')";

    if (mysqli_query($conn, $sql)) {

        echo "<script>

        alert('❤️ Thank You! Your response has been saved.');

        window.location='index.php';

        </script>";

    } else {

        echo "Database Error : " . mysqli_error($conn);

    }

}

?>
