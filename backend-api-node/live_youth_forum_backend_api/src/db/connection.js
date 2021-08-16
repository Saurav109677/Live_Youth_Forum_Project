const Mongoose = require("mongoose");

const db_url =
  "mongodb+srv://quizAdmin:DdWggDT2jrkA86yZ@cluster0.izyp9.mongodb.net/quiz-app?retryWrites=true&w=majority";

const Connect = Mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then((data) =>
  console.log("Database connected!").catch((err) => console.log("error"))
);

module.exports = Connect;
