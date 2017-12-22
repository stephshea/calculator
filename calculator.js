/* global $*/
/* global accumulate*/
$(document).ready(function(){


// function getTotal() {
    
//     return total;
// }


// function subtractNumber() 
// {

// }
// function multiplyNumber() 
// {

// }
// function divideNumber() 
// {

// }


// function getTotal() { 
//         var total = display.reduce(function(a,b){return a+b});
//   $('#total').html(total);
// }


    var display = document.getElementById("display").click;
    $( "button.equal" ).on( "click", function() {
    document.getElementById("display").innerHTML = runningTotal;

    });  
    
    for (var i = 0; i < display.length; i++) {
        var runningTotal  = 0;
    //   console.log(display[i]);
    runningTotal += parseInt(display[i]);
        // runningTotal = runningTotal + parseInt(display[i]);
  
//   console.log(runningTotal);
  
  
        // document.getElementById("display").innerHTML = runningTotal;
       
         return runningTotal;
    } 

    //  $('#total').html(total);
  
    
$( "button.zero" ).on( "click", function() {
        console.log(0);
        
    });
    
$( "button.one" ).on( "click", function() {
        document.getElementById("display").innerHTML += (1);
        console.log(1);
    });
    
$( "button.two" ).on( "click", function() {
    document.getElementById("display").innerHTML += (2);
        console.log(2);
    }); 
$( "button.add" ).on( "click", function() {
    document.getElementById("display").innerHTML += ('+=');
        console.log('+');
    }); 

$( "button.multiply" ).on( "click", function() {
    document.getElementById("display").innerHTML += ('*=');
        console.log("*");
    }); 

}); 


// function getSum(total, num) {
//     return total + num;
// }
// function myFunction(item) {
//     document.getElementById("demo").innerHTML = display.reduce(getSum);
// }




   
        

// function getSum(total, num) {
//     return total + num;
         
    


//          var total = display.reduce( function(total, amount) {
//   return total + amount; 
//     });    
    
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//         console.log(display.reduce(reducer));
//             return accumulator + currentValue;