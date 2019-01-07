/*!
 * crj Blog v1.0.0 (http://rujpro.github.io)
 * Copyright 2018 crj luckyerchen@gmail.com
 */
// Drop Bootstarp low-performance Navbar
var $body   = document.body;
var $toggle = document.querySelector('.navbar-toggle');
var $navbar = document.querySelector('#rujblog_navbar');
var $collapse = document.querySelector('.navbar-collapse');

var __RujNav__ = {
    close: function(){
        $navbar.className = " ";
        // wait until animation end.
        setTimeout(function(){
            // prevent frequently toggle
            if($navbar.className.indexOf('in') < 0) {
                $collapse.style.height = "0px"
            }
        },400)
    },
    open: function(){
        $collapse.style.height = "auto"
        $navbar.className += " in";
    }
};
// Bind Event
$toggle.addEventListener('click', function(e){
    if ($navbar.className.indexOf('in') > 0) {
        __RujNav__.close()
    }else{
        __RujNav__.open()
    }
});
document.addEventListener('click', function(e){
    if(e.target == $toggle) return;
    if(e.target.className == 'icon-bar') return;
    __RujNav__.close();
});

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
