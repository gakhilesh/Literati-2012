<?php

/*
mysql_select_db("Manager_2012") or die("db not found");
*/
include("../include/constants.php");
mysql_connect(DB_SERVER,DB_USER,DB_PASS) or die("connectivity failed");

mysql_select_db(DB_NAME) or die("db not found");

?>