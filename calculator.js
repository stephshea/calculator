/* global $*/
$(document).ready(function(){
<<<<<<< HEAD

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
=======
   
  
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
>>>>>>> 7d37599db4b213e7fb802e2f32fa50f9fee8654f
    }); 

$( "button.multiply" ).on( "click", function() {
<<<<<<< HEAD
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
=======
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

>>>>>>> 7d37599db4b213e7fb802e2f32fa50f9fee8654f
