function init(data) {    
    initTaskList();
    hidePopup();
}

function initTaskList() {
    var container = $('.questions-container');
    var i = 0;
    data.items.forEach(element => {
        i++;
        var row = $('<div />').text("Task " + i).addClass('question');
        row.click(() => {
            $(".popup").show();
            $(".questions-container").hide();
            initPopup(element);
        });        
        container.append(row);
    });
}

function initPopup(element) {
    $(".task-korpus").text("Корпус: " + element.korpus);
    $(".task-text").text(element.text);
    $(".check-result").hide();

    $(".btnScan").click(() => {
        $(".check-result").show();
    });    

    $(".btnRes").click(() => {       
        var scanRes = $("#inputRes").val();
        if (scanRes === element.result) {
            hidePopup();
            $(".btnRes").off('click');
            $('#inputRes').val('');
        }
    });

    $(".popup-close").click(() => {
        hidePopup();
        $(".check-result").hide();
    });
}

function hidePopup() {
    $(".popup").hide();
    $(".questions-container").show();
}

$(function() {
    init(data);
});