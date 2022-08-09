import Controller from '../controller';
import Modal from '../modal';

const modal = new Modal();
const controller = new Controller(modal);

describe('проверяем координаты', () => {
  test.each([
    ['Тест 1', '47.1231231, 179.99999999', true],
    ['Тест 2', '-90., -180', false],
    ['Тест 3', '045, 180', false],

  ])(('Должен быть %s'), (_, input, expected) => {
    expect(controller.testCoord(input)).toBe(expected);
  });
});
