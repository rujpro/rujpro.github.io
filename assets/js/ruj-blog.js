/*!
 * Ruj Blog v1.0.0 (http://rujpro.github.io)
 * Copyright 2018 Ruj luckyerchen@gmail.com
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
        $('.intro-header').ripples({
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
                $catalog.show();
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed');
                } else {
                    $catalog.removeClass('fixed');
                }
            });
    }
});
// 滚动动画js
// ScrollReveal({reset: false,scale: 0.75,duration: 1000,interval: 600,distance: '50px'});
// ScrollReveal().reveal('.intro-header,#tag_cloud', {origin: 'top',delay: 0,rotate:{ x: 65}});
// ScrollReveal().reveal('.navbar-brand', {origin: 'left',delay: 300});
// ScrollReveal().reveal('.navbar-nav', {origin: 'right',delay: 500});
// ScrollReveal().reveal('.side-friends,.side-tag,.side-about,.aplayer', {origin: 'right',delay: 500,rotate: { x: 65}});
// ScrollReveal().reveal('.post-badge', {origin: 'left',delay: 600,rotate: { z:65}});
// ScrollReveal().reveal('.post-animation', {origin: 'bottom',delay: 500,rotate:{ x: 65}});
// ScrollReveal().reveal('.site-heading', {origin: 'top',rotate: { x: 65},delay: 800});
// ScrollReveal().reveal('.page-about,.mini-post-list,.footer', {origin: 'bottom',delay: 500,rotate:{ x: 65}});
// ScrollReveal().destroy(); //禁止所有动画
// ScrollReveal().reveal('#example', { afterReveal: myCallback });
// function myCallback (el) {
//     el.classList.remove('is-animating');
//     el.classList.add('is-visible');
// }

// 禁止右键粘贴复制保存
// function fuckyou() {
//     window.close();
//     window.location = "/404.html?tips=false";
// }
// function ck() {
//     // console.profile();
//     // console.profileEnd();
//     if (console.clear) {
//         console.log("恭喜客官喜提彩蛋，请尊重下劳动成果(⊙o⊙)哦 \n客官不用这么费劲窥视本博代码 \n源码已上传至GitHub \n客官Fork代码时记得帮忙点下⭐️star感谢！\n⬇️面是仓库地址 \n%c %c %c Ruj Blog -  %c  %c  https://github.com/rujpro/rujpro.github.io  %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff");
//     };
//     if (typeof console.profiles == "object") {
//         return console.profiles.length > 0;
//     }
// }
// ck();
// function hehe() {
//     if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)) {
//         fuckyou();
//     }
//     if (typeof console.profiles == "object" && console.profiles.length > 0) {
//         fuckyou();
//     }
// }
// hehe();
// window.onresize = function() {
//     if ((window.outerWidth - window.innerWidth) > 200 || (window.outerHeight - window.innerHeight) > 200) {
//         fuckyou();
//     }
// };
// document.onkeydown = function(event) {
//     if ((event.ctrlKey) && (event.keyCode == 115 || event.keyCode == 83 || event.keyCode == 46)) {
//         event.returnValue = false;
//         return false;
//     }
// };
// document.oncontextmenu = function(event) {
//     event.returnValue = false;
// };
// document.onselectstart = function(event) {
//     event.returnValue = false;
// };
// document.oncopy = function(event) {
//     event.returnValue = false;
// };
// // document.onkeydown = function(event){
// //     alert(event.keyCode);
// // }
