/* global $*/
$(document).ready(function(){

var number;
var display = "";
var total= $("#total");
    total.text("0");
// function getTotal() { 
        
//         var total = display.reduce(function(a,b){return a+b});
//   $('#total').html(total);
// }
    //  $('#total').html(total);
    
    $( "button.equal" ).on( "click", function () {
    
    for (var i = 0; i <display.length; i++)
    
    {
    total += parseInt(display[i]);
    console.log(display);
    total = document.getElementById('total').innerHTML;
    return total;
    }
    
    // total = document.getElementById('total').innerHTML;
    // return total;
    
    });
    
    
$( "button.zero" ).on( "click", function() {
        console.log(0);
        // addKey(key) {
        //     display.push(key);
        //     console.log(display);
        // }
    });
    
$( "button.one" ).on( "click", function() {
        // display.push(1);
        display ++;
    document.getElementById("displayHere").innerHTML += 1;
    
    });
    
$( "button.two" ).on( "click", function() {
        // display.push(2);
        display ++;
         document.getElementById("displayHere").innerHTML += 2;
    });
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
$( "button.add" ).on( "click", function() {
display ++;
        document.getElementById("displayHere").innerHTML += ("+");

    }); 
$( "button.subtract" ).on( "click", function() {
        console.log('-');
    }); 
$( "button.multiply" ).on( "click", function() {
        console.log('*');
    }); 
$( "button.divide" ).on( "click", function() {
        console.log('/');
    });
$( "button.decimal" ).on( "click", function() {
        console.log('.');
    });    
    
$( "button.equal" ).on( "click", function () {
//     return display; {
//     total = display.reduce(function(prev,next,index) {
//   console.log(index + ":" + prev + ":" + next);
// prev += next;
// return prev;
// },0);

});
    
    


// function getSum(total, num) {
//     return total + num;
// }
// function myFunction(item) {
//     document.getElementById("demo").innerHTML = display.reduce(getSum);
// }


});

   
        

// function getSum(total, num) {
//     return total + num;
         
    
//     console.log(display);
//     return display;

//          Zvar total = display.reduce( function(total, amount) {
//   return total + amount; 
//     });    
    
//     const reducer = (accumulator, currentValue) => accumulator + currentValue;
//         console.log(display.reduce(reducer));
//             return accumulator + currentValue;