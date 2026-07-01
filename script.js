// const message="Every moment with you is special. Will you be mine forever? ❤️";

// let i=0;

// function type(){

// if(i<message.length){

// document.getElementById("text").innerHTML+=message.charAt(i);

// i++;

// setTimeout(type,40);

// }

// }

// type();

// const no=document.getElementById("no");

// function move(){

// let x=Math.random()*(window.innerWidth-150);

// let y=Math.random()*(window.innerHeight-80);

// no.style.position="fixed";

// no.style.left=x+"px";

// no.style.top=y+"px";

// }

// no.onmouseover=move;

// no.ontouchstart=function(e){

// e.preventDefault();

// move();

// }

// document.getElementById("yes").onclick=function(){

// document.querySelector(".buttons").style.display="none";

// document.getElementById("result").style.display="block";

// let end=Date.now()+5000;

// let timer=setInterval(()=>{

// if(Date.now()>end){

// clearInterval(timer);

// return;

// }

// confetti({

// particleCount:80,

// spread:360,

// origin:{

// x:Math.random(),

// y:Math.random()-0.2

// }

// });

// let h=document.createElement("div");

// h.className="heart";

// h.innerHTML="❤️";

// h.style.left=Math.random()*100+"vw";

// document.body.appendChild(h);

// setTimeout(()=>{

// h.remove();

// },4000);

// },250);

// }


// ===============================
// Proposal Website Script
// ===============================

// Proposal Message
const proposalText =
`Every moment with you makes my life brighter.

Your smile is my favorite reason to smile.

I don't know what tomorrow brings,
but I know one thing...

I want you to be part of my future.

Will you be mine forever? ❤️`;

let i = 0;
const typing = document.getElementById("typing");

function typeWriter() {
    if (i < proposalText.length) {
        typing.innerHTML += proposalText.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

typeWriter();


// ===============================
// NO Button Escape
// ===============================

const noBtn = document.getElementById("no");

function moveButton() {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveButton();

});


// ===============================
// YES BUTTON
// ===============================

const yesBtn = document.getElementById("yes");

yesBtn.onclick = function(){

    // Music
    document.getElementById("music").play();

    // Hide First Page
    document.querySelector(".container").style.display="none";

    // Show Form
    document.getElementById("proposalPage").style.display="block";

    // Fireworks

    const duration = 5000;

    const end = Date.now() + duration;

    const timer = setInterval(function(){

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

    },250);


    // Hearts

    for(let i=0;i<80;i++){

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=(Math.random()*3+2)+"s";

        document.body.appendChild(heart);

    }

}



// ===============================
// FORM SUBMIT
// ===============================

document
.getElementById("proposalForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("❤️ Thank You!\n\nYour response has been received.");

});



// =========================
// Theme
// =========================

const theme=document.getElementById("theme");

theme.onclick=function(){

document.body.classList.toggle("dark");

}

// =========================
// Ring
// =========================

document.getElementById("yes").addEventListener("click",function(){

document.getElementById("ring").style.display="block";

});

// =========================
// Rose Petals
// =========================

function petals(){

let petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(Math.random()*5+5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(petals,300);

// =========================
// Floating Hearts Forever
// =========================

function heart(){

let h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(Math.random()*30+20)+"px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

}

setInterval(heart,700);
