// import { gsap } from "gsap";

// //register the plugin (just once)
// gsap.registerPlugin(MotionPathPlugin);

// gsap.to("#rect", {
//   duration: 5,
//   repeat: 12,
//   repeatDelay: 3,
//   yoyo: true,
//   ease: "power1.inOut",
//   motionPath: {
//     path: "#path",
//     align: "#path",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5],
//   },
// });

// // video player

// // Get the video element and each link
// const video = document.getElementById("my-video");
// const link1 = document.getElementById("video-link-1");
// const link2 = document.getElementById("video-link-2");
// const link3 = document.getElementById("video-link-3");

// // the URLs of the videos that needs to be displayed
// const fethiUrl = "";
// const videoUrl2 = "";
// const videoUrl3 = "";

// // Add an event listener to each link that changes the video source when clicked
// link1.addEventListener("click", () => {
//   video.src = fethiUrl;
//   video.play();
// });

// link2.addEventListener("click", () => {
//   video.src = videoUrl2;
//   video.play();
// });

// link3.addEventListener("click", () => {
//   video.src = videoUrl3;
//   video.play();
// });

// // to wait for the video to be ready to play before displaying it
// video.addEventListener("canplaythrough", () => {
//   link1.addEventListener("click", () => {
//     video.src = fethiUrl;
//     video.play();
//   });
// });

////////////////NAV SCOLL//////////////////////////
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Downscroll code
        document.getElementById('header').classList.add('nav-up');
    } else {
        // Upscroll code
        document.getElementById('header').classList.remove('nav-up');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

////////////////gasp/////////////////////////////
// Slide images in using GSAP
gsap.from('.person1', { x: '-100%', opacity: 0, duration: 1, delay: 0.5 });
gsap.from('.person2', { x: '100%', opacity: 0, duration: 1, delay: 0.7 });
gsap.from('.person3', { x: '-100%', opacity: 0, duration: 1, delay: 0.9 });
gsap.from('.person4', { x: '100%', opacity: 0, duration: 1, delay: 1.1 });

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Define the elements you want to slide in
  const boxes = document.querySelectorAll('.box');

  // Loop through each box
  boxes.forEach((box, index) => {
    // Set up GSAP animation for sliding in
    gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        start: 'top bottom', // Trigger animation when the top of the box touches the bottom of the viewport
        end: 'bottom top', // End animation when the bottom of the box touches the top of the viewport
        toggleActions: 'play none none none', // Play animation only once
      },
      x: -100, // Initial position outside the viewport
      opacity: 0, // Initially invisible
      duration: 1, // Animation duration
      delay: index * 0.3 // Delay each box animation slightly to create a stagger effect
    });
  });
});
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function() {
    gsap.from("#circle1", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top center"
      },
      x: -200, // Slide from the left side
      opacity: 0, // Start the element invisible
      duration: 2
    });

    gsap.from("#circle2", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top center"
      },
      x: -200, // Slide from the right side
      opacity: 0, // Start the element invisible
      duration: 2
    });
});

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function() {
    // Slide in the border from the right
    gsap.from(".border", {
      scrollTrigger: {
        trigger: ".contact-container",
        start: "top center"
      },
      x: 200, // Slide from the right side
      opacity: 0, // Start the element invisible
      duration: 2
    });
});

