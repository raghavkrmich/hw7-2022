var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});


document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - (0.1*video.playbackRate);
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate +  (video.playbackRate/9);
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime = video.currentTime + 10;
	}
	else {
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

