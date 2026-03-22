const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

/*----------------------------------------------------------------------------------------*/
// const getReceiverSocketId = (userId) => {
//   return userSocketMap[userId];
// };
const getReceiverSocketId = (userId) => {
  return userSocketMap[userId];
};


// Used to store online users {userId: socketId}
const userSocketMap = {}; 
/*---------------------------------------------------------------------------------------*/

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  
  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  // Sabhi clients ko online users ki list bhejna
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    
    if (userId) {
      delete userSocketMap[userId];
    }
    
    // Update ke baad dobara list bhejna
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

module.exports = { io, app, server, getReceiverSocketId };