let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreMsg=document.querySelector("#user-score");
const compScoreMsg=document.querySelector("#comp-score");

const getCompChoice=()=>{
    const compChoices=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return compChoices[idx];
}

// celebrate function

const celebrate = () => {
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
    });

    confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.8 }
    });

    // Animate message
    msg.classList.add("celebrate");

    setTimeout(() => {
        msg.classList.remove("celebrate");
    }, 2000);
};


const playGame=(userChoice)=>{
    console.log("game started");
    const compChoice=getCompChoice();
    console.log("computer choice :",compChoice);

    if (userChoice === compChoice) {
    console.log("It's a tie!");
    msg.innerText = "It's a tie!";
    msg.style.backgroundColor = "gray";
}
    else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
)   {
    userScore++;
    console.log("You win this round!");
    msg.innerText = `You win this round! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScoreMsg.innerText = userScore;
    if(userScore===10){
    msg.innerText="🎉 Game Reset! You reached 10 points! User Wins! 🎉";
    msg.style.backgroundColor="gold";

    celebrate();

    userScore=0;
    compScore=0;
    userScoreMsg.innerText=userScore;
    compScoreMsg.innerText=compScore;
}

}
else {
    compScore++;
    console.log("Computer wins this round!");
    msg.innerText = `Computer wins this round! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScoreMsg.innerText = compScore;
    if(compScore===10){
    msg.innerText="💻 Game Reset! Computer Wins! 💻";
    msg.style.backgroundColor="orange";

    celebrate();

    userScore=0;
    compScore=0;
    userScoreMsg.innerText=userScore;
    compScoreMsg.innerText=compScore;
}

}

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked :",userChoice);
        playGame(userChoice);
    })
})