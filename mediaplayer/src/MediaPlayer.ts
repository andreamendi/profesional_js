class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlayer();
    this.initPlugins(); //cuando tiene el _ se supone que es privado. Excepto la propia clase.
  }

  initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media)
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  control() {
    if (this.media.paused) {
      this.play();
      let div = document.getElementById("PlayPause");
      div.innerHTML = "Pause";
    } else {
      this.pause();
      let div = document.getElementById("PlayPause");
      div.innerHTML = "Play";
    }
  }
  controlSound() {
    if (this.media.muted) {
      this.unmute();
      console.log('mute');
      let div = document.getElementById("muteUnmute");
      div.innerHTML = "Mute";
    } else {
      this.mute();
      console.log('unmute');
      let div = document.getElementById("muteUnmute");
      div.innerHTML = "Unmute";
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
};






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
