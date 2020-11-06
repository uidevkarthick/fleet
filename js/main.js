$(".profile-dept").click(function () {
  $(".profile-drop").toggle();
});

$(document).on("click", "#nav-drop-items", function () {
  $(this).parent().addClass("dropclass");
  if ($(this).hasClass("collapsed")) {
    $(this).parent().toggleClass("dropclass");
  }
});

$(".toggle-nav").click(function () {
  $(".navbar-nav .nav-txt, .poweredby .nav-txt").toggle();
  $(".logo-act").toggle();
  $(".logo-tog").toggle();
  $(".navpanel").toggleClass("nav-toggle");
  $(".contenet-sec").toggleClass("contenet-sec-toggle");
  $(".dropdown-item").parents(".nav-item").removeClass("dropclass");
});

$(document)
  .on("mouseenter", ".nav-toggle", function () {
    $(".nav-toggle").addClass("nav-toggle-hover");
    $(".navbar-nav .nav-txt, .poweredby .nav-txt").show();
    $(".logo-act").show();
    $(".logo-tog").hide();
    if ($(".nav-item").hasClass("dropclass")) {
      $(".dropdown-item").parents(".nav-item").addClass("dropclass");
    }
  })
  .on("mouseleave", ".nav-toggle", function () {
    $(".nav-toggle").removeClass("nav-toggle-hover");
    $(".navbar-nav .nav-txt, .poweredby .nav-txt").hide();
    $(".logo-act").hide();
    $(".logo-tog").show();
    $(".dropdown-item").parents(".nav-item").removeClass("dropclass");
  });

$(document).ready(function () {
  $(".bootstrap-select button").css("outline", "none !important");

  $(".file-upload").each(function (e) {
    $(this).change(function () {
      filename = this.files[0].name;
      $(this).parent().find(".file-up").text(filename);
    });
  });
});
