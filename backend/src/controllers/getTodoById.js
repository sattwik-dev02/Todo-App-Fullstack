import todoSchema from "../models/todoSchema.js";

export const getTodoById = async (req, res) => {
  try {
    const todoId = req.params.id;
    const data = await todoSchema.findOne({ _id: todoId });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Todo fetched successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
