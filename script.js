var output=document.getElementsByClassName("inner");

var display=document.getElementById("display");
var operator=null;
var operand1=0;
var operand2=null;

for(var i=0;i<output.length;i++){
    output[i].addEventListener('click',function(){
        
      
    var value=this.getAttribute("data-value");
        
        if(value=="+"){
            document.getElementById("operator-display").innerText="+";
            
            document.getElementById("operand1-display").innerText=display.innerText;
            operand1=parseFloat(display.innerText);
            operator="+";
            display.innerText="";
        }
        else if(value=="="){
            operand2=parseFloat(display.innerText);
            var res=eval(operand1 + " " + operator +" " +  operand2);
            document.getElementById("operand2-display").innerText="Ans- "+res;
            display.innerText=res;
//            operand1=res;
//            display.innerText=res;
        }
        else if(value=="/"){
             document.getElementById("operator-display").innerText="/";
            
            document.getElementById("operand1-display").innerText=display.innerText;
            operand1=parseFloat(display.innerText);
            operator="/";
            display.innerText="";
        }
        else if(value=="+/-"){
              
             display.innerText="-"+display.innerText;
        }
        else if(value=="*"){
             document.getElementById("operator-display").innerText="*";
            
            document.getElementById("operand1-display").innerText=display.innerText;
            operand1=parseFloat(display.innerText);
            operator="*";
            display.innerText="";
        }
        else if(value=="-"){
             document.getElementById("operator-display").innerText="-";
            
            document.getElementById("operand1-display").innerText=display.innerText;
            operand1=parseFloat(display.innerText);
            operator="-";
            display.innerText="";
        }
        else if(value=="%"){
             document.getElementById("operator-display").innerText="%";
            
            document.getElementById("operand1-display").innerText=display.innerText;
            operand1=parseFloat(display.innerText);
            operator="+";
            display.innerText="";
        }
        else if(value=="AC"){
                        display.innerText="";

//            operand1-display.innerText="";
//            operand2-display.innerText="";
        }
        else{
            
            display.innerText+=value;
        }
  });   
}



