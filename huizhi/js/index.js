/**
 * Created by CesyZhao on 2016/10/16.
 */
$(function(){
    $(".nav-tabs a").off("click");
    $(".nav-tabs a").on("click",function () {
        $(".nav-tabs li").removeClass("active");
        $(this).parent().addClass("active");
           if($(this).attr("class") == "knowledge"){
                $(".con_box").load("knowlege.html");
           };
        if($(this).attr("class") == "menu"){
            $(".con_box").load("menu.html");
        };
    })
    $(".nav-tabs a:contains('课程目录')").trigger("click");

});