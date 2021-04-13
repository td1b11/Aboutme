$(document).ready(function(){
    $("#name").change(function(){
        $("#welcome").text("Welcome to my website, "+$("#name").val());
       
   
    });
    $("#tryit").click(function(){
        $("#welcome").css("color","blue");
    })
});


$(document).ready(function(){
    $("#letseat").click(function(){
        var food = $.get("https://foodish-api.herokuapp.com/api/");

        food.done(function(response){
            $("#food").attr("src", response.image);
        });
    })
})


