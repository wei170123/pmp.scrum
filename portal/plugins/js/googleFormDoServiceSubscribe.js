
$(function () {
    $('#submit').on('click', function () {
        // 信箱
        var email = $('#email').val();

        // post
        var data = {
            'entry.2103484413': email
        };
        console.log(data);

        if (!email) {
            alert("麻煩填寫您的電子信箱!");
            return;
        }

        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSd5cD4lJ5Q-01NBDtwgV-nZC0Don3V2CR-WdVugVAOuEz92pg/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                $('#email').prop('disabled', true);
                $('#submit').val("訂閱成功");
                $('#submit').prop('disabled', true);
                alert('資料已送出！');
            }
        });

    });
});