const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://rockbhanusamal:rCzDx4AMTZa27NM8@cluster1.yoq36yl.mongodb.net/")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("details", newSchema);

module.exports = collection;
