coin = 0;
availablecoin = $("#coin");
var depositeBtn = $("#depositeBtn");
var depositeAmount = $("#depositeAmount");

availablecoin.html(coin);

depositeBtn.click(function (e) { 
    deposite = parseInt(depositeAmount.val()); 
    $("#alert").html('');
    if(deposite > 0){
        coin += deposite;
        availablecoin.html(coin);
        depositeAmount.val([]);
    }else{
        depositeAmount.val([]);
    }
});

$("#dice").on("change",function(){
    if($("#dice").val() != ""){
        $("#rollbtn").prop("disabled",false);
    }else{
        $("#rollbtn").prop("disabled",true);
    }
});

$("#rollbtn").click(function (e) { 
    $("#rollbtn").prop("disabled",true);
    betamount = parseInt($("#betamount").val());
    if(coin >= betamount){
        $("#alert").html('');
        $("#dicepic").attr("src", "dice.gif");
        // Roll the dice
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        var randomNum = getRandomInt(1, 6);
        dicenumber = parseInt($("#dice").val());

        function result() {
            if(dicenumber == randomNum){
                coin += betamount;
                availablecoin.html(coin);
                $("#dicepic").attr("src", "dice/"+randomNum+".svg");
                $("#betamount").val([]);
                $('#dice option:first').prop('selected',true);
                $("#rollbtn").prop("disabled",false);
            }else{
                coin -= betamount;
                availablecoin.html(coin);
                $("#dicepic").attr("src", "dice/"+randomNum+".svg");
                $("#betamount").val([]);
                $('#dice option:first').prop('selected',true);
                $("#rollbtn").prop("disabled",false);
            }
        }

        setTimeout(result, 3000);
    }
    else{
        $("#rollbtn").prop("disabled",false);
        $("#betamount").val([]);
        $("#alert").html('<div  class="alert alert-danger fade show" role="alert"><strong>Insufficient Amount</strong> </div>');
    }
});