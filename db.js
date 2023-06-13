const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = mongoose.connect(process.env.MONGODBURL);

module.exports = {
    dbConnect
}