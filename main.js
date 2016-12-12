console.log("main.js is running")



//document.querySelector("button.continue").innerHTML = 'next Step...'


// this jQuery line changes any h1 element's inner html to "Hello Friends"
$("h1").html("Hello Friends");

// This only changes the first h1 on a page
//document.querySelector("h1").innerHTML = "Hello Friends" // wont work because it returns and array like nodelist

//$("div.container").html("Hello dudes")





// Document ready function
// do not call this function until the DOM is loaded
// any good reason to use this? No - scripts  are at the bottom of the html anyways
$(document).ready(function (){

})

// Same as above?
document.addEventListener("DOMContentLoaded", function() {})


/*
jQuery is extremely similiar to vanilla javascripts .querySelector()
*/



// append
var foods = ['apple', 'banana', 'carrot', 'danish', 'egg']

for(var i = 0; i < foods.length; i++) {
    $("ul").append("<li>" + foods[i] + "</li>")
}

/*
for(var i = 0; i < foods.length; i++) {
    $("ul").append(`<li>${foods[i]}</li>``)
}
*/

// Wrap this ul  with a div with a class of foods

$('ul').wrap(`<div class="foods"></div>`)


// Don't use inline CSS jQuery functions
// Use classes if you want to manipulate the style of a webpage


// using .val()

/* Finding first input

$('input').first()
$('input':first)
$('input[type="text')


*/
$('input').first().val("Hello Friends") // sets input elements value to "Hello Friends"

$('input').last().click(function(){
    //console.clear()
    console.log($('input').first().val());
});

/*
Tree Traversal - Know these

-closest()
-find()
*/



// Old way to get json
var request = new XMLHttpRequest();

// blah blah


// var name;

// jQuery.getJSON('https://randomuser.me/api/?nat=us', function(data){
//     console.log(data)
//     var firstName = data.results[0].name.first
//     console.log(name)
// })

// $('h1').html(firstName)


// Below is Scott's example
// $.getJSON('https://randomuser.me/api/?nat=us', function(data){
//     var firstName = data.results[0].name.first
//     var lastName = data.results[0].name.last
// })

// $('h1').html(`Hello
//     ${firstName[0].toUpperCase()}${firstName.slice(1)}
//     ${lastName[0].toUpperCase()}${lastName.slice(1)}
//     `)

$.getJSON('https://randomuser.me/api/?nat=us', function (data) {
  var firstName = data.results[0].name.first
  var lastName = data.results[0].name.last

  $('h1').html(`Hello
    ${firstName[0].toUpperCase()}${firstName.slice(1)}
    ${lastName[0].toUpperCase()}${lastName.slice(1)}
  `)
})
