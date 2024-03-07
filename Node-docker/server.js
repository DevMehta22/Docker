require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/postRoutes");
const authrouter = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/posts", router);
app.use("/api/auth",authrouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello User!!</h1>");
});

const connectWithRetry = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Successfully connected to DB!");
    })
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.listen(process.env.PORT || 3000, (err) => {
  if (err) throw err;
  console.log(`server is up and running!`);
});
