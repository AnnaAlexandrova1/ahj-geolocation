export default class Controller {
  constructor(modal) {
    this.modal = modal;
    this.container = document.querySelector('.container');
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

    this.location().then((pos) => {
      const message = document.createElement('div');
      message.classList.add('message');
      const latitude = pos.coords.latitude.toFixed(5);
      const longitude = pos.coords.longitude.toFixed(5);
      message.innerHTML = `
      <span>${this.getData()}</span>
      <p>${content}<p>
      <span>${longitude},-${latitude}</span>`;
      this.board.appendChild(message);
      this.inputMess.value = '';
    }).catch(() => {
      this.modal.bindToDom();
      this.container.addEventListener('click', (e) => this.modalBtn(e));
    });
  }

  location(options) {
    return new Promise((pos, error) => {
      navigator.geolocation.getCurrentPosition(pos, error, options);
    });
  }

  getData() {
    const data = new Date();
    const dd = String(data.getDate()).padStart(2, '0');
    const mm = String(data.getMonth()).padStart(2, '0');
    const hh = String(data.getHours()).padStart(2, '0');
    const min = String(data.getMinutes()).padStart(2, '0');
    return `${dd}.${mm}.${data.getFullYear()}, ${hh}:${min}`;
  }

  modalBtn(e) {
    e.preventDefault();
    if (e.target.classList.contains('cancel')) {
      this.modal.removeModalWin();
    } else if (e.target.classList.contains('send')) {
      const inputText = document.querySelector('#modal-coord');
      this.editCoord(inputText.value);
    } else {

    }
  }

  editCoord(i) {
    i.trim();
    const example = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

    if (example.test(i)) {
      this.inputMess = document.getElementById('input-mess');
      const content = this.inputMess.value;
      const message = document.createElement('div');
      message.classList.add('message');
      message.innerHTML = `
      <span>${this.getData()}</span>
      <p>${content}<p>
      <span>[${i}]</span>`;
      this.board.appendChild(message);
      this.inputMess.value = '';
      this.modal.removeModalWin();
    } else {
      const popover = document.createElement('div');
      popover.classList.add('popover');
      popover.textContent = 'Не соответствует форме';
      const modalForm = document.querySelector('.modal');
      modalForm.appendChild(popover);
    }
  }

  testCoord(i) {
    i.trim();
    const example = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;
    if (example.test(i)) {
      return true;
    }
    return false;
  }
}
