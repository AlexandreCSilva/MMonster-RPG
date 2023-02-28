class OverWorldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }

  drawLowerImage(context) {
    context.drawImage(this.lowerImage, 0, 0);
  }

  drawUpperImage(context) {
    context.drawImage(this.upperImage, 0, 0);
  }
};

window.OverWorldMaps = {
  DemoRoom: {
    lowerSrc: "./images/maps/DemoLower.png",
    upperSrc: "./images/maps/DemoUpper.png",
    gameObjects: {
      player: new Person({
        isPlayer: true,
        x: 5,
        y: 6,
      }),
      bald: new GameObject({
        x: 7,
        y: 9,
        src: "./images/characters/people/hero.png",
      }),
    },
  }, 
  Kitchen: {
    lowerSrc: "./images/maps/KitchenLower.png",
    upperSrc: "./images/maps/KitchenUpper.png",
    gameObjects: {
      player: new GameObject({
        x: 5,
        y: 6,
      }),
      npc: new GameObject({
        x: 10,
        y: 4,
        src: "./images/characters/people/npc1.png",
      }),
    },
  },
}
