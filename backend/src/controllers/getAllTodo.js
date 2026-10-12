import todoSchema from "../models/todoSchema.js";

export const getAllTodo = async (req, res) => {
  try {
    const data = await todoSchema.find({});
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Todos fetched successfully",
        data: data,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
