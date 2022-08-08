export default class Controller {
  constructor() {
    this.board = document.querySelector('.board');
    this.btnSend = document.querySelector('.btn-send');
    this.btnAudio = document.querySelector('.btn-audio');
    this.btnVideo = document.querySelector('.btn-video');
  }

  start() {
    this.btnSend.addEventListener('click', (e) => this.send(e));
  }

  send(e) {
    e.preventDefault();
    this.inputMess = document.getElementById('input-mess');
    const content = this.inputMess.value;
    if (content === '') {
      return;
    }
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `<p>${content}<p>`;
    this.board.appendChild(message);
    this.inputMess.value = '';
  }
}
