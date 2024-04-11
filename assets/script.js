


////////////////////////////////////
/*!     ALL CUSTOM JAVASCRIPT    */
/////////////////////////////////////////
$(document).ready(function(){
    let isDown = false;
    let startX;
    let scrollLeft;

    const carousel = document.querySelector('.carousel');

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX);
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Touch support for mobile devices
    carousel.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('touchend', () => {
        isDown = false;
    });

    carousel.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX);
        carousel.scrollLeft = scrollLeft - walk;
    });
});


////////////////////////////////////////
/*!     ALL CUSTOM JAVASCRIPT    */
/////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video');
    const buttons = document.querySelectorAll('.switch-video');
    const previews = document.querySelectorAll('.preview-img');
    const videoTitle = document.getElementById('video-title');
    const videoDuration = document.getElementById('video-duration');
    const videoDescription = document.getElementById('video-description');
    const watchVideoBtn = document.getElementById('watch-video-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const videoIndex = parseInt(button.dataset.videoIndex);
            // Hide all videos
            videos.forEach(video => {
                video.classList.remove('active');
            });
            // Show the clicked video
            videos[videoIndex].classList.add('active');
            // Mark the clicked button as active
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
            // Update the preview images
            previews.forEach((preview, index) => {
                if (index === videoIndex) {
                    preview.classList.add('active');
                } else {
                    preview.classList.remove('active');
                }
            });
            // Update the video description
            updateVideoDescription(videoIndex);
        });
    });

    // Add event listeners for preview images
    previews.forEach((preview, index) => {
        preview.addEventListener('click', function() {
            // Simulate click on the corresponding video button
            buttons[index].click();
        });
    });

    // Function to update video description
    function updateVideoDescription(index) {
        switch (index) {
            case 0:
                videoTitle.textContent = "Video 1 Title";
                videoDuration.textContent = "Duration: 1:40";
                videoDescription.textContent = "very very great video just unbelievable.";
                break;
            case 1:
                videoTitle.textContent = "Dxracer Formula series chair poitch";
                videoDuration.textContent = "Duration: 4:20";
                videoDescription.textContent = "In this pitch you will see the dxracer formula series chair. This chair is very comfortable and has a lot of features. It is a great chair for gaming and working.";
                break;
            case 2:
                videoTitle.textContent = "Video 3 Title";
                videoDuration.textContent = "Duration: 5:10";
                videoDescription.textContent = "Description of Video 3. Add more details here.";
                break;
            case 3:
                videoTitle.textContent = "Video 4 Title";
                videoDuration.textContent = "Duration: 2:30";
                videoDescription.textContent = "Description of Video 4. Add more details here.";
                break;
            case 4:
                videoTitle.textContent = "Video 5 Title";
                videoDuration.textContent = "Duration: 6:15";
                videoDescription.textContent = "Description of Video 5. Add more details here.";
                break;
            case 5:
                videoTitle.textContent = "Video 6 Title";
                videoDuration.textContent = "Duration: 4:55";
                videoDescription.textContent = "Description of Video 6. Add more details here.";
                break;
            default:
                break;
        }
    }
});


//////////////////////////////
///     scroll paralex     ///
/////////////////////////////
window.addEventListener('scroll', function() {
    const homeSection = document.querySelector('.hero-section');
    let scrollPosition = window.pageYOffset;
    homeSection.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
});

//////////////////////////////
///   show tips menu     ///
/////////////////////////////
$(document).ready(function() {
    $('.toggle-prevention').click(function() {
        $(this).next('.prevention-list').slideToggle('slow');
        var buttonText = $(this).text() == 'Show Prevention Tips' ? 'Hide Prevention Tips' : 'Show Prevention Tips';
        $(this).text(buttonText);
    });
});

//////////////////////////////
///      scroll to top       ///
/////////////////////////////
const scrollUpButton = document.getElementById('scrollUpButton');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollUpButton.classList.remove('hidden');
    scrollUpButton.style.opacity = '1';
    scrollUpButton.style.transform = 'translateY(0)';
  } else {
    scrollUpButton.style.opacity = '0';
    scrollUpButton.style.transform = 'translateY(100%)';
    setTimeout(() => {
      scrollUpButton.classList.add('hidden');
    }, 300); // Adjust timing to match transition duration
  }
});

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/////////////////////////
///     carousel     ///
///////////////////////
(function() {
    // Constants
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const images = document.querySelectorAll('.carousel__image');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const slideWidth = carousel.offsetWidth;
  
    // Variables
    let currentSlide = 0;
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationId = 0;
    let intervalId = null;
  
    // Event listeners
    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('touchstart', startDrag);
    carousel.addEventListener('mouseup', endDrag);
    carousel.addEventListener('touchend', endDrag);
    carousel.addEventListener('mouseleave', endDrag);
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('touchmove', drag);
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  
    // Functions
    function startDrag(event) {
      if (event.type === 'touchstart') {
        startPosition = event.touches[0].clientX;
      } else {
        startPosition = event.clientX;
      }
      isDragging = true;
      animationId = requestAnimationFrame(updatePosition);
      clearInterval(intervalId);
      carouselInner.style.transition = 'none';
    }
  
    function drag(event) {
      if (isDragging) {
        let currentPosition;
        if (event.type === 'touchmove') {
          currentPosition = event.touches[0].clientX;
        } else {
          currentPosition = event.clientX;
        }
        currentTranslate = currentPosition - startPosition + prevTranslate;
      }
    }
  
    function endDrag() {
      isDragging = false;
      cancelAnimationFrame(animationId);
      const threshold = slideWidth / 4; // Minimum distance to scroll
      if (Math.abs(currentTranslate - prevTranslate) > threshold) {
        if (currentTranslate > prevTranslate && currentSlide > 0) {
          currentSlide--;
        } else if (currentTranslate < prevTranslate && currentSlide < images.length - 1) {
          currentSlide++;
        }
      }
      slideTo(currentSlide);
    }
  
    function updatePosition() {
      carouselInner.style.transform = `translateX(-${currentTranslate}px)`;
      if (isDragging) {
        animationId = requestAnimationFrame(updatePosition);
      }
    }
  
    function slideTo(slide) {
      currentSlide = slide;
      prevTranslate = currentTranslate = currentSlide * -slideWidth;
      carouselInner.style.transition = 'transform 0.5s ease-in-out';
      carouselInner.style.transform = `translateX(-${currentTranslate}px)`;
      if (intervalId !== null) clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 5000); // Automatic sliding every 5 seconds
    }
  
    function prevSlide() {
      if (currentSlide > 0) {
        slideTo(currentSlide - 1);
      }
    }
  
    function nextSlide() {
      if (currentSlide < images.length - 1) {
        slideTo(currentSlide + 1);
      } else {
        slideTo(0);
      }
    }
  
    // Initialize
    slideTo(0);
  })();
  