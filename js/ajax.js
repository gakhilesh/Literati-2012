// JavaScript Document
function event_details(str) {
    if (str == "") {
        return;
    } else {
        //document.write(str);
    }
    if (window.XMLHttpRequest) {
        var xml = new XMLHttpRequest();
    } else {
        xml = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            var response = xml.responseText;
            details = JSON.parse(response);
            var heading = document.getElementById("eventName");
            heading.innerHTML = " " + details.name;
            document.getElementById("navDetails").innerHTML = " ";
            defineDiv();
            checkRegister(details.name);
            showNav();
            descDiv.click();
        }
    }
    xml.open("GET", "php/event_details.php?event=" + str, true);
    xml.send();
}

function defineDiv() {
    descDiv = document.getElementById("description");
    rulesDiv = document.getElementById("rules");
    otherDiv = document.getElementById("otherDetails");
    navDiv = document.getElementById("navDetails");
    eventNavDiv = document.getElementById("eventNav");
    eventNameDiv = document.getElementById("eventName");
    eventRegisterDiv = document.getElementById("register");
}

function showNav() {
    descDiv.style.display = "inline";
    navDiv.style.display = "inline";
    otherDiv.style.display = "inline";
    rulesDiv.style.display = "inline";
    eventNavDiv.style.display = "inline";
    eventNameDiv.style.display = "inline";
    eventRegisterDiv.style.display = "inline";
}

function showEventDescription() {
    defineDiv();
    descDiv.style.border = "medium outset";
    rulesDiv.style.border = "thin solid";
    otherDiv.style.border = "thin solid";
    navDiv.innerHTML = details.desc;
}

function showEventRules() {
    defineDiv();
    descDiv.style.border = "thin solid";
    rulesDiv.style.border = "medium outset";
    otherDiv.style.border = "thin solid";
    navDiv.innerHTML = details.rules;
}

function showEventOherDetails() {
    defineDiv();
    descDiv.style.border = "thin solid";
    rulesDiv.style.border = "thin solid";
    otherDiv.style.border = "medium outset";
    navDiv.innerHTML = details.other;
}


// JavaScript Document
function registerUser(str) {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("registration").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "php/registration.php?q=" + str, true);
    xmlhttp.send();
}


// JavaScript Document

$(document).ready(function () {

    $("div#eventblock").click(function () {

        $("#eventList").html("loading...");
    });
});


// JavaScript Document
function getUserName() {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            jsonResponse = xmlhttp.responseText;
            console.log(jsonResponse);
            response = JSON.parse(jsonResponse);
            document.getElementById("getUserName").innerHTML = response.name;
            if (response.logged) {
                document.getElementById("LogIn").style.display = "none";
                document.getElementById("log-out").style.display = "inline";
            } else {
                document.getElementById("log-out").style.display = "none";
                document.getElementById("LogIn").style.display = "inline";
            }
        }
    }
    xmlhttp.open("GET", "php/getUserName.php", true);
    xmlhttp.send();
}

// JavaScript Document
function checkRegister(str) {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("register").innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", "php/registerEvent.php?q=" + str, true);
    xmlhttp.send();
}


// JavaScript Document
function display_events(str) {
    if (str == "") {
        return;
    } else {
        //document.write(str);
    }
    if (window.XMLHttpRequest) {
        var xml = new XMLHttpRequest();
    } else {
        xml = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xml.onreadystatechange = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            document.getElementById("eventList").innerHTML = xml.responseText;
            document.getElementById("eventNav").style.display = "none";
            document.getElementById("eventName").style.display = "none";
            document.getElementById("register").style.display = "none";
            document.getElementById("navDetails").innerHTML = "Select Event from left navigation menu";
        }
    }
    xml.open("GET", "php/events.php?cat=" + str, true);
    xml.send();
}