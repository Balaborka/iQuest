function init(data) {
    var container = $('.questions-container');
    var i = 0;
    data.items.forEach(element => {
        i++;
        var row = $('<div />').text("Task " + i).addClass('question');
        row.click(() => {
            $(".popup").removeClass("hidden");
            $(".questions-container").addClass("hidden");
            $(".task-korpus").text("Корпус: " + element.korpus);
            $(".task-text").text(element.text);
        });
        $(".popup-close").click(() => {
            $(".popup").addClass("hidden");
            $(".questions-container").removeClass("hidden");
        });
        container.append(row);
    });
}

$(function() {
    init(data);
});