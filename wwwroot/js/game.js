function init(data) {
    var container = $('.questions-container');
    data.items.forEach(element => {
        var row = $('<div />').text(element.text).addClass('question');
        row.click(() => {
            alert(element.result);
        });
        container.append(row);
    });
}

$(function() {
    init(data);
});