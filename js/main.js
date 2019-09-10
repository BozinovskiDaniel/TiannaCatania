
// Bouncing arrow bottom of full screen
// Different arrow choices from Font Awesome
// Fades away as you scroll down

$(window).scroll(function(){
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 600); 
  //250 is fade pixels
  });

const about = document.getElementsByTagName('img')[1];
const whole = document.getElementById('AMP');
const topsec = document.getElementsByClassName('row')[0];


const tl = new TimelineMax();

// , ease: Power2.easeInOut

tl
.fromTo(whole, 1.5, {width: "0%"}, {width: "100%", ease: Power2.easeInOut})
.fromTo(topsec, 3, {height: "0%"}, {height: "100%", ease: Power2.easeInOut});