$(document).ready(function(){
    $("#name").change(function(){
        $("#Welcome to my website,").text("Welcome to my website, "+$("#name").val());
        $("#tryit").click(function(){
            $("#welcome").css("color","blue");
        })
   
    });
});


$(document).ready(function(){
    $("button").click(function(){
        var food = $.get("https://foodish-api.herokuapp.com/");

        food.done(function(response){
            $("#food").attr("src", response.message);
        });
    })
})


