window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);
});

function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
  });
});