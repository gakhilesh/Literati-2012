<?php
$event = $_POST['eventName'];
?>

<html>
<body>

<form action="upload_file.php" method="post" enctype="multipart/form-data">
<label for="file">Filename:</label>
<input type="file" name="file" id="file" /> 
<br />
<input type="hidden" name="eventName" value="<?php echo $event; ?>" />
<input type="submit" name="submit" value="Submit" />

</form>

</body>
</html>
<?php

?>