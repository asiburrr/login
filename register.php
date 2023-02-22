<?php
// Connect to database
$servername = "http://sql12.freesqldatabase.com/";
$username = "sql12600175";
$password = "Sc8hTaEf6q";
$dbname = "sql12600175";
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check if email already exists in the database
$email_check_query = "SELECT * FROM users WHERE email='$email' LIMIT 1";
$result = mysqli_query($conn, $email_check_query);
$user = mysqli_fetch_assoc($result);

if ($user) {
echo "Email already exists";
} else {
// Insert user data into the database
$query = "INSERT INTO users (username, email, password)
VALUES('$username', '$email', '$password')";
mysqli_query($conn, $query);
echo "Registration successful";
}
?>
