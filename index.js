const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT | 8080;
var cors = require('cors')

app.use(cors());

app.listen(port, () => {
    console.log(`Server is running on the port: ${port}`);
})
