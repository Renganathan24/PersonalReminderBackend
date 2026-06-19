const app = require('./src/app');
const connectDB = require('./src/config');

// connect DB
connectDB();

app.listen(5000, () => {
  console.log('🚀 Server running on 5000');
});