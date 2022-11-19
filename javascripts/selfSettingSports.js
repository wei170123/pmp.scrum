$(function () {
  console.log("SelfSetting Page");
  var uid = $.urlParam("uid");

  $('#add').click(function () {
    var template = uploadImgTemplate.clone(true);
    $('table').append(template);
  })

  $('#delete').click(function () {
    if ($('tr').length > 1) {
      $('tr:last').remove();
    }
  })

  $('#save').click(function (e) {
    // $.each($('.sportImgId'), function (i, o) {
    //   if (!$(o).val()) {
    //     alert('確認欄位是否填妥');
    //   }
    // });

    if ($('#sportName').val() || $('#sportContent').val()) {

      $('#save').attr('href', '#confirm');
    } else {
      alert('確認欄位是否填妥');
    }


  });

  $('#dialogConfirm').click(function (e) {

    var imgId = [];

    $.each($('.sportImgId'), function (i, o) {
      imgId.push($(o).val());
    });

    var postData = {
      uid: uid,
      sportName: $('#sportName').val(),
      sportContent: $('#sportContent').val(),
      sportImgId: JSON.stringify(imgId)
    };

    console.log(postData);

    $.ajax({
      type: 'POST',
      // contentType: "application/json",
      url: $.domainName + "/sports/save",
      data: postData
    }).success(function (response) {
      // console.info(response);

      window.location.href = $.domainName + '/Web/Mobile/SportsDB/index.html#/tab/selfSetting/' + uid;
    }).fail(function (response) {
      console.info(response);
      alert("上傳失敗，請找相關人員查詢問題");
    }).done(function () {
    });

  });

  // 讀檔
  var reader = new FileReader();
  var img = new Image();
  // var img = $('#sportImg')[0];

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  // 上傳圖片
  $('.sportImgInput').on("change", function (event) {
    var thisBtn = $(this);
    // var input = event.currentTarget;

    // if (input.files && input.files[0]) {
    // var fileName = input.files[0].name;
    // console.info("fileName : " + fileName);
    // var form_data = new FormData();

    // form_data.append("filePart", input.files[0]);

    // // console.log($(this));
    // // console.log($(this).closest('#sportDiv').find('#sportImg'));
    // // $('.LyMain').block($.BCS.blockMsgUpload);
    // $.ajax({
    //   type: 'POST',
    //   url: $.domainName + "/selfSetting/upload",
    //   cache: false,
    //   contentType: false,
    //   processData: false,
    //   data: form_data
    // }).success(function (response) {
    //   // console.info(response);
    //   alert("上傳成功!");
    //   thisBtn.closest('td').find('#sportImg').attr('src', $.domainName + '/images/uploads/' + response.referenceId);
    //   thisBtn.closest('td').find('#sportImgId').val(response._id);
    //   // $('#sportImg').attr('src', $.domainName + '/images/uploads/' + response);
    // }).fail(function (response) {
    //   console.info(response);
    //   alert("上傳失敗，請找相關人員查詢問題");
    // }).done(function () {
    // });
    // }

    reader.onload = function (e) {
      img.src = e.target.result;
    };

    img.onload = function () {
      var originWidth = this.width;
      var originHeight = this.height;
      console.log("-------");
      console.log(originWidth);
      console.log(originHeight);
      console.log("++++++");
      console.log(originWidth / originHeight);

      var maxWidth = 800, maxHeight = 600;
      console.log(maxWidth / maxHeight);

      var targetWidth = originWidth, targetHeight = originHeight;

      if (originWidth > maxWidth || originHeight > maxHeight) {
        if (originWidth / originHeight > maxWidth / maxHeight) {
          targetWidth = maxWidth;
          targetHeight = Math.round(maxWidth * (originHeight / originWidth));
        } else {
          targetHeight = maxHeight;
          targetWidth = Math.round(maxHeight * (originWidth / originHeight));
        }
      }
      console.log("******");
      console.log(targetWidth);
      console.log(targetHeight);
      // Zoom
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      context.clearRect(0, 0, targetWidth, targetHeight);

      context.drawImage(img, 0, 0, targetWidth, targetHeight);

      canvas.toBlob(function (blob) {
        var form_data = new FormData();

        form_data.append("filePart", blob);

        $.ajax({
          type: 'POST',
          url: $.domainName + "/selfSetting/upload",
          cache: false,
          contentType: false,
          processData: false,
          data: form_data
        }).success(function (response) {
          // console.info(response);
          alert("上傳成功!");
          thisBtn.closest('td').find('#sportImg').attr('src', $.domainName + '/images/uploads/' + response.referenceId);
          thisBtn.closest('td').find('#sportImgId').val(response._id);
          // $('#sportImg').attr('src', $.domainName + '/images/uploads/' + response);
        }).fail(function (response) {
          console.info(response);
          alert("上傳失敗，請找相關人員查詢問題");
        }).done(function () {
        });
      }, 'image/jpg');
    };

    var input = event.target.files[0];
    if (input.type.indexOf("image") == 0) {
      reader.readAsDataURL(input);
    }
    // if (input.files && input.files[0]) {
    // reader.readAsDataURL(input.files[0]);
    // img.src = reader.readAsDataURL(event.target.files[0]);
    // }

  });

  var init = function () {
  };

  var uploadImgTemplate = $('#uploadImg').clone(true);

  init();
});