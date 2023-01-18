let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event listener
  handleUserInput(connection);
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on("data", (key) => {
    switch (key) {
    case "w":
      connection.write("Move: up");
      break;

    case "a":
      connection.write("Move: right");
      break;

    case "s":

      connection.write("Move: down");
      break;

    case "d":
      connection.write("Move: left");
      break;

    case "x":
      connection.write('Say: Hi Mom!');
      break;

    case "\u0003":
      process.exit();
    }
  });
};

module.exports = { setupInput };
