const express = require("express");
const app = express();
require("dotenv").config();
var cors = require('cors');
const port = process.env.PORT | 8080;
const { dbConnect } = require("./db");
const { jobsRoute } = require("./routes/Jobs.route");

app.use(express.json());
app.use(cors());
app.use("/", jobsRoute);

app.listen(port, async () => {
    try {
        await dbConnect;
        console.log("Cannected to the Database");
    }
    catch(err) {
        console.log(err);
        console.log("Cannot connect to the Database");
    }
    console.log(`Server is running on the port: ${port}`);
})
