const PICKS =[
  {
        name:"paper",
        beats:"rock"
    },
    {
        name:"scissor",
        beats:"paper"
    },
    {
        name:"rock",
        beats:"scissor"
    }
]
const pickedbutton = document.querySelectorAll('.img-btn');
const game = document.querySelector('.images');
const resultsdiv = document.querySelector('.results');
const resultsfinal = document.querySelectorAll('.final-result');
const resultWinner = document.querySelector(".results-winner");
const resultText = document.querySelector(".results-text");

const playAgainBtn = document.querySelector(".play-again");

const nextButton = document.querySelector('.next-btn');

const scoreNumber = document.getElementById("y-number");
const scoreNumber2 = document.getElementById("c-number");

const initialContent = document.getElementById("initial-content");

let score = 0;
let score1 = 0;


pickedbutton.forEach(button => {
    button.addEventListener("click",()=>{
        const choiceName =button.dataset.choice;
        const choice =PICKS.find((choice)=>choice.name === choiceName);
        picked(choice);
    });

});

function picked(choice){
    const pcchoice = pcchoose();
    displayResults([choice, pcchoice]);
    displayWinner([choice, pcchoice]);


}

function pcchoose(){
    const random = Math.floor(Math.random() * PICKS.length)
    return PICKS[random];
}



function displayResults(result) {
    resultsfinal.forEach((resultsdiv, idx) => {
        setTimeout(() => {

            resultsdiv.innerHTML = `
                <div class="pick ${result[idx].name}">
                    <img src="${result[idx].name}.png" alt="${result[idx].name}" />
                </div>
            `;
        }, idx * 1000);
    });


    game.classList.toggle("hidden");
    resultsdiv.classList.toggle("hidden");
}

function displayWinner(result){
    setTimeout(()=>{
        const userWins = isWinner(result);
        const pcWins = isWinner(result.reverse());

        if(userWins){
            resultText.innerHTML = "you win<br> <span style='font-size: 30px;'> against pc</span>";

            resultsfinal[0].classList.toggle("winner");
            Score(1);

            nextButton.classList.remove("hidden");
            rulesButton.style.position = 'absolute';
            rulesButton.style.right = '12rem';
            nextButton.style.right = '2rem';
            
        
        }
        else if(pcWins){
            resultText.innerHTML = "<span style='font-family:  Roboto, sans-serif;'>you lost<br><span style='font-size: 30px;'> against pc</span></span>";

            resultsfinal[1].classList.toggle("winner");
            Score1(1)

            nextButton.classList.add("hidden");
        }
        else{
            resultText.innerText = "tie up";

            nextButton.classList.add("hidden");
        
        }
    

        resultWinner.classList.toggle("hidden");
        resultsdiv.classList.toggle("show-winner");
    

    },1000);


}

function isWinner(result){
    return result[0].beats === result[1].name;
}
function Score(point){
    score += point;
    scoreNumber.innerText = score; 
}
function Score1(points){
    score1 += points;
    scoreNumber2.innerText = score1;
}


playAgainBtn.addEventListener("click", () => {
    game.classList.toggle("hidden");
    resultsdiv.classList.toggle("hidden");
  
    resultsfinal.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsdiv.classList.toggle("show-winner");


    nextButton.classList.add("hidden");
    rulesButton.style.right = '2rem';
  });
  
 


function getGradientClass(choiceName) {
    switch (choiceName) {
        case "paper":
            return "gradient-paper";
        case "scissor":
            return "gradient-scissor";
        case "rock":
            return "gradient-rock";
        default:
            return "";
    }
}


const rulesButton = document.getElementById('rules-button');
const rulesModal = document.getElementById('rules-modal');
const closeButton = document.getElementById('close-button');

rulesButton.addEventListener('click', () => {
  rulesModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  rulesModal.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.next-btn');

    nextButton.addEventListener('click', () => {

        fetch('index2.html')
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;

        
                const playAgainBtn = document.getElementById('play-again-button');
                playAgainBtn.addEventListener('click', () => {
                
                    window.location.href = 'index.html';
                });
                
const rulesButton = document.getElementById('rules-button');
const rulesModal = document.getElementById('rules-modal');
const closeButton = document.getElementById('close-button');

    rulesButton.addEventListener('click', () => {
    rulesModal.style.display = 'block';
});

    closeButton.addEventListener('click', () => {
    rulesModal.style.display = 'none';
});


               
                });
            })
            .catch(error => console.error('Error loading index1.html:', error));
    });

            
            

    
    
    

