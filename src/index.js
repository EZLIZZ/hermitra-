// require('dotenv').config()
// const express = require("express");
// const mongoose = require('mongoose');
// const app = express();
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch((err) => console.error(err));

// app.get('/', (req, res) => {
//   res.send('Welcome to HerMitra Backend');
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

import 'dotenv/config';
import connectDb from './db/mongoose.connect.js';
import app from "./app.js";

const port = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB or starting server:", error);
  });

