
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $('.header').addClass('bg-dark');
    }
    else {
        $('.header').removeClass('bg-dark');
    }
})

$(document).ready(function () {
    $('select').niceSelect();
});


$('.portfolio_grid').masonry({
    // options
    itemSelector: '.grid-item',
    horizontalOrder: true
});


$('.portfolio_grid').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    },
    // other options
});