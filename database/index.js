const server = require("./src/server");

const { Character, Film } = require("./src/database");

Film.list().then((res) => console.log(res));

server.listen(8004, () => {
  console.log("Database service PORT 8004");
});
