<?php

// returns the database link for a connection

function mysqlconnection()
{
	$host="laconia"; 													// Host name
	$username="root"; 													// Mysql username
	$password="@liga+or"; 												// Mysql password
	$db_name="undergradresearch"; 										// Database name

	$connection = mysql_connect($host, $username, $password);
	
	if (!$connection){
		die('Could not connect: ' . mysql_error());
	} 
		
	mysql_select_db($db_name, $connection);
	
	return($connection);

} 


?>
