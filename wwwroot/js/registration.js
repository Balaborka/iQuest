$(function($) {

    $.ajax({
        url: "/Registration/GetTeams",
    }).done(function(teams) {
        teams.forEach((team) => {
            addTeamRow(team.name, team.teamId);
        });
    });

    $("#btnAddTeam").click(() => {
        var teamName = $("#inputTeam").val();
        $('#inputTeam').val('');
        if (teamName != '') {
            addTeam(teamName);
            //showPopup(teamId);
        };
    });

    var qrcode = new QRCode($(".teamQR")[0]);
    function showPopup(teamId) {
        qrcode.makeCode('' + teamId);
        $(".addTeamContainer").hide();
        $(".popup").fadeIn(500);
    };

    $(".popup-close").click(() => {
        $(".popup").fadeOut(500, () => {
            $(".addTeamContainer").show();
        });
    });

    function addTeam(teamName) {
        $.ajax({
          url: "/Registration/AddTeam",
          data: {name: teamName}
        }).done(function(teamId) {
            addTeamRow(teamName, teamId);
        });
    };

    function addTeamRow(teamName, teamId) {
        var container = $(".addTeamContainer ol");
        var liElement = $('<li>').appendTo(container);
        var btnDeleteElement = $('<div>').attr('id', 'btnDeleteTeam').html('x').addClass('btnTeam').appendTo(liElement);
        var btnShowQR = $('<div>').attr('id', 'btnShowQR').html('@').addClass('btnTeam').appendTo(liElement);
        var spanElement = $('<span>').addClass('team').text(teamName).appendTo(liElement);
        var inputElement = $('<input>').addClass('inputTeam')
        .focusout(() => {
            var newTeamName = inputElement.val();
            if (newTeamName != '') {
                $.ajax({
                    url: "/Registration/EditTeam",
                    data: {id: teamId, name: newTeamName}
                }).done(function() {
                    inputElement.hide();
                    btnDeleteElement.show();
                    btnShowQR.show();
                    spanElement.show().text(newTeamName);
                });
            };
        }).appendTo(liElement);
        btnDeleteElement.click(() => {
            $.ajax({
                url: "/Registration/DeleteTeam",
                data: {id: teamId}
            }).done(function() {
                liElement.remove();
            });
        });
        btnShowQR.click(() => {
            showPopup(teamId);
        });
        spanElement.click(() => {
            btnDeleteElement.hide();
            btnShowQR.hide();
            spanElement.hide();
            inputElement.show().val(spanElement.text()).focus();
        }); 
    }
});