let DOM_bird = document.querySelector(".bird");
let DOM_grounds = document.querySelectorAll(".ground");
let DOM_pipes_top = document.querySelectorAll(".pipe-top");
let DOM_pipes_bot = document.querySelectorAll(".pipe-bot");
let DOM_clouds = document.querySelectorAll(".cloud");

let DOM_stars = document.querySelectorAll(".star");
let DOM_night_front = document.querySelector(".night-front");
let DOM_night_back = document.querySelector(".night-back");

let settings = {
	tick: 1,
	gravity: 9.8,
	scale: 4
};

let world = {
	dim: {
		height: window.innerHeight,
		width: window.innerWidth,
		center: (window.innerHeight - DOM_grounds[0].clientHeight) / 2,
		indent: window.innerWidth*0.2
	},
	speed: 1.5,
	stop: false,
	time: 'day',
	score: {
		current: 0,
		high: 0
	}
};

let bird = {
	width: DOM_bird.clientWidth-1,
	height: DOM_bird.clientHeight-1,
	y: 0,
	rot: 0,
	acc: (settings.tick/1000)*settings.gravity*settings.scale,
	vel: 0,
	thrust: -settings.scale*0.75,
	alive: true,
	finished: false,
	immortal: false
};

let pipe = {
	width: DOM_pipes_top[0].clientWidth-1,
	height: DOM_pipes_top[0].clientHeight-1,
	count: DOM_pipes_top.length,
	gap: 250,
	offset: 600,
	start: 800
};

let ground = {
	width: DOM_grounds[0].clientWidth-1,
	height: DOM_grounds[0].clientHeight-1,
	count: DOM_grounds.length
};

let cloud = {
	width: DOM_clouds[0].clientWidth-1,
	height: DOM_clouds[0].clientHeight-1,
	count: DOM_clouds.length
};

let star = {
	width: DOM_stars[0].clientWidth-1,
	height: DOM_stars[0].clientHeight-1,
	count: DOM_stars.length
}