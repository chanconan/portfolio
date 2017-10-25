$(document).ready(function(){
    // Initialize parallax
    $('.parallax').parallax();
    // Navbar links will scroll webpage to the correct div
    $('#home').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
    })
    $('#navlink-aboutMe').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top - 50
        }, 1500);
    });
    $('#navlink-skills').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - 80
        }, 1500);
    });
    $('#navlink-projects').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 150
        }, 1500);
    });
    $('#navlink-contact').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contactMe").offset().top - 80
        }, 1500);
    });
});
