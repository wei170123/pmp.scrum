$(function () {
  console.log("LineUserSportsList Page");
  var uid = $.urlParam("uid");
  var setClone;

  var init = function () {
    $.ajax({
      type: "GET",
      url: $.domainName + '/lineUserSports?uid=' + uid
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
            setClone.find("#title").html(dateStr + '<span class="ui-li-count">最新處方</span>');
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
        subSetClone.find("#mTitle").html((prescription.title ? prescription.title : dateStr) + '<span class="ui-li-count" id="dataCount">' + prescription.sports.length + '項運動</span>');
        subSetClone.append("<ul id='ulView' data-role='listview'></ul>");
        if (mTitleCount == 0) {
          subSetClone.attr('data-theme', 'e');
          subSetClone.attr('data-collapsed', 'false');
          mTitleCount++;
        }
        subSetClone.trigger("create");

        for (var sport of prescription.sports) {
          var liClone = liTemplate.clone();
          liClone.find("#sportName").html(sport.sportsName);
          liClone.find("#sportContent").text(sport.sportsContent);
          liClone.find("#sportDetail").attr('href', '#detailPage');
          liClone.find("#sportDetail").attr('data-details', JSON.stringify(sport));
          subSetClone.find("#ulView").append(liClone).listview().listview("refresh");
        }
        // delete button
        var buttonClone = liDelete.clone();
        buttonClone.find('#btn_delete').val(prescription._id);
        subSetClone.find("#ulView").append(buttonClone).listview().listview('refresh');
        // delete button event
        if (count + 1 == listLength) {
          buttonClone.find('#btn_delete').click(function () {
            var thisBtn = $(this);
            var postData = {
              id: $(this).val(),
              beforeLastId: beforeLastId,
              uid: uid,
              delete: true
            }

            $.ajax({
              type: "POST",
              url: $.domainName + '/lineUserSports/delete',
              data: postData
            }).success(function (response) {
              // var divlength = thisBtn.closest('#setTemplate').find('div[data-role=collapsible]').length;
              // if (divlength - 1 == 0) {
              //   thisBtn.closest('#setTemplate').remove();
              // } else {
              //   thisBtn.closest('div[data-role=collapsible]').remove();
              // }
              window.location.reload();
            }).fail(function (response) {
              console.info(response);
              $.FailResponse(response);
            }).done(function () {
            });
          });
        } else {
          buttonClone.find('#btn_delete').click(function () {
            var thisBtn = $(this);
            var postData = {
              id: $(this).val(),
              beforeLastId: beforeLastId,
            }

            $.ajax({
              type: "POST",
              url: $.domainName + '/lineUserSports/delete',
              data: postData
            }).success(function (response) {
              // var divlength = thisBtn.closest('#setTemplate').find('div[data-role=collapsible]').length;
              // if (divlength - 1 == 0) {
              //   thisBtn.closest('#setTemplate').remove();
              // } else {
              //   thisBtn.closest('div[data-role=collapsible]').remove();
              // }
              window.location.reload();
            }).fail(function (response) {
              console.info(response);
              $.FailResponse(response);
            }).done(function () {
            });
          });
        }

        // add notice Btn
        if (count == 0) {
          var data = {
            uid: uid
          }
          $.ajax({
            type: "POST",
            async: false,
            url: $.domainName + '/lineUserSports/getNoticeStatus',
            data: data
          }).success(function (response) {
            console.log(response);
            if (response) {
              // cancel button
              var buttonCancelClone = liCancel.clone();
              buttonCancelClone.find('#btn_cancel').val(prescription._id);
              subSetClone.find("#ulView").append(buttonCancelClone).listview().listview('refresh');

              buttonCancelClone.find('#btn_cancel').click(function () {
                var thisBtn = $(this);
                var postData = {
                  uid: uid
                }

                $.ajax({
                  type: "POST",
                  url: $.domainName + '/lineUserSports/cancel',
                  data: postData
                }).success(function (response) {
                  window.location.reload();
                }).fail(function (response) {
                  console.info(response);
                  $.FailResponse(response);
                }).done(function () {
                });
              });

              // modify button
              var buttonModifyClone = liModify.clone();
              buttonModifyClone.find('#modifyNoticeTime').val(response.noticeTime);
              subSetClone.find("#ulView").append(buttonModifyClone).listview().listview('refresh');
              buttonModifyClone.find('#btn_modify').click(function () {
                // var thisBtn = $(this);
                console.log($('#modifyNoticeTime').val());
                var postData = {
                  uid: uid,
                  date: $('#modifyNoticeTime').val()
                }

                $.ajax({
                  type: "POST",
                  url: $.domainName + '/lineUserSports/open',
                  data: postData
                }).success(function (response) {
                  window.location.reload();
                }).fail(function (response) {
                  console.info(response);
                  $.FailResponse(response);
                }).done(function () {
                });
              });
            } else {
              // open button
              var buttonOpenClone = liOpen.clone();
              subSetClone.find("#ulView").append(buttonOpenClone).listview().listview('refresh');
              buttonOpenClone.find('#btn_open').click(function () {
                var thisBtn = $(this);
                // console.log($('#noticeTime').val());
                var postData = {
                  uid: uid,
                  date: $('#noticeTime').val()
                }

                $.ajax({
                  type: "POST",
                  url: $.domainName + '/lineUserSports/open',
                  data: postData
                }).success(function (response) {
                  window.location.reload();
                }).fail(function (response) {
                  console.info(response);
                  $.FailResponse(response);
                }).done(function () {
                });
              });
            }
          }).fail(function (response) {
            console.info(response);
            $.FailResponse(response);
          }).done(function () {
          });

        }

        setClone.append(subSetClone);

        $("#divContent").append(setClone);
        count++;
      }
      $('div[data-role=collapsible]').collapsible();

      // Sport Detail
      $("ul[data-role=listview]").on("click", "li a", function (e) {
        var sportData = $(this).data("details");

        $("#theDetails").empty();
        $("#theDetails").append("<p>運動名稱: " + sportData.sportsName + "</p>");
        $("#theDetails").append("<p>運動內容: " + sportData.sportsContent + "</p>");

        $('.slickImg').remove();
        var slickCLone = slickImgTemplate.clone();
        if (sportData.referenceId.length > 1) {
          for (var img of sportData.referenceId) {
            slickCLone.append("<div><img src=\"" + img.resourcePath + "\"width=\"100%\"></div>");
          }

          $('.slickImgDiv').append(slickCLone);

          slickCLone.slick({
            dots: true,
            infinite: true,
            arrows: false,
            lazyLoad: 'ondemand',
          }).slick('refresh');
        } else {
          $('.slickImgDiv').append("<div><img src=\"" + sportData.referenceId[0].resourcePath + "\"width=\"100%\"></div>");
        }

      });

    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });
  };

  var slickImgTemplate = $('.slickImg').clone();
  $('.slickImg').remove();

  var liTemplate = $('#sportLi').clone();
  $('#sportLi').remove();
  var liDelete = $('#li_delete').clone();
  $('#li_delete').remove();

  var liModify = $('#li_modify').clone();
  $('#li_modify').remove();

  var liCancel = $('#li_cancel').clone();
  $('#li_cancel').remove();

  var liOpen = $('#li_open').clone();
  $('#li_open').remove();

  $('#ulView').remove();

  var subSetTemplate = $('#subSetTemplate').clone();
  $('#subSetTemplate').remove();
  var setTemplate = $('#setTemplate').clone();
  $('#setTemplate').remove();

  init();
});