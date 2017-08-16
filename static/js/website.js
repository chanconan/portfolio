$(document).ready(function(){
    // Initialize parallax
    $('.parallax').parallax();
    // Navbar links will scroll webpage to the correct div
    $('#navlink-aboutMe').click(function(){
        $('html, body').animate({
            scrollTop: $("#aboutMe").offset().top - 80
        }, 2000);
    });
    $('#navlink-skills').click(function(){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top - 80
        }, 2000);
    });
    $('#navlink-projects').click(function(){
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 80
        }, 2000);
    });
    $('#navlink-contact').click(function(){
        $('html, body').animate({
            scrollTop: $("#contactMe").offset().top - 80
        }, 2000);
    });
});
