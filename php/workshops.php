<?php
	include("connect.php");
	$event=$_GET["event"];
	$sql="select * from workshops where name='".$event."'";
	$que=mysql_query($sql);
	while($res=mysql_fetch_assoc($que))
	{
		$name = $res['Name'];
        $name= str_replace("_"," ",$name);
		$home = stripslashes(nl2br($res['Home']));
		$contents = stripslashes(nl2br($res['Contents']));
		$contacts = nl2br($res['Contacts']);
		
		$details=array('name'=>$name, 'home'=>$home, 'contents'=>$contents, 'contacts'=>$contacts);
		$json_details = json_encode($details);
		echo $json_details;
	}
?>