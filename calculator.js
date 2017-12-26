/* global $*/
// $(document).ready(function(){


var total= 0;
var display = [""]
// display = document.getElementById("displayHere"); 

function clearLast() {
    // for(var i = 0; i<display.length; i++);
    // {
   display = display.substring(0,display.length-1);
   console.log(display);
   $("#displayHere").html(display)
   
    // display = display.slice(0, -1);
    // document.getElementById("displayHere").innerHTML = display;
   
    // var removeOne = display;
    // var len = removeOne.length-1;
    // var newDisplay = removeOne.substring(0,len);
    // display = newDisplay;
    
    // display = removeOne;
    //  document.getElementById("displayHere").innerHTML = display;
     
 }   
 
function toDisplay(val) {
          display = document.getElementById("displayHere").value+=val;
     }
 
 
 
 
function allClear() {
          document.getElementById("displayHere").value = "";
         
     }
  
  function equal() {
      
      $("#total").html(eval(display));
      return total;
  
//  for (var i = 0; i < display.length; i++) {
// total = total + parseInt(display[i]);
// console.log(total);
//     }
    
//     return total;
//     document.getElementById('total').innerHTML = total;
//     console.log(total);
    
//     })
      
  }
// });  


  
//     for (var i = 0; i <display.length; i++) {
//     total = total + parseInt(display[i], 10);
//     console.log(display);
//   return total;
//     }
//     document.getElementById('total').innerHTML = total;
//     console.log(total);
    
//     });
 
 
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
    
// $( "button.one" ).on( "click", function() {
//       display = document.getElementById("displayHere").innerHTML += 1;
//     });  
    
// $( "button.two" ).on( "click", function() {
//         // display.push(2);
//         display = document.getElementById("displayHere").innerHTML += 2;
//     });
// $( "button.three" ).on( "click", function() {
//         display.push(3);
//     }); 
// $( "button.four" ).on( "click", function() {
//         display.push(4);
//     }); 
// $( "button.five" ).on( "click", function() {
//         display.push(5);
//     }); 
// $( "button.six" ).on( "click", function() {
//         display.push(6);
//     }); 
// $( "button.seven" ).on( "click", function() {
//         console.log(7);
//     }); 
// $( "button.eight" ).on( "click", function() {
//         console.log(8);
//     }); 
// $( "button.nine" ).on( "click", function() {
//         console.log(9);
//     }); 
// $( "button.add" ).on( "click", function() {
// display = document.getElementById("displayHere").innerHTML += "+";

//     }); 
// $( "button.subtract" ).on( "click", function() {
//         console.log('-');

//       });
 
// $( "button.multiply" ).on( "click", function() {
//         // display ++;
//         document.getElementById("displayHere").innerHTML += ("*");
//         console.log('*');
//     }); 
// $( "button.divide" ).on( "click", function() {
//         console.log('/');
//     });
// $( "button.decimal" ).on( "click", function() {
//         console.log('.');
//     });    