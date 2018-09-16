import mongoose from 'mongoose';
// Avoid deprecation warning.
mongoose.set('useFindAndModify', false);

let todoSchema = mongoose.Schema({
  description: String
});

export default mongoose.model('Todo', todoSchema);
