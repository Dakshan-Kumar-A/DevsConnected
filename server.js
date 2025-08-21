const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API is running!'))

// Define Routes
app.use('/api/posts', require('./routes/API/posts'));
app.use('/api/profile', require('./routes/API/profile'));
app.use('/api/auth', require('./routes/API/auth'));
app.use('/api/users', require('./routes/API/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`))
