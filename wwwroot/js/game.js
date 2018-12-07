function init(data) {
    var container = $('.questions-container');
    var i = 0;
    data.items.forEach(element => {
        i++;
        var row = $('<div />').text("Задание " + i).addClass('question');
        row.click(() => {
            alert("Корпус: " + element.korpus + element.text);
        });
        container.append(row);
    });
}

$(function() {
    init(data);
});