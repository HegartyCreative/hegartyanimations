var night = $('#night');
var sun = $('#sun');
var buildings = $('#buildings');
var bkg_morning = $('#bkg_morning');
var trees = $('#trees');
var car1 = $('#car1');
var car2 = $('#car2');
var car3 = $('#car3');
var car4 = $('#car4');
var car5 = $('#car5');
var car6 = $('#car6');
var car7 = $('#car7');
var car8 = $('#car8');

var bannerPlane = $('#bannerPlane');
var balloon = $('#balloon');
var helicopter = $('#helicopter');
var bezPoints = [{x:-1400, y:-20}];

var cloud1 = $('#cloud1');
var cloud2 = $('#cloud2');
var cloud3 = $('#cloud3');
var cloud4 = $('#cloud4');
var cloud5 = $('#cloud5');

var nightlife = $('#nightlife');
var broadway = $('#broadway');
var shopping = $('#shopping');
var food = $('#food');
var people = $('#people');

var nySkyline = $('#nySkyline');
var nyText = $('#nyText');

var end = $('#end');

var tl_morning = new TimelineMax();

 tl_morning.pause();

     $('#btn3_play').on('click', function(){
        tl_morning.play();
    });

     $('#btn3_pause').on('click', function(){
        tl_morning.pause();
    });

     $('#btn3_restart').on('click', function(){
        tl_morning.time(0)
        tl_morning.play();
        });

tl_morning

.to(nySkyline, 5, {autoAlpha: 0, ease:Linear.easeNone}, '-=5')
.to(nyText, 5, {autoAlpha: 0, ease:Linear.easeNone}, '-=5')

.fromTo(sun, 5, {y: 300}, {y: 5})
.to(night, 5, {autoAlpha: 0}, '-=5')
.fromTo(buildings, 40, {x: -1550, y: 0, ease:Linear.easeNone}, {x: 0, y: 0, ease:Linear.easeNone}, '-=1')
.fromTo(trees, 40, {x: -1550, y: 0, ease:Linear.easeNone}, {x: 0, y: 0, ease:Linear.easeNone}, '-=40')

.fromTo(car1, 20, {x: -110, ease:Linear.easeNone}, {x: 900, ease:Linear.easeNone}, '-=40')
.fromTo(car3, 25, {x: -700, ease:Linear.easeNone}, {x: 1000, ease:Linear.easeNone}, '-=40')

.set(nightlife, {autoAlpha:0})
.to(nightlife, 3, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, '-=40')

.fromTo(car5, 20, {x: -1450, ease:Linear.easeNone}, {x: 950, ease:Linear.easeNone}, '-=40')
.fromTo(car7, 40, {x: -1900, ease:Linear.easeNone}, {x: 1000, ease:Linear.easeNone}, '-=40')
.fromTo(car2, 20, {x: 1000, ease:Linear.easeNone}, {x: -50, ease:Linear.easeNone}, '-=40')
.fromTo(car4, 25, {x: 1500, ease:Linear.easeNone}, {x: -50, ease:Linear.easeNone}, '-=40')
.fromTo(car6, 20, {x: 2000, ease:Linear.easeNone}, {x: -60, ease:Linear.easeNone}, '-=40')
.fromTo(car8, 40, {x: 2500, ease:Linear.easeNone}, {x: -60, ease:Linear.easeNone}, '-=40')

.set(shopping, {autoAlpha:0})
.to(shopping, 3, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, '-=33')

.to(bannerPlane, 10, {x: 1100, ease:Linear.easeNone}, '-=40')
.to(cloud1, 38, {x: -1400, ease: Sine.easeInOut}, '-=39')

.set(broadway, {autoAlpha:0})
.to(broadway, 3, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, '-=23')

.to(cloud2, 26, {x: 1000, ease: Sine.easeInOut}, '-=39')
.to(balloon, 40, {x: 300, y: 450, ease: Power4.easeOut}, '-=35')
.to(cloud3, 20, {x: 1400, ease: Sine.easeInOut}, '-=20')

.set(food, {autoAlpha:0})
.to(food, 3, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, '-=21')

.to(cloud4, 30, {x: -1200, ease:Linear.easeNone}, '-=35')

.set(people, {autoAlpha:0})
.to(people, 3, {autoAlpha:1, repeat:1, yoyo:true, ease: Linear.easeNone}, '-=15')

.to(helicopter, 40, {bezier:bezPoints, ease:Linear.easeNone}, '-=30')
.to(cloud5, 20, {x: -1200, ease:Linear.easeNone}, '-=30')

.from(end, 2, {autoAlpha: 0}, '-=15');

