<?php

// returns the database link for a connection

function mysqlconnection()
{
	$host=""; 						// Host name
	$username=""; 												// Mysql username
	$password=""; 											// Mysql password
	$db_name=""; 												// Database name

	$connection = mysql_connect($host, $username, $password);
	
	if (!$connection){
		die('Connection failed: ' . mysql_error());
	} 
		
	mysql_select_db($db_name, $connection);
	
	return($connection);

} 

?>
