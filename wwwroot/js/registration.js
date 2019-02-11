$(function($) {

    $(function () {
        $("#btnAddTeam").click(() => {
            var teamName = $("#inputTeam").val();
            $('#inputTeam').val('');
            if (teamName != '') {
                //$(".addTeamContainer").hide();
                //$(".popup").fadeIn(500);
                $(".addTeamContainer ol").append('<li><span class="team" style="cursor:pointer">' + teamName + '</span>' 
                + '<input type="text" class="inputRes" id="inputEdit" style="display:none"/>' + '</li>');
            }
        });    
    });

    // Код не работает!
    // $(function () {
    //     $(".team").click(function() {
    //         $(this).hide().siblings("#inputEdit").show().val($(this).text()).focus();
    //     });
        
    //     $("#inputEdit").focusout(function() {
    //         $(this).hide().siblings(".team").show().text($(this).val());
    //     });
    // });

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