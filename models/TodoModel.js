import mongoose from 'mongoose';

let todoSchema = mongoose.Schema({
  description: String
});

export default mongoose.model('Todo', todoSchema);
