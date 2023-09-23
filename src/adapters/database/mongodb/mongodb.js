import mongoose from 'mongoose';

export default class DbConnection {
  constructor() {
    this.isConnected = false;
  }

  async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      this.isConnected = true;
      console.log('¡Connected to MongoDB database!');
    } catch (error) {
      console.error('Error connecting to MongoDB database:', error.message);
      throw error;
    }
  }
}
