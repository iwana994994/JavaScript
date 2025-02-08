const input= document.getElementById("input");


function reverseValue(str){
return str.split("").reverse().join("")

}

function check(){
    const value= input.value;
const reverse= reverseValue(value);
  if(value==reverse){
    if(value==0)
        {
            alert("EMPTY");
        }
    alert("PALINDROM !")
  }else{
    alert("NOT PALINDROM")
  }
  
}
