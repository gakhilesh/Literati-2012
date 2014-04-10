<?php
include("connect.php");
if(isset($_GET['eve_id']))
{
	$id=$_GET['eve_id'];
	$q="select * from events where eve_id='".$id."'";
	$que=mysql_query($q);
	$details=mysql_fetch_assoc($que);
	$eventName=$details['eve_id'];
	$eventDescription=$details['eve_desc'];
	$eventRules=$details['eve_rules'];
	
	$q1="select * from event_cord where eve_id='".$id."'";
	$que1=mysql_query($q1);
	while($cordDetails=mysql_fetch_assoc($que1))
	{
		$cordName[]=$cordDetails['cord_name'];
		$cordContact[]=$cordDetails['cord_contact'];
		$cordEmail[]=$cordDetails['cord_email'];
	}
	
}

if(isset($_POST['submit']))
{
	 $eventName=$_POST['eve_name'];
	$eventDescription=$_POST['eve_details'];echo "<br>";
	 $eventRules=$_POST['eve_rules'];echo "<br>";

     $eveid = $_POST['eveid'];echo "<br>";
 $sql = "UPDATE `events` SET `eve_desc` = '".$eventDescription."', `eve_rules` = '".$eventRules."'  WHERE `events`.`eve_id` = '".$eveid."'  LIMIT 1;";
	if(mysql_query($sql))
	{
	
	?><center><h2><div style="color:white";>Update successful.</div><a href="../index.html">Click here to go back to home.</a></h2></center><?php
} else {
	echo "Database error";
	echo mysql_error();
}

}
else{
?>
<html>
<head>
<link rel="stylesheet" href="../css/formstyler.css" type="text/css" />
</head>
<body>

<form action="updateEvent.php" method ="post">

<br />

<br />
<font size="4" face="Verdana, Geneva, sans-serif" style="color:#FFF"><div align="center"> Update your event
<br />
<br /></div></font>

<table width="100%">

<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Event Name:

</td>

<td>

<input type="text" name="eve_name" maxlength="30" value="<?php
echo $eventName; ?>" />


</td>

</tr>





<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Event Category:

</td>

<td>

<select name="eve_category" value="Category" >

<option> Aeromodelling</option>

<option> Design</option>

<option> Funzone</option>

<option> Managerial</option>

<option value="Online_events"> Online Events</option>

<option value="Papyrus_vitae"> Papyrus vitae</option>

<option> Quizzes</option>

<option> Robotics</option>

<option> Technopolis</option>


<option> Workshop</option>
</select>

</td>

</tr>



<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Event Cordinator 1 (EC1) Name:

</td>

<td>

<input type="text" name="cord_name1" maxlength="30"  value="<?php echo $cordName[0]; ?>"/>

</td>

</tr>





<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> EC1 Contact No.:

</td>

<td>

<input type="text" name="cord_contact1" maxlength="30" value="<?php echo $cordContact[0]; ?>" />
(Keep only 10 digits)

</td>

</tr>



<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> EC1 Email ID:

</td>

<td>

<input type="text" name="cord_email1" maxlength="30" value="<?php echo $cordEmail[0]; ?>"/>

</td>

</tr>







<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Event Cordinator 2 (EC2) Name:

</td>

<td>

<input type="text" name="cord_name2" maxlength="30" value="<?php echo $cordName[1]; ?>"/>

</td>

</tr>



<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> EC2 Contact No.:

</td>

<td>

<input type="text" name="cord_contact2" maxlength="30" value="<?php echo $cordContact[1]; ?>"/>
(Keep only 10 digits)

</td>

</tr>



<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> EC2 Email ID:

</td>

<td>

<input type="text" name="cord_email2" maxlength="30" value="<?php echo $cordEmail[1]; ?>"/>

</td>

</tr>



</table>

<br />

<table>

<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Event Details:

</td>

<td>

<textarea name="eve_details" rows="15" cols="55">
<?php
echo $eventDescription;
?>
</textarea>

</td>

</tr>



<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Rules and Regulations:

</td>

<td>

<textarea name="eve_rules" rows="15" cols="55">
<?php
echo $eventRules;
?>
</textarea>

</td>

</tr>






<tr>

<td  align="left">

<font size='2' face="Arial, Helvetica, sans-serif"> Other Details:

</td>

</tr>



</table>



<br />

<div align="center">

<input type="submit" name="submit" value="update" />

</div>


<input type="hidden" name="eveid" value="<?php echo $id;?>" />
</form>

<body>

</body>

</html>
<?php
}
?>