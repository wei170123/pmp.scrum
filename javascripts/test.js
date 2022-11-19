$(function () {
  console.log("Result Page");
  var bAngle = $.urlParam("bAngle");
  var cAngle = $.urlParam("cAngle");

  var init = function (bAngle, cAngle) {
    // $('.headResult').text("頭部前傾角度 : " + bAngle + "度");
    // $('.shoudlerResult').text("肩膀圓肩角度 : " + cAngle + "度");
    $('.totalResult').append(result(bAngle, cAngle));
  }

  var result = function (neckAngel, shoulderAngle) {
    var msg;
    neckAngel = parseFloat(neckAngel);
    shoulderAngle = parseFloat(shoulderAngle);
    if (50 > neckAngel && 52 > shoulderAngle) {
      msg = "<font color=\"#FF0000\">頸部不適高危險群</font>/<font color=\"#FF0000\">肩部不適高危險群</font>";
      var content = '<h3>1.拉筋-胸肌</h3><p><img src="/images/sport/1/1.png" width="60%"><p>' +
        '<img src="/images/sport/1/2.png" width="60%"><p>' +
        '<img src="/images/sport/1/3.png" width="60%"><p>' +
        '<img src="/images/sport/1/4.png" width="60%"><p>' +
        '<img src="/images/sport/1/5.png" width="60%"><p>' +

        '<h3>2.拉筋-斜角肌</h3><p><img src="/images/sport/2/1.png" width="60%"><p>' +
        '<img src="/images/sport/2/2.png" width="60%"><p>' +
        '<img src="/images/sport/2/3.png" width="60%"><p>' +
        '<img src="/images/sport/2/4.png" width="60%"><p>' +

        '<h3>3.拉筋-斜方肌</h3><p><img src="/images/sport/3/1.png" width="60%"><p>' +
        '<img src="/images/sport/3/2.png" width="60%"><p>' +
        '<img src="/images/sport/3/3.png" width="60%"><p>' +
        '<img src="/images/sport/3/4.png" width="60%"><p>' +
        '<img src="/images/sport/3/5.png" width="60%"><p>' +

        '<h3>4.小飛俠運動</h3><p><img src="/images/sport/4/1.png" width="60%"><p>' +
        '<img src="/images/sport/4/2.png" width="60%"><p>' +

        '<h3>5.肩外轉運動</h3><p><img src="/images/sport/5/1.png" width="60%"><p>' +
        '<img src="/images/sport/5/2.png" width="60%"><p>' +
        '<img src="/images/sport/5/3.png" width="60%"><p>' +
        '<img src="/images/sport/5/4.png" width="60%"><p>' +

        '<h3>6.縮下巴運動</h3><p><img src="/images/sport/6/1.png" width="60%"><p>' +
        '<img src="/images/sport/6/2.png" width="60%">';

      $('.content').append(content);
      $('.headResult').text("頭部前傾角度 < 50 度");
      $('.shoudlerResult').text("肩膀圓肩角度 < 52 度");
    } else if (50 > neckAngel && 52 < shoulderAngle) {
      msg = "<font color=\"#FF0000\">頸部不適高危險群</font>/肩部正常";
      var content = '<h3>1.拉筋-斜角肌</h3><p><img src="/images/sport/2/1.png" width="60%"><p>' +
        '<img src="/images/sport/2/2.png" width="60%"><p>' +
        '<img src="/images/sport/2/3.png" width="60%"><p>' +
        '<img src="/images/sport/2/4.png" width="60%"><p>' +

        '<h3>2.拉筋-斜方肌</h3><p><img src="/images/sport/3/1.png" width="60%"><p>' +
        '<img src="/images/sport/3/2.png" width="60%"><p>' +
        '<img src="/images/sport/3/3.png" width="60%"><p>' +
        '<img src="/images/sport/3/4.png" width="60%"><p>' +
        '<img src="/images/sport/3/5.png" width="60%"><p>' +

        '<h3>3.縮下巴運動</h3><p><img src="/images/sport/6/1.png" width="60%"><p>' +
        '<img src="/images/sport/6/2.png" width="60%">';
      $('.content').append(content);
      $('.headResult').text("頭部前傾角度 < 50 度");
      $('.shoudlerResult').text("肩膀圓肩角度 > 52 度");
    } else if (50 < neckAngel && 52 > shoulderAngle) {
      msg = "頸部正常/<font color=\"#FF0000\">肩部不適高危險群</font>";
      var content = '<h3>1.拉筋-胸肌</h3><p><img src="/images/sport/1/1.png" width="60%"><p>' +
        '<img src="/images/sport/1/2.png" width="60%"><p>' +
        '<img src="/images/sport/1/3.png" width="60%"><p>' +
        '<img src="/images/sport/1/4.png" width="60%"><p>' +
        '<img src="/images/sport/1/5.png" width="60%"><p>' +

        '<h3>2.小飛俠運動</h3><p><img src="/images/sport/4/1.png" width="60%"><p>' +
        '<img src="/images/sport/4/2.png" width="60%"><p>' +

        '<h3>3.肩外轉運動</h3><p><img src="/images/sport/5/1.png" width="60%"><p>' +
        '<img src="/images/sport/5/2.png" width="60%"><p>' +
        '<img src="/images/sport/5/3.png" width="60%"><p>' +
        '<img src="/images/sport/5/4.png" width="60%">>';

      $('.content').append(content);
      $('.headResult').text("頭部前傾角度 > 50 度");
      $('.shoudlerResult').text("肩膀圓肩角度 < 52 度");
    } else if (50 < neckAngel && 52 < shoulderAngle) {
      msg = "頸部正常/肩部正常";
      $('.cheerMsg').text('<center>恭喜你! 請持續保持良好的生活姿勢!</center>');
      $('.headResult').text("頭部前傾角度 > 50 度");
      $('.shoudlerResult').text("肩膀圓肩角度 > 52 度");
    }
    return msg;
  }

  init(bAngle, cAngle);
});