import { gsap } from "gsap";

//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
  duration: 5, 
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath:{
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }
});



// video player

// Get the video element and each link
const video = document.getElementById("my-video");
const link1 = document.getElementById("video-link-1");
const link2 = document.getElementById("video-link-2");
const link3 = document.getElementById("video-link-3");

// Define the URLs of the videos you want to play
const videoUrl1 = "";
const videoUrl2 = "https://example.com/video2.mp4";
const videoUrl3 = "https://example.com/video3.mp4";

// Add an event listener to each link that changes the video source when clicked
link1.addEventListener("click", () => {
  video.src = videoUrl1;
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
