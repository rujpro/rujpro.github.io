/*!
 * crj Blog v1.0.0 (http://rujpro.github.io)
 * Copyright 2018 crj luckyerchen@gmail.com
 */
//<!-- async load function -->
function async(u, c) {
    var d = document, t = 'script',
        o = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    o.src = u;
    if (c) { o.addEventListener('load', function (e) { c(null, e); }, false); }
    s.parentNode.insertBefore(o, s);
  }

// <!-- canvas + h5 + webgl 水波纹效果 -->
$(document).ready(function () {
    try {
        $('.intro-header,.home').ripples({
            resolution: 512,
            dropRadius: 20, //px
            perturbance: 0.04,
        });
    } catch (e) {
        $('.error').show().text(e);
    }
});

// hover-3D
// var picBox = document.getElementById("postbox")
// var img = document.getElementById("post-preview")
// picBox.addEventListener('mousemove', rotate, false);
// picBox.addEventListener('mouseout', outBox, false);
// function rotate(e){
//     var baseX = e.pageX - this.offsetWidth/2 - this.offsetLeft,
//         baseY = e.pageY - this.offsetHeight/2 - this.offsetTop;
//     img.style.transform = 'rotateX(' + baseY/(-40) + 'deg) rotateY(' + baseX/80 + 'deg)';
// }
// function outBox(){
//     img.style.transform = 'rotateX(0deg) rotateY(0deg)';            
// }

// btn css3
var animateButton = function(e) {
e.preventDefault;
//reset animation
e.target.classList.remove('animate');
e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};
var classname = document.getElementsByClassName("bubbly-button");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
}
// Navigation Scripts to Show Header on Scroll-Up
$(document).ready(function() {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight  = $('.intro-header .container').height();     
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                //check if user is scrolling up by mouse or keyborad
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;
                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }
});