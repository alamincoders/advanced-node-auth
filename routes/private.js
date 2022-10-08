const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middilewares/auth");

router.route("/").get(protect, getPrivateRoute);

module.exports = router;
