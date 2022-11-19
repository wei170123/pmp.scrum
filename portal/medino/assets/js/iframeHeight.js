jQuery(function ($) {
    $("#iframe-doservice").load(function () {
        $("#iframe-doservice").height($("#iframe-doservice").contents().find("html").height());
    });

    $("#iframe-contact").load(function () {
        let tmpHeight = $("#iframe-contact").contents().find("#bg").height() + $("#iframe-contact").contents().find("#cForm").height();
        // $(".contactSection").height(tmpHeight);
        $("#iframe-contact").height(tmpHeight);
    });

    $("#iframe-department").load(function () {
        let h = $("#iframe-department").contents().find(".container").height();
        console.log(h);
        $("#iframe-department").height(h);
        // $("#deparmentSection").css("height", h);
    });

    $("#personalInfo").load(function () {
        let h = $("#personalInfo").contents().find("html").height();
        console.log(h);
        $("#personalInfo").height(h);
        // $("#deparmentSection").css("height", h);
    });

    $("#iframe-doservice-detail").load(function () {
        let h = $("#iframe-doservice-detail").contents().find("html").height();
        console.log(h);
        $("#iframe-doservice-detail").height(h);
        // $("#deparmentSection").css("height", h);
    });

    $("#iframe-article").load(function () {
        let h = $("#iframe-article").contents().find("html").height();
        console.log(h);
        $("#iframe-article").height(h);
        // $("#deparmentSection").css("height", h);
    });
}); // JQuery end