/**
 *	Handling the ground init
 */
function initGround(){
	ground.width = DOM_grounds[0].clientWidth-1;
	ground.height = DOM_grounds[0].clientHeight-1;
	ground.count = DOM_grounds.length;
	for(let i = 0; i < ground.count; i++){
		// Update variables
		DOM_grounds[i].temp_x = (ground.width)*i;
		// Draw ground
		DOM_grounds[i].style.transform = "translate3d("+ DOM_grounds[i].temp_x +"px, 0px, 0px)";
	}
}

/**
 *	Handling the ground update
 */
function updateGround(){
	for(let i = 0; i < ground.count; i++){
		// Update variables
		DOM_grounds[i].temp_x -= world.speed;
		// Check conditions
		if(DOM_grounds[i].temp_x < -ground.width){
			let extra = DOM_grounds[i].temp_x + (ground.width);
			DOM_grounds[i].temp_x = (ground.width)*(ground.count-1) + extra;
		}
		// Draw ground
		DOM_grounds[i].style.transform = "translate3d("+ DOM_grounds[i].temp_x +"px, 0px, 0px)";
	}
}