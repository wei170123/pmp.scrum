$(function () {
  console.info("Jquery Start");
  var imageId = $.urlParam("imageId");
  // var uid = $.urlParam("uid");
  var referenceId = $.urlParam("referenceId");
  console.log(imageId);
  var pointCount = 0;
  var point = [];
  var size;

  // start analyze
  $('#check').click(function (e) {
    if (pointCount < 3) {
      $('#check').attr('href', '#dialog');
    } else {
      $('#check').attr('href', '#confirm');
    }
  });

  $('#dialogConfirm').click(function (e) {
    var bAngle = Math.round((90 - angleCompute(point[1].x, point[1].y, point[0].x, point[0].y)) * 10) / 10;
    var cAngle = Math.round((90 - angleCompute(point[1].x, point[1].y, point[2].x, point[2].y)) * 10) / 10;

    window.location.href = $.domainName + "/result?bAngle=" + bAngle + "&cAngle=" + cAngle + "&referenceId=" + referenceId + "&points=" + JSON.stringify(point) + "&size=" + size;
  });

  $('#notice').click(function (e) {
    $('#notice').attr('href', '#alert');
  });

  $('#remind').click(function (e) {
    $('.ptImg').attr('src', $.domainName + "/private/userUpload/IMAGE/" + imageId);
    $('.ptImg')[0].onload = function () {
      size = this.width + ',' + this.height;
      console.log(size);
      // alert(size);
    };
  });

  $('#dontRemind').click(function (e) {
    var postData = {
      uid: uid
    }
    $.ajax({
      type: "POST",
      url: $.domainName + '/changeNoticeStatus',
      data: postData
    }).success(function (response) {
      console.log(response);
    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });

    $('.ptImg').attr('src', $.domainName + "/private/userUpload/IMAGE/" + imageId);
    $('.ptImg')[0].onload = function () {
      size = this.width + ',' + this.height;
      console.log(size);
      // alert(size);
    };
  });

  // remove dot on the image
  $('#back').click(function (e) {
    if (pointCount != 0) {
      $('div .dot').last().remove();
      point.pop();
      pointCount--;
    }
  });

  $(".ptImg").click(function (e) {
    if (pointCount < 3) {
      mouseX = e.pageX;
      mouseY = e.pageY;
      point[pointCount] = {
        x: mouseX - $(this).offset().left,
        y: mouseY - $(this).offset().top
      };

      var color = '#FF0000';
      var size = 6;
      $(".ptImg-box").append(
        $('<div class=\'dot\'></div>')
          .css('position', 'absolute')
          .css('top', mouseY - size / 2 + 'px')
          .css('left', mouseX - size / 2 + 'px')
          .css('width', size + 'px')
          .css('height', size + 'px')
          .css('background-color', color)
          .css('border-radius', '25px')
      );
      pointCount++;

      point.sort(function (a, b) {
        return a["y"] - b["y"];
      });
      console.log(point);
    }

  });

  var angleCompute = function (x1, y1, x2, y2) {
    // 直角的邊長
    var x = Math.abs(x1 - x2);
    var y = Math.abs(y1 - y2);
    // 斜邊長
    var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    // 餘弦
    var cos = y / z;
    // 弧度
    var radina = Math.acos(cos);
    // 角度
    var angle = 180 / (Math.PI / radina);
    return angle;
  }

  var init = function () {
    $('.ptImg').attr('src', $.domainName + "/private/userUpload/IMAGE/" + imageId);
    $('.ptImg')[0].onload = function () {
      size = this.width + ',' + this.height;
      console.log(size);
      // alert(size);
    };
    // $.ajax({
    //   type: "GET",
    //   url: $.domainName + '/getNoticeStatus?uid=' + uid
    // }).success(function (response) {
    //   console.log(response);

    //   if (response != "N") {
    //     $('#notice').click();
    //   } else {
    //     $('.ptImg').attr('src', $.domainName + "/images/" + imageId);
    //     $('.ptImg')[0].onload = function () {
    //       size = this.width + ',' + this.height;
    //       console.log(size);
    //       // alert(size);
    //     };
    //   }

    // }).fail(function (response) {
    //   console.info(response);
    //   $.FailResponse(response);
    // }).done(function () {
    // });

  }

  init();
});