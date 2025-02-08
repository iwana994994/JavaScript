const quote=[
"When you put your arms around me, you let me know there's nothing in this world I can't do.",
"How sweet it is to be loved by you." ,
"God only knows what I'd be without you." ,
"I love you more than my hometown.",
"Each day I love you more, today more than yesterday and less than tomorrow" ,
"Love is that condition in which the happiness of another person is essential to your own.",
"Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.",
"Love is the longing for the half of ourselves we have lost.",

];
const usedInx= new Set();
const p= document.getElementById("paragraph");
function random(){

    if(usedInx.size>=quote.length){
     usedInx.clear();
    }
    while(true){

     
        const randomInx= Math.floor(Math.random()*quote.length);

        if(usedInx.has(randomInx)) continue
        
        const quotes= quote[randomInx];
     p.innerHTML=quotes;
    usedInx.add[randomInx];
    
break
    }
   


}