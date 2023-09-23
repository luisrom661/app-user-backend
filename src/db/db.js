import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('¡Connected to MongoDB database!');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error.message);
    throw error;
  }
};
