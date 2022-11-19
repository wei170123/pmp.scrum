jQuery(function ($) {
    console.log("asdasdas");
    $('#comingsoon').on('load', function () {
        // 840,720,1140,870
        // X 300
        // Y 50
        console.log($("#comingsoon").width());
        console.log($("#comingsoon").height());
        console.log(($("#comingsoon").width() * 840 / 1920) + "," + ($("#comingsoon").height() * 720 / 1080) + "," + (($("#comingsoon").width()) * 1140 / 1920) + "," + (($("#comingsoon").height() + 50) * 720 / 1080));
        $('#a1').attr("coords", ($("#comingsoon").width() * 840 / 1920) + "," + ($("#comingsoon").height() * 720 / 1080) + "," + ($("#comingsoon").width() * 1140 / 1920) + "," + ($("#comingsoon").height() * 870 / 1080));
    })
}); // JQuery end