<?php 
// save-todo.php (this file does the magic)
$task = $_POST['task'];
// Connect to that "weird database"
INSERT INTO todos (task) VALUES ('$task');
?>