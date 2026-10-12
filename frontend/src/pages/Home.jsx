import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../components/Header';
import Footer from '../components/Footer';
import TodoList from '../components/TodoList';
import toast from 'react-hot-toast';

const Home = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const [flag, setFlag] = useState(false);

    async function getAll() {
        try {
            const api = await axios.get("http://localhost:8001/todo/getAll");
            setTodo(api.data.data);
        } catch (error) {
            console.log("Todos can't be fetched: ", error.message);
            toast.error("Error occured while fetching saved Todos");
        }
    }

    async function addTodo() {
        const data = {
            "title": input
        }
        setFlag(false);
        try {
            const api = await axios.post("http://localhost:8001/todo/create", data);
            // console.log(api.data);
            toast.success(api.data.message);
        } catch (error) {
            console.log("Todo not added: ", error.message);
            toast.error("Todo not added");
        }
        finally {
            setInput("");
            setFlag(true);
        }
    }

    useEffect(() => {
        getAll();
    }, [flag]);
    return (
        <>
            <div className='py-3 bg-[#F6F740] w-188 mx-auto mt-5 rounded-xl border-2 border-amber-800'>
                <Header />
                <div className='text-center my-8'>
                    <input className='p-2 text-lg bg-gray-100 w-70 rounded-md border-2 border-gray-500' type="text" value={input} placeholder='Enter task...'
                        onChange={(e) => setInput(e.target.value)}
                        onKeyUp={(e) => { if (e.key === "Enter") addTodo() }} />
                    <button className='p-2 ms-2 text-lg text-white font-bold bg-green-500 rounded-md border-2 border-green-700 cursor-pointer hover:bg-green-600 transition' onClick={addTodo}>Add</button>
                </div>
                <TodoList todo={todo} getAll={getAll} />
            </div>
            <Footer />
        </>
    )
}

export default Home