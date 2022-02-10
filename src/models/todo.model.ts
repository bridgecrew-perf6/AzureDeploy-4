import mongoose, { Schema } from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    isFinished: { type: Boolean, default: false },
    description: { type: String },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
