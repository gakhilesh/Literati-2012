<?php
include("../include/session.php");
if($session->logged_in)
	$logged = 1;
else
	$logged = 0;
	
		
		
			$name = "Hi " .  $session->getLoggedUserName(). ", " ;
		$response = array('logged' => $logged , 'name' => $name);
		$json_response = json_encode($response);
		echo $json_response;
?>