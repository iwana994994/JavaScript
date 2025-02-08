const time=document.getElementById("time");

let timeElapsed=0;  //koliko je vremena proslo
let interval=null;  // da bi na nju mogli da pozovemo javascript funkciju koja automacki povecava int


function padStart (value){
    return String(value).padStart(2,"0")
}
function setTime(){
const min= Math.floor(timeElapsed/60)
const sec=timeElapsed%60


    time.innerHTML=`${padStart(min)}:${padStart(sec)}`;
}
function timer(){
    timeElapsed++;
    setTime();
}
function start(){
    if(interval) stop()
 interval=setInterval(timer,1000);



}
function stop(){
    clearInterval(interval)
   

}

function reset(){
    stop()
    timeElapsed=0;
    setTime();
}