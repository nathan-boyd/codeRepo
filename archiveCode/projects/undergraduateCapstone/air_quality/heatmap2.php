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

	
?>

	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	
	<body onLoad="makeMap()">
	
		<script type="text/javascript"
			src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAS9UBIw7rIJ7XcpBrxQd0iYNEppzyWJ_Q&sensor=true">
		</script>

		<script type="text/javascript" 
			src="javascript/heatmap.js">	
		</script>
               
<?php

printMenu();



echo'

	<div id="site_content">

';

//	printSidebar();


?>

	
	

	

	

	
<?php
	

echo'	
	
			<div id="content">
				<!-- insert the page content here -->
				<h1>Heat Maps</h1>
				<p>This is a circles based heatmap</p>

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