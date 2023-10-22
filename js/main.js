function _init(){
    $('#sec0_but_1').button().click(function () {
        $("#sect_0").hide();
    });
    $('#sec1_but_cont').button({
        icon : "ui-icon-play"
    }).click(
        function () {
            let route = $("#sec1_sel_route :selected").val();
            if($("#sec1_tb_from").val().trim().length==0){
                alert("Please enter from station");
                return;
            }
            if($("#sec1_tb_from").val().trim().length==0){
                alert("Please enter to station");
                return;
            }
            if(route === "4" || route === "5") {
                alert("Please read the error message!");
                return;
            } else if (route === "0") {
                alert("Please select the route");
                return;
            } else if (route === "1") {
                $("#sec1_sp_route").text("Any Permitted");
            } else if (route === "2") {
                if($("#sec1_tb_point").val().trim().length==0){
                    alert("Please enter via station");
                    return;
                }
                $("#sec1_sp_route").text("Via "+$("#sec1_tb_point").val());
            } else if (route === "3") {
                if($("#sec1_tb_point").val().trim().length==0){
                    alert("Please enter not via station");
                    return;
                }
                $("#sec1_sp_route").text("Not Via "+$("#sec1_tb_point").val());
            }
            $("#sec1_sp_from").text($("#sec1_tb_from").val());
            $("#sec2_sp_1_f").text($("#sec1_tb_from").val());
            $("#sec2_sp_2_f").text($("#sec1_tb_from").val());
            $("#sec1_sp_from").text($("#sec1_tb_from").val());
            $("#sec1_tb_from").hide();
            $("#sec2_sp_1_t").text($("#sec1_tb_to").val());
            $("#sec2_sp_2_t").text($("#sec1_tb_to").val());
            $("#sec1_sp_to").text($("#sec1_tb_to").val());
            $("#sec1_tb_to").hide();
            $("#sec1_sel_route").hide();
            $("#sec1_tb_point").hide();
            $("#sec1_but_cont").hide();
            $("#sect_2").show();
        }
    );
    $("#sec2_but_1_y").button().click(
        function () {
            //Display final result
            $("#sec2_sp_1_r").text("Yes");
            $("#sec2_but_1_y").hide();
            $("#sec2_but_1_n").hide();
            $("#msg_ok").text("This is a valid route");
            $("#sect_fin_ok").show();
        }
    );
    $("#sec2_but_1_n").button().click(
        function () {
            //Display final result
            $("#sec2_sp_1_r").text("No");
            $("#sec2_but_1_y").hide();
            $("#sec2_but_1_n").hide();
            $("#sec2_tr_2").show();
        }
    );
    $("#sec2_but_2_y").button().click(
        function () {
            //Display final result
            $("#sec2_sp_2_r").text("Yes");
            $("#sec2_but_2_y").hide();
            $("#sec2_but_2_n").hide();
            $("#msg_ok").text("This is a valid route for this journey.");
            $("#sect_fin_ok").show();
        }
    );
    $("#sec2_but_2_n").button().click(
        function () {
            //Display final result
            $("#sec2_sp_2_r").text("No");
            $("#sec2_but_2_y").hide();
            $("#sec2_but_2_n").hide();
        }
    );
    $('._hidden').hide();
    $('.section').hide();
    $("#sect_0").show();
    $('#sect_1').show();
    sec_sel_route_change();
}


function sec_sel_route_change(){
    let newVal = $("#sec1_sel_route :selected").val();
    $("#sec1_td_route ._hidden").hide();
    if (newVal === "0" || newVal === "1"){
        $("#sec1_tb_point").hide();
    } else if (newVal === "2" || newVal === "3") {
        $("#sec1_tb_point").show();
    } else if (newVal === "4") {
        $("#sec1_tb_point").show();
        $("#sec1_warn_aaa").show();
    } else if (newVal === "5") {
        $("#sec1_tb_point").hide();
        $("#sec1_warn_advance").show();
    } else {
        console.error("[Step 1] Mismatched route type "+newVal)
    }
}