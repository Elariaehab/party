//menu
$("#home-content span").click(function () 
{
    if ($('.sidenav').css("width") == "0px") {
        $(".sidenav").animate({width:"250px"},1000,function () {
            $("#home-content span").animate({marginLeft:"250px"})
        })
        
    } 
  
})
$("#leftMenu .closebtn").click(function () {
    $(".sidenav").animate({width:"0px"},1000,function () {
        $("#home-content span").animate({marginLeft:"0px"})
    }
    )
    
})


//slider
$(".toggle").click(function(){
    $(this).next(".inner").slideToggle();
})

let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let datDiff = countDownDate - dateNow ;
    let days = Math.floor(datDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((datDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
    let seconds = Math.floor((datDiff % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML= days + " "+"D";
    document.querySelector(".hours").innerHTML= hours + " "+"h";
    document.querySelector(".minutes ").innerHTML= minutes + " "+"m" ;
    document.querySelector(".seconds ").innerHTML= seconds + " "+"s";
},1000)

let totalChar = 100;
$('textarea').keyup(function() {
  let length = $(this).val().length;
  let remainingChar = totalChar-length;
  if(remainingChar<=0)
            {
                 $(".Characters").text("your available character finished");
                 $('.remaining').hide()
                
            }
        else{
        
        $(".Characters").text(remainingChar);
        $('.remaining').show()

        }
})