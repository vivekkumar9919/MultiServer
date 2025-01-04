const Queue = require('bull');
const redis = require('./redis');
const bullConfig = require('../constants')

// Function to create a new queue
const createQueue = (queueName) => {
  return new Queue(queueName, {
    redis: {
      port: process.env.REDIS_PORT || 6379,
      host: process.env.REDIS_HOST || '127.0.0.1',
    },
  });
};

// Export queues
const queues = {
  worker1Queue: createQueue(bullConfig.bullQueuesConfig.worker1.name), 
  worker2Queue: createQueue(bullConfig.bullQueuesConfig.worker2.name), 
};

module.exports = queues;
