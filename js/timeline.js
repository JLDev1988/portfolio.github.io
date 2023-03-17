 
$(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
    $("#line-progress").css("width", "0%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
    $("#line-progress").css("width", "16.665%");
    $(".two").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
    $("#line-progress").css("width", "33.33%");
    $(".three").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
    $("#line-progress").css("width", "49.995%");
    $(".four").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
    $("#line-progress").css("width", "66.66%");
    $(".five").addClass("active").siblings().removeClass("active");
});
$(".step06").click( function() {
    $("#line-progress").css("width", "83.325%");
    $(".six").addClass("active").siblings().removeClass("active");
});
$(".step07").click( function() {
    $("#line-progress").css("width", "99.99%");
    $(".seven").addClass("active").siblings().removeClass("active");
});
