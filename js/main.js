

$("document").ready(function(){
    tl.pause();
    tl2.pause();
    tl3.pause();
    tl4.pause();
    tl5.pause();
    tla.pause();
    tlb.pause();
    });

    $('#btn_play').on('click', function(){
        tl.play();
        tl2.play();
        tl3.play();
        tl4.play();
        tl5.play();
        tla.play();
        tlb.play();
    });

    $('#btn_pause').on('click', function(){
        tl.pause();
        tl2.pause();
        tl3.pause();
        tl4.pause();
        tl5.pause();
        tla.pause();
        tlb.pause();
    });

    $('#btn_resume').on('click', function(){
        tl.resume();
        tl2.resume();
        tl3.resume();
        tl4.resume();
        tl5.resume();
        tla.resume();
        tlb.resume();
    });

var homeWrapper = $('.homeWrapper');
master = new TimelineLite();

master
.from(homeWrapper, 2, {autoAlpha: 0, ease:Power1.easeIn})

var header = $('.header-section');
var left = $(['#html', '#css','#js','#responsive','#cross']);
var right = $(['#git', '#node','#bootstrap','#animation','#wordpress']);
var desk = $(".desk");
var worker = $(".worker");
var floor = $(".floor");
var computer = $(".computer");
var pad = $(".pad");
var glasses = $(".glasses");
var keyboard = $(".keyboard");
var ipad = $(".ipad");
var coffee = $(".coffee");
var mouse = $(".mouse");
var iphone = $(".iphone");
var notepad = $(".notepad");
var magnify  = $(".magnify");
var calculator = $(".calculator")
var bg = $(".bg");
tl = new TimelineLite();

tl
.from(header, 2, {autoAlpha: 0, ease:Power1.easeOut})
.staggerFrom(left, 1.5, {opacity:0, x: -500, ease:Bounce.easeOut}, 0.25)
.staggerFrom(right, 1.5, {opacity:0, x: 500, ease:Bounce.easeOut}, 0.25)
.from(desk, 1, {autoAlpha: 0, ease:Power1.easeOut, delay: 2})
.from(worker, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(floor, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(notepad, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(computer, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(pad, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(glasses, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(keyboard, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(ipad, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(coffee, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(mouse, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(iphone, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(magnify, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(calculator, 1, {autoAlpha: 0, ease:Power1.easeOut})
.from(bg, 1.5, {autoAlpha: 0, ease:Power1.easeOut, delay: 3});

var web1 = $('.web1');
var web2 = $('.web2');
var web3 = $('.web3');
var web4 = $('.web4');
var web5 = $('.web5');
var web6 = $('.web6');
var web7 = $('.web7');
var web8 = $('.web8');
var tl2 = new TimelineMax({repeat: -1});

tl2
.from(web1, 3, {y:268, delay: 5, ease: Power4.easeOut})
.to(web1, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web2, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web2, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web3, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web3, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web4, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web4, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web5, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web5, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web6, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web6, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web7, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web7, 3, {delay: 3, y:-164, ease: Power4.easeOut})
.from(web8, 3, {y:268, ease: Power4.easeOut}, '-=3')
.to(web8, 3, {delay: 3, y: 0, ease: Power4.easeOut});


var sky = $('.sky');
var border = $('.border');
var sun = $('.sun');
var wrapper = $('.wrapper');
var tl3 = new TimelineMax();

tl3
.from(wrapper, 2, {autoAlpha: 0, ease:Power1.easeOut})
.to(sun, 6, {y: -300, ease: Power2.easeOut})
.from(sky, 4, {autoAlpha: 0, ease: Power2.easeIn}, '-=6');


var cloud1 = $('.cloud1');
var cloud2 = $('.cloud2');
var cloud3 = $('.cloud3');
var cloud4 = $('.cloud4');
var cloud5 = $('.cloud5');
var ballon = $('.ballon');
var tl4 = new TimelineMax({repeat: -1});

tl4
.to(cloud1, 12, {x: 480, delay: 2})
.to(cloud2, 12, {x: -480}, '-=3')
.to(cloud3, 12, {x: 480}, '-=4')
.to(ballon, 15, {x: 350, y: 220, scale: 1.4, ease: Power2.easeInOut}, '-=5')
.to(cloud4, 12, {x: -480}, '-=4')
.to(cloud5, 12, {x: 480}, '-=2');



var eyes = $('.eyes');
var tl5 = new TimelineMax({repeat: -1});

tl5
.set(eyes, {
  transformOrigin: 'center'
})
.to(eyes, 0.5, {
  scaleY: 0.2,
  ease: Power2.easeIn
}, 8)
.to(eyes, 2, {
  scaleY: 1,
  ease: Power2.easeOut
})
.timeScale(2);


var myAdLink = ('#myAdLink');
var txt1 = ('#myAd_txt1');
var txt2 = ('#myAd_txt2');
var txt3 = ('#myAd_txt3');
var marker = ('#myAd_marker');
var shadow = ('#myAd_shadow');
var surfboard = ('#myAd_surfboard');
var clouds = ('#myAd_clouds');

var tla = new TimelineMax();
tla
    .to(myAdLink, 1.2, {opacity: 1})
    .from(txt2, 1.3, {top: -100, ease: Power2.easeOut})
    .to('#myAd_txt_1', 2, {top: 210, left: -70, rotation: -100, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_2', 2, {top: 210, left: -60, rotation: 45, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_3', 2, {top: 210, left: -50, rotation: -180, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_4', 2, {top: 210, left: -40, rotation: 85, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_5', 2, {top: 210, left: -30, rotation: -229, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_6', 2, {top: 210, left: -20, rotation: 5, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_7', 2, {top: 210, left: -10, rotation: -118, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_8', 2, {top: 210, left: 0, rotation: 130, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_9', 2, {top: 210, left: 10, rotation: -19, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_10', 2, {top: 210, left: 20, rotation: 70, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_11', 2, {top: 210, left: 30, rotation: -190, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_12', 2, {top: 210, left: 40, rotation: 45, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_13', 2, {top: 210, left: 50, rotation: -350, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_14', 2, {top: 210, left: 60, rotation: 35, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_15', 2, {top: 210, left: 70, rotation: -200, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_16', 2, {top: 210, left: 75, rotation: 32, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_17', 2, {top: 210, left: 80, rotation: -180, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .to('#myAd_txt_18', 2, {top: 210, left: 85, rotation: 178, ease: Power2.easeOut}, 'myAd_ltr-=0.9')
    .from(marker, 1.2, {top: -110, ease: Bounce.easeOut}, '-=0.5')
    .from(shadow, 1.2, {opacity:0, ease: Bounce.easeOut}, '-=1.2')
    .from(txt3, 1.2, {scale: .0, opacity: 0, ease: Bounce.easeOut}, '-=0.9')
    .from(surfboard, 1.5, {top: 260, rotation: -130, left: 300, ease: Back.easeOut}, 'cta');
    //tl1.seek('cta');

var tlb = new TimelineMax({repeat: -1});
tlb
    .to(clouds, 65, {backgroundPositionX: 649, ease: Power0.easeOut});






