function init(data) {    
    initTaskList();
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
                $(".popup").fadeIn(500);
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
        $(".taskPopupContent").hide();
        $(".taskPopupQR").fadeIn(500);
        qrScan();
    });    

    $(".btnRes").click(() => {       
        var scanRes = $("#inputRes").val();
        if (scanRes === item.result) {
            item.done = true;
            hidePopup();
            $(".btnRes").off('click');
            $('#inputRes').val('');
            $(".questions-container .question").eq(index).css("background-color","greenyellow");
            
            var success = !data.items.some((item) => {
                return !item.done;
            });

            if (success) {
                $(".question.disabled").removeClass("disabled")
            }
        }
    });

    $(".popup-close").click(() => {
        hidePopup();
        $(".check-result").hide();
    });
}

function hidePopup() {
    $(".popup").fadeOut(500, () => {
        $(".questions-container").show();
      });;
}

$(function() {
    init(data);
});