function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
};

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this)
  });
};
MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.control = function() {
  if(this.media.paused) {
    this.play();
    let div = document.getElementById("PlayPause");
    div.innerHTML = "Pause";
  } else {
    this.pause();
    let div = document.getElementById("PlayPause");
    div.innerHTML = "Play";
  }
};

MediaPlayer.prototype.controlSound = function() {
  if(this.media.muted) {
    this.unmute()
    console.log('mute')
    let div = document.getElementById("muteUnmute");
    div.innerHTML = "Mute";
  } else {
    this.mute()
    console.log('unmute')
    let div = document.getElementById("muteUnmute");
    div.innerHTML = "Unmute";
  }
}
MediaPlayer.prototype.mute = function() {
  this.media.muted = true
}

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false
}

// MediaPlayer.prototype.controlSound = function() {
//   if(this.media.muted) {
//     this.unmute()
//     let div = document.getElementById("muteUnmute");
//     div.innerHTML = "Muted";
//   } else {
//     this.mute()
//     let div = document.getElementById("muteUnmute");
//     div.innerHTML = "Unmuted";
//   }
// };

// MediaPlayer.prototype.mute = function() {
//   this.media.muted = true;
// };

// MediaPlayer.prototype.unmute = function() {
//   this.media.unmuted = false;
// };
export default MediaPlayer;
