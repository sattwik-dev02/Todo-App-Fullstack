import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateModal = () => {
    const { register, handleSubmit, formState, setValue } = useForm({});
    const { id } = useParams();

    const navigate = useNavigate();

    async function getById() {
        const api = await axios.get(`http://localhost:8001/todo/getById/${id}`);
        const title = api.data.data.title;
        setValue("title", title);
    }

    async function updateTodo(data) {
        const api = await axios.put(`http://localhost:8001/todo/update/${id}`, data);
        navigate('/');
        toast.success(api.data.message);
    }

    function cancelEdit(){
        navigate('/');
    }

    useEffect(() => {
        getById();
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(updateTodo)}>
                <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-[#F6F740] p-8">
                    <div className="mb-6">
                        <label htmlFor="title" className="text-lg font-semibold leading-7 text-gray-600 mt-3">
                            Todo title:
                        </label>
                        <input
                            type="text"
                            name="title"
                            {...register('title')}
                            className="w-full rounded border bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                        <p className='text-xs text-red-600 font-semibold'>{formState.errors.name?.message}</p>
                    </div>

                    <div className='flex justify-center gap-5'>

                        <button className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" type='submit'>
                            Update
                        </button>
                        <button onClick={cancelEdit} className="rounded border-0 mt-5 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" type='button'>
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateModal