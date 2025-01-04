const Task = require('../../models/task.model');

const worker1Processor = async (job) => {
  const {data, parentJobId} = job.data;
  const jobId = job.id
  console.log(`Processing task ${jobId} in example job`);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const task = await Task.findByIdAndUpdate(
    parentJobId,
    { status: 'completed', $push: { finishedJob: jobId } },
    { new: true }
  );
  console.log(`Task ${jobId} completed in example job`);
};

module.exports = worker1Processor;
