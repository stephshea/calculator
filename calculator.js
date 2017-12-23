/* global $*/
$(document).ready(function(){
   
   var pTotal= 0;   
   document.getElementById("now").onclick = function() {
    
    var parse = '12 + 11';
    for (var i = 0; i <parse.length; i++) {
    pTotal = pTotal + parseInt(parse[i]);   
     pTotal = document.getElementById("parsego").innerHTML;
     console.log(pTotal);
     return pTotal;
   }
   }
   
    // var display = document.getElementById("display").click;
    // $( "button.equal" ).on( "click", function() {
    document.getElementById("equal").onclick = function() {
    //console.log("addDigits clicked");
    //get the sum of the digits from the display field
    var display = document.getElementById("display").innerHTML;
    //without = using a getter not a setter
    // console.log(display);
    var runningTotal = 0;
    for (var i = 0; i <display.length; i++) {
        // console.log(display[i]);
        // runningTotal += parseInt(display[i]);
        runningTotal = runningTotal + parseInt(display[i]);
        
    }
    console.log(runningTotal);
    document.getElementById("display").innerHTML = runningTotal;

};


//     for (var i = 0; i < display.length; i++) {
//         var runningTotal  = 0;
    
//     runningTotal += parseInt(display[i]);
//         // runningTotal = runningTotal + parseInt(display[i]);
  
// // console.log(runningTotal);
 
//         document.getElementById("display").innerHTML = runningTotal;
//         return runningTotal;
        
// }    });

    //  $('#total').html(total);
  
    
$( "button.zero" ).on( "click", function() {
        console.log(0);
        
    });
    
$( "button.one" ).on( "click", function() {
        document.getElementById("display").innerHTML += (1);
        console.log(1);
    });
    
$( "button.two" ).on( "click", function() {
    document.getElementById("display").innerHTML += ("2");
        console.log(2);
    }); 
$( "button.add" ).on( "click", function() {
    document.getElementById("display").innerHTML += ("+");
        console.log('+');
    }); 

$( "button.multiply" ).on( "click", function() {
    document.getElementById("display").innerHTML += ("*");
        console.log("*");
    }); 

}); 

