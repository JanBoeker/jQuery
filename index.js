// --> https://www.w3schools.com/jquery/ <--
// https://api.jquery.com/

// The ready-functions waits until the jQuery-Library is loaded completly
// jQuery(document).ready(function() {
//   $("h1").css("color", "red");
// });

// We do not need to use the ready-function, if we place the includes of the scripts at the end of the body.
$("h2").css("color", "red");

// add multiple CSS classes to an element
$("h1").addClass("big-title margin-50");

// remove CSS classes
//$("h1").removeClass("big-title");

// check if an element has a perticular CSS class
console.log($("h1").hasClass("margin-50"));

// change text of HTML elements
$("button").text("Dont't click me");

// change HTML elemens
// --> This methon changes everything inside the HTML element
$("button").html("<em>Hey</em>");

// The methods return the current value, if you just give one parameter.
console.log($("img").attr("src"));

// Use more then one parameter to set a value.
$("a").attr("href", "https://www.yahoo.com")


//add a eventlistener to elements
$("h1").click(function() {
  $("h1").css("color", "yellow");
});

// add color-switch to the buttons
// for (var i=0; i<5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {
//     document.querySelector("h1").style.color = "pink";
//   })
// }

$("button").click(function(){
  //$("h1").css("color", "pink");
  //$("h1").hide();
  //$("h1").toggle();
  // $("h1").fadeIn();
  // $("h1").fadeOut();
  // $("h1").fadeToggle();
  //$("h1").slideToggle();

  // It's only possible to animate with properties that have a numeric value.
  //$("h1").animate({opacity: 0.5});
  //$("h1").animate({margin: 10});
  //$("h1").animate({margin: "20%"});

  //It's possible to chain methods. They will be operated after eachother
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

// $("input").keydown(function(event){
//   console.log(event.key);
// });

$(document).keydown(function(event){
  $("h1").text(event.key);
});

// https://developer.mozilla.org/en-US/docs/Web/API/event
$("h2").on("mouseover", function(){
  $("h2").css("color", "green");
});


// adds before the seleted element
$("h1").before("<button>New before</button>");

// adds after the seleted element
$("h1").after("<button>New after</button>");

// adds before and also inside the seleted element
$("h1").prepend("<button>New prepend</button>");

// adds after and also inside the seleted element
$("h1").append("<button>New append</button>");

// remove elements
//$("button").remove();
