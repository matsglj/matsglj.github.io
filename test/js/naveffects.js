$(document).ready(function() {
    //desktop navbar

    $(".desktopcontactmenu ul").hide();
    $(".desktopcontactmenu").click(function() {
        $(this).find("ul").slideToggle('1000', "easeInOutQuart");
        return false;

    });
    $("#desktopcontactlist a").click(function(e) {
        e.stopPropagation();
    });







    //mobile navbar
    $(".openonrotator li").hide();




    var angle = 0
    var value = 0

    $("#rotatehalf").click(function() {
        $(".openonrotator").find("li").slideToggle('1000', "easeInOutQuart");
        $("#mobileprojectlist li").hide();
        $(".mobilecontactmenu ul").hide();

        value +=180;
        $("#rotatehalf").rotate({ angle:angle,animateTo:value,easing: $.easing.easeInOutExpo});
        angle +=180;


        return false;
    });




    $("#mobileprojectmenuopener span").click(function() {
        $(".mobileprojectmenu").find(".projectline").slideToggle('1000', "easeInOutQuart");
        return false;
    });



    $(".projectline a").click(function() {
        $(".openonrotator").find("li").slideToggle('1000', "easeInOutQuart");
        $(".openonrotator li").hide();
        value +=180;
        $("#rotatehalf").rotate({ angle:angle,animateTo:value,easing: $.easing.easeInOutExpo});
        angle +=180;
        return true;
    });


    $(".aboutlink").click(function() {
        $(".openonrotator").find("li").slideToggle('1000', "easeInOutQuart");
        $(".openonrotator li").hide();
        value +=180;
        $("#rotatehalf").rotate({ angle:angle,animateTo:value,easing: $.easing.easeInOutExpo});
        angle +=180;
        return true;
    });



    $(".mobilecontactmenu").click(function() {
        $(this).find("ul").slideToggle('1000', "easeInOutQuart");
        return true;
    });







    $(function() {
        // 2 clicking on a project
        $('#desktopmainmenu #navigation li').click(function() {
            // UNhighlights other projects
            $('#desktopmainmenu .active').addClass(
                'inactive');
            $('#desktopmainmenu .active').removeClass(
                'active'); // remove the class from the currently selected
            // highlights main project title
            $('#desktopmainmenu .inactivemain').addClass(
                'activemain');
            $('#desktopmainmenu .inactivemain').removeClass(
                'inactivemain'); // remove the class from the currently selected
            // unhighlights other titles
            $('#desktopmainmenu .activetitle').addClass(
                'inactivetitle');
            $('#desktopmainmenu .activetitle').removeClass(
                'activetitle'); // remove the class from the currently selected
            // and highlights title
            $(this).addClass('active'); // add the class to the newly clicked link
            $(this).removeClass('inactive');
        });
    });
$(function() {
        // 2 clicking on a project
        $('#desktopmainmenu #title a').click(function() {
            // UNhighlights other projects
            $('#desktopmainmenu .active').addClass(
                'inactive');
            $('#desktopmainmenu .active').removeClass(
                'active'); // remove the class from the currently selected
            // UNhighlights main project title
            $('#desktopmainmenu .activemain').addClass(
                'inactivemain');
            $('#desktopmainmenu .activemain').removeClass(
                'activemain'); // remove the class from the currently selected
            // UNhighlights other titles
            $('#desktopmainmenu .activetitle').addClass(
                'inactivetitle');
            $('#desktopmainmenu .activetitle').removeClass(
                'activetitle'); // remove the class from the currently selected
            // and highlights title
            $(this).addClass('activetitle'); // add the class to the newly clicked link
            $(this).removeClass('inactivetitle');
        });
    });
});