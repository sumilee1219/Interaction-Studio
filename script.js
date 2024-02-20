const spotlight = document.querySelector(".spotlight");
const overlay = document.querySelector(".overlay");

let scrollAmount = 0;
let yPos = 0;
let xPos = 0;

spotlight.addEventListener("mousemove", handleMoveEvent);
spotlight.addEventListener("touchmove", handleMoveEvent);

function handleMoveEvent(e) {
    const clientX = e.clientX || e.touches[0].clientX;
    const clientY = e.clientY || e.touches[0].clientY;
 
 setTimeout(() => {
    yPos = clientY - overlay.offsetHeight / 2;
    xPos = clientX - overlay.offsetWidth / 2;

    scrollAmount = overlay.scrollTop + yPos;
    overlay.style.top = `${scrollAmount}px`
    overlay.style.left = `${xPos}px`;
 }, 100);
}

  const audio = document.getElementById('myAudio');

  // Add a click event listener to the document body
  document.body.addEventListener('click', function() {
    // Check if the audio is muted (required for autoplay in some browsers)
    if (audio.muted) {
      // Unmute the audio
      audio.muted = false;
    }

    // Toggle playback state
    if (audio.paused) {
      // If paused, play the audio
      audio.play().then(() => {
        // Audio has started playing
      }).catch((error) => {
        console.error('Error playing audio:', error);
      });
    } else {
      // If playing, pause the audio
      audio.pause();
      // Reset the currentTime to 0 to ensure it starts from the beginning next time
      audio.currentTime = 0;
    }
  });

document.addEventListener('click', function(event) {
  // Get a reference to the elements you want to change
  var treeLeaves = document.querySelectorAll('.leaves');
  var grassBlock = document.querySelector('.grass-block');
  var background = document.querySelector('.background');

  // Check if the elements are currently white
  var isWhite = treeLeaves[0].style.backgroundColor === 'white';

  // Toggle between original color and white
  var targetColorLeaves = isWhite ? '' : 'white';
  var targetColorGrass = isWhite ? '' : '#EFFFDE';
  var targetColorBackground = isWhite ? '' : '#99ccff';

  // Change the color of tree leaves to the target color
  treeLeaves.forEach(function(leaf) {
    leaf.style.transition = 'background-color 1s'; // Add a smooth transition effect
    leaf.style.backgroundColor = targetColorLeaves;
  });

  // Change the color of the grass block to the target color
  grassBlock.style.transition = 'background-color 1s'; // Add a smooth transition effect
  grassBlock.style.backgroundColor = targetColorGrass;

  // Change the color of the background to the target color
  background.style.transition = 'background-color 1s'; // Add a smooth transition effect
  background.style.backgroundColor = targetColorBackground;
});
