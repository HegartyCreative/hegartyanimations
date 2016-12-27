
var logo = $('#travelLogo');
var planeDownLeft = $('#planeDownLeft');
var planeDownRight = $('#planeDownRight');
var planeUpRight = $('#planeUpRight');
var left = $('#left');
var right = $('#right');
var introText1 = $('#introText1');
var introText2 = $('#introText2');
var introText3 = $('#introText3');
var introText4 = $('#introText4');
var paris = $('#paris');
var kenya = $('#kenya');
var brazil = $('#brazil');
var canada = $('#canada');
var newYork = $('#newYork');
var bangkok = $('#bangkok');
var logo1 = $('#travelLogo1');
var contact = $('#contact');

var tl_travel = new TimelineMax();

 tl_travel.pause();

     $('#btn2_play').on('click', function(){
        tl_travel.play();
    });

     $('#btn2_pause').on('click', function(){
        tl_travel.pause();
    });

     $('#btn2_resume').on('click', function(){
        tl_travel.resume();
        });

     $('#btn2_restart').on('click', function(){
        tl_travel.time(0)
        tl_travel.play();
        });

tl_travel
.from(left, 3, {autoAlpha: 0, ease: Power2.easeOut})
.from(logo, 2, {x: 60, autoAlpha: 0, ease: Power2.easeOut}, '-=2')
.to(planeDownRight, 3, {x:900, y:900, ease:Power1.easeOut}, '-=1')
.to(introText1, 2, {bezier:[{x:0, y:0}, {x:500, y:500}], ease:Power1.easeOut}, '-=2')

.to(left, 2, {delay: 2, autoAlpha: 0})
.to(logo, 2, {autoAlpha: 0}, '-=2')
.to(introText1, 2, {autoAlpha: 0}, '-=2')


.from(right, 3, {autoAlpha: 0, ease: Power2.easeOut})
.to(planeDownLeft, 3, {x: -900, y: 900, ease:Power1.easeOut}, '-=3')
.to(introText2, 2, {bezier:[{x:0, y:0}, {x: -490, y:490}], ease:Power1.easeOut}, '-=2')
.to(planeUpRight, 3, {x: 900, y: -900, ease:Power1.easeOut})
.to(introText3, 2, {bezier:[{x:0, y:0}, {x: 490, y: -490}], ease:Power1.easeOut}, '-=2')

.to(right, 3, {autoAlpha: 0, ease: Power2.easeOut})
.to(introText2, 2, {autoAlpha: 0, ease:Power1.easeOut}, '-=2')
.to(introText3, 2, {autoAlpha: 0, ease:Power1.easeOut}, '-=2')

.from(paris, 3, {autoAlpha: 0})
.to(introText4, 2, {bezier:[{x:0, y:0}, {x: -490, y:490}], ease:Power1.easeOut}, '-=2')
.to(paris, 3, {autoAlpha: 0})
.to(introText4, 2, {autoAlpha: 0}, '-=2')

.from(kenya, 3, {autoAlpha: 0})
.to(introText5, 2, {bezier:[{x:0, y:0}, {x:500, y:500}], ease:Power1.easeOut}, '-=2')
.to(kenya, 3, {autoAlpha: 0})
.to(introText5, 2, {autoAlpha: 0}, '-=2')

.from(brazil, 3, {autoAlpha: 0})
.to(introText6  , 2, {bezier:[{x:0, y:0}, {x: -490, y:490}], ease:Power1.easeOut}, '-=2')
.to(brazil, 3, {autoAlpha: 0})
.to(introText6, 2, {autoAlpha: 0}, '-=2')

.from(canada, 3, {autoAlpha: 0})
.to(introText7, 2, {bezier:[{x:0, y:0}, {x:500, y:500}], ease:Power1.easeOut}, '-=2')
.to(canada, 3, {autoAlpha: 0})
.to(introText7, 2, {autoAlpha: 0}, '-=2')

.from(newYork, 3, {autoAlpha: 0})
.to(introText8, 2, {bezier:[{x:0, y:0}, {x: -490, y:490}], ease:Power1.easeOut}, '-=2')
.to(newYork, 3, {autoAlpha: 0})
.to(introText8, 2, {autoAlpha: 0}, '-=2')

.from(bangkok, 3, {autoAlpha: 0})
.to(introText9, 2, {bezier:[{x:0, y:0}, {x:500, y:500}], ease:Power1.easeOut}, '-=2')
.to(bangkok, 3, {autoAlpha: 0})
.to(introText9, 2, {autoAlpha: 0}, '-=2')

.from(logo1, 3, {delay: 0.25, autoAlpha: 0, ease: Power2.easeOut})
.from(contact, 3, {autoAlpha: 0, ease: Power2.easeOut}, '-=1.5');
