import axios from 'axios'
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import DeleteModal from './DeleteModal';
import { Link } from 'react-router-dom';

const Card = ({ title, index, id, getAll }) => {
  const [delModal, setDelModal] = useState(false);
  const [todoToDel, setTodoToDel] = useState(null);

  function handelDelModal(id) {
    setDelModal(true);
    setTodoToDel(id);
  }

  function cancelDel() {
    setDelModal(false);
    setTodoToDel(null);
  }

  async function confirmDel() {
    try {
      const api = await axios.delete(`http://localhost:8001/todo/delete/${todoToDel}`);
      setDelModal(false);
      setTodoToDel(null);
      toast.success(api.data.message);
      getAll();
    } catch (error) {
      console.log("Todo not deleted: ", error.message);
      toast.error("Todo not deleted");
    }
  }

  // async function delTodo(id) {
  //   console.log(id);
  //   const api = await axios.delete(`http://localhost:8001/todo/delete/${id}`);
  //   console.log(api.data);
  //   toast.success(api.data.message);
  //   getAll();
  // }
  return (
    <div className='my-2 p-2 flex justify-between items-center gap-2 border border-black bg-[#61F2C2] w-[55%] mx-auto rounded-md'>
      <div className='ms-1 text-lg overflow-auto'><b>{index+1}.</b> {title}</div>
      <div className='flex justify-center items-center gap-2'>
        <Link to={`/update/${id}`}>
          <button className='p-2 text-2xl text-white bg-lime-400 border border-lime-700 rounded cursor-pointer hover:bg-lime-600 transition'><FaRegEdit /></button>
        </Link>
        <button className='p-2 text-2xl text-white bg-red-500 border border-red-800 rounded cursor-pointer hover:bg-red-700 transition' onClick={() => handelDelModal(id)}><MdDeleteOutline /></button>
        {delModal && <DeleteModal confirmDel={confirmDel} cancelDel={cancelDel} />}
      </div>
    </div>
  )
}

export default Card