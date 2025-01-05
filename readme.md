# MultiServer with Bull Jobs

This repository demonstrates a scalable system using Node.js, MongoDB, and Bull jobs. The system includes a main server and worker processes for processing time-consuming tasks asynchronously.

---
# Why Multi-Server Architecture is Important for a Scalable Node.js System

In this document, we will discuss the importance of adopting a multi-server architecture for a scalable Node.js system and the disadvantages of relying solely on a single main server. We will also provide real-life analogies to make these concepts easier to understand.

---

## Importance of Multi-Server Architecture

### 1. **Load Distribution**
A single server can become overwhelmed when handling too many requests simultaneously. Multi-server setups distribute the load, ensuring smooth performance.
- **Analogy**: Imagine a single cashier in a busy supermarket. As customers increase, the queue grows longer, and service slows down. Adding more cashiers (servers) reduces wait times and improves efficiency.

### 2. **Fault Tolerance and Reliability**
In a multi-server system, if one server goes down, others can continue serving requests, reducing downtime and ensuring higher availability.
- **Analogy**: Think of a relay race. If one runner gets injured, another team member can step in to finish the race. With only one runner, the team would fail if the runner couldn't continue.

### 3. **Scalability**
Multi-server systems can handle increasing user demand by adding more servers as needed, ensuring the application grows with its user base.
- **Analogy**: Imagine a restaurant with a single chef. As more diners arrive, the chef struggles to serve everyone on time. Adding more chefs allows the restaurant to serve more customers efficiently.

### 4. **Specialization of Tasks**
Different servers can specialize in specific tasks, optimizing performance for each type of workload.
- **Analogy**: In a manufacturing plant, workers assigned specific tasks (e.g., assembling, packaging, quality control) complete the job faster and more efficiently than one worker doing everything.

---

## Disadvantages of Using Only a Main Server

### 1. **Single Point of Failure**
If the main server fails, the entire system goes down, causing significant disruptions.
- **Analogy**: Imagine a single power line supplying electricity to a city. If it fails, the entire city goes dark.

### 2. **Performance Bottleneck**
A single server may not handle the growing load as the user base expands, leading to slow response times and degraded user experience.
- **Analogy**: A single water pump supplying a large village would result in slow water delivery during peak usage.

### 3. **Limited Scalability**
Scaling a single server involves upgrading hardware, which has physical and financial limitations. Multi-server setups offer horizontal scalability by simply adding more servers.
- **Analogy**: Expanding a small shop by making it taller has limits, but opening more branches accommodates more customers without those restrictions.

### 4. **Inflexibility**
A single server cannot specialize or prioritize tasks efficiently. Multi-server setups allow dedicated workers to handle time-consuming or resource-intensive tasks without blocking others.
- **Analogy**: A teacher managing all grades in a school would struggle to give attention to each class. Multiple teachers for different grades ensure focused and effective education.

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
|   |   └── worker2Processor.js   # Job processing logic for worker2
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


