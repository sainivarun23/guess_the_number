randomNO=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const ip=document.querySelector('#guessField');
const prevg=document.querySelector('.guesses');
const lastres=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement("p");

let prevGuess=[];

let numGuess=1;

let playGame=true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(ip.value)
        console.log(guess);

        validateGuess(guess)

 
    });
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1){
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            CleanGuess(guess);
            displayMessage(`game over! the number was ${randomNO}`);
            endGame()
        }else{
            CleanGuess(guess);
            checkGuess(guess);
        }

    }
}

function checkGuess(guess){
    
    if(guess===randomNO){
        displayMessage(`You GUESSED RIGHT`);
        endGame();
    }
    else if(guess<randomNO){
        displayMessage(`Too Low`);
    }
    else{
        displayMessage(`Too High`);
    }
}


function CleanGuess(guess){
    ip.value="";
    prevg.innerHTML+=`${guess}, `;
    numGuess++;
    lastres.innerHTML=`${11-numGuess}`;
    
}

function displayMessage(message){

    lowOrHi.innerHTML=`<h2>${message}</h2>`

    
}

function endGame(){
    ip.value='';
    ip.setAttribute('disabled','');
    // lowOrHi.innerHTML=`<h2>Game Over!</h2>`;
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false; 
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector("#newGame");
    if(newGameButton){
    newGameButton.addEventListener('click',()=>{
    
        randomNO=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        prevg.textContent='';
        lastres.textContent=`${11-numGuess}`;
        lowOrHi.textContent='';
        ip.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame=true;
    
    })
}

    
}


