$(function($) {

    $(function () {
        $("#btnAddTeam").click(() => {
            var teamName = $("#inputTeam").val();
            $('#inputTeam').val('');
            if (teamName != '') {
                //$(".addTeamContainer").hide();
                //$(".popup").fadeIn(500);
                var container = $(".addTeamContainer ol");
                var liElement = $('<li>').appendTo(container);
                var btnElement = $('<div>').attr('id', 'btnDeleteTeam').html('x').addClass('btnTeam').appendTo(liElement);
                var spanElement = $('<span>').addClass('team').text(teamName).appendTo(liElement);
                var inputElement = $('<input>').addClass('inputTeam')
                .focusout(() => {
                    if (inputElement.val() != '') {
                        inputElement.hide();
                        btnElement.show();
                        spanElement.show().text(inputElement.val());
                    }
                }).appendTo(liElement);
                btnElement.click(() => {
                    liElement.remove();
                    spanElement.remove();
                    inputElement.remove();
                    btnElement.remove();
                });
                spanElement.click(() => {
                    btnElement.hide();
                    spanElement.hide();
                    inputElement.show().val(spanElement.text()).focus();
                });
            }
        });    
    });

    $(function () {
        $("#btnDeleteTeam").click(() => {
            $('li:last').remove()
        });
    });

    $(function () {
        $(".popup-close").click(() => {
            $(".popup").fadeOut(500, () => {
                $(".addTeamContainer").show();
            });
        });
    });
});