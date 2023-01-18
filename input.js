let connection;

const setupInput = () => {
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
    if (key === "\u0003") {
      process.exit();
    }
  });
};

module.exports = { setupInput };
