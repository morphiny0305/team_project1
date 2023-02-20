// contents 페이지 스크롤 내리면 투명해지기
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150){
            $(".contents-head").css({"opacity" : "0"})
        }
        else {
            $(".contents-head").css({"opacity" : "1"})
        };
        if ($(this).scrollTop() > 250){
            $(".fixed-bar").css({"background" : "#000"})
        }
        else {
            $(".fixed-bar").css({"background" : "none"})
        };
    });
});

// 서브 페이지 스크롤 내리면 투명해지기
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 70){
            $(".sub-bg").css({"opacity" : "0.2"})
        }
        else {
            $(".sub-bg").css({"opacity" : "1"})
        };
        if ($(this).scrollTop() > 70){
            $(".fixed-bar").css({"background" : "#000"})
        }
        else {
            $(".fixed-bar").css({"background" : "none"})
        };
    });
});