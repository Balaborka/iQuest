$(function($) {
    var currentItem;
    var currentIndex;

    function init(data) {    
        initTaskList();
        initPopup();
    }

    function initPopup() {
        $(".btnScan").click(() => {
            $(".mistake").hide();
            $(".taskPopupContent").hide();
            $(".taskPopupQR").fadeIn(500);
            qrScan((scanRes) => {
                scanAnswer(scanRes, currentItem, currentIndex);            
            });
        });    

        $(".inputRes").click(() => {
            $(".mistake").hide();
        });

        $(".btnRes").click(() => {       
            var scanRes = $("#inputRes").val();
            if (scanRes === currentItem.result) {
                $('.popup').css("backgroundColor", "rgba(173, 255, 47, 0.5)");
                currentItem.done = true;
                hidePopup();                
                $(".questions-container .question").eq(currentIndex).css("backgroundColor", "rgba(173, 255, 47, 0.6)");
                $(".mistake").hide();
            } else if (scanRes === '') {
            onMistake('Введите или сканируйте код!');
            } else { 
            onMistake('Неправильный код!');
            }
            
            var success = !data.items.some((currentItem) => {
                return !currentItem.done;
            });
        
            if (success) {
                $(".question.disabled").removeClass("disabled")
            }
        });

        $(".popup-close").click(() => {
            hidePopup();
            qrStop();
        });
        
        function onMistake(mistakeText) {
            $(".mistake").text(mistakeText);
            $(".mistake").show();
            $('.popup').css("backgroundColor", "rgba(250, 128, 114, 0.5)");
            setTimeout(function () {
                $('.popup').css("backgroundColor", "rgba(91, 200, 220, 0.5)");
            }, 350);
        }
    };

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
                    $('.popup').css("backgroundColor", "rgba(91, 200, 220, 0.5)");
                    showPopup(item, index);
                }
            });        
            container.append(row);
        });
        var btnFinish = $('<div />').text("Finish").addClass('question disabled').appendTo(container);
    }

    function showPopup(item, index) {
        currentItem = item;
        currentIndex = index;

        $(".popup").fadeIn(500);
        $(".taskPopupContent").show();
        $(".questions-container").hide();
        $(".mistake").hide();

        $(".task-korpus").text("Корпус: " + currentItem.korpus);
        $(".task-text").text(currentItem.text);
    }

    function hidePopup() {
        $(".taskPopupQR").hide();
        $('#inputRes').val('');
        $(".popup").fadeOut(500, () => {
            $(".questions-container").show();
        });
    }

    function scanAnswer(scanRes, item, index) {
        $(".taskPopupQR").hide();
        $(".taskPopupContent").show();
        $('#inputRes').val(scanRes);
    };

    $(function() {
        init(data);
    });
});