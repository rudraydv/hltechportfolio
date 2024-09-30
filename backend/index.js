const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your contact form
const contactSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  address: String,
  phone: String,
  services: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// Define the POST route for the contact form
app.post('/api/contact', async (req, res) => {
  const { fullname, email, address, phone, services, message } = req.body;

  const newContact = new Contact({
    fullname,
    email,
    address,
    phone,
    services,
    message,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
