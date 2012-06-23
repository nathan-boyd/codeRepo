<?php

	include('mysqlutils.php');	
	$connection = mySQLConnection();

	$sql = "SELECT * FROM datapoint";
	$result = mysql_query($sql) or die (mysql_error());  
	$arr_results = array();
	
	while($row = mysql_fetch_array($result))
	{
	   $arr_results[] = array(
		  'string_latitude' => $row['string_latitude'],
		  'string_longitude' => $row['string_longitude'],
		  'int_coppm' => $row['int_coppm']
	   );
	}
	
	$json = json_encode($arr_results);
	
	echo $json;
?>


