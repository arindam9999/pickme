/*price range*/

if ($.fn.slider) {
    $('#sl2').slider();
}

var RGBChange = function () {
    $('#RGB').css('background', 'rgb(' + r.getValue() + ',' + g.getValue() + ',' + b.getValue() + ')')
};

/*scroll to top*/

$(document).ready(function () {
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            scrollDistance: 300, // Distance from top/bottom before showing element (px)
            scrollFrom: 'top', // 'top' or 'bottom'
            scrollSpeed: 300, // Speed back to top (ms)
            easingType: 'linear', // Scroll to top easing (see http://easings.net/)
            animation: 'fade', // Fade, slide, none
            animationSpeed: 200, // Animation in speed (ms)
            scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
            //scrollTarget: false, // Set a custom target element for scrolling to the top
            scrollText: '<i class="fa fa-angle-up"></i>', // Text for element, can contain HTML
            scrollTitle: false, // Set a custom <a> title if required.
            scrollImg: false, // Set true to use image
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647 // Z-Index for the overlay
        });
    });
});
var c= 0;
$(".show1").text(c);
$(".vote1").click(function() {
    if(c==9) swal("Congrats","Voting done for today..","success");
  //  alert(c);
  //  $(".total1").text(c + "");
  // if(c<10) c++;
  // else  swal("Congrats","Voting done for today..","success");
   var fired_button = $(this).val();
   var ch = $(this).text();
   if(c<10&&ch==="VOTE") {c++;$(this).text("UNVOTE"); $(".show1").text(c);}
   else if(ch==="UNVOTE") {c--;$(this).text("VOTE");$(".show1").text(c);}
   
});
