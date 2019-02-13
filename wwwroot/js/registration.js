$(function($) {

    $(function () {
        $("#btnAddTeam").click(() => {
            var teamName = $("#inputTeam").val();
            $('#inputTeam').val('');
            if (teamName != '') {
                addTeam(teamName);
                //showPopup();
            }
        });    
    });

    function showPopup() {
        $(".addTeamContainer").hide();
        $(".popup").fadeIn(500);
    }

    $(function () {
        $(".popup-close").click(() => {
            $(".popup").fadeOut(500, () => {
                $(".addTeamContainer").show();
            });
        });
    });

    function addTeam(teamName) {
        var container = $(".addTeamContainer ol");
        var liElement = $('<li>').appendTo(container);
        var btnDeleteElement = $('<div>').attr('id', 'btnDeleteTeam').html('x').addClass('btnTeam').appendTo(liElement);
        var btnShowGuid = $('<div>').attr('id', 'btnShowGuid').html('@').addClass('btnTeam').appendTo(liElement);
        var spanElement = $('<span>').addClass('team').text(teamName).appendTo(liElement);
        var inputElement = $('<input>').addClass('inputTeam')
        .focusout(() => {
            if (inputElement.val() != '') {
                inputElement.hide();
                btnDeleteElement.show();
                btnShowGuid.show();
                spanElement.show().text(inputElement.val());
            }
        }).appendTo(liElement);
        btnDeleteElement.click(() => {
            liElement.remove();
        });
        btnShowGuid.click(() => {
            showPopup();
        });
        spanElement.click(() => {
            btnDeleteElement.hide();
            btnShowGuid.hide();
            spanElement.hide();
            inputElement.show().val(spanElement.text()).focus();
        });
    };
});