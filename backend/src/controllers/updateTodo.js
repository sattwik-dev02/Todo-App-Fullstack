import todoSchema from "../models/todoSchema.js";

export const updateTodo = async (req, res) => {
  try {
    const { title } = req.body;
    // console.log(title);

    const todoId = req.params.id;
    // console.log(todoId);

    const data = await todoSchema.findOne({
      _id: todoId,
    });
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }
    data.title = title;

    await data.save();
    // console.log(data);

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
