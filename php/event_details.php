<?php

include("connect.php");

$event=$_GET["event"];

$sql="select * from events where eve_id='".$event."'";
$que=mysql_query($sql);

$sql1="select * from event_cord where eve_id='".$event."'";
$que1=mysql_query($sql1);



//while($res=mysql_fetch_assoc($que))
$res=mysql_fetch_assoc($que);

{

	$name = $res['eve_id'];	$prob_stat=$res['prob_statement'];	if($prob_stat == "" || $prob_stat == "\r\n" )	$flag=0;	else	$flag=1;

        $name= str_replace("_"," ",$name);

	$desc = stripslashes(nl2br($res['eve_desc']));		if($flag ==1)	$desc="<a href=\"file_upload/upload/".$prob_stat."\" target = \"_blank\"> Download Problem Statement</a><br/><br/>".$desc;
	
	$rules = stripslashes(nl2br($res['eve_rules']));
	$contacts="";
	while($res1=mysql_fetch_assoc($que1))
	{
		$contacts.=$res1['cord_name']."<br>";
		$contacts.=$res1['cord_contact']."<br>";
		$contacts.=$res1['cord_email']."<br><br>";
		
	}

	$other = nl2br($res['other_details']);

	$details = array('name' => $name, 'desc' => $desc, 'rules' => $rules, 'contacts' => $contacts);

	$json_details = json_encode($details);

	echo ($json_details);

}



?>