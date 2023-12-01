const express = require("express");
const mongodb = require("mongodb");
const dbConnect = require("./mongodb");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.insertOne(req.body);
  res.send(data);
});

app.put("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.updateOne({ name: req.body.name }, { $set: req.body });
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  let data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);
