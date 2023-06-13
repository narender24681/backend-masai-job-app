const express = require("express");
const { JobsModel } = require("../models/Jobs.model");
const jobsRoute = express.Router();


jobsRoute.get("/jobs", async (req, res) => {
    try {
        const jobs = await JobsModel.find();
        console.log(jobs);

        res.status(200).send(jobs);
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
});


jobsRoute.post("/post-jobs", async (req, res) => {
    // console.log(req.body);

    try {
        const jobs = new JobsModel(req.body);
        await jobs.save();
        // console.log(jobs);

        res.status(200).send({"msg": "Job posted successfully"});
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
})


module.exports = {
    jobsRoute
}