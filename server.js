const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });
const app = require('./app');

const DB = process.env.DB.replace('<PASSWORD>', process.env.DBPASS);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
