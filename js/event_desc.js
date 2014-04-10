previousXmlRequest = 0;
previousEventDiv = 0;

function event_details(str) {
    if (previousXmlRequest)
        previousXmlRequest.abort();
    defineDiv();
    document.getElementById("navDetails").innerHTML = "<br> <br> <pre>                           loading...</pre>";
    document.getElementById("eventNav").style.display = "none";
    document.getElementById("eventName").style.display = "none";

    // css toggling
    if (previousEventDiv) {
        previousEventDiv.style.border = "none";
        previousEventDiv.style.fontWeight = "normal";
    }
    eventDiv = document.getElementById(str);
    eventDiv.style.fontWeight = "900";
    eventDiv.style.borderLeft = "medium inset";
    eventDiv.style.borderBottom = "medium inset";
    previousEventDiv = eventDiv;
    if (str == "")
        return;

    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            var response = xml.responseText;
            details = JSON.parse(response);
            var heading = document.getElementById("eventName");
            heading.innerHTML = details.name;
            document.getElementById("eventNav").style.display = "block";
            heading.style.display = "block";
            //document.getElementById("navDetails").innerHTML = " ";
            defineDiv();
            showNav();
            showEventDescription();
            registerUser(str);
        }
    }
    xml.open("GET", "php/event_details.php?event=" + str, true);
    xml.send();
    previousXmlRequest = xml;
}

function showNav() {
    descDiv.style.display = "inline";
    navDiv.style.display = "inline";
    contactsDiv.style.display = "inline";
    rulesDiv.style.display = "inline";
    eventNavDiv.style.display = "inline";
    eventNameDiv.style.display = "inline";
}

function defineDiv() {
    descDiv = document.getElementById("description");
    rulesDiv = document.getElementById("rules");



    contactsDiv = document.getElementById("contacts");



    navDiv = document.getElementById("navDetails");



    eventNavDiv = document.getElementById("eventNav");



    eventNameDiv = document.getElementById("eventName");



}



function showEventDescription() {



    defineDiv();



    descDiv.style.border = "medium outset";
    descDiv.style.borderBottom = "none";



    rulesDiv.style.border = "thin solid";



    contactsDiv.style.border = "thin solid";



    navDiv.innerHTML = details.desc;




}



function showEventRules() {



    defineDiv();



    descDiv.style.border = "thin solid";



    rulesDiv.style.border = "medium outset";
    rulesDiv.style.borderBottom = "none";



    contactsDiv.style.border = "thin solid";



    navDiv.innerHTML = details.rules;



}




function showContacts() {



    defineDiv();



    descDiv.style.border = "thin solid";



    rulesDiv.style.border = "thin solid";



    contactsDiv.style.border = "medium outset";
    contactsDiv.style.borderBottom = "none";



    navDiv.innerHTML = details.contacts;



}