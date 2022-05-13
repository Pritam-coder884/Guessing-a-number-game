let cg;
let ug=[];
let userGuessUpdate=document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");
let audio=new Audio('./audio/a1.wav');
const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const init=()=>{
    cg=Math.floor(Math.random() * 100);
}
const startGame=()=>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display="block";
}
const startNewGame=()=>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
}
const newGameBegin=()=>{
    audio.play();
    window.location.reload();
}

const compareguess = () => {
    audio.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    ug = [...ug, userNumber];
    document.getElementById("guess").innerHTML = ug;
    if(ug.length < maxGuess){
        if(userNumber > cg){
            userGuessUpdate.innerHTML="your guess is High 😯";
            userNumberUpdate.value=" ";
        }
        else if(userNumber < cg){
            userGuessUpdate.innerHTML="your guess is Low 😥";
            userNumberUpdate.value=" ";
        }
        else{
            userGuessUpdate.innerHTML="It's Correct 😀";
            userNumberUpdate.value=" ";
            startNewGame();
        }
    }
    else{
        if(userNumber > cg){
            userGuessUpdate.innerHTML=`You Loose!! Correct number was ${cg}`;
            userNumberUpdate.value=" ";
            startNewGame();
        }
        else if(userNumber < cg){
            userGuessUpdate.innerHTML=`You Loose!! Correct number was ${cg}`;
            userNumberUpdate.value=" ";
            startNewGame();
        }
        else{
            userGuessUpdate.innerHTML="It's Correct 😀";
            userNumberUpdate.value=" ";
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML = ug.length;
};
b1.addEventListener('click',()=>{
    audio.play();
    maxGuess=10;
    startGame();
});
b2.addEventListener('click',()=>{
    audio.play();
    maxGuess=5;
    startGame();
});
  
  