<?php

include('phputils/printstaticcontent.php');
include('phputils/mysqlutils.php');

echo'

<!DOCTYPE HTML>
<html>

';

	printHeader();

echo'
	<body>
';

	printMenu();

echo'

	<div id="site_content">

';

	printSidebar();

echo'	
	
		<div id="content">
			<!-- insert the page content here -->
			<h1>Abstract</h1>
			<p>The clean air act of 1990 established standards on the maximum levels of air pollutants allowable in ambient air. I want to determine if these standards being met in the city of Indianapolis.</p>

<p>I want to create and implement cheap sensors (Arduino based) which measure air quality, weather, and location. These sensors would then automatically upload their readings to a database which I would use to create mappings of pollutant hot spots and possibly identify air polluters around the city.</p>

<p>Finally I would ensure that the database and maps are available to anyone with internet access.</p>
			
			<h2>Project Components</h2>
			<p>This project consists of several interacting software and hardware components:</p>
			<p>Hardware</p>
			<ul>
				<li>Arduino Uno</li>
				<li>Parallax MQ7 CO Sensor</li>
				<li>Parallax GPS</li>
			</ul>
			<p>Software</p>
			<ul>
				<li>Arduino Core, consists of interfaces with gas and GPS sensors</li>
				<li>Python Interface with Arduino Serial output</li>
				<li>Python Intergace with ODBC data connection</li>
				<li>MySQL Database</li>
				<li>PHP Web Application</li>
				<li>Javascript Interface with Google Maps API.<li>
			</ul>
		</div>
	</div>
	
	<div id="content_footer">
	</div>
	
';
	
	printFooter();

echo '
	
	</body>
	
</html>

';

?>	