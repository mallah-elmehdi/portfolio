$(document).ready(function() {

  $(".controle-btns button").click(function() {
    // --------
    const section = $(this).data("section");
    if (!$('.section-' + section).hasClass('active')) {
      // --------
      $(".controle-btns button, .section").each(function() {
        $(this).removeClass("active");
      })
      // --------
      $(`.section-${section}`).addClass('active')
      // --------
      $(this).addClass("active");
      // --------
      $('body').animate({backgroundPositionX: "-100vh"}, 200, 'linear', function() {
          $('body').css('background-image','url("./img/wave-' + section + '.svg")')
          $('body').animate({backgroundPositionX: "0"}, 200, 'linear')
        })
    }
  })
})
