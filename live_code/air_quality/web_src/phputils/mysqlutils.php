<?php

// returns the database link for a connection

function mysqlconnection()
{
	$host="localhost"; 												// Host name
	$username="root"; 												// Mysql username
	$password="@liga+or"; 											// Mysql password
	$db_name="airqual"; 											// Database name

	$connection = mysql_connect($host, $username, $password);
	
	if (!$connection){
		die('Connection failed: ' . mysql_error());
	} 
		
	mysql_select_db($db_name, $connection);
	
	return($connection);

} 


?>
