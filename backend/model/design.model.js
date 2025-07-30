import mongoose from 'mongoose';

const DesignSchema = new mongoose.Schema({
  userId: String,
  roomImage: String,
  dimensions: {
    length: String,
    width: String
  },
  style: String,
  aiOutput: Object
});

export default mongoose.model('Design', DesignSchema);
