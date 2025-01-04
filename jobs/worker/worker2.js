const { worker2Queue } = require('../../config/queue');
const connectDB = require('../../config/db');
const worker2Processor = require('../processor/worker2Processor');

(async () => {
  await connectDB();
})();

worker2Queue.process(worker2Processor);

worker2Queue.on('completed', (job) => {
  console.log(`TaskQueue Job ${job.id} completed`);
});

worker2Queue.on('failed', (job, err) => {
  console.error(`TaskQueue Job ${job.id} failed with error: ${err.message}`);
});

console.log('Worker 2 is processing worker2 queue...');
