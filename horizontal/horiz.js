$(document).ready(function() {

  function showButtons(){
    if ( $('.pic').first().hasClass('active')) {
      $('.prev').addClass('hidden');
    }
    else if ( $('.pic').last().hasClass('active')) {
      $('.next').addClass('hidden');
    }
    else {
      $('.button').removeClass('hidden');
    }
  }

  function nextImg() {
    var active = $('.pic .active');
    var next = active.next();
    active.removeClass('active');
    next.addClass('active');
    showButtons();
  }

  function prevImg() {
    var active = $('.pic .active');
    var prev = active.prev();
    active.removeClass('active');
    prev.addClass('active');
    showButtons();
  }

  function toStart() {
    $('.pic').removeClass('active');
    $('.pic').first().addClass('active');
    $('.prev').addClass('hidden');
    $('.next').removeClass('hidden');
  }

  $('.overlay').delay(400).fadeOut();
  showButtons();
  $('.next').click(nextImg);
  $('.prev').click(prevImg);
  $('#start').click(toStart);

});
