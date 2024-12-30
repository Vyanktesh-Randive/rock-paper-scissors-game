let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPara = document.querySelector ("#user-score");
const compPara = document.querySelector ("#comp-score");

const genCompChoice = (compChoice) => {
    const options = ["rock","paper","scissors"]
    const rndIdx = Math.floor(Math.random()*3);

    return options[rndIdx];
}

const drawGame = (userChoice,compChoice)=>{
    console.log("Game was draw.")
    msg.innerText = `match was draw because Your choice "${userChoice}" and Computer choice "${compChoice}" are same, Play again`;
    msg.style.backgroundColor = "green"
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin){
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `you win!! Your choice "${userChoice}" beast computer choice "${compChoice}"`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black"
    } else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `computer choice "${compChoice}" beast your choice "${userChoice}"`;
        msg.style.backgroundColor = "red"
    }

}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice)

    if (userChoice === compChoice){
        drawGame(userChoice , compChoice);
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true ;
        }else if (userChoice === "paper"){
            userWin = compChoice==="scissors" ?false :true ;
        }else {
            userWin =  compChoice === "rock"? false:true;
        }
        showWinner(userWin, userChoice , compChoice);
    }
    }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice  = choice.getAttribute ("id"); 
        playGame(userChoice);
    })
})