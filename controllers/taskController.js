const Task = require('../models/task.model');
const bullConfig = require('../constants')
const { worker1Queue, anotherQueue } = require('../config/queue');

exports.createTask = async (req, res) => {
  try {
    const { data2, data1 } = req.body;
    const queueNme = bullConfig.bullQueuesConfig.worker1.name;
    // create jobs in database
    const taskId = await Task.insertMany(
      { status: 'created',jobType:"worker_1_job"},
      { new: true }
    );
    const parentJobId = taskId[0]?._doc?._id?.toString();
    console.log("Queue Name is ", queueNme, parentJobId);

    // create the bull payload
    const payload = {
      data2,
      data1,
      parentJobId,
      jobType:"worker_1_job",
    } 
    // Create the bull jobs
    const childJob = await worker1Queue.add(payload);
    
    // Update the parentJobs
    const task = await Task.findByIdAndUpdate(
      parentJobId,
      { $push: { jobs: childJob?.id } },
    );

    res.status(201).json({ message: `Task queued in ${queueNme}`, task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};

exports.createTask2 = async (req, res) => {
  try {
    const { data2, data1 } = req.body;
    const queueNme = bullConfig.bullQueuesConfig.worker1.name;
    // create jobs in database
    const taskId = await Task.insertMany(
      { status: 'created',jobType:"worker_2_job"},
      { new: true }
    );
    const parentJobId = taskId[0]?._doc?._id?.toString();
    console.log("Queue Name is ", queueNme, parentJobId);

    // create the bull payload
    const payload = {
      data2,
      data1,
      parentJobId,
      jobType:"worker_2_job",
    } 
    // Create the bull jobs
    const childJob = await worker1Queue.add(payload);
    
    // Update the parentJobs
    const task = await Task.findByIdAndUpdate(
      parentJobId,
      { $push: { jobs: childJob?.id } },
    );

    res.status(201).json({ message: `Task queued in ${queueNme}`, task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating task', error: error.message });
  }
};
