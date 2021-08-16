const routes = require("express").Router();
require("../db/connection");
const Group = require("../model/Group");

routes.post("/add", async (req, res) => {
  const newData = new Group(req.body);
  try {
    await newData.save();
    res.status(201).send(newData);
  } catch (e) {
    res.status(400).send({ error: "error" });
  }
  console.log(newData);
});

routes.get("/", async (req, res) => {
  try {
    const data = await Group.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

// routes.patch("/edit/:id", async (req, res) => {
//   const id = req.params.id;
//   const updates = req.body;
//   try {
//     await DataSheet.findByIdAndUpdate(id, updates);
//     res.status(200).send({ msg: "success" });
//   } catch (e) {
//     res.status(400).send({ error: e });
//   }
// });

routes.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Group.findByIdAndDelete(id);
    res.status(200).send({ msg: "deleted" });
  } catch (e) {
    res.status(400).send({ error: e });
  }
});

module.exports = routes;
