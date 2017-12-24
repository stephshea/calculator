/* global $*/
$(document).ready(function(){
   
  
  document.getElementById("now").onclick = function() {
    
    var parseMe = [12 + 4 * 5];
     var pTotal= 0;   
    for (var i = 0; i <parseMe.length; i++) {
    pTotal = pTotal + parseInt(parseMe[i]);   
     
     document.getElementById("addOne").onclick = function() {
     parseMe.push(1);
     };
    // return pTotal;
  }
  document.getElementById("pleaseWork").innerHTML = pTotal;
  console.log(pTotal);
   
  };
//   };
   
//     // var display = document.getElementById("display").click;
//     // $( "button.equal" ).on( "click", function() {
//     document.getElementById("equal").onclick = function() {
//     //console.log("addDigits clicked");
//     //get the sum of the digits from the display field
//     var display = document.getElementById("display").innerHTML;
//     //without = using a getter not a setter
//     // console.log(display);
//     var runningTotal = 0;
//     for (var i = 0; i <display.length; i++) {
//         // console.log(display[i]);
//         // runningTotal += parseInt(display[i]);
//         runningTotal = runningTotal + parseInt(display[i]);
        
//     }
//     console.log(runningTotal);
//     document.getElementById("display").innerHTML = runningTotal;

// };
//   document.getElementById("now").onclick = function() {
    
//     var parseMe = [12 + 4 * 5];
//      var pTotal= 0;   
//     for (var i = 0; i <parseMe.length; i++) {
//     pTotal = pTotal + parseInt(parseMe[i]);   
     
//     // return pTotal;
//   }
//   document.getElementById("pleaseWork").innerHTML = pTotal;
//   console.log(pTotal);
   
     
//   };
var display = [];
var runningTotal = 0;
document.getElementById("displayHere").innerHTML = display;

 $( "button.zero" ).on( "click", function() {
        
        // this.display.push(0);
        
    });
    
$( "button.one" ).on( "click", function() {
        // document.getElementById("displayHere").innerHTML += ("1");
        // display = document.getElementById("two").value;
        // console.log(1);
        display.push(1);
    });
    
$( "button.two" ).on( "click", function() {
    // document.getElementById("displayHere").innerHTML += ("2");
    // display = document.getElementById("two").value;
        display.push(2);
        // console.log(display);
        
    }); 
$( "button.add" ).on( "click", function() {
    // document.getElementById("displayHere").innerHTML += ("+");
       display = document.getElementById("+").value;
       display.push('+');
        //  console.log(this.display);
    }); 

$( "button.multiply" ).on( "click", function() {
    document.getElementById("displayHere").innerHTML += ("*");
        // console.log("*");
        // display.push('*');
    });

   document.getElementById("equal").onclick = function() {
    
   
    for (var i = 0; i < display.length; i++) {
    runningTotal += parseInt(display[i]);
    
        // runningTotal = runningTotal + parseInt(display[i]);
  
// console.log(runningTotal);
    }
        console.log(display);
        document.getElementById("totalPlease").innerHTML = runningTotal;
        return runningTotal;
        
   

    //  $('#total').html(total);
  
    

   };

}); 

