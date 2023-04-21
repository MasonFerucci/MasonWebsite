$("#home").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageOne").offset().top -30
    }, 1000);
});

$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageTwo").offset().top -30
    }, 1000);
});

$("#bio").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageThree").offset().top -30
    }, 1000);
});

$("#skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageFour").offset().top -30
    }, 1000);
});

$("#cdSite").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageFive").offset().top -30
    }, 1000);
});

$("#fySite").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageSix").offset().top -30
    }, 1000);
});

$("#cfSite").click(function() {
    $('html, body').animate({
        scrollTop: $("#pageSeven").offset().top -30
    }, 1000);
});
// Sections = ["one", "two"];

// forEach ( sections ) {
//     setFucntion ( sections );
// }

// setFucntion = function ( argument ) {
//         $('html, body').animate({
//         scrollTop: $( "#page" + argument).offset().top -30
//     }, 1000);

// }



// $("#contact").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#pageFive").offset().top
//     }, 1000);
// });

