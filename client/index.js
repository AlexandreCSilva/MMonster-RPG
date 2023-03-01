const socket = io("http://localhost:5000");

const chat = document.getElementsByClassName('chat-box');
const messages = document.getElementsByClassName('messages');
const form = document.getElementsByClassName("form");
const input = document.getElementsByClassName("input");

socket.on("connect", () => {
  socket.on("players", (playersData) => {
    console.log(playersData);
  });

  socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages[0].appendChild(item);
  });
});

window.addEventListener('keydown', function(e) {
  if (e.key === "Enter" && chat[0].classList.contains("active") && !input[0].value) {
    chat[0].classList.remove("active");
  } else if (e.key === "Enter") {
    chat[0].classList.add("active");
  }
});

form[0].addEventListener("submit", function(e) {
  e.preventDefault();
  
  if (input[0].value) {
    socket.emit("chat message", input[0].value);
    input[0].value = "";
  }
});

function initGame() {
  const map = new LoadMap(document.querySelector(".game-canvas"));
  map.init();
};

initGame();
