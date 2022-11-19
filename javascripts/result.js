$(function () {
  console.log("Result Page");
  var bAngle = $.urlParam("bAngle");
  var cAngle = $.urlParam("cAngle");
  // var uid = $.urlParam("uid");
  var referenceId = $.urlParam("referenceId");
  var points = $.urlParam("points");
  var size = $.urlParam("size");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $("#myBtn").css('display', 'block');
    } else {
      $("#myBtn").css('display', 'none');
    }
  });

  $('#myBtn').click(function () {
    $.mobile.silentScroll(0);
  });

  $('#addSportList').click(function (e) {
    $('#addSportList').attr('href', '#confirm');
  });

  // $('#confirm').click(function (e) {
  //   var sportIdArr = $('.sportId').val().split(',');
  //   var tmpdetails = [];
  //   var tmpnumbers = [];
  //   var tmpsetTimesArr = [];
  //   for (var sportId of sportIdArr) {
  //     tmpdetails._id = sportId;

  //     tmpsetTimesArr.push(3);
  //     tmpnumbers.push(10);
  //   }

  //   var postData = {
  //     uid: uid,
  //     title: moment(new Date()).format("YYYY/MM/DD") + '建議運動',
  //     noticeTime: '20:0',
  //     details: tmpdetails,
  //     setTimesArr: tmpsetTimesArr,
  //     numbers: tmpnumbers
  //   }
  //   // console.log("---------");
  //   // console.log(postData);

  //   // save Result
  //   $.ajax({
  //     type: "POST",
  //     url: $.domainName + '/lineUserSports/save',
  //     data: postData
  //   }).success(function (response) {
  //     console.log(response);
  //   }).fail(function (response) {
  //     console.info(response);
  //     // $.FailResponse(response);
  //   }).done(function () {
  //   });

  //   // window.location.href = $.domainName + "/lineUserSports/index?uid=" + uid;
  // });

  var getImage = function (referenceId, points, size) {
    // var url = $.domainName + '/resultHistory/getImage?referenceId=' + referenceId;
    // console.log(url);
    var pointsArr = JSON.parse(decodeURI(points));
    // console.log(pointsArr);
    var sizeArr = String(size).split(',');
    // console.log(sizeArr);

    var ctx = $('#imgCanvas')[0].getContext('2d');
    $.ajax({
      type: "GET",
      url: $.domainName + '/resultHistory/getImage?referenceId=' + referenceId
    }).success(function (response) {
      var image = new Image();
      image.src = response;

      image.onload = function () {
        $('#imgCanvas')[0].height = image.height * $('#imgCanvas')[0].width / image.width;

        var scaleX = sizeArr[0] / $('#imgCanvas')[0].width;
        var scaleY = sizeArr[1] / $('#imgCanvas')[0].height;
        // console.log(scaleX);
        // console.log(scaleY);
        ctx.drawImage(image, 0, 0, $('#imgCanvas')[0].width, $('#imgCanvas')[0].height);

        // console.log(pointsArr[0].x);
        // 畫線
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        ctx.moveTo(pointsArr[0].x / scaleX, pointsArr[0].y / scaleY);
        ctx.lineTo(pointsArr[1].x / scaleX, pointsArr[1].y / scaleY);
        ctx.lineTo(pointsArr[2].x / scaleX, pointsArr[2].y / scaleY);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(pointsArr[0].x / scaleX, pointsArr[0].y / scaleY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(pointsArr[1].x / scaleX, pointsArr[1].y / scaleY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(pointsArr[2].x / scaleX, pointsArr[2].y / scaleY, 6, 0, Math.PI * 2);
        ctx.fill();
      }

    }).fail(function (response) {
      console.info(response);
    }).done(function () {
    });

  };

  var init = function (bAngle, cAngle) {
    $('.headResult').text("頭部前傾角度 : " + bAngle + "度");
    $('.shoudlerResult').text("肩膀圓肩角度 : " + cAngle + "度");
    $('.totalResult').append(result(bAngle, cAngle));
    $('div[data-role=collapsible]').collapsible({
      expand: function (event, ui) {
        var position = $(this).offset().top;
        $.mobile.silentScroll(position);
      }
    });

    getImage(referenceId, points, size);

    var postData = {
      // uid: uid,
      referenceId: referenceId,
      detail: bAngle + "," + cAngle,
      points: points,
      size: size
    };
    // save Result
    $.ajax({
      type: "POST",
      url: $.domainName + '/resultHistory/save',
      data: postData
    }).success(function (response) {
      console.log(response);
    }).fail(function (response) {
      console.info(response);
      // $.FailResponse(response);
    }).done(function () {
    });
  }

  var result = function (neckAngel, shoulderAngle) {
    var msg;
    neckAngel = parseFloat(neckAngel);
    shoulderAngle = parseFloat(shoulderAngle);
    if (50 > neckAngel && 52 > shoulderAngle) {
      msg = "<font color=\"#FF0000\">頸部不適高危險群</font> / <font color=\"#FF0000\">肩部不適高危險群</font>";
      var content =
        '<input class="sportId" value="3,6,4,1,2,5" hidden/>' +
        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>1.拉筋-胸肌</h3>' +
        '<center><img src="/images/sport/1/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/1/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/1/3.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>2.拉筋-斜角肌</h3>' +
        '<center><img src="/images/sport/2/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/2/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/2/3.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>3.拉筋-斜方肌</h3>' +
        '<center><img src="/images/sport/3/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/3/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/3/3.jpg" width="100%"><p>' +
        '<img src="/images/sport/3/4.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>4.小飛俠運動</h3>' +
        '<center><img src="/images/sport/4/1.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>5.肩外轉運動</h3>' +
        '<center><img src="/images/sport/5/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/5/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/5/3.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>6.縮下巴運動</h3>' +
        '<center><img src="/images/sport/6/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/6/2.jpg" width="100%"></center>' +
        '</div>';

      $('#collapsibleList').append(content);
      // $('.headResult').text("頭部前傾角度 < " + bAngle + "度");
      // $('.shoudlerResult').text("肩膀圓肩角度 < " + cAngle + "度");
    } else if (50 > neckAngel && 52 < shoulderAngle) {
      msg = "<font color=\"#FF0000\">頸部不適高危險群</font> / 肩部正常";
      var content =
        '<input class="sportId" value="6,4,5" hidden/>' +
        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>1.拉筋-斜角肌</h3>' +
        '<center><img src="/images/sport/2/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/2/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/2/3.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>2.拉筋-斜方肌</h3>' +
        '<center><img src="/images/sport/3/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/3/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/3/3.jpg" width="100%"><p>' +
        '<img src="/images/sport/3/4.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>3.縮下巴運動</h3>' +
        '<center><img src="/images/sport/6/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/6/2.jpg" width="100%"></center>' +
        '</div>';
      $('#collapsibleList').append(content);
      // $('.headResult').text("頭部前傾角度 < " + bAngle + "度");
      // $('.shoudlerResult').text("肩膀圓肩角度 > " + + cAngle + "度");
    } else if (50 < neckAngel && 52 > shoulderAngle) {
      msg = "頸部正常 / <font color=\"#FF0000\">肩部不適高危險群</font>";
      var content =
        '<input class="sportId" value="3,1,2" hidden/>' +
        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>1.拉筋-胸肌</h3>' +
        '<center><img src="/images/sport/1/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/1/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/1/3.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>2.小飛俠運動</h3>' +
        '<center><img src="/images/sport/4/1.jpg" width="100%"><p>' +
        '</div>' +

        '<div data-role="collapsible" data-collapsed-icon="carat-d" data-expanded-icon="carat-u" data-theme="b">' +
        '<h3>3.肩外轉運動</h3>' +
        '<center><img src="/images/sport/5/1.jpg" width="100%"><p>' +
        '<img src="/images/sport/5/2.jpg" width="100%"><p>' +
        '<img src="/images/sport/5/3.jpg" width="100%"><p>' +
        '</div>';

      $('#collapsibleList').append(content);
      // $('.headResult').text("頭部前傾角度 > " + bAngle + "度");
      // $('.shoudlerResult').text("肩膀圓肩角度 < " + cAngle + "度");
    } else if (50 < neckAngel && 52 < shoulderAngle) {
      msg = "頸部正常 / 肩部正常";
      $('.cheerMsg').text('恭喜你! 請持續保持良好的生活姿勢!');
      // $('.headResult').text("頭部前傾角度 > " + bAngle + "度");
      // $('.shoudlerResult').text("肩膀圓肩角度 > " + cAngle + "度");
    }
    return msg;
  }

  init(bAngle, cAngle);

});