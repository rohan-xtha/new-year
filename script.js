gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-text", {
  opacity: 0,
  y: 80,
  duration: 1.2,
});

gsap.from(".hero-video", {
  opacity: 0,
  x: 100,
  duration: 1.2,
  delay: 0.3,
});

// Hero Video Mute Toggle
const heroVideo = document.querySelector(".video-frame video");
const muteToggleButton = document.getElementById("muteToggle");

if (heroVideo && muteToggleButton) {
  // Ensure video starts unmuted as per user request
  heroVideo.muted = true;
  muteToggleButton.textContent = "🔇"; // Set initial icon to muted

  muteToggleButton.addEventListener("click", () => {
    heroVideo.muted = !heroVideo.muted;
    if (heroVideo.muted) {
      muteToggleButton.textContent = "🔇";
    } else {
      muteToggleButton.textContent = "🔊";
    }
  });
}

console.log("Website loaded and script running!");
