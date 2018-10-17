/**
 *	Handling the bird init
 */
function initBird(){
	bird.y = 0;
	bird.rot = 0;
	bird.vel = bird.thrust;
	bird.alive = true;
	bird.finished = false;
}

/**
 *	Handling the bird update
 */
function updateBird(){
	// Update variables
	bird.vel += bird.acc;
	bird.y += bird.vel;
	bird.rot = (bird.vel)*6;
	// Check conditions
	floorCollisions();
	ceilingCollisions();
	pipeCollisions();
	// Draw bird
	DOM_bird.style.transform = "translate3d(0px, "+ bird.y +"px, 0px) rotate("+ bird.rot + "deg)";
}