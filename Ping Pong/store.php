<?php
include "connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name=$_POST["name"];
	$score=$_POST["score"];
	echo "kkk";
}

$sql="INSERT INTO highscores VALUES('$name','$score')";
if ($conn->query($sql)==TRUE) {
	// echo "success";
	 header('Location: ping_pong.php');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>