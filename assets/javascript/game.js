	var ComputerGuess=['m','a','r','s','h','i','q','u','e','l'];
	var wins =0;
	var loss =0;
	var retry =9;
	var guess =[];
	var answer=null;
	var displayRetryCounter = function(){
		document.querySelector('#Retry').innerHTML='Guesses Left: ' + retry;
		document.querySelector('#Guesses').innerHTML='Guesses So far: ' + guess.join(', ');
	};
	var hideComputerGuess = function(){
		this.answer = this.ComputerGuess[Math.floor(Math.random() * this.ComputerGuess.length)];
		document.querySelector('#Retry').innerHTML='Guesses Left: ' + retry;
	};
	var displayInitial = function(){
		retry=9;
		guess=[];
		hideComputerGuess();
		displayRetryCounter();
	}
	hideComputerGuess();
	var displayWins = function(){
				wins++;
				document.querySelector('#Wins').innerHTML='Wins: ' + wins;
				alert("You guessed "  + answer + ". Well Done!!! Guess any key to play again.");
				displayInitial();
	};
	var displayLosses = function(){
				loss++;
			document.querySelector('#Loss').innerHTML='Losses: ' + loss;
			alert("Oh snap! Change a few things up and try submitting again.");
			displayInitial();	
	}
	document.onkeyup = function(event){
		retry--
		var perguess = String.fromCharCode(event.keyCode).toLowerCase();
		guess.push(perguess);
		displayRetryCounter();
		if (retry>0) {
			if (perguess == answer) {
				displayWins();
			}
		}
		else if (retry==0){
				displayLosses();
		}
	};