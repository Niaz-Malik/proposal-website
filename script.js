const message="Every moment with you is special. Will you be mine forever? ❤️";

let i=0;

function type(){

if(i<message.length){

document.getElementById("text").innerHTML+=message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

const no=document.getElementById("no");

function move(){

let x=Math.random()*(window.innerWidth-150);

let y=Math.random()*(window.innerHeight-80);

no.style.position="fixed";

no.style.left=x+"px";

no.style.top=y+"px";

}

no.onmouseover=move;

no.ontouchstart=function(e){

e.preventDefault();

move();

}

document.getElementById("yes").onclick=function(){

document.querySelector(".buttons").style.display="none";

document.getElementById("result").style.display="block";

let end=Date.now()+5000;

let timer=setInterval(()=>{

if(Date.now()>end){

clearInterval(timer);

return;

}

confetti({

particleCount:80,

spread:360,

origin:{

x:Math.random(),

y:Math.random()-0.2

}

});

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},4000);

},250);

}