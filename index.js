const clearAllButton = document.querySelector('.clearAll');
const displayArea = document.querySelector('.display');



const clearOneButton = document.querySelector('.clearOne');
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');

const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal-key');
const buttons = document.querySelectorAll('button');


//clear everything in the display area
clearAllButton.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    displayArea.value= '';
    

});

//clear the last element of the number in the display area
clearOneButton.addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    displayArea.value =displayArea.value.slice(0,-1) ;
});


//type numbers
 numberButtons.forEach( button=>button.addEventListener('click',(e)=>{
          e.preventDefault();
          e.stopPropagation();
          displayArea.value += button.textContent;
        

})

 );

//type a decimal number
decimalButton.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    
    if (displayArea.value.includes('.') === false){
        displayArea.value += '.';
    }
});

operatorButtons.forEach(button=>{
    var operators = /\%|\-|\+|\x|\X|\+\/\-|\÷/g ;
    
    button.addEventListener('click',(e)=>{
        var hasOperator = operators.test(displayArea.value);  
        e.preventDefault();
        e.stopPropagation();
        
            if (hasOperator===false){
                
                 displayArea.value += button.textContent;
                      
            } 
       })
    
});

   equalButton.addEventListener('click',(e)=>{
   
   e.preventDefault();
   var operationCommands = /\%|\-|\+|\x|\X|\+\/\-|\÷/ ;
   var parts = displayArea.value.split(operationCommands);
   var firstPart = parseFloat(parts[0])  ;
   var secondPart =parseFloat(parts[1]);
   var isMatched = operationCommands.test(displayArea.value);
   var result;
   
  if (isMatched===true){
    
         operationCommand = displayArea.value.match(operationCommands)[0];
        if (operationCommand === "+"){
            result= Number(firstPart) + Number(secondPart);
            
        }if (operationCommand === "-"){
            result = Number(firstPart) - Number(secondPart);
            
        }if (operationCommand === "x"){
            result = Number(firstPart) * Number(secondPart);
            
            
        }if (operationCommand === "÷"){
            result = Number(firstPart) / Number(secondPart);
            
        }if (operationCommand === "%"){
            result= Number(firstPart) % Number(secondPart);
            
        }
     displayArea.value = result;
  }if (isMatched===false){

      result = displayArea.value;
    }
     
})


var school ={name:"Viateur"};
console.log({...school, name})



