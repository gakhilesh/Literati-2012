dateFuture = new Date(2011, 11, 12, 0, 00, 00);function GetCount() {    dateNow = new Date(); //grab current date    amount = dateFuture.getTime() - dateNow.getTime(); //calc milliseconds between dates    delete dateNow;    // time is already past    if (amount < 0) {        document.getElementById('countbox').innerHTML = "Now!";    }    // date is still good    else {        days = 0;        hours = 0;        mins = 0;        secs = 0;        out = "";        amount = Math.floor(amount / 1000); //kill the "milliseconds" so just secs        days = Math.floor(amount / 86400); //days        amount = amount % 86400;        hours = Math.floor(amount / 3600); //hours        amount = amount % 3600;        mins = Math.floor(amount / 60); //minutes        amount = amount % 60;        secs = Math.floor(amount); //seconds        out += "<img src='./images/c" + Math.floor(days / 10) + ".png'>";        out += "<img src='./images/c" + days % 10 + ".png'>";        if (days > 1)        ;        else            out += "day";        out += "<img src=./images/colon.png>";        out += "<img src='./images/c" + Math.floor(hours / 10) + ".png'>";        out += "<img src='./images/c" + hours % 10 + ".png'>";        if (hours > 1)        ;        else        ;        out += "<img src=./images/colon.png>";        out += "<img src='./images/c" + Math.floor(mins / 10) + ".png'>";        out += "<img src='./images/c" + mins % 10 + ".png'>";        if (mins > 1)        ;        else        ;        out += "<img src=./images/colon.png>";        out += "<img src='./images/c" + Math.floor(secs / 10) + ".png'>";        out += "<img src='./images/c" + secs % 10 + ".png'>";        if (secs > 1)        ;        else        ;        document.getElementById('countbox').innerHTML = out;        setTimeout("GetCount()", 1000);    }}window.onload = function () {    GetCount();} //call when everything has loaded