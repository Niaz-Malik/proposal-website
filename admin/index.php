<?php
include "../db.php";

$result=mysqli_query($conn,"SELECT * FROM responses ORDER BY id DESC");
?>

<!DOCTYPE html>

<html>

<head>

<title>Admin Panel</title>

<style>

body{

font-family:Arial;

background:#f5f5f5;

padding:30px;

}

table{

width:100%;

border-collapse:collapse;

background:white;

}

th,td{

padding:15px;

border:1px solid #ddd;

text-align:center;

}

th{

background:#ff2d75;

color:white;

}

tr:hover{

background:#f2f2f2;

}

.delete{

background:red;

color:white;

padding:8px 15px;

text-decoration:none;

border-radius:8px;

}

</style>

</head>

<body>

<h1>Proposal Responses ❤️</h1>

<table>

<tr>

<th>ID</th>

<th>Meeting</th>

<th>Phone</th>

<th>Instagram</th>

<th>Snapchat</th>

<th>WhatsApp</th>

<th>Message</th>

<th>Date</th>

<th>Delete</th>

</tr>

<?php while($row=mysqli_fetch_assoc($result)){ ?>

<tr>

<td><?= $row['id']; ?></td>

<td><?= $row['meeting']; ?></td>

<td><?= $row['phone']; ?></td>

<td><?= $row['instagram']; ?></td>

<td><?= $row['snapchat']; ?></td>

<td><?= $row['whatsapp']; ?></td>

<td><?= $row['message']; ?></td>

<td><?= $row['created_at']; ?></td>

<td>

<a

class="delete"

href="delete.php?id=<?=$row['id'];?>"

>

Delete

</a>

</td>

</tr>

<?php } ?>

</table>

</body>

</html>
