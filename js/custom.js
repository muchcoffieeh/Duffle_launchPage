$(document).ready(function(){
  myVid=document.getElementById("video");
myVid.muted=true;

//this function is used to position elements on the homepage
function sniffer() {
var windowHeight=$(window).height();
var introHeight=$(window).height()/10;
var windowWidth=$(window).width()/2;
var windowWidth2=windowWidth-900 ;


var home=$("#home");
home.css("height",windowHeight+"px");

var carouselInner = $("#carousel_inner");
carouselInner.css("height",windowHeight+"px");

var rScroll = $("#right_scroll");
rScroll.css("height",windowHeight+"px");

var lScroll = $("#left_scroll");
lScroll.css("height",windowHeight+"px");


var intro=$("#intro");
intro.css("margin-top",introHeight+"px");

var logo=$("#logo");
logo.css("padding-top",introHeight+"px");

var arrow=$("#arrow");
arrow.css("left",windowWidth-40+"px");

var dropmenu=$(".nav-mobile");
dropmenu.css("width",$(window).width()-40+"px");

}
sniffer();

//this function is used display the vidoe on the homepage
function video() {

//var videoHeight=$(window).height();

$('#home_bg').videoBG({
                    mp4:'video/japan.mp4',
                    ogv:'video/beachVid.ogv',
                    webm:'video/beachVid.webm',
                    poster:'video/beachBoat.jpg',
                    scale:true,
                    });

}
video();

//fancybox settings
$("a.fancybox").fancybox({
overlayColor:'#7ca5b7',
overlayOpacity: 0.2,
});

//on window resize event
$(window).resize(function(){
               sniffer();
               video();
               });
});