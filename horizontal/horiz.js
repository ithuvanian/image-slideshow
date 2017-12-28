function showButtons() {
  if ($('.pic').first().hasClass('active')) {
    $('.prev').addClass('hidden');
  } else if ($('.pic').last().hasClass('active')) {
    $('.next').addClass('hidden');
  } else {
    $('.button').removeClass('hidden');
  }
}

function nextImg() {
  var active = $('.active');
  var next = active.next();
  active.removeClass('active');
  next.addClass('active');
  showButtons();
}

function prevImg() {
  var active = $('.active');
  var prev = active.prev();
  active.removeClass('active');
  prev.addClass('active');
  showButtons();
}

function toStart() {
  $('.pic').removeClass('active');
  $('.pic').first().addClass('active');
  showButtons();
}


$(document).ready(function() {

  showButtons();
  $('.overlay').delay(400).fadeOut();
  $('.next').on('click', () => nextImg());
  $('.prev').on('click', () => prevImg());
  $('.start').on('click', () => toStart());

});
