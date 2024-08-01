let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let hightestScore=0;
let btns=['yellow','red','purple','green'];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
    }
});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`LEVEL ${level}`;
    let randomIndex=Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex]; 
    gameSeq.push(randomColor);
    let randomButton=document.querySelector(`.${randomColor}`);
    btnFlash(randomButton);
}
function btnFlash(btn){
    if (started==true){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}
}
function btnPress(){
    btnFlash(this);
    userColor=this.getAttribute("id");
    userSeq.push(userColor);
    checkButton(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress)
}

function checkButton(indx){
    if(userSeq[indx]==gameSeq[indx]){
        if(userSeq.length==gameSeq.length)
            setTimeout(levelUp,1000);
    }
    else{
        if(level>hightestScore){
            hightestScore=level;
        }
        h2.innerHTML=`Game over ! Your Score Was <b>${level} <br>YOUR HIGHEST SCORE IS ${hightestScore}<br>Press any key to start` ;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}