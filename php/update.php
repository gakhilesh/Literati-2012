<?php
include("connect.php"); 



if(mysql_query("Insert into event_cord values('Cinematography','Abhinav Singh','8950376757','')"))
echo "success";
else
echo mysql_error();
//if(mysql_query("update event_cord set cord_name='<pre> Email us @: hacksadecimal.literati12@gmail.com</pre><br>Anchit Jain' where cord_name like '%Anchit Jain%'"))
{
//	echo "success";
	
}
//else
//echo mysql_error();

?>
