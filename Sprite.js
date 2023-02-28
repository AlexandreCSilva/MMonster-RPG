class Sprite {
  constructor(config) {
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    
    this.animation = config.animation || {
      idleDown: [
        [0, 0]
      ],
      walkDown: [
        [0, 0], [1, 0], [2, 0], [3, 0]
      ],
    }
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;
    
    this.gameObject = config.gameObject;
    
    this.useShadow = true;
    this.shadow = new Image();
    if (this.useShadow) {
      this.shadow.src = "./images/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };
  }

  draw(context) {
    const x = this.gameObject.x - 8;
    const y = this.gameObject.y - 18;

    this.isShadowLoaded && context.drawImage(
      this.shadow,
      0, 0,
      32, 32,
      x, y,
      32, 32,
    );

    this.isLoaded && context.drawImage(
      this.image,
      0, 0,
      32, 32,
      x, y,
      32, 32,
    );
  }
}