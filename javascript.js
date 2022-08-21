let cpuScore = 0;
let playerScore = 0;

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

function	capitalize(string) 
{	
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function	playRound(playerSelection, computerSelection)
{
	let player 	= prompt('Please type your weapon');

	computerSelection = getComputerChoice().toLowerCase();
	playerSelection = player.toLowerCase();

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
	if (playerScore > cpuScore)
	{
		return ('Player Wins!')
	}
	else if (playerScore < cpuScore)
	{
			return ('You Lost! CPU win')
	}
	else
		return ('Draw');
}

function 	game()
{
	let	i;

	i = 1;
	while (i <= 5)
		{
			console.log("Round ", i);
			console.log(playRound(playerSelection, computerSelection));
			i++;
		}
	console.log(winnerDecider());	
}

console.log(game());