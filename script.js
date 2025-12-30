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

console.log("heroVideo element:", heroVideo);
console.log("muteToggleButton element:", muteToggleButton);

if (heroVideo && muteToggleButton) {
  // Ensure video starts muted to comply with browser autoplay policies
  heroVideo.muted = true;
  muteToggleButton.textContent = "🔇"; // Set initial icon to muted

  // Add error logging for the video
  heroVideo.addEventListener("error", (event) => {
    console.error("Video playback error:", event);
    console.error("Video error code:", heroVideo.error.code);
    console.error("Video error message:", heroVideo.error.message);
  });

  // Attempt manual playback after a short delay
  setTimeout(() => {
    heroVideo
      .play()
      .then(() => {
        console.log("Video playback initiated successfully.");
      })
      .catch((error) => {
        console.error("Video play() failed:", error);
      });
  }, 1000); // 1 second delay

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
