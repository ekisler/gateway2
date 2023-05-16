const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs.js");

const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model(
//   "Character",
//   require("./schemas/characterSchema.js")
// );
// const Film = conn.model("Film", require("./schemas/filmSchema.js"));
// Character.find()
//   .populate("films", ["_id", "title"])
//   .then((res) => console.log(res[0]));

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema.js")),
  Film: conn.model("Film", require("./schemas/filmSchema.js")),
  Planet: conn.model("Planet", require("./schemas/planetSchema.js"))
};
