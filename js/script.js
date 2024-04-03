import { gsap } from "gsap";

//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});

// video player

// Get the video element and each link
const video = document.getElementById("my-video");
const link1 = document.getElementById("video-link-1");
const link2 = document.getElementById("video-link-2");
const link3 = document.getElementById("video-link-3");

// the URLs of the videos that needs to be displayed
const fethiUrl = "";
const videoUrl2 = "";
const videoUrl3 = "";

// Add an event listener to each link that changes the video source when clicked
link1.addEventListener("click", () => {
  video.src = fethiUrl;
  video.play();
});

link2.addEventListener("click", () => {
  video.src = videoUrl2;
  video.play();
});

link3.addEventListener("click", () => {
  video.src = videoUrl3;
  video.play();
});

// to wait for the video to be ready to play before displaying it
video.addEventListener("canplaythrough", () => {
  link1.addEventListener("click", () => {
    video.src = fethiUrl;
    video.play();
  });
});