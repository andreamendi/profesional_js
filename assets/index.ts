import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads(),
  ]
});

const buttonPlay: HTMLElement = document.querySelector('#\\PlayPause ');
buttonPlay.onclick = () => player.control();

const buttonSound: HTMLElement = document.querySelector('#\\muteUnmute ');
buttonSound.onclick = () => player.controlSound();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.error(error.message);
  })
}



