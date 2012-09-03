<?php

// returns the database link for a connection

function mysqlconnection()
{
	$host="airqual.db.7906438.hostedresource.com"; 								// Host name
	$username="airqual"; 											// Mysql username
	$password="W!MJKr6usi"; 											// Mysql password
	$db_name="airqual"; 												// Database name

	$connection = mysql_connect($host, $username, $password);
	
	if (!$connection){
		die('Connection failed: ' . mysql_error());
	} 
		
	mysql_select_db($db_name, $connection);
	
	return($connection);

} 

function getdatapoint(){
	
}


?>
