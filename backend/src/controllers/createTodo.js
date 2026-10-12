import todoSchema from "../models/todoSchema.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const data = await todoSchema.create({
      title,
    });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Todo created successfully",
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

