import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.ts';


const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
});

const buttonPlay = document.querySelector('#\\PlayPause ');
buttonPlay.onclick = () => player.control();

const buttonSound = document.querySelector('#\\muteUnmute ');
buttonSound.onclick = () => player.controlSound();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.error(error.message);
  })
}




