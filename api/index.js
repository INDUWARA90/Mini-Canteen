const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const userRoutes = require('../routes/userRoutes');
const foodRoutes = require('../routes/foodRoutes');
const orderRoutes = require('../routes/orderRoutes');

const app = express();

// Middleware
app.use(cors()); // Optional: allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

// Start Server
const PORT = process.env.PORT || 5001;

// Connect once
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ DB error:", err));

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);


//to check api runnig on browser
app.get('/', (req, res) => {
    res.send('<h1>Campus Canteen API is running </h1>');
});


app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});

