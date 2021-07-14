import sum from './sum';
import './app.scss';
import chat from './images/video-chat.png';

const result = sum([1, 2, 3, 4, 5]);

document.addEventListener('DOMContentLoaded', () => {
  console.log(result);
  document.body.innerHTML = `<img src="${chat}" />`;
});
