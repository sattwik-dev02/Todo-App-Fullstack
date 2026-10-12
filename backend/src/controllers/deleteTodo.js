import todoSchema from "../models/todoSchema.js";

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const data = await todoSchema.findOneAndDelete({
      _id: todoId,
    });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "no such todo found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
