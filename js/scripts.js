// JavaScript Document
// integrated part of index.html, seprated for ease of management
function showTarget(e) {

    target = e.target;

    //console.log(target);

}



index = {
    "index": 1,

    "about_us": 2,

    events: 3,

    contact_us: 4,

    sponsors: 5,

    web_team: 6,

    workshops: 7

};

function moveFromFirstPage(id) {

    if (page == 0) {

        nextPage();

        setTimeout(function () {
            moveToPage(id)
        }, 1200);

    } else moveToPage(id);

}

function moveToPage(id) {

    if (page < id) { // we are moving in forward direction

        console.log(page);

        nextPage();

        while (page < id) {

            flips[page].page.style.width = 0.4 + "px";

            flips[page].target = -1;

            flips[page].progress = -0.9999999999999998;

            page++;

        }

    } else if (page > id) { // we are moving in backward direction

        previousPage();

        if (page == id) // there was a difference of 1 b/w page and id

            return;

        page--;

        while (page >= id) {

            flips[page].page.style.width = 729.63 + "px";

            flips[page].target = 1;

            flips[page].progress = 0.9999999999999998;

            if (page == id) // no more need to decrement page, we are already on the current page

                break;

            else

                page--;

        }

    }

}

/*keyboard navigation*/

window.onkeydown = keydownControl;



function keydownControl(e) {



    if (e.keyCode == 37) {



        previousPage();



    } else if (e.keyCode == 39) {



        nextPage();



    }



}



/* fancybox */



$(document).ready(function () {

    $("a#signIn").fancybox({

        'width': '38%',

        'height': '75%',

        'autoScale': false,

        'transitionIn': 'none',

        'transitionOut': 'none',

        'type': 'iframe'

    });
    $("a#webteam").fancybox({

        'width': '38%',

        'height': 370,

        'autoScale': false,

        'transitionIn': 'none',

        'transitionOut': 'none',

        'type': 'iframe'

    });

    $("a#logout").fancybox({

        'width': '38%',

        'height': '75%',

        'autoScale': false,

        'transitionIn': 'none',

        'transitionOut': 'none',

        'type': 'iframe'

    });



    $("a#registeration").fancybox({

        'width': '70%',

        'height': '75%',

        'autoScale': false,

        'transitionIn': 'none',

        'transitionOut': 'none',

        'type': 'iframe'

    });

    $("a#example2").click(function (e) {



        $.fancybox({



            'padding': 0,



            'type': 'swf',



            'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),



            'swf': {
                'wmode': 'transparent',
                'allowfullscreen': 'true'
            }



        });



        e.preventDefault();



    });



    //$("body").mousedown(function(){

    //    getUserName();	  

    //});



});