/**
 *	Running the game
 */
window.onload = function(){
	init();
	setInterval(() => update(), settings.tick);
}


/**
 *	Initializing everything
 */
function init(){
	world.score.current = 0;
	initBird();
	initGround();
	initPipes();
	initClouds();
	initStars();
}

/**
 *	Updating everything
 */
function update(){
	if(!world.stop){
		updateBird();
		updateGround();
		updatePipes();
		updateClouds();
	}
	updateStats();
}

/**
 *	Stops game and shows end screen
 */
function endGame(){
	if(world.score.current > world.score.high){
		world.score.high = world.score.current;
	}
	world.stop = true;
	bird.alive = false;
	document.querySelector(".game-over").style.display = "flex";
}

/**
 * 	Updates the game stats
 */
function updateStats(){
	document.querySelector("#current-score").innerHTML = world.score.current;
	document.querySelector("#high-score").innerHTML = world.score.high;
}
