$(function () {
  console.log("Article Page");
  var articleId = $.urlParam("articleId");

  var init = function () {
    $.ajax({
      type: "GET",
      url: $.domainName + '/articles/articlPageContent?articleId=' + articleId
    }).success(function (response) {
      console.info(response);
      for (var article of response) {
        console.log(article.referenceId[0].resourcePath);
        $('.imgLink').attr("src", article.referenceId[0].resourcePath);
        $('.title').html(article.title);
        $('.author').html("作者 " + article.author + ", 建立時間 " + moment(article.createTime).format("YYYY/MM/DD"));
        $('.content').html(article.content);
      }

    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });
  };

  var liTemplate = $('#aList').clone();
  $('#aList').remove();

  init();
});