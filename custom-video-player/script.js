const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updatePlayIcon();
}

function updatePlayIcon() {
  const playIcon = play.querySelector('i');
  if (video.paused) {
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  } else {
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  }
}

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  
  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerText = `${mins}:${seconds}`;
}

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
  console.log(video.currentTime);

  updateProgress();
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
