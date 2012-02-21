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

	printSidebar();
	
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
	
	echo "<table border='1' cellpadding='10'>";
	echo '
		<th><a href="viewdata.php?sort=id">ID:</a></th>
		<th><a href="viewdata.php?sort=gps_time">Time:</a></th>
		<th><a href="viewdata.php?sort=gps_date">Date:</a></th>
		<th><a href="viewdata.php?sort=string_latitude">Lat:</a></th>
		<th><a href="viewdata.php?sort=string_longitude">Lon:</a></th>
		<th><a href="viewdata.php?sort=int_coppm">CO PPM:</a></th>
	';
	
	while($row = mysql_fetch_array( $result )) {

		echo "<tr>";
		echo '<td>' . $row['id'] . '</td>';
		echo '<td>' . $row['gps_time'] . '</td>';
		echo '<td>' . $row['gps_date'] . '</td>';
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
	    <div id="content">
            <!-- insert the page content here -->
            <h1>View Data</h1>
            <p>This is the data</p>
        </div>

			
			<style type="text/css">
				html { height: 100% }
				body { height: 50%; margin: 0; padding: 0 }
				#map_canvas { height: 100% }
			</style>
			
			<div id="map_canvas" style="width: 825px; height: 500px;">
			</div> 
		
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