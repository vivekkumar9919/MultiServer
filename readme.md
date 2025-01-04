# MultiServer with Bull Jobs

This repository demonstrates a scalable system using Node.js, MongoDB, and Bull jobs. The system includes a main server and worker processes for processing time-consuming tasks asynchronously.

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/vivekkumar9919/MultiServer
cd multiserver
```

### Install Dependencies
```bash
npm install
```

### Start Redis and MongoDB
Start the required services using Docker Compose:
```bash
docker-compose up
```

### Launch Servers
1. Open your code editor (e.g., VS Code).
2. Use the debugger (`launch.json`) to start the following:
   - Main Server
   - Worker1
   - Worker2

---

# Project Directory Structure

This document provides an overview of the directory structure and purpose of each file/folder in the project.

```
multiserver/
├── .vscode/
│   ├── launch.json         # launch file to start the server
├── config/
│   ├── db.js               # MongoDB configuration
│   ├── redis.js            # Redis configuration for Bull
│   ├── queue.js            # Queue configuration (centralized)
├── jobs/
│   ├── processor/
│   │   └── worker1Processor.js   # Job processing logic for worker1
|   |   └── worker2Processor.js   # Job processing logic for worker1
│   ├── worker/
│   │   └── worker1.js        # Job definition for worker1 queue
│   │   └── worker1.js        # Job definition for worker2 queue
├── controllers/
│   ├── taskController.js  # Task controller to handle requests
├── routes/
│   ├── taskRoutes.js      # Routes for task-related APIs
├── models/
│   ├── task.model.js       # MongoDB model for task
├── index.js                  # Main server entry point
├── package.json            # Project dependencies
├── constant.js             # Constant file
├── docker-compose.yml      # Docker file for redis and mongo server
├── .env                    # Environment variables
└── README.md               # Documentation
```

---

## API Endpoints

### Process Job in Worker1
Send a request to the following endpoint to process a job using Worker1:
```bash
POST /api/worker1
```

### Process Job in Worker2
Send a request to the following endpoint to process a job using Worker2:
```bash
POST /api/worker2
```

---

## Debugging
Use the debugger to monitor server and worker activity, ensuring all components are running smoothly.

---

## Dependencies
- [Node.js](https://nodejs.org/)
- [Bull](https://github.com/OptimalBits/bull)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)

---


