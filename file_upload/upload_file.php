<?php
include("../include/session.php");
$eventName = $_POST['eventName'];
$sql = "SELECT * FROM `event_cord` WHERE `cord_email`= \"$eventName\"";
$result = mysql_query($sql);

$row = mysql_fetch_array($result);
  $id= $row['eve_id'];
  
  
  if (($_FILES["file"]["size"] < 2000000))
  {
  if ($_FILES["file"]["error"] > 0)
    {
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . " is completed. It will be automatically added to your event section. Thanks!<br />";
   

   
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "upload/" . $_FILES["file"]["name"]);
	  $q = "UPDATE events SET prob_statement = \"".$_FILES["file"]["name"]."\" WHERE eve_id=\"$id\"";
	  mysql_query($q);
       
    }
  }
else
  {
  echo "Invalid file";
  }
?>