import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const connectToMongoDB = () => {
  const opts = {
    keepAlive: true,
    keepAliveInitialDelay: 300000,
    socketTimeoutMS: 30000,
    poolSize: 50,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    autoReconnect: true,
  };

  return mongoose.connect('mongodb://mongoAdmin:changeMe@mongodb:27017/auth-for-noobs', opts);
};

export default connectToMongoDB;
