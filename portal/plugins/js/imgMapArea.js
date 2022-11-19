jQuery(function ($) {
    $('#indexImg').on('load', function () {
        let oringH = 1354;
        let oringW = 720;

        console.log($("#indexImg").height());
        console.log($("#indexImg").width());
        let nowH = $("#indexImg").height();
        let nowW = $("#indexImg").width();

        // 左上點 0,585 右下點 720,780
        $('#a1').attr("coords", "0," + Math.round(585 * nowH / oringH) + "," + nowW + "," + Math.round(780 * nowH / oringH));

        // 左上點 0,800 右下點 720,1000
        $('#a2').attr("coords", "0," + Math.round(800 * nowH / oringH) + "," + nowW + "," + Math.round(1000 * nowH / oringH));

        // 左上點 0,1025 右下點 720,1220
        $('#a3').attr("coords", "0," + Math.round(1025 * nowH / oringH) + "," + nowW + "," + Math.round(1220 * nowH / oringH));
    })

    let oringH = 1354;
    let oringW = 720;

    console.log($("#indexImg").height());
    console.log($("#indexImg").width());
    let nowH = $("#indexImg").height();
    let nowW = $("#indexImg").width();

    // 左上點 0,585 右下點 720,780
    $('#a1').attr("coords", "0," + Math.round(585 * nowH / oringH) + "," + nowW + "," + Math.round(780 * nowH / oringH));

    // 左上點 0,800 右下點 720,1000
    $('#a2').attr("coords", "0," + Math.round(800 * nowH / oringH) + "," + nowW + "," + Math.round(1000 * nowH / oringH));

    // 左上點 0,1025 右下點 720,1220
    $('#a3').attr("coords", "0," + Math.round(1025 * nowH / oringH) + "," + nowW + "," + Math.round(1220 * nowH / oringH));

    $('#indexImg2').on('load', function () {
        let originH = 1440;
        let originW = 720;

        console.log($("#indexImg2").height());
        console.log($("#indexImg2").width());
        let nowwH = $("#indexImg2").height();
        let nowwW = $("#indexImg2").width();

        // 左上點 0,110 右下點 720,435
        $('#a4').attr("coords", "0," + Math.round(110 * nowwH / originH) + "," + nowwW + "," + Math.round(435 * nowwH / originH));

        // 左上點 0,455 右下點 720,780
        $('#a5').attr("coords", "0," + Math.round(455 * nowwH / originH) + "," + nowwW + "," + Math.round(780 * nowwH / originH));

        // 左上點 0,800 右下點 720,1125
        $('#a6').attr("coords", "0," + Math.round(800 * nowwH / originH) + "," + nowwW + "," + Math.round(1125 * nowwH / originH));
    })

    let originH = 1440;
    let originW = 720;

    console.log($("#indexImg2").height());
    console.log($("#indexImg2").width());
    let nowwH = $("#indexImg2").height();
    let nowwW = $("#indexImg2").width();

    // 左上點 0,110 右下點 720,435
    $('#a4').attr("coords", "0," + Math.round(110 * nowwH / originH) + "," + nowwW + "," + Math.round(435 * nowwH / originH));

    // 左上點 0,455 右下點 720,780
    $('#a5').attr("coords", "0," + Math.round(455 * nowwH / originH) + "," + nowwW + "," + Math.round(780 * nowwH / originH));

    // 左上點 0,800 右下點 720,1125
    $('#a6').attr("coords", "0," + Math.round(800 * nowwH / originH) + "," + nowwW + "," + Math.round(1125 * nowwH / originH));


}); // JQuery end