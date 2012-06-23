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
						<h1><a href="index.html">colour<span class="logo_colour">green</span></a></h1>
						<h2>This is a title</h2>
					</div>
				</div>
			<div id="menubar">
				<ul id="menu">
					<!-- use selected class to indicate current page -->
					<li class="selected"><a href="index.php">Home</a></li>
					<li><a href="heatmap.php">Heat Maps</a></li>
					<li><a href="page.html">A Page</a></li>
					<li><a href="another_page.html">Another Page</a></li>
					<li><a href="contact.html">Contact Us</a></li>
				</ul>
			</div>
		</div>
	';
}

function printSidebar(){

	echo'
		<div class="sidebar">
			<!-- insert your sidebar items here -->
			<h3>H3 Latest News</h3>
			<h4>H4 New Website Launched</h4>
			<h5>H5 January 1st, 2010</h5>
			<p>Some Stuff.<br /><a href="#">Read more</a></p>
			<p></p>
			<h4>H4New Website Launched</h4>
			<h5>H5 January 1st, 2010</h5>
			<p>Paragraph 2010 sees the redesign of our website. Take a look around and let us know what you think.<br /><a href="#">Read more</a></p>
			<h3>H3 Useful Links</h3>
			<ul>
				<li><a href="#">link 1</a></li>
				<li><a href="#">link 2</a></li>
				<li><a href="#">link 3</a></li>
				<li><a href="#">link 4</a></li>
			</ul>
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