
$(document).ready(function(){
  $('textarea').keyup(function(){
    var inputLength = $(this).val().length;
    var remain = 140 - inputLength;
    $('.counter').html(remain);
    if(remain >= 0){
      $('.counter').css('color','black');
    } else {
      $('.counter').css('color','red');
    }
  });
});

// $(function(){
//   $('.container .new-tweet textarea').keyup(function(){
//     const inputLength = $(this).val().length;
//     const $counter = $('.new-tweet .counter').text(140 - inputLength);
//     if(inputLength <= 140) {
//       $counter.css('color', 'black');
//     } else {
//       $counter.css('color', 'red');
//     }
//   });
// });
