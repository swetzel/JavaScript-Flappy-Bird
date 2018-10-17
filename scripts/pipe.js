/**
 *	Handling the pipe init
 */
function initPipes(){
	pipe.width = DOM_pipes_top[0].clientWidth-1;
	pipe.height = DOM_pipes_top[0].clientHeight-1;
	pipe.count = DOM_pipes_top.length;
	pipe.offset = 600;
	pipe.gap = 250;
	for(let i = 0; i < pipe.count; i++){
		// Update variables
		DOM_pipes_top[i].temp_x = (pipe.width+pipe.offset)*i + pipe.start;
		let range = (world.dim.center-(pipe.gap/2)-bird.height)*2;
		DOM_pipes_top[i].temp_y = Math.floor( Math.random() * Math.floor(range) ) - range/2;
		DOM_pipes_top[i].s_passed = false;
		// Draw ground
		DOM_pipes_top[i].style.transform = "translate3d("+ DOM_pipes_top[i].temp_x +"px, "+ (DOM_pipes_top[i].temp_y-pipe.gap/2) +"px, 0px) rotate(180deg) scale(-1, 1)";
		DOM_pipes_bot[i].style.transform = "translate3d("+ DOM_pipes_top[i].temp_x +"px, "+ (DOM_pipes_top[i].temp_y+pipe.gap/2) +"px, 0px)";
	}
}

/**
 *	Handling the pipe update
 */
function updatePipes(){
	for(let i = 0; i < pipe.count; i++){
		// Update variables
		DOM_pipes_top[i].temp_x -= world.speed*0.8;
		// Check conditions
		if(DOM_pipes_top[i].temp_x < -(pipe.width+world.dim.indent)){
			let range = (world.dim.center-pipe.gap/2-bird.height)*2;
			let extra = DOM_pipes_top[i].temp_x + world.dim.indent + pipe.width;
			DOM_pipes_top[i].temp_y = Math.floor( Math.random() * Math.floor(range) ) - range/2;
			DOM_pipes_top[i].temp_x += (pipe.width + pipe.offset) * (pipe.count) + extra;
			DOM_pipes_top[i].s_passed = false;
		}
		// Update score
		if(DOM_pipes_top[i].temp_x < -pipe.width){
			if(!DOM_pipes_top[i].s_passed){
				DOM_pipes_top[i].s_passed = true;
				world.score.current++;
				if(pipe.offset >= 100){
					pipe.offset -= 5;
				}
				if(pipe.gap >= 0){
					pipe.gap -= 1;
				}
			}
		}
		// Draw pipe
		DOM_pipes_top[i].style.transform = "translate3d("+ DOM_pipes_top[i].temp_x +"px, "+ (DOM_pipes_top[i].temp_y - pipe.gap / 2) +"px, 0px) rotate(180deg) scale(-1, 1)";
		DOM_pipes_bot[i].style.transform = "translate3d("+ DOM_pipes_top[i].temp_x +"px, "+ (DOM_pipes_top[i].temp_y + pipe.gap / 2) +"px, 0px)";
	}
}