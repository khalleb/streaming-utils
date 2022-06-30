document.addEventListener('keydown', (event) => {
  let video = document.getElementsByTagName('video');
  if (!video || video.length <= 0) return;

  video = video[0];

  if (video === undefined) return;

  let keyName = event.key;
  let timeOffset = 15;

  if (keyName == 'ArrowLeft') {
    console.log(`VOLUME LEFT: ${timeOffset} SECONDS`);
    video.currentTime -= timeOffset;
  }
  else if (keyName == 'ArrowRight') {
    `VOLUME RIGHT: ${timeOffset} SECONDS`
    video.currentTime += timeOffset;
  }
  else if (keyName == 'ArrowUp') {
    console.log('VOLUME UP');
    video.volume = Math.min(video.volume + 0.1, 1.0)
  }
  else if (keyName == 'ArrowDown') {
    console.log('VOLUME DOWN');
    video.volume = Math.max(video.volume - 0.1, 0)
  }
});