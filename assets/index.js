import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay()
] });

const buttonPlay = document.querySelector('#\\PlayPause ');
buttonPlay.onclick = () => player.control();

const buttonSound = document.querySelector('#\\muteUnmute ');
buttonSound.onclick = () => player.controlSound();






