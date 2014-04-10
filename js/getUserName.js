
// JavaScript Document
function getUserName()
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
jsonResponse=xmlhttp.responseText;
	console.log(jsonResponse);
	response = JSON.parse(jsonResponse);
    document.getElementById("getUserName").innerHTML = response.name;
	if(response.logged){
		document.getElementById("LogIn").style.display="none";
		document.getElementById("log-out").style.display="inline";
	}
	else{
		document.getElementById("log-out").style.display="none";
		document.getElementById("LogIn").style.display="inline";
	}
    }
  }
xmlhttp.open("GET","php/getUserName.php",true);
xmlhttp.send();
}
