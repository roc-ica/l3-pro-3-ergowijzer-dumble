let player; // YouTube player object
let canvas, ctx; // Canvas variables

// Function to initialize YouTube player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

// Function to start playback when the player is ready
function onPlayerReady(event) {
    event.target.playVideo();
}

// Function to draw on the canvas
function draw() {
    // Example drawing
    ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Function to update canvas size
function updateCanvasSize() {
    canvas.width = player.getVideoWidth();
    canvas.height = player.getVideoHeight();
}

// Initialize canvas and context
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    
    // Call the updateCanvasSize function initially
    updateCanvasSize();

    // Call the updateCanvasSize function whenever the window is resized
    window.addEventListener('resize', updateCanvasSize);
};

// Add event listener to draw on canvas when the player is playing
// player.addEventListener('onStateChange', function(event) {
//     if (event.data == YT.PlayerState.PLAYING) {
//         // Draw on canvas when the video is playing
//         draw();
//     }
// });
