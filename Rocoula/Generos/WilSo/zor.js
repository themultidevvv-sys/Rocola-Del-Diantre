let songs = document.querySelectorAll(".song-list div");
let currentSongIndex = 0;
let isAnimating = false;  // Flag para bloquear selección durante animación

let audioPlayer = document.getElementById("audioPlayer");
let playPauseBtn = document.getElementById("playPause");
let progress = document.getElementById("progress");

const defaultBg = "https://via.placeholder.com/800x600.png?text=Default";

function updateUI() {
  let song = songs[currentSongIndex];
  let newBg = song.getAttribute("data-bg");
  let newAudio = song.getAttribute("data-audio");

  isAnimating = true;

  document.getElementById("bgTransition").style.backgroundImage = "url('Trans.png')";
  document.getElementById("bgTransition").style.transform = "translateX(0)";

  setTimeout(() => {
    document.getElementById("bgTransition").style.transform = "translateX(-100%)";
  }, 1300);

  setTimeout(() => {
    document.getElementById("rightPanel").style.backgroundImage = "url('" + newBg + "')";
    document.getElementById("rightPanel").style.backgroundSize = "cover";
  }, 750);

  audioPlayer.src = newAudio;
  setTimeout(() => {
    audioPlayer.play();
  }, 2600);

  playPauseBtn.innerHTML = "&#10074;&#10074;";

  setTimeout(() => {
    isAnimating = false;
  }, 2600);

  setTimeout(() =>{
    hideWaveText();
  }, 600);
}

function hideWaveText() {
  document.querySelector(".wave-text").style.display = "none";
}

function showWaveText() {
  document.querySelector(".wave-text").style.display = "flex";
}

function changeSong(index) {
  if(isAnimating) return;

  songs.forEach(song => song.classList.remove("active"));
  currentSongIndex = (index + songs.length) % songs.length;
  songs[currentSongIndex].classList.add("active");

  updateUI();
}

function nextSong() {
  changeSong(currentSongIndex + 1);
}

function prevSong() {
  changeSong(currentSongIndex - 1);
}

playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.innerHTML = "&#10074;&#10074;";
  } else {
    audioPlayer.pause();
    playPauseBtn.innerHTML = "&#9654;";
  }
});

audioPlayer.addEventListener("timeupdate", () => {
  let progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progress.style.width = progressPercent + "%";
});

function setProgress(event) {
  let progressBar = document.querySelector(".progress-bar");
  let clickX = event.offsetX;
  let width = progressBar.clientWidth;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
}

audioPlayer.addEventListener("ended", nextSong);

songs.forEach((song, index) => {
  song.addEventListener("click", () => {
    if(isAnimating) return;
    if (song.classList.contains("active")) {
      song.classList.remove("active");
      currentSongIndex = -1;
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      progress.style.width = "0%";
      document.getElementById("rightPanel").style.backgroundImage = "url('Background.png')";
      document.getElementById("bgTransition").style.transform = "translateX(-100%)";
      playPauseBtn.innerHTML = "&#9654;";

      // Mostrar las letras de nuevo cuando se deselecciona una canción
      showWaveText();
    } else {
      changeSong(index);
    }
  });
});