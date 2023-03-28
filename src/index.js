require('dotenv/config');

// server connection
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// listening api
app.listen(process.env.PORT, () => {
  console.log(`API listening at port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  return res.status(200).json({
    response: 'success',
  });
});

// routes
const UserRoutes = require('./routes/UserRoutes');
app.use('/user', UserRoutes);
