const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const eventSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  location: String,
  email: String
});

const Event = mongoose.model("Event", eventSchema);

mongoose.connect('mongodb://localhost:27017/yourdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.post("/api/join", async (req, res) => {
  const { email, message, eventName } = req.body;

  try {
    const event = new Event({
      name: eventName,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      location: "Online",
      email: email
    });
    await event.save();

    res.status(200).json({ message: "Event details saved successfully" });
  } catch (error) {
    console.error("Failed to save event details:", error);
    res.status(500).json({ error: "Failed to save event details", details: error.message });
  }
});

app.get("/allData", async (req, res) => {
  try {
    const users = await collection.find({});
    const events = await Event.find({});

    const allData = {
      users: users,
      events: events
    };

    res.json(allData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/allData/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedData = await collection.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/allData/events/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedData = await Event.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.delete("/allData/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedData = await collection.findByIdAndDelete(id);
    if (!deletedData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email === "admin@gmail.com" && password === "1234") {
      res.json({ role: "admin", email });
    } else {
      const user = await collection.findOne({ email, password });
      if (user) {
        res.json({ role: "user", email });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const data = {
    email: email,
    password: password
  };

  try {
    const check = await collection.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.insertMany([data]);
    }
  } catch (e) {
    res.json("fail");
  }
});

const upload = multer({ dest: "uploads/" });

const joinSchema = new mongoose.Schema({
  email: String,
  message: String,
  imagePath: String
});

const Join = mongoose.model("Join", joinSchema);

app.post("/api/join", upload.single("image"), (req, res) => {
  const { email, message } = req.body;
  const imagePath = req.file.path;

  const join = new Join({ email, message, imagePath });

  try {
    join.save();
    res.status(200).json({ message: "Joined successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to join", details: error });
  }
});
app.post("/addEvent", async (req, res) => {
  const { name, date, time, location } = req.body;

  try {
    const event = new Event({ name, date, time, location });
    await event.save();
    res.status(201).json({ message: "Event added successfully" });
  } catch (error) {
    console.error("Failed to add event:", error);
    res.status(500).json({ error: "Failed to add event", details: error.message });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
