var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var gameTo = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
// Set this to the input from user
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
    p1Score++;
    console.log(p1Score, winningScore);
    if(p1Score === winningScore){
    	p1Display.classList.add("winner");
    	p2Display.classList.add("loser");
    	gameOver = true;
  	// This will stop the game from incrementing
    }
    p1Display.textContent = p1Score;
 	}
 });

p2Button.addEventListener("click", function(){
	if(!gameOver){
		 p2Score++;
		 if(p2Score === winningScore){
		 	p2Display.classList.add("winner");
    	p1Display.classList.add("loser");
		 	gameOver = true;
		 } 
    p2Display.textContent = p2Score;
}
});

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	p1Display.classList.remove("loser");
	p2Display.classList.remove("loser");
	gameOver = false;
}

gameTo.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	// Change this to a number instead of it being a string
	winningScore = Number(this.value);
	reset();
});