import Controller from './controller';
import Modal from './modal';

const modal = new Modal();
const controller = new Controller(modal);
controller.start();
