'use strict';

const show = document.querySelector(".show");
const btnClose = document.querySelector(".btn-close");
const overlay = document.querySelector(".overlay");
const btnRules = document.querySelector(".btn-rules");
const main = document.querySelector('.main');
const symbol=document.querySelector('.symbol');
const symbolOne=document.querySelector('.symbol-1');
const symbolTwo=document.querySelector('.symbol-2');
const userResult = document.querySelector('.result');
const userScore=document.querySelector('.score');
const btnAgain=document.querySelector('.btn-again');
const selAnother=document.querySelector('.another');
const user_select=document.getElementById('user_select');
const computer_select=document.getElementById('computer_select');

const em = ['paper','scissor','rock'];
let userChoice=undefined;
let userChoiceOne=undefined;
let userChoiceTwo=undefined;
let score = 0;
userScore.textContent = score;


function showModal(){
  show.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
function closeModal(){
  show.classList.add('hidden');
  overlay.classList.add('hidden');
}
btnClose.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);
btnRules.addEventListener('click',showModal);
document.addEventListener('keydown',function(e){
  if(e.key==="Escape"){
    closeModal();
  }
});

btnAgain.addEventListener('click',function(){
  console.log('hi');
  main.classList.remove('hidden');
  selAnother.style.display="none";
})

//paper
symbol.addEventListener('click',function(){
  main.classList.add('hidden');
  selAnother.style.display="flex";
  userChoice = "paper";
  var mouseChoice = em[Math.floor(Math.random()*em.length)];
  updateSelection(user_select,userChoice);
  updateSelection(computer_select,mouseChoice);
  if(userChoice === 'paper' && mouseChoice === 'rock'){
    score+=1;
    userScore.textContent=score;
    userResult.textContent = "YOU WIN";
  }else if(userChoice === 'paper' && mouseChoice === 'scissor'){
    score-=1;
    userScore.textContent=score;
    userResult.textContent= "YOU LOSE";
  }else if(userChoice === 'paper' && mouseChoice === 'paper'){
    userScore.textContent = score; 
    userResult.textContent= "DRAW";
  }
  selection.style.display='flex';
})

//scissor
symbolOne.addEventListener('click',function(){
  main.classList.add('hidden');
  selAnother.style.display="flex";
  userChoiceOne = "scissor"; 
  var mouseChoice =  em[Math.floor(Math.random()*em.length)];
  updateSelection(user_select,userChoiceOne);
  updateSelection(computer_select,mouseChoice);
  if(userChoiceOne === 'scissor' && mouseChoice === 'paper'){
    score+=1;
    userScore.textContent=score;
    userResult.textContent = "YOU WIN";
  }else if(userChoiceOne === 'scissor' && mouseChoice === 'rock'){
    score-=1;
    userScore.textContent=score;
    userResult.textContent= "YOU LOSE";
  }else if(userChoiceOne === 'scissor' && mouseChoice === 'scissor'){
    userScore.textContent = score; 
    userResult.textContent= "DRAW";
  }
})

//rock
symbolTwo.addEventListener('click',function(){
  main.classList.add('hidden');
  selAnother.style.display="flex";
  userChoiceTwo= "rock" 
  var mouseChoice = em[Math.floor(Math.random()*em.length)];
  updateSelection(user_select,userChoiceTwo);
  updateSelection(computer_select,mouseChoice);
  if(userChoiceTwo === 'rock' && mouseChoice === 'scissor'){
    score+=1;
    userScore.textContent=score;
    userResult.textContent = "YOU WIN";
  }else if(userChoiceTwo === 'rock' && mouseChoice === 'paper'){
    score-=1;
    userScore.textContent=score;
    userResult.textContent= "YOU LOSE";
  }else if(userChoiceTwo === 'rock' && mouseChoice === 'rock'){
    userScore.textContent = score; 
    userResult.textContent= "DRAW";
  }
})

function updateSelection(select,choice){

  select.classList.remove('paper');
  select.classList.remove('scissor');
  select.classList.remove('rock');

  const img= select.querySelector('img');
  select.classList.add(`${choice}`);
  img.src= `./icon-${choice}.svg`;
  img.alt = choice;
}




