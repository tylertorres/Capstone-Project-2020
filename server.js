const express = require('express');
const dotenv = require('dotenv');

// Route Files

// Loading env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);

/* Mongo Models */
/* User */
/* Request / Interactions */
/* Testimonials */
/* Portfolio Model */
/* Images */
