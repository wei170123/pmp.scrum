$(function () {
  console.log("login page");

  $('.MdBtn03Login').click(function () {
    var postData = {
      account: $('#id').val(),
      password: $('#passwd').val()
    }

    console.log(postData);
    $.ajax({
      type: "POST",
      url: $.domainName + '/login/doLogin',
      data: postData
    }).success(function (response) {
      console.log(response);
      window.location.href = 'https://www.gamer.com.tw';
    }).fail(function (response) {
      console.info(response);
      alert("儲存失敗，請洽相關人員!");
      window.location.href = 'https://www.google.com';
    }).done(function () {
    });
  })

});