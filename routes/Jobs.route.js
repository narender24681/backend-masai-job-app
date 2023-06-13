const express = require("express");
const { JobsModel } = require("../models/Jobs.model");
const jobsRoute = express.Router();

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


jobsRoute.get("/jobs", async (req, res) => {
    let {page} = req.query;
    console.log(page);

    try {
        if (page >= 1) {
            page -= 1;
        }
        else {
            page = 0;
        } 
        // console.log(page);


        const jobs = await JobsModel.find().limit(1).skip(page);
        // console.log(jobs);

        res.status(200).send(jobs);
    }
    catch(err) {
        res.status(401).send({"err": err.message});
    }
});


module.exports = {
    jobsRoute
}