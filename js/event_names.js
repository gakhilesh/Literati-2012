flag = 0;previousXML = 0;
function display_events(str)
{	if(previousXML)		previousXML.abort();		document.getElementById("eventNav").style.display="none";	document.getElementById("eventName").style.display="none";	document.getElementById("navDetails").innerHTML = "";			eventListDiv = document.getElementById("eventList");	eventListDiv.innerHTML =  "<pre>loading...</pre>";		//css toggling	if(flag){		previousEventCategory.style.fontWeight = "normal";			previousEventCategory.style.border = "none";		}	eventCategoryDiv = document.getElementById(str);	eventCategoryDiv.style.fontWeight = "900";	eventCategoryDiv.style.fontSize="20";	eventCategoryDiv.style.borderBottom="thin dashed";	//eventCategoryDiv.style.borderRight="medium ridge";	//eventCategoryDiv.style.borderLeft="medium ridge";	previousEventCategory = eventCategoryDiv;	flag = 1;				if(str=="")	{		return;	}	var xml=new XMLHttpRequest();
	xml.onreadystatechange=function()	{		if(xml.readyState==4 && xml.status==200)		{			eventListDiv.innerHTML = xml.responseText;			document.getElementById("navDetails").innerHTML = "Select Event from left navigation menu";				}	}	xml.open("GET","php/events.php?cat="+str,true);	xml.send();	previousXML = xml;}