// <?php

// $conn = mysqli_connect(
//     "localhost",
//     "root",
//     "",
//     "proposal_db"
// );

// if(!$conn){
//     die("Database Connection Failed");
// }

// ?>


<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "proposal_db";

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Database Connection Failed: " . mysqli_connect_error());
}

?>
