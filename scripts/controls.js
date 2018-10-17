/**
 * 	Player controls
 */
window.onclick = function(){
	if(bird.alive){
		flap();
	}
}
window.onkeypress = function(e){
	if(e.which == 32){
		if(bird.alive){
			flap();
		}
	}
}
window.ontouchstart = function(e){
	if(bird.alive){
		flap();
	}
}

/**
 *	What occurs on flap
 */
function flap(){
	bird.y--;
	bird.vel = bird.thrust;
	world.stop = false;
}

/**
 *	Replay button
 */
document.querySelector(".play-button").onclick = function(){
	restart();
}

/**
 *	What happens when the game is restarted
 */
function restart(){
	world.stop = false;
	document.querySelector(".game-over").style.display = "none";
	init();
}