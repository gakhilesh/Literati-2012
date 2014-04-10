
// JavaScript Document
function registerUser(str)
{
	if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("registration").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","php/registerEvent.php?q="+str,true);
xmlhttp.send();
}

// JavaScript Document
function registration(str)
{
	if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("registration").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","php/registration.php?q="+str,true);
xmlhttp.send();
}
