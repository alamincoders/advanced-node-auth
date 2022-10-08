require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");

// connect db
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

const server = app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error : ${error}`);
  server.close(() => process.exit(1));
});
