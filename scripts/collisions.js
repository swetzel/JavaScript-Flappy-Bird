/**
 *	Handling the floor collisions
 */
function floorCollisions(){
	if(bird.y >= world.dim.center-(bird.height/2)){
		bird.vel = 0;
		bird.y = world.dim.center-(bird.height/2);
		if(!bird.immortal){
			endGame();
		}
	}
}

/**
 *	Handling the floor collisions
 */
function ceilingCollisions(){
	if(bird.y <= -world.dim.center+(bird.height/2)){
		bird.vel = 0;
		bird.y = -world.dim.center+(bird.height/2);
	}
}

/**
 *	Handling the pipe collisions
 */
function pipeCollisions(){
	for(let i = 0; i < pipe.count; i++){
		if( (DOM_pipes_top[i].temp_x <= bird.width-10) && (DOM_pipes_top[i].temp_x >= -pipe.width+10) ){
			if(bird.y < (DOM_pipes_top[i].temp_y - pipe.gap/2 + bird.height/2)){
				if(!bird.immortal){
					endGame();
				}
			}
			if(bird.y > (DOM_pipes_top[i].temp_y + pipe.gap/2 - bird.height/2)){
				if(!bird.immortal){
					endGame();
				}
			}
		}
	}
}