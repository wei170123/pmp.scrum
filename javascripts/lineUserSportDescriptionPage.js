$(function () {
  console.log("lineUserSportDescriptionPage Page");
  var uid = $.urlParam("uid");
  var sportsDetailId = $.urlParam("sportsDetailId");

  $('#description').css({
    'height': 'auto'
  });

  $('#check').click(function (e) {
    $('#check').click(function (e) {
      if ($('#description').val()) {
        $('#check').attr('href', '#confirm');
      } else {
        $('#check').attr('href', '#dialog');
      }
    });
  });

  $('#dialogConfirm').click(function (e) {
    var status = $('input[name=radio-choice-v-2]:checked').val();
    var description = $('#description').val();
    var postData = {
      uid: uid,
      referenceId: sportsDetailId,
      description: description,
      status: status
    }
    console.log(postData);

    $.ajax({
      type: "POST",
      url: $.domainName + '/lineUserSports/saveSportsDetailDescription',
      data: postData
    }).success(function (response) {
      console.log(response);
      alert("儲存成功!");
      window.location.href = $.domainName + '/lineLogin/oauth?state=userSportDiary';
    }).fail(function (response) {
      console.info(response);
      alert("儲存失敗，請洽相關人員!");
      window.location.href = 'line://ti/p/@cip3545n';
    }).done(function () {
    });


  });
});