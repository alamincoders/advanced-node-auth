require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const ErrorHandler = require("./middilewares/error");

// connect db
connectDB();
//
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
// Error handler (Should be last piece of middleware)
app.use(ErrorHandler);

const server = app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Logged Error : ${error}`);
  server.close(() => process.exit(1));
});
