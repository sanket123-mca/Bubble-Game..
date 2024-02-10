
function makeBubble(){


var clutter = "";

for(var i =1; i<=133; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pannelbtm").innerHTML=clutter;
}
var timer = 60 ;
var score = 0 ;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}
function runTimer(){
    var timerint = setInterval(function ()  {
        if (timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;

        } else {
            clearInterval(timerint);
            document.querySelector("#pannelbtm"). innerHTML =`<h1>Game Over...!</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pannelbtm").addEventListener("click" ,
function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

});


runTimer();
makeBubble();
getNewHit();
