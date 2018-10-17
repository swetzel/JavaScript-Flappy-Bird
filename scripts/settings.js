let time_checkbox = document.querySelector(".time-checkbox");
let speed_checkbox = document.querySelector(".speed-checkbox");
let trippy_checkbox = document.querySelector(".trippy-checkbox");

/**
 * 	Checkbox changing.
 */
time_checkbox.onchange = function(){
	updateTime();
}
speed_checkbox.onchange = function(){
	updateSpeed();
}
trippy_checkbox.onchange = function(){
	let trippy = trippy_checkbox.checked;
	if(trippy){
		startTrippyMode();
	}else{
		stopTrippyMode();
	}
}

/**
 *	Updating time on input
 */
function updateTime(){
	let night = time_checkbox.checked;
	if(night){
		world.time = "night";
	}else{
		world.time = "day";
	}
	if(world.time == 'day'){
		DOM_stars.forEach(star => {
			star.style.opacity = '0';
		});
		setTimeout(() => {
			DOM_night_front.style.opacity = '0';
			DOM_night_back.style.opacity = '0';
			document.querySelector(".game-background").style.background = 'var(--sky-day)';
		}, 200);
	}else{
		DOM_night_front.style.opacity = '0.4';
		DOM_night_back.style.opacity = '0.6';
		document.querySelector(".game-background").style.background = 'var(--sky-night)';
		DOM_stars.forEach(star => {
			star.style.opacity = '1';
		});
	}
}

function updateSpeed(){
	let speed = speed_checkbox.checked;
	if(speed){
		world.speed = 4;
	}else{
		world.speed = 1.5;
	}
}

/**
 *	Updating Character on input
 */
let left_selector = document.querySelector(".bird-select-l");
let right_selector = document.querySelector(".bird-select-r");
let selector_image = document.querySelector(".bird-select");
let bird_img = document.querySelector(".bird");
let birds = [
	'./images/bird.svg',
	'./images/bird_blue.svg',
	'./images/bird_red.svg',
	'./images/bird_ramen.svg',
];
let birdSelected = 0;
left_selector.onclick = function(){
	if(birdSelected == 0){
		birdSelected = birds.length-1;
	}else{
		birdSelected--;
	}
	selector_image.src = birds[birdSelected];
	bird_img.src = birds[birdSelected];
	bird.width = DOM_bird.clientWidth-1;
	bird.height = DOM_bird.clientHeight-1;
}
right_selector.onclick = function(){
	if(birdSelected == birds.length-1){
		birdSelected = 0;
	}else{
		birdSelected++;
	}
	selector_image.src = birds[birdSelected];
	bird_img.src = birds[birdSelected];
	bird.width = DOM_bird.clientWidth-1;
	bird.height = DOM_bird.clientHeight-1;
}


/**
 *	Settings button click
 */
let settingsOpen = false;
document.querySelector('.settings-button').onclick = function(){
	if(settingsOpen){
		settingsOpen = false;
		document.querySelector('.settings-button').style.transform = "rotate(180deg)";
		if(bird.finished){
			document.querySelector('.game-over').style.display = "flex";
			setTimeout(() => {
				document.querySelector('.game-over').style.opacity = "1";
			}, 0);
		}
		document.querySelector('.game-container').style.transform = "translate3d(0px,0px, 0px)";
		setTimeout(() => {
			if(!bird.finished){
				world.stop = false;
				bird.alive = true;
			}
		}, 500);
	}else{
		if(!bird.alive){
			bird.finished = true;
		}
		world.stop = true;
		bird.alive = false;
		if(bird.finished){
			document.querySelector('.game-over').style.opacity = "0";
			setTimeout(() => {
				document.querySelector('.game-over').style.display = "none";
			}, 500);
		}
		document.querySelector('.settings-button').style.transform = "rotate(0deg)";
		document.querySelector('.game-container').style.transform = "translate3d(0px,"+(-218)+"px, 0px)";
		settingsOpen = true;
	}
}


let trippy_mode;
let offset;
function startTrippyMode(){
	offset = 0;
	trippy_mode = setInterval(() => {
		document.querySelector(".game-container").style.filter = "hue-rotate("+ offset +"deg)";
		offset++;
	}, 1);
}
function stopTrippyMode(){
	clearInterval(trippy_mode);
	offset = 0;
	document.querySelector(".game-container").style.filter = "hue-rotate("+ offset +"deg)";
}
