previousWsName = 0;previousXML = 0;function ws_details(str){	if(previousXML)		previousXML.abort();	defineWsDivs();	wsNavDiv.style.display = "none";	wsNameDiv.style.display = "none";		navDiv.innerHTML ="<br><br><br><br> <br> <pre>                    loading...</pre>";		//css toggling	if(previousWsName)	{		previousWsName.style.fontWeight = "normal";		previousWsName.style.border = "none";		}	wsListNameDiv = document.getElementById(str);	wsListNameDiv.style.borderLeft = "medium inset";	wsListNameDiv.style.borderBottom = "medium inset";	wsListNameDiv.style.fontWeight = "900";	previousWsName = wsListNameDiv;	if(str=="")		return;
	var xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(xml.readyState==4 && xml.status==200)
		{
			var response = xml.responseText;
			details = JSON.parse(response);
			var heading = document.getElementById("wsName");
			heading.innerHTML = " " + details.name;
			document.getElementById("wsNavDetails").innerHTML = " ";			wsNavDiv.style.display = "block";			wsNameDiv.style.display = "block";			wsHomeDiv.style.display = "block";			wsContentsDiv.style.display = "block";			wsContactsDiv.style.display = "block";
			showWsDescription();
		}
	}
	xml.open("GET","php/workshops.php?event="+str,true);
	xml.send();	previousXML = xml;
}

function defineWsDivs(){
	wsNameDiv=document.getElementById("wsName");
	wsHomeDiv=document.getElementById("wshome");
	wsContentsDiv=document.getElementById("wscontents");
	wsContactsDiv=document.getElementById("wscontacts");
	navDiv=document.getElementById("wsNavDetails");
	wsNavDiv = document.getElementById("wsNav");
//wsHomeDiv = document.getElementById("description");
//wsContentsDiv = document.getElementById("rules");
//wsContactsDiv = document.getElementById("otherDetails");
//navDiv = document.getElementById("navDetails");
//eventNavDiv = document.getElementById("eventNav");
//eventNameDiv = document.getElementById("eventName");
}
function showWsDescription(){
	wsHomeDiv.style.border = "medium outset";	wsHomeDiv.style.borderBottom = "none";
	wsContentsDiv.style.border = "thin solid";
	wsContactsDiv.style.border = "thin solid";
	navDiv.innerHTML = details.home;
	
}
function showWsContents(){
	wsHomeDiv.style.border= "thin solid";
	wsContentsDiv.style.border = "medium outset";	wsContentsDiv.style.borderBottom = "none";
	wsContactsDiv.style.border = "thin solid";
	navDiv.innerHTML = details.contents;
}
function showWsContacts() {
	wsHomeDiv.style.border= "thin solid";
	wsContentsDiv.style.border = "thin solid";
	wsContactsDiv.style.border = "medium outset";	wsContactsDiv.style.borderBottom = "none";
	navDiv.innerHTML = details.contacts;
}