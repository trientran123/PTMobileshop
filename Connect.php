<?php
$servername = "localhost";
$database = "PTMoblie";
$username = "root";
$password = "093629897";

// Create connection
$conn = mysqli_connect($slocalhost, $root, $0936229897, $PTMobile);

// Check connection

if ($conn->connect_error) {
    die("Kết nối không thành công: " . $conn->connect_error);
}
echo “Connected successfully”;
mysqli_close($conn);
?>