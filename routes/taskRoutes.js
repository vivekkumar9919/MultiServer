const express = require('express');
const { createTask, createTask2} = require('../controllers/taskController');

const router = express.Router();

router.post('/worker1', createTask);
router.post('/worker2', createTask2);

module.exports = router;
