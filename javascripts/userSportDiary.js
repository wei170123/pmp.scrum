$(function () {
  console.log("LineUserSportsDiary Page");
  var uid = $.urlParam("uid");
  var setClone;

  var init = function () {
    $('#newDiary').attr('href', $.domainName + "/lineUserSports/sportDescriptionPage?uid=" + uid + "&sportsDetailId=9999");
    $.ajax({
      type: "GET",
      url: $.domainName + '/resultUserSportDiary/diaryList?uid=' + uid
    }).success(function (response) {
      console.log(response);
      var listLength = response.length;
      var count = 0;
      var mTitleCount = 0; // 處方名稱1 計數器
      var beforeLastId;
      if (listLength > 2) {
        beforeLastId = response[listLength - 2]._id;
      } else if (listLength == 2) {
        beforeLastId = response[1]._id;
      } else {
        beforeLastId = response[0]._id;
      }

      var beforeDay = '';
      for (var prescription of response) {
        console.log(prescription);
        var dateStr = moment(prescription.createTime).format("YYYY/MM/DD");

        if (beforeDay != dateStr) {
          setClone = setTemplate.clone();
          // 日期區分
          setClone.find("#title").html(dateStr);
          if (count == 0) {
            setClone.find("#title").html(dateStr + '<span class="ui-li-count">最新日記</span>');
            setClone.attr('data-theme', 'e');
            setClone.attr('data-collapsed', 'false');
          }
        }
        beforeDay = dateStr;

        /**
         * 處方內容
         * 標題 = mTitle
         * 運動項目 = ulView
         * */
        var subSetClone = subSetTemplate.clone();
        var dateTimeStr = moment(prescription.createTime).format("YYYY/MM/DD HH:mm");
        subSetClone.find("#mTitle").html(dateTimeStr);
        subSetClone.append("<ul id='ulView' data-role='listview'></ul>");
        if (mTitleCount == 0) {
          subSetClone.attr('data-theme', 'e');
          subSetClone.attr('data-collapsed', 'false');
          mTitleCount++;
        }
        subSetClone.trigger("create");

        setClone.append(subSetClone);

        $("#divContent").append(setClone);
        count++;

        // Diary Detail
        var liClone = liTemplate.clone();
        liClone.find("#diaryContent").html(prescription.description);
        subSetClone.find("#ulView").append(liClone).listview().listview("refresh");
      }
      $('div[data-role=collapsible]').collapsible();



    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });
  };

  var slickImgTemplate = $('.slickImg').clone();
  $('.slickImg').remove();

  var liTemplate = $('#diaryLi').clone();
  $('#diaryLi').remove();

  $('#ulView').remove();

  var subSetTemplate = $('#subSetTemplate').clone();
  $('#subSetTemplate').remove();
  var setTemplate = $('#setTemplate').clone();
  $('#setTemplate').remove();

  init();
});