//check guess function
//generate random number function
//start game on reloading and on cicking button

let num=Math.floor(Math.random()*100)+1;
num=34;
let submit=document.querySelector("#but");
let g=document.querySelector(".guess");
let l=document.querySelector(".lohi");
let correct=document.querySelector(".correct");
let gander=document.querySelector(".guesses");
let m=document.querySelector(".main");
let resetbutton;
let gc=1;



function checkguess()
{
    let guess=Number(g.value);
    if(gc==1)
    {
        gander.textContent="Previous Guesses:";
    }
    gander.textContent+= guess + ' ';
    if(gc<10)
    {   
        if(num==guess)
        {
            correct.textContent="You're correct!";
            document.body.style.backgroundColor='#90EE90';
            l.textContent='';
            setgameover();
        }
        else if(num<guess)
        {
            correct.textContent="Incorrect Guess!";
            document.body.style.backgroundColor='#ff8886';
            l.textContent=`Your last guess ${guess} was too high!`;
            gc++;
            console.log(45);

        }
        else if(num>guess)
        {
            correct.textContent="Incorrect Guess!";
            document.body.style.backgroundColor='#ff8886';
            
            l.textContent=`Your last guess ${guess} was too low!`;
            gc++;
        }
    }
    else if(gc==10)
    {
        correct.textContent="GAME OVER! TRY AGAIN!";
        document.body.style.backgroundColor='#ff8886';
        l.textContent='';
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
    m.appendChild(resetbutton);
    resetbutton.addEventListener('click', resetgame);
}

function resetgame()
{
    location.reload();
}