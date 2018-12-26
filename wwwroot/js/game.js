function init(data) {    
    initTaskList();
    hidePopup();
}

function initTaskList() {
    var container = $('.questions-container');
    var i = 0;
    data.items.forEach((item, index) => {
        i++;
        var row = $('<div />').text("Task " + i).addClass('question');
        if (item.done)
            row.addClass('anyClass')
        row.click(() => {
            if (item.done === false) {
                $(".popup").show();
                $(".questions-container").hide();
                showPopup(item, index);
            }
        });        
        container.append(row);
    });
    var btnFinish = $('<div />').text("Finish").addClass('question disabled').appendTo(container);
}

function showPopup(item, index) {
    $(".task-korpus").text("Корпус: " + item.korpus);
    $(".task-text").text(item.text);
    $(".check-result").hide();

    $(".btnScan").click(() => {
        $(".check-result").show();
    });    

    $(".btnRes").click(() => {       
        var scanRes = $("#inputRes").val();
        if (scanRes === item.result) {
            item.done = true;
            hidePopup();
            $(".btnRes").off('click');
            $('#inputRes').val('');
            $(".questions-container .question").eq(index).css("background-color","greenyellow");
            
            var success = data.items.some((item) => {
                return item.done;
            });

            if (success) {
                $(".question.disabled").removeClass("ddisabled")
            }
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