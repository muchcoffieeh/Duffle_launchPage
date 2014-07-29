$(document).ready(function() {
  var w = $(window).width();
  $('#carousel_ul li').css({'width' : w});
  $('#carousel_ul').css({'left' : 0});

      //this part makes the automatic movement
      var t = setInterval(function(){
        $("#carousel_ul").animate({marginLeft:-w},500,function(){
          // This code runs after the animation completes
          $(this).find("li:last").after($(this).find("li:first"));
          // Now we've taken out the left-most list item, reset the margin
          $(this).css({marginLeft:0});
        })
        },4000);
        //when user clicks the image for sliding right
        $('#right_scroll img').click(function(){
            var item_width = $('#carousel_ul li').outerWidth() + 10;

            //calculate the new left indent of the unordered list
            var right_indent = parseInt($('#carousel_ul').css('left')) - item_width;

            //make the sliding effect using jquery's animate function '
           $('#carousel_ul').animate({'left' : right_indent},{queue:false, duration:500},function(){

                //get the first list item and put it after the last item
                $('#carousel_ul li:last').after($('#carousel_ul li:first'));

                //and get the left indent to the default -210px
                $('#carousel_ul').css({'left' : -w});
            });
        });
        //when user clicks the image for sliding left
        $('#left_scroll img').click(function(){

            var item_width = $('#carousel_ul li').outerWidth() + 10;
            var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;

            $('#carousel_ul').animate({'left' : left_indent},{queue:false, duration:500},function(){

            $('#carousel_ul li:first').before($('#carousel_ul li:last'));

            $('#carousel_ul').css({'left' : w});
            });

        });
  });



