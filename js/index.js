var display = document.getElementById("result");
var memo = document.getElementById("typed");
var els = document.getElementsByTagName("input");
var a="", // the current input value
    b="",  // stored value
    c=""; // the whole fomula

for(var i=0; i<els.length; i++){  
   var btn = els[i];
   calculate(btn);
}
function calculate(btn){
btn.addEventListener("click", function(){
          var btnVal = this.value;
          var btnName = this.name;
       //reset everything  
       if(btnName == "cleanall"){ 
             display.innerHTML = "";
             memo.innerHTML ="";
             a = ""; b= ""; c=""; 
       }  
       if(btnName == "backspace"){ 
             a = a.slice(0,-1);    
             display.innerHTML = a; 
       }
       //numbers input and decimal     
       if(!isNaN(btnVal) || btnVal == "." && a.indexOf(".") === -1){
              a+=btnVal; 
              display.innerHTML= a; 
       }
       if(btnName == "negative" && a.indexOf("-") === -1){ 
              a += "-";  
              display.innerHTML = a; 
       }
       if(a.length >= 10){ alert("Agh...Too long!"); }
       //when click operator push num into memo window
       if(btnName == "minus" || btnName == "plus"|| btnName == "divide"|| btnName == "multip") {
        b = a;
        a = "";
        c += b + " " + btnVal + " ";
        memo.innerHTML = c;
      }
  //do the math 
  if(btnVal == "=" ){ 
         c += a;
         memo.innerHTML = " " ;
         var x = c.replace(/×/g,"*").replace(/÷/g,"/");
         //console.log(x);
         display.innerHTML = eval(x);
         a = "";
         b = "";
         c = "";
         x = "";
   }   

}); //click function over  
} //calculate function over