const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://yabusha:yabusha@cluster0.bov12er.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
