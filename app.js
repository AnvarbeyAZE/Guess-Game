//Game values
let min_val =1,
    max_val =10,
    winNumber = getRandomNum(min_val,max_val), //Random number
    guessLeft =3; //Num of tries

//UI

const game = document.querySelector('#game');
   min = document.querySelector('.min-num');
   max = document.querySelector('.max-num');
   guessInput = document.querySelector('#guess-input');
   guessBtn = document.querySelector("#guess-btn");
   message = document.querySelector('.msg');
//Assign UI min and max
min.textContent = min_val;
max.textContent = max_val;



game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }


});

//Set listener to btn

  guessBtn.addEventListener("click",function(){
    let guess = parseInt(guessInput.value);
     console.log(guess);
     if(isNaN(guess) || guess < min_val || guess > max_val )
     {
       setMessage(`Please enter a number between ${min_val} and ${max_val}`,'red');
     }
     //Check if won
     if(guess === winNumber){


       gameOver(`${winNumber} is correct , YOU WIN!`,true);

     }else{
       guessLeft -= 1;
       if(guessLeft === 0){
         //Game lost
       //Change the border color to green
       //Set Message

       gameOver(`Game over , you lost! Correct number was ${winNumber}` ,false);
       }else {
         //Game continious - answer wrong

       //Tel user the wrong num
       setMessage(`${guess} is not correct ,  ${guessLeft} guesses`,'red');


       }

     }
  });


  function setMessage(msg,color){
    message.style.color=color;
    message.textContent = msg;
  }

  function gameOver(msg,won){
      let color ;
      won === true ? color ='green' : color = 'red';
        guessInput.disabled = true;
       //Change the border, text color to green,red
       guessInput.style.borderColor = color;
       message.style.color = color;
       //Set Message
       setMessage(msg);
       //Palay Again
       guessBtn.value = 'Play Again';
       guessBtn.className += 'play-again';

  }
  function getRandomNum(min,max){
   return Math.floor(Math.random()*(max-min-1)+min);

  }
