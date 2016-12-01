

$("document").ready(function(){

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
.from(floor, 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=1')
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
.from(bg, 1.5, {autoAlpha: 0, ease:Power1.easeOut, delay: 2});

tl.pause();

    $('#btn_play').on('click', function(){
        tl.play();
    });

    $('#btn_restart').on('click', function(){
        tl.restart();
    });

});

