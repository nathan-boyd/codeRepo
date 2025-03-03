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
			<h1>H1 Welcome to the colour_green template</h1>
			<p>This standards compliant, simple, fixed width website template is released as an open source design (under a <a href="http://creativecommons.org/licenses/by/3.0">Creative Commons Attribution 3.0 Licence</a>), which means that you are free to download and use it for anything you want (including modifying and amending it). All I ask is that you leave the design from HTML5webtemplates.co.uk link in the footer of the template, but other than that...</p>
			<p>This template is written entirely in <strong>HTML5</strong> and <strong>CSS</strong>, and can be validated using the links in the footer.</p>
			<p>You can view more free HTML5 web templates <a href="http://www.html5webtemplates.co.uk">here</a>.</p>
			<p>This template is a fully functional 5 page website, with an <a href="examples.html">examples</a> page that gives examples of all the styles available with this design.</p>
			<h2>Browser Compatibility</h2>
			<p>This template has been tested in the following browsers:</p>
			<ul>
				<li>List Item Internet Explorer 8</li>
				<li>Internet Explorer 7</li>
				<li>FireFox 3.5</li>
				<li>Google Chrome 6</li>
				<li>Safari 4</li>
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