$(document).ready(function() {
    setTimeout(function(){
        window.scrollTo(0, 1);
    }, 0);

    // Menu fade thing.
    $('#menu li').click(function() {
        if(!$(this).hasClass('active')) {
            $('#menu li.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    // Stack menu
    $('.openstack').click(function(e) {
        e.preventDefault();
        alert('hi');
    });
});