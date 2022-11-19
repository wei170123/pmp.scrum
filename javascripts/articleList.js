$(function () {
  console.log("ArticlList Page");

  var init = function () {
    $.ajax({
      type: "GET",
      url: $.domainName + '/articles/articlList'
    }).success(function (response) {
      // console.info(response);
      for (var article of response) {
        var liClone = liTemplate.clone();
        liClone.find('#articleLink').attr("href", article.link);
        liClone.find('#articleImg').attr("src", article.referenceId.resourcePath);
        liClone.find('#articleTitle').html(article.title);
        // liClone.find('#articleContent').html(article.partialContent);
        $("#ulView").append(liClone).listview().listview("refresh");
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