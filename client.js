const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // initialize player name
  conn.on("connect", () => {
    conn.write("Name: ALX");
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // conn.on("connect", () => {
  //   for (let i = 0; i < 10; i++) {
  //     setTimeout(() => {
  //       conn.write("Move: up");
  //       // conn.write('Move: left');
  //     }, i * 250);
  //   }
  // });

  // conn.on("connect", () => {
  //   let times = 0;
  //   const interval = setInterval(() => {
  //     times++;
  //     // conn.write('Move: down');
  //     conn.write("Move: left");
  //     if (times === 10) {
  //       return clearInterval(interval);
  //     }
  //   }, 250);
  // });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };
