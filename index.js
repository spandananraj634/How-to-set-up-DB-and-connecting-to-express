require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express(); //calling express function
app.use(express.json()); //json format data

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/inventoryDB';
const PORT = process.env.PORT || 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})

.catch((err) => {
  // Print exact required message with error details
  console.log(`Error connecting to MongoDB: ${err}`);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});