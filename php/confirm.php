<?php
if($_GET['password']=="litdaemons")
{
	$q=$_GET['eventName'];
	header("Location:http://literati.net.in/2012/php/showEvents.php?eventName=$q");
	
}
else
{
	die("Not a valid user");
}
	
?>