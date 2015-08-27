var default_content = "";
$(document).ready(function() {
    checkURL();
    $('ul li a').click(function(e) {
        checkURL(this.hash);
    });
    //filling in the default content
    default_content = $('#pageContent').html();
    setInterval("checkURL()", 250);
    
    $('#pageContent').find('.iam').delay(2500).animate({
        'opacity': '0'
    }, {
        duration: 1500,
        easing: 'easeInOutCubic',
        queue: true
    });
    setTimeout(function() {
        $('.iam').css('display', 'none');
    }, 5000);
        setTimeout(function() {
        $('#mobilenav').css('visibility', 'visible');
    }, 1000);





});
var lasturl = "";

function checkURL(hash) {
        if (!hash) hash = window.location.hash;
        if (hash != lasturl) {
            lasturl = hash;
            // FIX - if we've used the history buttons to return to the homepage,
            // fill the pageContent with the default_content
            if (hash == "") $('#pageContent').html(default_content);
            else loadPage(hash);
        }
    }



    
    /* Every time the window is scrolled ... */
$(window).scroll(function() {
    /* Check the location of each desired element */
    $('.appearonscroll').each(function(i) {
        var bottom_of_object = $(this).position().top + $(this)
            .outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window)
            .height();
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
            $(this).animate({
                'opacity': '1'
            }, 300);
        }
    });
});

function loadPage(url) {
    url = url.replace('#page', '');
    $('#loading').css('visibility', 'visible');
    $.ajax({
        type: "POST",
        url: "load_page.php",
        data: 'page=' + url,
        dataType: "html",
        success: function(msg) {
            if (parseInt(msg) != 0) {
                $('#pageContent').html(msg);
                $('#loading').css('visibility', 'hidden');
            }
        }
    });
}