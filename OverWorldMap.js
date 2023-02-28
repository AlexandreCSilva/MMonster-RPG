class OverWorldMap {
  constructor(config) {
    this.gameObject = config.gameObject;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperImage = new Image();
    this.upperImage.src = config.upperSrc;
  }
};
