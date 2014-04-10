previousWsName = 0;
	var xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(xml.readyState==4 && xml.status==200)
		{
			var response = xml.responseText;
			details = JSON.parse(response);
			var heading = document.getElementById("wsName");
			heading.innerHTML = " " + details.name;
			document.getElementById("wsNavDetails").innerHTML = " ";
			showWsDescription();
		}
	}
	xml.open("GET","php/workshops.php?event="+str,true);
	xml.send();
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
	wsHomeDiv.style.border = "medium outset";
	wsContentsDiv.style.border = "thin solid";
	wsContactsDiv.style.border = "thin solid";
	navDiv.innerHTML = details.home;
	
}
function showWsContents(){
	wsHomeDiv.style.border= "thin solid";
	wsContentsDiv.style.border = "medium outset";
	wsContactsDiv.style.border = "thin solid";
	navDiv.innerHTML = details.contents;
}
function showWsContacts() {
	wsHomeDiv.style.border= "thin solid";
	wsContentsDiv.style.border = "thin solid";
	wsContactsDiv.style.border = "medium outset";
	navDiv.innerHTML = details.contacts;
}