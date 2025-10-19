import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://bhanudova02_db_user:0YVqvExt6sdbd8oI@cluster0.9pncqpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/companies-directory', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
