/**
 * Created by CesyZhao on 2016/11/2.
 */
$(function(){
//   register message
    $('#msgButton').on('click', function () {
        var $btn = $(this).button('loading');
        var sec = 61;
        $('#msgButton').data('loading-text', '短信发送中...');
        var timer = setInterval(function(){
            $('#msgButton').text(sec-1+"s后可重发");
            sec-=1;
        },1000);
        setTimeout(function(){
            $btn.button("reset");
            clearInterval(timer);
        },61000);
    });
// login tabs
    $(".tabs a").on("click",function(event){
        $(".border div").eq($(this).parent().index()).addClass("active").siblings().removeClass("active");
        $(".login-form").eq($(this).parent().index()).addClass("active").siblings().removeClass("active");
    });
//prevent the default when click the checkbox
    $(".checkLabel").on("click",function(event){
        event.stopPropagation();
    });
//show the black bg
    $(".choice a").on("click",function(e){
       if($(this).siblings().css("display") == "block"){
            $(".bg").fadeOut();
       }else{
           $(".bg").fadeIn();
       }
    })
});