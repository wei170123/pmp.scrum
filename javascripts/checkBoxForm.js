$(function () {
  /* Step1 Click Event */
  $('.list-item:not(".submit") label').click(function () {//checkbox的input標籤點選事件

    // Not click
    if ($(this).find('img').css("-webkit-filter") == "none") {
      if (sports.length >= 2) {
        alert("最多兩個選項!");
        return;
      }
      else {
        $(this).find('img').css("-webkit-filter", "brightness(0.5)");
        $(this).find('img').css("filter", "brightness(0.5)");
        $(this).find('img').css("-webkit-transform", "translate3d(-50%, -50%, 0) scale(1.2)");
        $(this).find('img').css("transform", "translate3d(-50%, -50%, 0) scale(1.2)");

        sports.push($(this).find('h2').text());
      }
    }
    else {// clicked
      $(this).find('img').css("-webkit-filter", "none");
      $(this).find('img').css("filter", "none");
      $(this).find('img').css("-webkit-transform", "translate3d(-50%, -50%, 0) scale(1)");
      $(this).find('img').css("transform", "translate3d(-50%, -50%, 0) scale(1)");

      var index = sports.indexOf($(this).find('h2').text());
      if (index > -1) {
        sports.splice(index, 1);
      }
      else {
        sports.push($(this).find('h2').text());
      }
    }
    // console.log(sports);
  });

  var sports = [];
  $('#next1').click(function () {

    if (sports.length == 0) {
      alert("請選擇您感興趣的選項!");
      return;
    }
    else if (sports.length > 2) {
      alert("請勿超過兩個選項!");
      return;
    }

    $('.step1').hide();
    $('.step2').show();
  });

  /* Step2 Click Event */
  var preferScore = -100;
  $('.btn-list label').click(function () {
    // console.log($(this).prev('input').val());
    preferScore = $(this).prev('input').val()
  });

  $('#last21').click(function () {
    $('.step1').show();
    $('.step2').hide();
  });
  $('#next2').click(function () {
    if (!preferScore || preferScore == -100) {
      alert("請選擇您感興趣的選項!");
      return;
    }

    $('.step2').hide();
    $('.step3').show();
  });

  /* Step3 Click Event */
  $('#last22').click(function () {
    preferScore = -100;
    $('.step2').show();
    $('.step3').hide();
  });

  var sportDay = 0;
  var sportTime = 0;
  var sitDownTime = 0;
  $('#next3').click(function () {
    sportDay = Number($("#sportDay").val());
    sportTime = Number($("#sportTime").val()) / 2;
    sitDownTime = Number($("#sitDownTime").val());
    // console.log(sportDay);
    // console.log(sportTime);
    // console.log(sitDownTime);

    $('.step3').hide();
    $('.step4').show();
  });

  /* Step4 Click Event */
  $('#last23').click(function () {
    preferScore = -100;
    $('.step3').show();
    $('.step4').hide();
  });

  var painStatus;
  var painArea;
  var painPart;
  var painScore = 0;
  $("input[name=painStatus]").change(function () {
    painStatus = $('input[name=painStatus]:checked').val();
    // console.log("painStatus");
    // console.log(painStatus);

    if (painStatus == 1) {
      $(".pain").show();
    } else {
      $(".pain").hide();
    }
  });

  $("#painArea").change(function () {
    painArea = $('#painArea').val();

    if (painArea == 0) {
      $("#painPart").children().remove();
      // $("#painPart").append('<option value="0">請選擇</option>')
    }
    else if (painArea == "上肢") {
      $("#painPart").children().remove();
      // $("#painPart").append('<option value="0">請選擇</option>')
      $("#painPart").append('<option value="手">手</option>')
      $("#painPart").append('<option value="前臂">前臂</option>')
      $("#painPart").append('<option value="上臂">上臂</option>')
      $("#painPart").append('<option value="肩膀">肩膀</option>')
      $("#painPart").append('<option value="手肘">手肘</option>')
      $("#painPart").append('<option value="手腕">手腕</option>')
    }
    else if (painArea == "下肢") {
      $("#painPart").children().remove();
      // $("#painPart").append('<option value="0">請選擇</option>')
      $("#painPart").append('<option value="髖部">髖部</option>')
      $("#painPart").append('<option value="大腿">大腿</option>')
      $("#painPart").append('<option value="小腿">小腿</option>')
      $("#painPart").append('<option value="膝蓋">膝蓋</option>')
      $("#painPart").append('<option value="小腿">小腿</option>')
      $("#painPart").append('<option value="腳踝">腳踝</option>')
      $("#painPart").append('<option value="足部">足部</option>')
    }
    else if (painArea == "軀幹") {
      $("#painPart").children().remove();
      // $("#painPart").append('<option value="0">請選擇</option>')
      $("#painPart").append('<option value="頸部">頸部</option>')
      $("#painPart").append('<option value="上背部">上背部</option>')
      $("#painPart").append('<option value="下背部">下背部</option>')
      $("#painPart").append('<option value="骨盆">骨盆</option>')
    }
  });

  $('#next4').click(function () {
    painStatus = $('input[name=painStatus]:checked').val();

    if (painStatus == 1) {
      painArea = $('#painArea').val();
      painPart = $('#painPart').val();
      painScore = $('#painScore').val();
    }
    else {
      painArea = "";
      painPart = "";
      painScore = 0;
    }
    // console.log(painStatus);
    // console.log(painArea);
    // console.log(painPart);
    // console.log(painScore);

    $('.step4').hide();
    $('.step5').show();
  });

  /* Step5 Click Event */
  $('#last24').click(function () {
    preferScore = -100;
    $('.step4').show();
    $('.step5').hide();
  });

  $('input[name="informMethod"]').change(function () {
    if ($('#email').prop('checked')) {
      $('#emailAdd').attr('disabled', false);
    } else {
      $('#emailAdd').attr('disabled', true).val('');
    }
  })
  $('#emailAdd').on('focus', function () {
    var _this = this;
    setTimeout(function () {
      _this.scrollIntoViewIfNeeded();
    }, 200);
  })

  // var freq;
  var informMethod;
  $('#submitChecked').click(
    function () {
      informMethod = [];
      informMethod.push($('input[name=informMethod]:checked').val());

      if (informMethod.includes('EMAIL') && !$('#emailAdd').val()) {
        alert("請填寫Email!");
        return;
      }

      if (informMethod.includes('EMAIL') && $('#emailAdd').val()) {
        var re = /\S+@\S+\.\S+/;
        if (re.test(String($('#emailAdd').val()).toLowerCase())) {

        }
        else {
          alert("請填寫有效的Email!");
          return;
        }
      }

      var postData = {
        "sports": sports,
        "preferScore": preferScore,
        "sportDay": sportDay,
        "sportTime": sportTime,
        "sitDownTime": sitDownTime,
        "painStatus": painStatus,
        "painArea": painArea,
        "painPart": painPart,
        "painScore": painScore,
        "informMethod": informMethod,
        "emailAddress": $('#emailAdd').val()
      }
      console.log(postData);

      if (!confirm("確認送出?")) {
        return;
      }

      $.ajax({
        // async: false,
        type: "POST",
        url: $.domainName + '/checkBox/checkData',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(postData)
      }).success(function (response) {
        console.log(response);
        window.location.href = "https://line.me/R/ti/p/@gki0084c";
      }).fail(function (response) {
        console.info(response);
        alert("閒置超時，請重來一次。");
      }).done(function () {
      });
    }
  );

});