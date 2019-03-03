$(".btnStart").click(() => {
    var userId = localStorage['userId'];
    if (!userId)
        showPopup();
    else 
        window.location.href = "/tasks?id=" + userId;
    });

$(".btnRes").click(() => {       
    var scanRes = $("#inputRes").val();
    if (scanRes != '') {
        localStorage['userId'] = scanRes;
        window.location.href = "/tasks?id=" + scanRes;
    } else if (scanRes === '') {
    onMistake('Введите или сканируйте код!');
    }
});

$(".inputRes").click(() => {
    $(".mistake").hide();
});

function showPopup() {
    $(".welcomeToIQuest").hide();
    $(".popup").fadeIn(500);
    qrScan((scanRes) => {
        $('#inputRes').val(scanRes);          
    });
};

$(".popup-close").click(() => {
    qrStop();
    $(".mistake").hide();
    $('#inputRes').val('');
    $(".popup").fadeOut(500, () => {
        $(".welcomeToIQuest").show();
    });
});

function onMistake(mistakeText) {
    $(".mistake").text(mistakeText);
    $(".mistake").show();
    $('.popup').css("backgroundColor", "rgba(250, 128, 114, 0.5)");
    setTimeout(function () {
        $('.popup').css("backgroundColor", "rgba(91, 200, 220, 0.5)");
    }, 350);
};