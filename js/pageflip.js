// Dimensions of the whole bookvar BOOK_WIDTH = 1500;var BOOK_HEIGHT = 460;// Dimensions of one page in the bookvar PAGE_WIDTH = 730;var PAGE_HEIGHT = 430;// Vertical spacing between the top edge of the book and the papersvar PAGE_Y = (BOOK_HEIGHT - PAGE_HEIGHT) / 2;// The canvas size equals to the book dimensions + this paddingvar CANVAS_PADDING = 100;var page = 0;var canvas = document.getElementById("pageflip-canvas");var context = canvas.getContext("2d");//console.log(context);var mouse = {    x: 0,    y: 0};var flips = [];var book = document.getElementById("book");// List of all the page elements in the DOMvar pages = book.getElementsByTagName("section");// It is used to manually flip the pagesexplicitMouseX = 0;// this is the mousedown state, used to dcide the value of pagemouseDownX = 0;// Organize the depth of our pages and create the flip definitionsfor (var i = 0, len = pages.length; i < len; i++) {    pages[i].style.zIndex = 3 * (len - i);    flips.push({        // Current progress of the flip (left -1 to right +1)        progress: 1,        // The target value towards which progress is always moving        target: 1,        // The page DOM element related to this flip        page: pages[i],        // True while the page is being dragged        dragging: false    });}// Resize the canvas to match the book size//canvas.width = BOOK_WIDTH + ( CANVAS_PADDING * 2 );canvas.width = BOOK_WIDTH + CANVAS_PADDING;canvas.height = BOOK_HEIGHT + (CANVAS_PADDING * 2);// Offset the canvas so that it's padding is evenly spread around the bookcanvas.style.top = -CANVAS_PADDING + "px";canvas.style.left = -CANVAS_PADDING + "px";// Render the page flip 60 times a secondsetInterval(render, 1000 / 60);document.addEventListener("mousemove", mouseMoveHandler, false);document.addEventListener("mousedown", mouseDownHandler, false);document.addEventListener("mouseup", mouseUpHandler, false);var mouse_over_out = document.getElementById("flip");var mouse_over_out_reverse = document.getElementById("reverse_flip");//mouse_over_out.addEventListener( "mouseover", mouseOverHandler, false);//mouse_over_out.addEventListener( "mouseout", mouseOutHandler, false); function mouseMoveHandler(event) {    // Offset mouse position so that the top of the book spine is 0,0    mouse.x = event.clientX - book.offsetLeft - (BOOK_WIDTH / 2);    mouse.y = event.clientY - book.offsetTop;    //console.log(book.offsetLeft);}function mouseDownHandler(event) {    console.log("mousedown");    // Make sure the mouse pointer is inside of the book    if (mouse.y > 0 && mouse.y < PAGE_HEIGHT) {        if (Math.abs(mouse.x) < PAGE_WIDTH) {            if (mouse.x < -370 && page - 1 >= 0) {                // We are on the left side, drag the previous page                mouseDownX = mouse.x;                flips[page - 1].dragging = true;                canvas.style.zIndex = 100;                event.preventDefault();            } else if (mouse.x > 680 && page + 1 < flips.length) {                // We are on the right side, drag the current page                mouseDownX = mouse.x;                flips[page].dragging = true;                canvas.style.zIndex = 100;                // Prevents the text selection                event.preventDefault();            }        }    }}function mouseUpHandler(event) {    console.log("mouseup");    for (var i = 0; i < flips.length; i++) {        // If this flip was being dragged, animate to its destination        if (flips[i].dragging) {            // Figure out which page we should navigate to            if (mouse.x < 0) {                flips[i].target = -1;                if (mouseDownX > 0) {                    setTimeout("page++;", 1300);                }            } else {                flips[i].target = 1;                if (mouseDownX < 0) {                    page--;                }            }        }        flips[i].dragging = false;        setTimeout("canvas.style.zIndex = 1;", 500);    }    var last = check_page();    if (last)        mouse_over_out.title = "End of book";}function check_page() {    if (page == (pages.length - 1))        return true;    else        return false;}function mouseOverHandler(event) {    event.preventDefault();    console.log("over");    flips[page].dragging = true;    canvas.style.zIndex = 100;    mouse_over_out.style.zIndex = -1;    mouse_over_out_reverse.style.zIndex = -1;}function mouseOutHandler(event) {    console.log("out");    flips[page].dragging = false;    canvas.style.zIndex = 1;}function render() {    // Reset all pixels in the canvas    context.clearRect(0, 0, canvas.width, canvas.height);    for (var i = 0, len = flips.length; i < len; i++) {        var flip = flips[i];        if (explicitMouseX)            xMouse = explicitMouseX;        else            xMouse = mouse.x;        if (flip.dragging) {            flip.target = Math.max(Math.min(xMouse / PAGE_WIDTH, 1), -1);        }        // Ease progress towards the target value         flip.progress += (flip.target - flip.progress) * 0.2;        // If the flip is being dragged or is somewhere in the middle of the book, render it        if (flip.dragging || Math.abs(flip.progress) < 0.999) {            if (page == 0)                hardFlip(flip);            else                softFlip(flip);        }    }}function nextPage() {    flips[page].dragging = true;    flips[page].target = -1;    canvas.style.zIndex = 100;    explicitMouseX = -380;    // after flip is over    flips[page].dragging = false;    explicitMouseX = 0;    setTimeout("canvas.style.zIndex = 1;", 700);    page++;}function previousPage() {    flips[--page].dragging = true;    flips[page].target = 1;    canvas.style.zIndex = 100;    explicitMouseX = 380;    flips[page].dragging = false;    explicitMouseX = 0;    setTimeout("canvas.style.zIndex = 1;", 700);}function firstPage() {    previousPage();    setTimeout("previousPage();", 1000);    setTimeout("previousPage();", 2000);    setTimeout("previousPage();", 3000);    setTimeout("previousPage();", 4000);    setTimeout("previousPage();", 5000);}function lastPage() {    nextPage();    setTimeout("nextPage();", 1000);    setTimeout("nextPage();", 2000);}function flip2pages() {    nextPage();    setTimeout("nextPage();", 1000);}function flip3pages() {    nextPage();    setTimeout("nextPage();", 1000);    setTimeout("nextPage();", 2000);}function flip4pages() {    nextPage();    setTimeout("nextPage();", 1000);    setTimeout("nextPage();", 2000);    setTimeout("nextPage();", 3000);}function flip5pages() {    nextPage();    setTimeout("nextPage();", 1000);    setTimeout("nextPage();", 2000);    setTimeout("nextPage();", 3000);    setTimeout("nextPage();", 4000);}function flip6pages() {    nextPage();    setTimeout("nextPage();", 1000);    setTimeout("nextPage();", 2000);    setTimeout("nextPage();", 3000);    setTimeout("nextPage();", 4000);    setTimeout("nextPage();", 5000);}function softFlip(flip) {    // Strength of the fold is strongest in the middle of the book    var strength = 1 - Math.abs(flip.progress);    // Width of the folded paper    var foldWidth = (PAGE_WIDTH * 0.5) * (1 - flip.progress);    // X position of the folded paper    var foldX = PAGE_WIDTH * flip.progress + foldWidth;    // How far the page should outdent vertically due to perspective    var verticalOutdent = 20 * strength;    // The maximum width of the left and right side shadows    var paperShadowWidth = (PAGE_WIDTH * 0.5) * Math.max(Math.min(1 - flip.progress, 0.5), 0);    var rightShadowWidth = (PAGE_WIDTH * 0.5) * Math.max(Math.min(strength, 0.5), 0);    var leftShadowWidth = (PAGE_WIDTH * 0.5) * Math.max(Math.min(strength, 0.5), 0);    // Change page element width to match the x position of the fold    flip.page.style.width = Math.max(foldX, 0) + "px";    context.save();    context.translate(CANVAS_PADDING + (BOOK_WIDTH / 2), PAGE_Y + CANVAS_PADDING);    // Draw a sharp shadow on the left side of the page    context.strokeStyle = 'rgba(0,0,0,' + (0.5 * strength) + ')';    context.lineWidth = 50 * strength;    context.beginPath();    context.moveTo(foldX - foldWidth, -verticalOutdent * 0.5);    context.lineTo(foldX - foldWidth, PAGE_HEIGHT + (verticalOutdent * 0.5));    context.stroke();    // Right side drop shadow    var rightShadowGradient = context.createLinearGradient(foldX, 0, foldX + rightShadowWidth, 0);    rightShadowGradient.addColorStop(0, 'rgba(0,0,0,' + (strength * 0.5) + ')');    rightShadowGradient.addColorStop(0.8, 'rgba(0,0,0,0.0)');    context.fillStyle = rightShadowGradient;    context.beginPath();    context.moveTo(foldX, 0);    context.lineTo(foldX + rightShadowWidth, 0);    context.lineTo(foldX + rightShadowWidth, PAGE_HEIGHT);    context.lineTo(foldX, PAGE_HEIGHT);    context.fill();    // Left side drop shadow    var leftShadowGradient = context.createLinearGradient(foldX - foldWidth - leftShadowWidth, 0, foldX - foldWidth, 0);    leftShadowGradient.addColorStop(0, 'rgba(0,0,0,0.0)');    leftShadowGradient.addColorStop(1, 'rgba(0,0,0,' + (strength * 0.15) + ')');    //	console.log(strength);    context.fillStyle = leftShadowGradient;    context.beginPath();    context.moveTo(foldX - foldWidth - leftShadowWidth, 0);    context.lineTo(foldX - foldWidth, 0);    context.lineTo(foldX - foldWidth, PAGE_HEIGHT);    context.lineTo(foldX - foldWidth - leftShadowWidth, PAGE_HEIGHT);    context.fill();    // Gradient applied to the folded paper (highlights & shadows)    var foldGradient = context.createLinearGradient(foldX - paperShadowWidth, 0, foldX, 0);    foldGradient.addColorStop(0.35, "#ffffff");    foldGradient.addColorStop(0.73, "#eeeeee");    foldGradient.addColorStop(0.9, "#fafafa");    foldGradient.addColorStop(1.0, "#e2e2e2");    context.fillStyle = foldGradient;    context.strokeStyle = 'rgba(0,0,0,0.06)';    context.lineWidth = 0.5;    // Draw the folded piece of paper    context.beginPath();    context.moveTo(foldX, 0);    context.lineTo(foldX, PAGE_HEIGHT);    context.quadraticCurveTo(foldX, PAGE_HEIGHT + (verticalOutdent * 2), foldX - foldWidth, PAGE_HEIGHT + verticalOutdent);    context.lineTo(foldX - foldWidth, -verticalOutdent);    context.quadraticCurveTo(foldX, -verticalOutdent * 2, foldX, 0);    context.fill();    context.stroke();    context.restore();}function hardFlip(flip) {    var foldWidth = (BOOK_WIDTH / 2) * (1 - flip.progress);    var foldX = (BOOK_WIDTH / 2) * flip.progress;    image = document.getElementById("front-cover");    image.width = Math.max(foldX, 0);    flip.page.style.width = Math.max(foldX, 0) + "px";    if (flip.progress < -0.90) {        var left_image = document.getElementById("left-page");        left_image.style.display = "block";    }    if (i > 1)    {        if (flip.progress < -0.90) {            var left_image = document.getElementById("previousbutton");            left_image.style.display = "block";        }    }    var x = PAGE_WIDTH * flip.progress;    var strength = 1 - flip.progress;    var centralizedFoldStrength = strength > 1 ? 2 - strength : strength;    var scaleX = flip.progress;    var scaleY = 0;    var scaleYFactor = 0.35;    var scaleYFinal = 1 + (1 * scaleYFactor) * centralizedFoldStrength;    var segments = Math.round(40 + (30 * (0.9999 - ((BOOK_WIDTH / 2 * scaleX)) / (BOOK_WIDTH / 2))));    segments = Math.min(BOOK_WIDTH / 2, segments);    var segmentWidth = BOOK_WIDTH / (2.0 * segments);    var height = BOOK_HEIGHT;    var width = BOOK_WIDTH / 2;    var thickness = 10 * centralizedFoldStrength;    var hoffset = flip.progress <= 0.05 ? 1 + (1 - (Math.max(flip.progress, 0) / 0.05)) * -thickness : -1;    var voffset = {        left: Math.abs(Math.min(flip.progress, 0)) * 2,        right: flip.progress * 2    };    var img = new Image(750, 460);    if (flip.progress > 0)        img.src = "book_cover.JPG";    else        img.src = "left-image.png";    context.save();    context.translate(CANVAS_PADDING + (BOOK_WIDTH / 2), CANVAS_PADDING);    if (Math.abs(scaleX) < 0.99) {        var ext = ((height - (height * scaleYFinal)) / 2);        context.fillStyle = "#5873a0";        context.beginPath();        context.moveTo(0, -0.5);        context.lineTo((width * scaleX) - (2 * scaleX), ext - 0.5);        context.lineTo((width * scaleX) + (thickness + hoffset), ext + voffset.right);        context.lineTo((width * scaleX) + (thickness + hoffset), ext + (height * scaleYFinal) - voffset.right);        context.lineTo((width * scaleX) - (2 * scaleX), ext + (height * scaleYFinal) + 0.5);        context.lineTo(0, height + 0.5);        context.closePath();        context.fill();    }    for (var i = 0; i < segments; i++) {        scaleY = 1 + (i / segments) * scaleYFactor * centralizedFoldStrength;        var y = (height - (height * scaleY)) / 2;        var sw = i >= segments - 1 ? segmentWidth : segmentWidth + 3;        context.save();        //context.translate( CANVAS_PADDING + ( BOOK_WIDTH / 2 ), PAGE_Y + CANVAS_PADDING );        context.translate(0, y);        context.transform(scaleX, 0, 0, scaleY, 0, 0);        while ((i * segmentWidth) + sw > BOOK_WIDTH / 2) {            sw *= 0.9999;        }        context.drawImage(img, i * segmentWidth, 0, sw, height, i * segmentWidth, 0, sw, height);        context.restore();    }    var intensity = Math.max(Math.abs(centralizedFoldStrength), 0.9);    var ps = {        top: {            x: (width * scaleX) + hoffset,            y: (height - (height * scaleY)) / 2        },        bottom: {            x: (width * scaleX) + hoffset,            y: ((height - (height * scaleY)) / 2) + height * scaleY        }    };    context.fillStyle = "#5873a0";    context.beginPath();    context.moveTo(ps.top.x, ps.top.y + voffset.left);    context.lineTo(ps.top.x + thickness, ps.top.y + voffset.right);    context.lineTo(ps.bottom.x + thickness, ps.bottom.y - voffset.right);    context.lineTo(ps.bottom.x, ps.bottom.y - voffset.left);    context.closePath();    context.fill();    context.restore();}