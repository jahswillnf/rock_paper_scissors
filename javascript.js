let cpuScore = 0;
let playerScore = 0;
let computerSelection;
let playerSelection;

let playerSelection;
let computerSelection;
let playerChoice;


function	getComputerChoice()
{
	let choice; 
	
	choice = Math.floor(Math.random() * 3);
	if (choice == 0)
		{
			return ('rock');
		}
	else if (choice == 1)
		{
			return ('paper');
		}
	else if (choice == 2)
		return ('scissors');
}

	const buttons = document.querySelectorAll('button');
	buttons.forEach((button)=>
	{
		button.addEventListener('click',()=>
		{
	
			playerSelection = button.id;
				if (playerSelection == 'rock')	
				{
					console.log(playerSelection);
				}
				else if (playerSelection == 'paper')
				{
					console.log(playerSelection);
				}
				else if (playerSelection == 'scissors')
				{
					console.log(playerSelection);
				}
				game();
		})
	})


function	capitalize(string) 
{	
	return string.charAt(0).toUpperCase() + string.slice(1);
}



function	playRound(playerSelection, computerSelection)
{

	computerSelection = getComputerChoice();


	if (computerSelection == playerSelection)
		return ('Draw!');
	
	else if ((computerSelection == 'paper' && playerSelection == 'rock') ||
			(computerSelection == 'rock' && playerSelection == 'scissors') ||
		(computerSelection == 'scissors' && playerSelection == 'paper'))
		{
			cpuScore = ++cpuScore;
			return (`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
		}
			
	
	else if ((computerSelection == 'paper' && playerSelection == 'scissors') ||
			(computerSelection == 'scissors' && playerSelection == 'rock') || 
			(computerSelection == 'rock' && playerSelection == 'paper'))
		{
			playerScore = ++playerScore;
			return (`You Won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
		}

}


function	winnerDecider()
{
	if (cpuScore < 5 && playerScore < 5)
	{
		return(null);
	}
	if (cpuScore > 4 && playerScore < 5)
	{
		cpuScore = 0;
		playerScore = 0;
		return ('CPU Wins!')
	}
	else if (playerScore > 4 && cpuScore < 5)
	{
		cpuScore = 0;
		playerScore = 0;	
		return ('Player  Wins!')
	}

}

function 	game()
{
	const display = document.querySelector('.display');
	display.innerText = playRound(playerSelection, computerSelection);
	
	const winner = document.querySelector('.winner');
	winner.innerText =  winnerDecider() ;

	const score = document.querySelector('.score');
	score.innerText = `Player Score : ${playerScore } \n \n CPU Score : ${cpuScore}`;
 	
}

<<<<<<< HEAD
=======
console.log(game());
>>>>>>> origin
