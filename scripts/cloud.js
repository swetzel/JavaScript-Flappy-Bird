/**
 *	Handling the cloud init
 */
function initClouds(){
	cloud.width = DOM_clouds[0].clientWidth-1;
	cloud.height = DOM_clouds[0].clientHeight-1;
	cloud.count = DOM_clouds.length;
	for(let i = 0; i < cloud.count; i++){
		// Update variables
		DOM_clouds[i].temp_x = (cloud.width*0.8)*i;
		// Draw cloud
		DOM_clouds[i].style.transform = "translate3d("+ DOM_clouds[i].temp_x +"px, 0px, 0px)";
	}
}

/**
 *	Handling the cloud update
 */
function updateClouds(){
	for(let i = 0; i < cloud.count; i++){
		// Update variables
		DOM_clouds[i].temp_x -= world.speed*0.1;
		// Check conditions
		if(DOM_clouds[i].temp_x < -cloud.width){
			let extra = DOM_clouds[i].temp_x + (cloud.width*0.8);
			DOM_clouds[i].temp_x = (cloud.width*0.8)*(cloud.count-1) + extra;
		}
		// Draw cloud
		DOM_clouds[i].style.transform = "translate3d("+ DOM_clouds[i].temp_x +"px, 0px, 0px)";
	}
}

/**
 * Handling the star init
 */
function initStars(){
	star.width = DOM_stars[0].clientWidth-1;
	star.height = DOM_stars[0].clientHeight-1;
	star.count = DOM_stars.length;
	for(let i = 0; i < star.count; i++){
		// Update variables
		DOM_stars[i].temp_x = (star.width)*i;
		// Draw cloud
		DOM_stars[i].style.transform = "translate3d("+ DOM_stars[i].temp_x +"px, 0px, 0px)";
	}
}