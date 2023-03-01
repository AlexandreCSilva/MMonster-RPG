export class World {
  constructor(config) {
    this.element = config.element;
    this.canvas = config.element.querySelector('.game-canvas');
    this.context = this.canvas.getContext('2d');
  }

  init() {
    console.log('aqu', this);
  }
};
