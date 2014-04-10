<?php
include("connect.php");
if(!(isset($_POST['flag'])))
{
$flag=0;

?>
<form method="post">
<br>
Enter Password: 
<input type="password" name="pass"/>
<input type="hidden" name= "flag" value="1"/>
<br />
<input type="submit" value = "Show" />
</form>
<?php
}
else
{

if($_POST['flag']==1 || $_POST['pass'] == "litdaemons")
{
if(isset($_POST['submit']))
{
	$i=0;
	mysql_query("delete from ticker");
while($i<=9)
{
		$t="text".$i;
		$_POST[$t]=str_replace("  ","",$_POST[$t]);
		$i++;		

}
		
$i=0;
			mysql_query("insert into ticker values('".$_POST['text10']."','".$_POST['text0']."')");
			mysql_query("insert into ticker values('".$_POST['text11']."','".$_POST['text1']."')");
			mysql_query("insert into ticker values('".$_POST['text12']."','".$_POST['text2']."')");
			mysql_query("insert into ticker values('".$_POST['text13']."','".$_POST['text3']."')");
			mysql_query("insert into ticker values('".$_POST['text14']."','".$_POST['text4']."')");
			mysql_query("insert into ticker values('".$_POST['text15']."','".$_POST['text5']."')");
			mysql_query("insert into ticker values('".$_POST['text16']."','".$_POST['text6']."')");
			mysql_query("insert into ticker values('".$_POST['text17']."','".$_POST['text7']."')");
			mysql_query("insert into ticker values('".$_POST['text18']."','".$_POST['text8']."')");
			mysql_query("insert into ticker values('".$_POST['text19']."','".$_POST['text9']."')");
				
}

$q=mysql_query("select * from ticker");
while($res=mysql_fetch_assoc($q))
{
	$updates[]=$res['Updates'];
	
	$eventName[]=$res['Name'];
	
	
}


?>
<html>
<body>
<form action="updateTicker.php" method="post" >
<table align="center" width="100%" border="0">
<tr align="center">
<td>
<h3>Enter update heading here </h3>
</td>
<td>
<h3>Enter update description here</h3>
</td>
</tr>
<?php

$i=0;
while($i<=9) 
{
	$j=$i+10;
	?>
    <tr align="center">
    <td>
    Event/Update Name :<input type="text" name="<?php echo "text".$j; ?>" value="<?php echo $eventName[$i]; ?>" />
    </td>
    <td>
    <textarea rows="5" cols="30" name="<?php echo "text".$i; ?>"  >
    <?php echo str_replace("    "," ",$updates[$i]); ?>
    </textarea>
    </td>
    
    </tr>
    <br />
    <?php
	$i++;
}
?>
<tr align="center">
<td>
<input type="hidden" name="flag" value="1"/>
<input type="submit" name="submit" value="update"/>
</td>
</tr>
</table>
</form>
</body>
</html>
<?php
}
else
{
echo "Invalid passsword";
}
}
?>