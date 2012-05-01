<?php

//prints a variety of static content

function printHeader(){

	echo'

		<head>
			<title>Robert Boyd Capstone</title>
			<meta name="description" content="website description" />
			<meta name="keywords" content="website keywords, website keywords" />
			<meta http-equiv="content-type" content="text/html; charset=windows-1252" />
			<link rel="stylesheet" type="text/css" href="style/style.css" title="style" />
		</head>
	';
}

function printMenu(){
	echo'

		<div id="main">
			<div id="header">
				<div id="logo">
					<div id="logo_text">
						<h1><a href="index.php">Air<span class="logo_colour">Quality</span></a></h1>
						<h2>A Study of Carbon Monoxide Levels in the City of Indianapolis</h2>
					</div>
				</div>
			<div id="menubar">
				<ul id="menu">
					<!-- use selected class to indicate current page -->
					<li class="selected"><a href="index.php">Home</a></li>
					<li><a href="viewdata.php">View Data</a></li>
					<li><a href="heatmap.php">Heat Map</a></li>
					<li><a href="https://github.com/nathanboyd46/Undergraduate-Research-Project/tree/master/air_quality">Source</a></li>
					<li><a href="documentation/html/namespaces.html">Documentation</a></li>
				</ul>
			</div>
		</div>
	';
}

function printSidebar(){

	echo'
		<div class="sidebar">
			<!-- insert your sidebar items here -->
			<h3>Latest News</h3>
			<h4>Final Data Logging Complete</h4>
			<h5>April 15 2012 Site wrap started, 5300 data points gathered!</h5>
		</div>
	';

}

function printFooter(){
	echo'
		<div id="footer">
			Copyright &copy; Robert Boyd | <a href="http://validator.w3.org/check?uri=referer">HTML5</a> | <a href="http://jigsaw.w3.org/css-validator/check/referer">CSS</a> | <a href="http://www.nathan-boyd.org">Robert Nathan Boyd</a>
		</div>
	';
}

function printAllDate(){
	
	
}


?>