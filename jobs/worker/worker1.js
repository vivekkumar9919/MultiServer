const { worker1Queue } = require('../../config/queue');
const connectDB = require('../../config/db');
const worker1Processor = require('../Processor/worker1Processor');

(async () => {
  await connectDB();
})();

worker1Queue.process(worker1Processor);

worker1Queue.on('completed', (job) => {
  console.log(`TaskQueue Job ${job.id} completed`);
});

worker1Queue.on('failed', (job, err) => {
  console.error(`TaskQueue Job ${job.id} failed with error: ${err.message}`);
});

console.log('Worker 1 is processing worker1 queue...');
