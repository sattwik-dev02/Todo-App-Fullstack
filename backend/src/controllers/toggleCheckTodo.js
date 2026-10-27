import todoSchema from "../models/todoSchema.js";

export const toggleTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await todoSchema.findById(id);
        
        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            })
        }
        // toggle true and false
        todo.check = !todo.check;
        await todo.save();
        return res.status(200).json({
            success: true,
            message: todo.check ? "Todo completed successfully" : "Todo marked as incomplete",
            data: todo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update todo"
        })
    }
}