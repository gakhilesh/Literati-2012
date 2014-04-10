<?php
include("../include/session.php");
if($_GET['q'])
{
	$session->eventRegisterUser($_GET['q']);
	echo "<input type=\"button\" value=\"You are now registered for this event\" disabled=\"disabled\"/>";
}
?>