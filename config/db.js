const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Kết nối MongoDB (thay đổi URL và tên database theo nhu cầu)
    await mongoose.connect('mongodb://root:root@localhost:27017/inventory-db?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
