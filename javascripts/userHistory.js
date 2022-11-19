$(function () {
  console.log("LineUserHistoryList Page");
  var uid = $.urlParam("uid");
  var setClone;

  var resultMsg = function (details) {
    var d = details.split(',');
    // console.log(d);
    var neckAngel = parseFloat(d[0]);
    var shoulderAngle = parseFloat(d[1]);
    if (50 > neckAngel && 52 > shoulderAngle) {
      return msg = "<font color=\"#FF0000\">頸部不適高危險群</font> / <font color=\"#FF0000\">肩部不適高危險群</font>";
    } else if (50 > neckAngel && 52 < shoulderAngle) {
      return msg = "<font color=\"#FF0000\">頸部不適高危險群</font> / 肩部正常";
    } else if (50 < neckAngel && 52 > shoulderAngle) {
      return msg = "頸部正常 / <font color=\"#FF0000\">肩部不適高危險群</font>";
    } else if (50 < neckAngel && 52 < shoulderAngle) {
      return msg = "頸部正常 / 肩部正常";
    }
  };

  var getImage = function (referenceId, imgHtml, points, size) {
    // var url = $.domainName + '/resultHistory/getImage?referenceId=' + referenceId;
    // console.log(url);
    var pointsArr = JSON.parse(decodeURI(points));
    // console.log(pointsArr);
    var sizeArr = String(size).split(',');
    // console.log(sizeArr);

    var ctx = imgHtml.find('#imgCanvas')[0].getContext('2d');
    $.ajax({
      type: "GET",
      url: $.domainName + '/resultHistory/getImage?referenceId=' + referenceId
    }).success(function (response) {
      var image = new Image();
      image.src = response;

      image.onload = function () {
        imgHtml.find('#imgCanvas')[0].height = image.height * imgHtml.find('#imgCanvas')[0].width / image.width;

        console.log(imgHtml.find('#imgCanvas')[0].width);
        console.log(imgHtml.find('#imgCanvas')[0].height);
        var scaleX = sizeArr[0] / imgHtml.find('#imgCanvas')[0].width;
        var scaleY = sizeArr[1] / imgHtml.find('#imgCanvas')[0].height;
        // console.log(scaleX);
        // console.log(scaleY);
        ctx.drawImage(image, 0, 0, imgHtml.find('#imgCanvas')[0].width, imgHtml.find('#imgCanvas')[0].height);

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

      imgHtml.find('#deleteBtn').click(function () {
        $.ajax({
          type: "GET",
          url: $.domainName + '/resultHistory/deleteHistoryResult?referenceId=' + referenceId
        }).success(function (response) {
          console.log("Success");
          $("#select-custom-14 option[value='" + referenceId + "']").remove();
          $("#select-custom-15 option[value='" + referenceId + "']").remove();

          $('#select-custom-14').selectmenu("refresh");
          $('#select-custom-15').selectmenu("refresh");

          // console.log($("#select-custom-14 option").size());
          if ($("#select-custom-14 option").size() == 0) {
            $('#selectfieldset').remove();
            $('#aTemplate').remove();
            $('#noResult').html("沒有歷史結果喔!");
          } else if ($("#select-custom-14 option").size() == 1) {
            $('#select-custom-14').change();
            $('#bTemplate').remove();
          } else {
            $('#select-custom-14').change();
            $('#select-custom-15').change();
          }
        }).fail(function (response) {
          console.info(response);
        }).done(function () {
        });
      });

    }).fail(function (response) {
      console.info(response);
    }).done(function () {
    });

  };

  var historyDetailArr = {};
  var init = function () {

    $.ajax({
      type: "GET",
      url: $.domainName + '/resultHistory/historyList'
    }).success(function (response) {
      // console.log(response);
      for (var result of response) {
        // console.log(result);
        var option = optionsTemplate.clone();
        $('#select-custom-14').append('<option value="' + result.referenceId + '">' + moment(result.createTime).format("YYYY/MM/DD HH:mm") + '</option>').selectmenu().selectmenu("refresh");;
        $('#select-custom-15').append('<option value="' + result.referenceId + '">' + moment(result.createTime).format("YYYY/MM/DD HH:mm") + '</option>').selectmenu().selectmenu("refresh");;

        historyDetailArr[result.referenceId] = result;
      }

      var rLength = response.length;
      // var rLength = 0;
      if (rLength >= 2) {
        var dateStr1 = moment(response[rLength - 1].createTime).format("YYYY/MM/DD HH:mm");
        var dateStr2 = moment(response[rLength - 2].createTime).format("YYYY/MM/DD HH:mm");
        $('#aTemplate').find('#title').html(dateStr1 + "結果");
        $('#aTemplate').find('#detail').html(resultMsg(response[rLength - 1].detail));
        getImage(response[rLength - 1].referenceId, $('#aTemplate'), response[rLength - 1].points, response[rLength - 1].size);

        $('#bTemplate').find('#title').html(dateStr2 + "結果");
        $('#bTemplate').find('#detail').html(resultMsg(response[rLength - 2].detail));
        getImage(response[rLength - 2].referenceId, $('#bTemplate'), response[rLength - 2].points, response[rLength - 2].size);

        $('#select-custom-14')[0].selectedIndex = rLength - 1;
        $('#select-custom-14').selectmenu("refresh");
        $('#select-custom-15')[0].selectedIndex = rLength - 2;
        $('#select-custom-15').selectmenu("refresh");
      }
      else if (rLength == 1) {
        $('#selectfieldset').remove();
        $('#bTemplate').remove();
        var dateStr1 = moment(response[rLength - 1].createTime).format("YYYY/MM/DD HH:mm");
        $('#aTemplate').find('#title').html(dateStr1 + "結果");
        $('#aTemplate').find('#detail').html(resultMsg(response[rLength - 1].detail));
        getImage(response[rLength - 1].referenceId, $('#aTemplate'), response[rLength - 1].points, response[rLength - 1].size);

        // $('#noResult').html("您只使用了一次!");
      }
      else {
        $('#selectfieldset').remove();
        $('#bTemplate').remove();
        $('#aTemplate').remove();
        $('#noResult').html("沒有歷史結果喔!");
      }

      $('div[data-role=collapsible]').collapsible();
    }).fail(function (response) {
      console.info(response);
      $('#selectfieldset').remove();
      $('#bTemplate').remove();
      $('#aTemplate').remove();
      $('#noResult').html("沒有歷史結果喔!");
    }).done(function () {
    });
  };

  var optionsTemplate = $('#optionSelect').clone();
  $('#optionSelect').remove();

  $('#select-custom-14').change(function () {
    var selectValue = $(this).find('option:selected').val();
    getImage(selectValue, $('#aTemplate'), historyDetailArr[selectValue].points, historyDetailArr[selectValue].size);

    var selectText = $(this).find('option:selected').text();
    $('#aTemplate').find('#title').text(selectText + "結果");
  });

  $('#select-custom-15').change(function () {
    var selectValue = $(this).find('option:selected').val();
    getImage(selectValue, $('#bTemplate'), historyDetailArr[selectValue].points, historyDetailArr[selectValue].size);

    var selectText = $(this).find('option:selected').text();
    $('#bTemplate').find('#title').text(selectText + "結果");
  });

  init();
});