
var bkg1 = ('#bkg1');
var one = ('#one');
var two = ('#two');
var three = ('#three');
var four = ('#four');
var five = ('#five');
var six = ('#six');
var seven = ('#seven');
var eight = ('#eight');

var tl_portfolio = new TimelineMax();

 tl_portfolio.pause();

     $('#btn1_play').on('click', function(){
        tl_portfolio.play();
    });

     $('#btn1_pause').on('click', function(){
        tl_portfolio.pause();
    });

     $('#btn1_resume').on('click', function(){
        tl_portfolio.resume();
        });

     $('#btn1_restart').on('click', function(){
         tl_portfolio.time(0)
        tl_portfolio.play();
        });


tl_portfolio
.from(bkg1, 1, {autoAlpha: 0, ease: Power2.easeIn})
.from(one, 3, {opacity: 0, y: 200, ease: Power2.easeOut})
.to(one, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(two, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3')
.to(two, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(three, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3')
.to(three, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(four, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3')
.to(four, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(five, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3')
.to(five, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(six, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3')
.to(six, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(seven, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3')
.to(seven, 3, {delay: 3, y: -220, ease: Power2.easeOut})
.from(eight, 3, {opacity: 0, y: 200, ease: Power2.easeOut}, '-=3');

var eyes = $('#eyes');
var tl_portfolio2 = new TimelineMax({repeat: -1});

tl_portfolio2
.set(eyes, {
  transformOrigin: 'center',
    opacity: 1
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
