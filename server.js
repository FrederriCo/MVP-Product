const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const adTextRouter = require('./routers/adText');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/adText', adTextRouter);

app.get('/', (req, res) => {
  res.send('MVP API is running....');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});