$(window).load(function() {
  $('.overlay').fadeOut();
  $(document).scrollTop(0);
});

$(document).ready(function() {
  $('.next').on('click', function() {
    $('html, body').animate(
      { scrollTop: $(this).closest('.frame').next().position().top },
      250
    );
  });

  $('.prev').on('click', function() {
    $('html, body').animate(
      { scrollTop: $(this).closest('.frame').prev().position().top },
      250
    );
  });

  $('#top').on('click', function() {
    $('html, body').animate(
      { scrollTop: 0 },
      250
    );
  });
});
