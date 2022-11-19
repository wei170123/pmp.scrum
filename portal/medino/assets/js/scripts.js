jQuery(function ($) {
    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results == null) {
            return null;
        }
        else {
            return results[1] || 0;
        }
    };

    var id = $.urlParam("id");
    console.log(id);

    $('#personalInfo').attr("src", "../../portal/persenalInfo/index.html?id=" + id);

}); // JQuery end