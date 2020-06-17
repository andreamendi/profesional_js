function MediaPlayer(config) {
  this.media = config.el
};

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.control = function() {
  if(this.media.paused) {
    player.play();
    let div = document.getElementById("PlayPause");
    div.innerHTML = "Pause";
  } else {
    player.pause();
    let div = document.getElementById("PlayPause");
    div.innerHTML = "Play";
  }
};

export default MediaPlayer;
