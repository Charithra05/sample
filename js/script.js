$(document).ready(function(){
    $('section-1__ani').waypoint(function(direction){
        $('section-1__ani').addClass('animate__animated animate__fadeIn');

    },{
        offset:'50'
    })


    $(".header").click(function(){
        $(this).addClass(".scroll__content");
    })


});

