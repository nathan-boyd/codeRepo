<?php

	session_start();

	include('phputils/printstaticcontent.php');
	include('phputils/mysqlutils.php');
	
	$connection = mySQLConnection();



echo'

<!DOCTYPE HTML>
<html>

';

	printHeader();
	
	printMenu();
	
//<body onLoad="circles()">
		
?>
	
	

	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	
	<body>
	
		<script type="text/javascript"
			src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAS9UBIw7rIJ7XcpBrxQd0iYNEppzyWJ_Q&sensor=true">
		</script>

		<script type="text/javascript" 
			src="javascript/heatmap.js">	
		</script>
               


        	
<?php



echo'

	<div id="site_content">

';

	
	
		$sql = "SELECT * FROM datapoint";
		
		if (! isset($_GET['sort']) )
		{
			$sql .= " ORDER BY id";
		}
		else if ($_GET['sort'] == 'gps_time')
		{
			$sql .= " ORDER BY gps_time";
		}
		elseif ($_GET['sort'] == 'gps_date')
		{
			$sql .= " ORDER BY gps_date";
		}
		elseif ($_GET['sort'] == 'string_latitude')
		{
			$sql .= " ORDER BY string_latitude";
		}
		elseif($_GET['sort'] == 'string_longitude')
		{
			$sql .= " ORDER BY string_longitude";
		}
		elseif($_GET['sort'] == 'int_coppm')
		{
			$sql .= " ORDER BY int_coppm";
		}

	$result = mysql_query($sql) or die (mysql_error());  
	
	
// 	<h2>Tables</h2>
// 	<p>Tables should be used to display data and not used for laying out your website:</p>
// 	<table style="width:100%; border-spacing:0;">
// 	<tr><th>Item</th><th>Description</th></tr>
// 	<tr><td>Item 1</td><td>Description of Item 1</td></tr>
// 	<tr><td>Item 2</td><td>Description of Item 2</td></tr>
// 	<tr><td>Item 3</td><td>Description of Item 3</td></tr>
// 	<tr><td>Item 4</td><td>Description of Item 4</td></tr>
// 	</table>
	
	echo '<table style="width:100%; border-spacing:0;">';
	echo '
		<tr>
			<th><a href="viewdata.php?sort=id"					>ID:		</a></th>
			<th><a href="viewdata.php?sort=gps_time"			>Time:		</a></th>	
			<th><a href="viewdata.php?sort=string_latitude"		>Lat:		</a></th>
			<th><a href="viewdata.php?sort=string_longitude"	>Lon:		</a></th>
			<th><a href="viewdata.php?sort=int_coppm"			>CO PPM:	</a></th>
		</tr>
	';
	
	while($row = mysql_fetch_array( $result )) {

		echo "<tr>";
		echo '<td>' . $row['id'] . '</td>';
		echo '<td>' . $row['gps_time'] . '</td>';
		//echo '<td>' . $row['gps_date'] . '</td>';
		echo '<td>' . $row['string_latitude'] . '</td>';
		echo '<td>' . $row['string_longitude'] . '</td>';	
		echo '<td>' . $row['int_coppm'] . '</td>';
		echo "</tr>"; 
			
	} 
	
	echo "</table>";
	
	mysql_close($connection);
	
	
	
	
	
?>
	

	
<?php
	

echo'	


			

		
		</div>
	
	</body>
	
	<div id="content_footer">
	</div>

';
	
	printFooter();

echo'
	
</html>

';

?>	