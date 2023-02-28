import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer);

async function main() {
  const map = {
    DemoRoom: {
      lowerSrc: "./images/maps/DemoLower.png",
      upperSrc: "./images/maps/DemoUpper.png",
    }, 
  };

  io.on("connect", (socket) => {
    console.log("User connected", socket.id);

    socket.emit("map", map);
  });

  app.use(express.static("client"));

  httpServer.listen(5000, () => console.log("server running"));
};

main();
