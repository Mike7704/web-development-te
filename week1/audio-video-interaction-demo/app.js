console.log("Hello");

const image = document.querySelector("img");
image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");
audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});
audio.addEventListener("pause", function (event) {
  console.log("Paused", event);
});
audio.addEventListener("ended", function (event) {
  audio.src = "./audio/bird.mp3";
  audio.play();
});

const buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", function (event) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
const buttonStop = document.querySelector("#stop");
buttonStop.addEventListener("click", function (event) {
  audio.pause();
  audio.currentTime = 0;
});
const volumeSlider = document.querySelector("#volume");
volumeSlider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});
const playbackSpeedSlider = document.querySelector("#playbackSpeed");
playbackSpeedSlider.addEventListener("change", function (event) {
  audio.playbackRate = event.target.value;
});

const video = document.querySelector("video");
video.addEventListener("timeupdate", function (event) {
  console.log("Time event:", event);
});
video.addEventListener("pause", function (event) {
  console.log("Paused", event);
});
