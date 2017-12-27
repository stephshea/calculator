/* global $*/
//$(document).ready(function(){
var total = 0;
var display = "";

function toDisplay(val) {
	display = document.getElementById("displayHere").value += val;
}

function clearLast() {
	display = display.substring(0, display.length - 1);
	//   display = display.replace(/.$/,'');
	//   $("displayHere").html(display);
	document.getElementById("displayHere").value = display;
	//using value rather than innerHTML fixed
}

function allClear() {
	document.getElementById("displayHere").value = "";
	$("#total").html("");
}

function equal() {
	$("#total").html(eval(display));
	return total;
}
//  for (var i = 0; i < display.length; i++) {
// total = total + parseInt(display[i]);
// console.log(total);
//     }
//     return total;
//     document.getElementById('total').innerHTML = total;
//     console.log(total);
//     })
// });  
//     $( "button.equal" ).on( "click", function () {
//     for (var i = 0; i <display.length; i++) {
//     total = total + parseInt(display[i], 10);
//     console.log(display);
//   return total;
//     }
//     document.getElementById('total').innerHTML = total;
//     console.log(total);
//     });
// $( "button.zero" ).on( "click", function() {
//         console.log(0);
//     });
// $( "button.add" ).on( "click", function() {
// display = document.getElementById("displayHere").innerHTML += "+";