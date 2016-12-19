

$("document").ready(function(){
    tl.pause();
    tl2.pause();
    tl3.pause();
    tl4.pause();
    tl5.pause();
    });

    $('#btn_play').on('click', function(){
        tl.play();
        tl2.play();
        tl3.play();
        tl4.play();
        tl5.play();
    });

    $('#btn_pause').on('click', function(){
        tl.pause();
        tl2.pause();
        tl3.pause();
        tl4.pause();
        tl5.pause();
    });

    $('#btn_resume').on('click', function(){
        tl.resume();
        tl2.resume();
        tl3.resume();
        tl4.resume();
        tl5.resume();
    });

    $('#btn_restart').on('click', function(){
        tl.play();
        tl2.play();
        tl3.play();
        tl4.play();
        tl5.play();
    });

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
.to(ballon, 15, {x: 360, y: 200, scale: 1.4, ease: Power2.easeInOut}, '-=5')
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



