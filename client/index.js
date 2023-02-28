const socket = io("http://localhost:5000");

socket.on("connect", () => {
  console.log("connected");
});

socket.on("map", (map) => {
  console.log(map);
});

function initGame() {
  const map = new LoadMap(document.querySelector(".game-canvas"));
  map.init();
  console.log(document.querySelector(".game-container"));
};

initGame();
