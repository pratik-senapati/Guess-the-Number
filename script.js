//check guess function
//generate random number function
//start game on reloading and on cicking button

let num=Math.floor(Math.random()*100)+1;
let submit=document.querySelector("#but");
let g=document.querySelector(".guess");
let l=document.querySelector(".lohi");
let correct=document.querySelector(".correct");
let gander=document.querySelector(".guesses");
let resetbutton;
let gc=1;
console.log("bruh");


function checkguess()
{
    let guess=Number(submit.value);
    if(gc==1)
    {
        gander.textContent="Previous Guesses:";
    }
    gander+=`${guess} `;
    if(gc>10)
    {   
        if(num==guess)
        {
            correct.textContent="You're correct!";
            correct.style.backgroundColor='green';
            lohi.textContent='';
        }
        else if(num>guess)
        {
            correct.textContent="Incorrect Guess!";
            correct.style.backgroundColor='red';
            lohi.textContent=`Your last guess ${guess} was too high!`;
            gc++;

        }
        else
        {
            correct.textContent="Incorrect Guess!";
            correct.style.backgroundColor='red';
            lohi.textContent=`Your last guess ${guess} was too low!`;
            gc++;
        }
    }
    else if(gc==10)
    {
        correct.textContent="GAME OVER! TRY AGAIN!";
        correct.style.backgroundColor='red';
        lohi.textContent='';
        setgameover();

    }
}

submit.addEventListener('click', checkguess);

function setgameover()
{
    submit.disabled=true;
    g.disabled=true;
    resetbutton=document.createElement('button');
    resetbutton.textContent="Start New Game";
    document.body.appendChild(resetbutton);
    resetbutton('click', resetgame);
}

function resetgame()
{
    gc=1;
    document.location.reload();
}