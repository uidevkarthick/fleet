// load content profile
$(document).ready(function () {
  // $(".profile-sec").load("../header.html");


  //profile pic dropdown
  $(".profile-username").click(function () {
    $(".profile-dlt-sec").toggle();
  });
  // sidenav - dropdown
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

  // kabeb menu
  $(".kabeb").on("click", function () {
    $(this).parent().find(".kabeb-list").toggle();
  });
  // outside click to hide kabeb list
  $(document).mouseup(function (e) {
    var container = $(".kabeb-list, .profile-dlt-sec ");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });

  // for popup
  $(".blk-tag").click(function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-block").show();
  });
  $(".rep-tag").click(function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-replace").show();
  });
  $(".mapr-tag").click(function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-mapper").show();
  })
  // popup-cancel
  $(".cncl-butn-pop").click(function () {
    $(this).parents(".pop-cont").hide()
    $(".overlay").hide();
  })
  // vehicle mapper popup
  $(".veh-tag").click(function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-map-veh").show()
  })
  // change password
  $(".change-password").click(function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-change-password").show();
  });
  // cancel password
  $(".cncl-password").click(function () {
    $(".change-password-show").hide();
    $(".change-password").show();

  });
  // custom date seclection
  $(document).on("click", ".calc", function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-custom-date").show();
  })
  // fetch-data - delete after complete UI
  $(".fetch-date").click(function () {
    $(".custom-date-show").show();
    $(".overlay").hide();
    $(".pop-cont").hide();
    $(".popup-custom-date").hide();
  });
  // edit custom date
  $(".custom-date-edit").click(function () {
    $(".overlay").show();
    $(".pop-cont").hide();
    $(".popup-custom-date").show();
  });


});

$(document).ready(function () {
  $(".bootstrap-select button").css("outline", "none !important");

  // upload sec
  $(".file-upload").each(function (e) {
    $(this).change(function () {
      filename = this.files[0].name;
      $(this).parent().find(".file-up").text(filename);
    });
  });

  // custom selct

  // create new variable for each menu
  var dd1 = new DropDown($("#noble-gases"));
  // var dd2 = new DropDown($('#other-gases'));
  $(document).click(function () {
    // close menu on document click
    $(".wrap-drop").removeClass("active");
  });

  $(".drop li").click(function () {
    $(".drop li").removeClass("drop-active");
    $(this).addClass("drop-active");
  });
});

// custom dropdown - for tag class - add vehicle section
function DropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children("span");
  this.opts = this.dd.find("ul.drop li");
  this.val = "";
  this.index = -1;
  this.initEvents();
}

DropDown.prototype = {
  initEvents: function () {
    var obj = this;
    obj.dd.on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(this).toggleClass("active");
    });
    obj.opts
      .on("click", function () {
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
        opt.siblings().removeClass("selected");
        opt.filter(':contains("' + obj.val + '")').addClass("selected");
      })
      .change();
  },
  getValue: function () {
    return this.val;
  },
  getIndex: function () {
    return this.index;
  },
};

// active nav
setTimeout(function () {
  $(".nav-item").each(function () {
    if ($(this).hasClass("active")) {
      $(this).find(".add-detail-btn").show();
    }
  });
}, 200);

$(".nav-item").on("hover", function () {
  $(this).find(".add-detail-btn").show();
});

$(".tlt-bck").click(function () {
  window.history.back();
});

