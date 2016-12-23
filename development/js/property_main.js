

var intro1 = $('#intro1');
var intro2 = $('#intro2');
var intro3 = $('#intro3');
var text1 = $('#text1');
var text2 = $('#text2');
var text3 = $('#text3');
var bkg = $('#bkg');
var start = $('#start');
var test1 = $('#test1');
var test2 = $('#test2');
var test3 = $('#test3');
var test4 = $('#test4');
var leftPanel = $('.leftPanel');
var rightPanel = $('.rightPanel');
var toolsText = $('#toolsText');
var paint = $('#paint');
var ladder = $('#ladder');
var hammer = $('#hammer');
var drill = $('#drill');
var brush = $('#brush');
var saw = $('#saw');
var tape = $('#tape');
var ruler = $('#ruler');
var spanner = $('#spanner');
var nails = $('#nails');
var plug = $('#plug');
var pipes = $('#pipes');
var screwdriver = $('#screwdriver');
var tap = $('#tap');
var paintCan = $('#paintCan');
var spade = $('#spade');
var contactText1 = $('#contactText1');
var telephone = $('#telephone');
var email = $('#email');
var address = $('#address');
var twitter = $('#twitter');
var facebook = $('#facebook');
var houses = $('#houses');

var tl_property = new TimelineMax();

 tl_property.pause();

     $('#btn_play').on('click', function(){
        tl_property.play();
    });

     $('#btn_pause').on('click', function(){
        tl_property.pause();
    });

     $('#btn_resume').on('click', function(){
        tl_property.resume();
        });

     $('#btn_restart').on('click', function(){
         tl_property.time(0)
        tl_property.play();
        });


tl_property
.from(bkg, 1, {autoAlpha: 0, ease: Power2.easeIn})
.from(intro1, 1, {autoAlpha: 0, ease: Power2.easeIn, y: -100 })
.from(intro3, 1, {autoAlpha: 0, ease: Power2.easeIn, y: -100 }, '-=0.5')
.from(intro2, 1, {autoAlpha: 0, ease: Power2.easeIn, y: -100 }, '-=0.4')
.from(text1, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: 100 })
.from(text2, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: 100 }, '-=0.25')
.from(text3, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: 100 }, '-=0.25')
.to(bkg, 2, {delay: 1, x: 800, ease: Power2.easeOut})
.fromTo(start, 2, {x: -800}, {x: 0, ease: Power2.easeOut}, '-=2')
.to(intro1, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: -100 })
.to(intro3, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: -100 })
.to(intro2, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: -100 })
.to(text1, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: 100 })
.to(text2, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: 100 })
.to(text3, 0.5, {autoAlpha: 0, ease: Power2.easeIn, y: 100 })
.from(test1, 1, {autoAlpha: 0, ease: Power2.easeIn, x: -50})
.from(test2, 1, {autoAlpha: 0, ease: Power2.easeIn, y: 50})
.from(test3, 1, {autoAlpha: 0, ease: Power2.easeIn, x: 50})
.from(test4, 1, {autoAlpha: 0, ease: Power2.easeIn, y: 50})
.to(test1, 1, {delay: 2, autoAlpha: 0, ease: Power2.easeIn, x: -50})
.to(test2, 1, {autoAlpha: 0, ease: Power2.easeIn, y: 50})
.to(test3, 1, {autoAlpha: 0, ease: Power2.easeIn, x: 50})
.to(test4, 1, {autoAlpha: 0, ease: Power2.easeIn, y: 50})
.fromTo(leftPanel, 2, {y: 550}, {y: 0, ease: Power2.easeIn})
.fromTo(rightPanel, 2, {y: -1100, x: 400}, {y: -550, ease: Power2.easeIn}, '-=2')

.from(toolsText, 1.5, {autoAlpha: 0, ease: Power2.easeIn, y: -150})
.from(paint, 1.5, {autoAlpha: 0, y: -100})
.from(ladder, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(hammer, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(drill, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(brush, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(saw, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(tape, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(ruler, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(spanner, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(nails, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(plug, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(pipes, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(screwdriver, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(tap, 1.5, {autoAlpha: 0, y: -150}, '-=0.75')
.from(paintCan, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')
.from(spade, 1.5, {autoAlpha: 0, y: -100}, '-=0.75')


.from(contactText1, 1.5, {autoAlpha: 0, ease: Power2.easeIn, y: -150})
.from(telephone, 1.5, {autoAlpha: 0, y: -100})
.from(email, 1.5, {autoAlpha: 0, x: 100}, '-=0.75')
.from(address, 1.5, {autoAlpha: 0, y: 100}, '-=0.75')
.from(twitter, 1.5, {autoAlpha: 0, y: 50}, '-=0.75')
.from(facebook, 1.5, {autoAlpha: 0, y: 50}, '-=0.75')

.to(toolsText, 1.5, {autoAlpha: 0})
.to(paint, 1.5, {autoAlpha: 0}, '-=2')
.to(ladder, 1.5, {autoAlpha: 0}, '-=2')
.to(hammer, 1.5, {autoAlpha: 0}, '-=2')
.to(drill, 1.5, {autoAlpha: 0}, '-=2')
.to(brush, 1.5, {autoAlpha: 0}, '-=2')
.to(saw, 1.5, {autoAlpha: 0}, '-=2')
.to(tape, 1.5, {autoAlpha: 0}, '-=2')
.to(ruler, 1.5, {autoAlpha: 0}, '-=2')
.to(spanner, 1.5, {autoAlpha: 0}, '-=2')
.to(nails, 1.5, {autoAlpha: 0}, '-=2')
.to(plug, 1.5, {autoAlpha: 0}, '-=2')
.to(pipes, 1.5, {autoAlpha: 0}, '-=2')
.to(screwdriver, 1.5, {autoAlpha: 0}, '-=2')
.to(tap, 1.5, {autoAlpha: 0}, '-=2')
.to(paintCan, 1.5, {autoAlpha: 0}, '-=2')
.to(spade, 1.5, {autoAlpha: 0}, '-=2')

.from(houses, 2, {autoAlpha: 0})




