$(document).ready(function() {
  $(".controle-btns button").click(function() {
    const section = $(this).data("section");
    console.log(section);
    $(".controle-btns button, .section").each(function() {
      $(this).removeClass("active");
    })

    if (section == 'home')
    {
      $('header').addClass('active')
    }
    else {
      $(`.${section}`).addClass('active')
    }

    $(this).addClass("active");
  })

  // animation
  for (var i = 1; i < 10; i+=2) {
    KUTE.fromTo(
        `#wave-${i}`,
        { path: `#wave-${i}` },
        { path: `#wave-${i + 1}` },
        { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  }
  for (var i = 1; i < 10; i+=2) {
    KUTE.fromTo(
        `#wave-${i + 1}`,
        { path: `#wave-${i + 1}` },
        { path: `#wave-${i}` },
        { repeat: 999, duration: 3000, yoyo: true }
    ).start();
  }
})
