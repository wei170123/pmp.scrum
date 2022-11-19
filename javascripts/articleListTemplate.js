$(function () {
  console.log("ArticlList Page");

  $('.searchButton').click(function () {
    var postData = {
      type: $('.searchTerm').val()
    }
    $.ajax({
      // async: false,
      type: "POST",
      url: $.domainName + '/articles/search',
      data: postData
    }).success(function (response) {
      // console.info(response);
      $('.box').remove();
      for (var article of response) {
        var boxClone = boxTemplate.clone();
        boxClone.find('.button').attr("href", article.link);
        boxClone.find('img').attr("src", article.referenceId[0].resourcePath);
        boxClone.find('h3').html(article.title);
        $(".thumbnails").append(boxClone);
      }

    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });
  })

  var init = function () {
    $.ajax({
      // async: false,
      type: "GET",
      url: $.domainName + '/articles/articlList'
    }).success(function (response) {
      // console.info(response);
      for (var article of response) {
        var boxClone = boxTemplate.clone();
        boxClone.find('.button').attr("href", article.link);
        boxClone.find('img').attr("src", article.referenceId[0].resourcePath);
        boxClone.find('h3').html(article.title);
        $(".thumbnails").append(boxClone);
      }

    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });
  };

  var boxTemplate = $('.box').clone();
  $('.box').remove();

  init();
});