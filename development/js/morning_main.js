
var buildings = $('#buildings');

var tl_morning = new TimelineMax();

 tl_morning.pause();

     $('#btn3_play').on('click', function(){
        tl_morning.play();
    });

     $('#btn3_pause').on('click', function(){
        tl_morning.pause();
    });

     $('#btn3_resume').on('click', function(){
        tl_morning.resume();
        });

     $('#btn3_restart').on('click', function(){
        tl_morning.time(0)
        tl_morning.play();
        });

tl_morning
.fromTo(buildings, 40, {x: -1550, y: 0}, {x: 0, y: 0});


