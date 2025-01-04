require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
