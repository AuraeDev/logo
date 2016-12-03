var body = document.querySelector("body");

if (!("ontouchstart" in window)) {
	body.classList.add("NoTouch");
} else {
	body.classList.add("Touch");
}

// Ensure :active states are triggered by touches
body.addEventListener("touchstart", function(){});