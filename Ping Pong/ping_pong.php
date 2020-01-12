
<?php
include "connect.php";

$sql="SELECT * FROM highscores order by score desc ";
$result=$conn->query($sql);




echo "<table border='1'>
<tr>
<th>Name</th>
<th>Score</th>
</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['Name'] . "</td>";
echo "<td>" . $row['Score'] . "</td>";
echo "</tr>";
}
echo "</table>";

mysqli_close($conn);
?>

<!DOCTYPE html>
<html>
<head>
	<title>Ping Pong</title>
	<link href="style.css" rel="stylesheet" type="text/css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<script src="ping.js"></script>
</head>
<body>
	<div class="container">
		<div class="stick1">
		</div>
		<div class="stick2">
		</div>
		<div class="ball">
		</div>
	</div>
	<div class="scoreboard">
		<h1>Score :<span>0</span></h1>
	</div>
	<div class="final">
		<div class="scorecard">
			<center><h1>Final Score:<span>0</span></h1></center>
			
			<form action="store.php" method="POST">
				<center><input type="text" id="name" name="name" placeholder="Enter your name"></center>
				<input type="hidden" id="score" value="0" name="score">
				<br>
				<center><input type="submit" id="submit" value="Save score"></center>
			</form>
			
		</div>
	</div>

	<div class="a"><h3>High Scores</h3></div>
</body>
</html>