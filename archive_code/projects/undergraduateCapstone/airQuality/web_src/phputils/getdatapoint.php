<?php

	include('mysqlutils.php');	
	$connection = mySQLConnection();

//	$sql = "SELECT * FROM datapoint";

// want to get every 10th row to keep total data down
	$sql = "
			SELECT * 
				FROM ( 
					SELECT 
						@row := @row +1 AS rownum, id, gps_time, gps_date, string_latitude, string_longitude, int_coppm
					FROM ( 
						SELECT @row :=0) r, datapoint
					) ranked 
			WHERE rownum % 10 = 1 
	
		   ";

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


