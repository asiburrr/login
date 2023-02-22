<?php
if(isset($_POST['login'])) {
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  // Connect to the database
  $conn = mysqli_connect("http://sql12.freesqldatabase.com/", "sql12600175", "Sc8hTaEf6q", "sql12600175");
  
  // Check if email exists in the database
  $query = "SELECT * FROM users WHERE email='$email'";
  $result = mysqli_query($conn, $query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user && password_verify($password, $user['password'])) {
    echo "Login successful";
  } else {
    echo "Invalid email or password";
  }
}
?>
