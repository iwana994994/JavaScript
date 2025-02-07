const body= document.getElementsByTagName("body")[0];

function setCollorOnBackground(name){
           body.style.backgroundColor=name;
}
function setCollorRandom(){
   const red = Math.round(Math.random()*255);
   const blue = Math.round(Math.random()*255);
   const green = Math.round(Math.random()*255);

   const color=`rgb(${red},${blue},${green})`;

 body.style.backgroundColor=color;
}