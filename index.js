// express configurations 
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Routes Import 
const blogs = require("./routes/blogs");
const users = require("./routes/users")

const tutors = require("./routes/tutors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Route endpoints 
app.use("/blogs", blogs);
app.use("/users", users);
app.use("/tutors", tutors);

// Server Starting 
app.get("/", (req, res) => {
  res.send("Running EduGenius Server");
});

app.listen(port, () => {
  console.log("Listening to port", port);
})