class Map {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.context = this.canvas.getContext("2d");
  }

  init() {
    const image = new Image();

    image.onload = () => {
      this.context.drawImage(image, 0, 0);
    };

    image.src = "./images/maps/DemoLower.png";

    const player = new GameObject({
      x: 5,
      y: 6,
      src: "./images/characters/people/npc2.png",
    });

    setTimeout(() => {
      player.sprite.draw(this.context);
    }, 200);
  }
};
