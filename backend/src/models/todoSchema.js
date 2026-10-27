import mongoose from "mongoose";
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    check: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("todoApp", todoSchema);
