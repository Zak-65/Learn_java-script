// selecteur JQUERY $(selecteur).action()
// Exemple
// $(this).hide()
// $("p").hide()
// $(".test").hide()
// $("#test").hide()
$(document).ready(()=>{
    $("#essyer").on("click",function(){
        $("#essyer").css({'color':'white','background':'green','border':'none','height':'40px','width':'100px'})
        console.log("WooooooooooooW")
    })
    $("h1").css({'color':'red'})
});

$("p").mouseover(()=>{
    $("p").css({"font-size":"30px"})
})


console.log("hello word")