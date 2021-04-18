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

$(document).ready(function(){
    $("form").submit(function(){
   event.preventDefault();
   var webform = $.post("https://maker.ifttt.com/use/bbl3eu00UEI-S92NCIsxaX", json.stringify({"value1": $("#name").val, "value2": $("#email").val(), "value3": $("#message").val()}));

    });
})


