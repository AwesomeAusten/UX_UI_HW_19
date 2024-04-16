$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition =$(this).scrollTop();

        var scrollStart = 4000;
        var scrollEnd = 7000;

        if(scrollPosition >= scrollStart && scrollPosition <= scrollEnd) {
            $('#resCat').fadeIn(1000);
            $('#resCat').animate({left:0}, {duration: 1000, queue: false});
            $('#topLeftSq').fadeIn(1000);
            $('#topLeftSq').animate({left:0}, {duration: 1000, queue: false});
            $('#whiteEllipse').fadeIn(1000);
            $('#whiteEllipse').animate({left:0}, {duration: 1000, queue: false});
            $('#resumeHeader').fadeIn(2000);
            $('#resumeHeader').animate({right:0}, {duration: 1000, queue: false});
            $('.resumeHeader').fadeIn(2000);
            $('.resumeHeader').animate({right:0}, {duration: 1000, queue: false});
        } else {
            $('#resCat').fadeOut(500);
            $('#resCat').animate({left:-200}, {duration: 1000, queue: false});
            $('#topLeftSq').fadeOut(500);
            $('#topLeftSq').animate({left:-300}, {duration: 1000, queue: false});
            $('#whiteEllipse').fadeOut(500);
            $('#whiteEllipse').animate({left:-200}, {duration: 1000, queue: false});
            $('#resumeHeader').fadeOut(2000);
            $('#resumeHeader').animate({right:-200}, {duration: 1000, queue: false});
            $('.resumeHeader').fadeOut(2000);
            $('.resumeHeader').animate({right:-200}, {duration: 1000, queue: false});
        }
    });
});
