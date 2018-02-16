console.log("this is the js file");

const inputLabel = document.getElementById('inputLabel');

 function pushBtn(obj){
   const pushed = obj.innerHTML;

      console.log("pushed:", pushed);
    console.log("inputLabel.innerHTML:", inputLabel.innerHTML);

   if(pushed === '='){

    //Calculate
    inputLabel.innerHTML = eval(inputLabel.innerHTML);

   } else if (pushed == 'AC') {
    //all clear
    inputLabel.innerHTML = '0';

   } else {
    if(inputLabel.innerHTML == '0') {
       inputLabel.innerHTML = pushed;
    } else{
      inputLabel.innerHTML +=pushed;
    }

   }
 }//end of pushBtn function