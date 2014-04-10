	 flag2011 = 0;
	 flag2010 = 0;

	previousAjax = 0;
	 f2012 = 1;
	 f2011 = 0;
	 f2010 = 0;
function showsponsorsimages(str)
{
	if(previousAjax)
		previousAjax.abort();
	sponsors = document.getElementById("sponsorPics");
	if(f2012 == 1){
		if(str == '2012')
			return;
		document.getElementById("Data2012").innerHTML = sponsors.innerHTML;
	}
	else if(f2011 == 1) {
			if(str == '2011')
				return;
		document.getElementById("Data2011").innerHTML = sponsors.innerHTML;
	}
	else if(f2010 == 1){
			if(str == '2010')
				return;
		document.getElementById("Data2010").innerHTML = sponsors.innerHTML;
	}
	sponsors.innerHTML = "<br><br><br><pre>                         loading...</pre>";
	
	switch(str)
	{
		case '2011': 
			f2011 = 1;
			f2012 = 0;
			f2010 = 0;
		
		document.getElementById('2011').style.border="medium outset";
		document.getElementById('2011').style.borderBottom="hidden";
		document.getElementById('2010').style.border="thin solid";
		document.getElementById('2012').style.border="thin solid";
	if(flag2011 == 0)
		callAjax('2011');
	else
	{
		sponsors.innerHTML = document.getElementById("Data2011").innerHTML;
	}
	break;
	case '2010':
		f2011 = 0;
		f2012 = 0;
		f2010 = 1;
	document.getElementById('2010').style.border="medium outset";
	document.getElementById('2010').style.borderBottom="hidden";
		document.getElementById('2011').style.border="thin solid";
		document.getElementById('2012').style.border="thin solid";
	
	if(flag2010 == 0)
		callAjax('2010');
	else
	{
			 sponsors.innerHTML = document.getElementById("Data2010").innerHTML;
	}
	break;
	case '2012':
		f2011 = 0;
		f2012 = 1;
		f2010 = 0;
	document.getElementById('2012').style.border="medium outset";
	document.getElementById('2012').style.borderBottom="hidden";
	document.getElementById('2011').style.border="thin solid";
	document.getElementById('2010').style.border="thin solid";
	
	sponsors.innerHTML = document.getElementById("Data2012").innerHTML;
	
	break;
	}
}

function callAjax(year)
{
	var xml=new XMLHttpRequest();
	xml.onreadystatechange=function()
	{
		if(xml.readyState==4 && xml.status==200)
		{
			if(year=='2010')
				flag2010 = 1;
			else
				flag2011 = 1;
			
			sponsors.innerHTML = xml.responseText;
		}
	}
	xml.open("GET","php/sponsors.php?year="+year,true);
	xml.send();
	previousAjax = xml;
}