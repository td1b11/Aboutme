$(document).ready(function(){
    $("#name").change(function(){
        $("#Welcome to my website,").text("Welcome to my website, "+$("#name").val());
        $("#tryit").click(function(){
            $("#welcome").css("color","blue");
        })
   
    });
});





