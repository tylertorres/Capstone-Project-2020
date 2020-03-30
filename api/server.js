const express = require('express');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error');
const app = express();

// Allows middleware
app.use(express.json({ extended: false }));

// Route Files
const auth = require('./routes/auth');
const users = require('./routes/users');
const assets = require('./routes/assets');
const requests = require('./routes/requests'); // come back to this
const testimonials = require('./routes/testimonials');

// Loading env vars
dotenv.config({ path: './config/config.env' });

// Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/assets', assets);
app.use('/api/v1/requests', requests);
app.use('/api/v1/testimonials', testimonials);

app.use(errorHandler);

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

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
