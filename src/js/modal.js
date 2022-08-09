export default class Modal {
  constructor() {
    this.container = document.querySelector('.container');
  }

  modalWindow() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <p>Что-то пошло не так. Нам не удалось определить ваше местоположение. 
        Пожалуйста, дайте разрещение на определение гопозиции 
        или введите координаты вручную</p>
      
        <p>Широта и долгота через запятую</p>

        <input type="text" id="modal-coord" placeholder="Введите через запятую широту и долготу">
        <div class="buttons">
        <button class="btn-modal cancel">Отмена</button>
        <button class="btn-modal send">Отправить</button>
        <div>
    `;
    return modal;
  }

  bindToDom() {
    const modalWin = this.modalWindow();
    this.container.appendChild(modalWin);
  }

  removeModalWin() {
    const modalWin = this.container.querySelector('.modal');
    this.container.removeChild(modalWin);
  }
}
