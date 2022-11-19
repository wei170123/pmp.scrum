$(function () {
  console.log("CheckCalendar Page");
  var uid = $.urlParam("uid");

  $('#calendar').fullCalendar({
    height: $(window).height() - 50,
    header: {
      left: 'title',
      center: 'today',
      right: 'prev,next'
    }
  });

  // var event = { id: 1, title: 'test', start: '2018-05-12' };
  // $('#calendar').fullCalendar('renderEvent', event, true);
  var init = function () {
    $.ajax({
      type: "GET",
      url: $.domainName + '/check/getEvents?uid=' + uid
    }).success(function (response) {
      console.info(response);
      if (response) {
        var events = [];
        let i = 1;
        for (var event of response) {
          var calendarEvent = {
            id: i,
            title: '完成',
            start: event.checkDate
          }
          // var calendarEvent = { title: 'test', start: '2018-05-12' };
          // events.push(calendarEvent);
          $('#calendar').fullCalendar('renderEvent', calendarEvent, true);
        }
        console.log(events);
        $('#calendar').fullCalendar('renderEvent', events, true);
      }
    }).fail(function (response) {
      console.info(response);
      $.FailResponse(response);
    }).done(function () {
    });
  }
  init();
});