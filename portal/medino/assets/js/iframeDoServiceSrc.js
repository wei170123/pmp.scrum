jQuery(function ($) {
    // console.log($.urlParam("servicePage"));
    let pageName = $.urlParam("servicePage");
    if (pageName == "speech") {
        $('#iframe-doservice-detail').attr('src', '../../portal/speech/index.html');
    }
    else if (pageName == "app") {
        $('#iframe-doservice-detail').attr('src', '../../portal/app/index.html');
    }
    else if (pageName == "personalService") {
        $('#iframe-doservice-detail').attr('src', '../../portal/personalService/index.html');
    }
    else if (pageName == "healthFrontLine") {
        $('#iframe-doservice-detail').attr('src', '../../portal/personalService/indexFL.html');
    }
    else if (pageName == "poseAnalyze") {
        $('#iframe-doservice-detail').attr('src', '../../portal/personalService/indexAL.html');
    }
    else if (pageName == "consult") {
        $('#iframe-doservice-detail').attr('src', '../../portal/comingsoon/consult.html');
    }
    else {
        $('#iframe-doservice-detail').attr('src', '../../portal/comingsoon/index.html');
    }

    $(window).on("message", function (e) {
        var data = e.originalEvent.data;  // Should work.
        console.log(data);
        window.scrollTo(0, 0);
    });
}); // JQuery end