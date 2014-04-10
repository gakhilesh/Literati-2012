<?php
	include("../include/session.php");
	if($session->logged_in)
	{
		if($session->eventRegisterCheck($_GET['q'])) /* Registered*/
		{
		 echo "<input type=\"button\" value=\"You are already registered for this event\" disabled=\"disabled\"/>";
		}
		else	/* Not Registered*/
		{	
			$name = $_GET['q'];
			$name = str_replace(' ', '_', $name);
		   echo "<div class='mousePointer' id='registration' style=\"color:#CCC; \" onclick=registration(\"".$name."\")><input type=\"button\" value=\"Register for this event\"></div>";
           
        }
	}
	else
	{
		echo "You are not logged in, Please log in!";
	}
?>
