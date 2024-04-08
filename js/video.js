//video player

// Get the video element and each link
const video = document.getElementById("my-video");
const link1 = document.getElementById("video-link-1");
const link2 = document.getElementById("video-link-2");
const link3 = document.getElementById("video-link-3");

// the URLs of the videos that needs to be displayed
const fethiUrl = "https://www.youtube.com/watch?v=TM4pyGZJPmw";
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


// width and height of the video
window.onload = function() {
    var canvas = document.getElementById('videoContainer-canvas');
    var canvasContainer = document.getElementById('my-video');

    // Function to update canvas size
    function updateCanvasSize() {
        canvas.width = canvasContainer.offsetWidth; // Set canvas width to container width
        canvas.height = canvasContainer.offsetHeight; // Set canvas height to container height
    }

    // Call the updateCanvasSize function initially
    updateCanvasSize();

    // Call the updateCanvasSize function whenever the window is resized
    window.addEventListener('resize', updateCanvasSize);
};
