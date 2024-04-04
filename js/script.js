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
window.addEventListener('load', function() {
  // Select all images inside the box-home
  var boxHomeImages = document.querySelectorAll('.box-home img');

  // Add event listeners to each image
  boxHomeImages.forEach(function(image) {
      // Add mouseover event listener
      image.addEventListener('mouseover', function() {
          // Scale up the image on hover
          image.style.transform = 'scale(1.1)';
          image.style.transition = 'transform 0.3s ease'; // Add transition for smooth animation
      });

      // Add mouseout event listener
      image.addEventListener('mouseout', function() {
          // Reset the image back to its original size on mouseout
          image.style.transform = 'scale(1)';
      });
  });
});

/////////////////emailJS//////////////
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Check if the form has already been submitted in the current session
  if (!sessionStorage.getItem('formSubmitted')) {
    // these IDs from the previous steps
    emailjs.sendForm('service_60deunq', 'template_kz34zom', this, 'h4AhsFG7Qvdnthqgk')
      .then(function() {
        console.log('SUCCESS!');
        // Mark the form as submitted in the current session
        sessionStorage.setItem('formSubmitted', 'true');
      }, function(error) {
        console.log('FAILED...', error);
      });
  } else {
    console.log('Form already submitted in this session.');
  }
});
/////////////////magic mouse///////////////
// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

/////////////////scroll to top///////////////
  // JavaScript for scroll-to-top button functionality
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
      gsap.to(scrollToTopBtn, { opacity: 1, scale: 1, ease: "power2.out" }); // Added easing
    } else {
      gsap.to(scrollToTopBtn, { opacity: 0, scale: 0, onComplete: function() {
        scrollToTopBtn.style.display = "none";
      } });
    }
  }

  function topFunction() {
    var currentPosition = window.scrollY || window.pageYOffset;
    var targetPosition = 0;
    var duration = 500; // Duration of the scroll animation in milliseconds
    var startTime = null;
  
    function scrollToTop(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var easeInOutQuad = progress < duration ? progress / (duration / 2) : 1;
  
      window.scrollTo(0, currentPosition + (targetPosition - currentPosition) * easeInOutQuad);
  
      if (progress < duration) {
        requestAnimationFrame(scrollToTop);
      }
    }
  
    requestAnimationFrame(scrollToTop);
  }
  
  
