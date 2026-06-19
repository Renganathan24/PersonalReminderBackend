const app = require('./app');
const connectDB = require('./config');

// connect DB
connectDB();

app.listen(5000, () => {
  console.log('🚀 Server running on 5000');
});