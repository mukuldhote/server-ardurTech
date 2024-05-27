require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const verificationRoutes = require('./routes/verificationRoutes');
require('./config/dbConfig'); // Ensure the database is connected

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/verification', verificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
