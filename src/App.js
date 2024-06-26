import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])
  const handleAdd = () => {
    const trimmedWork = work.trim();
    if (trimmedWork === '') {
      toast.warn('Vui lòng nhập công việc');
    }else if (todos?.some(item => item.id === work.replace(/\s/g, ''))) {
      toast.warn('Công việc đã được thêm vào trước đó')
    } else {
      setTodos(prev => [...prev, { id: work.replace(/\s/g, ''), job: work }])
      setWork('')
    }
  }
  const handleDeleteJob = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="flex flex-col gap-8 h-screen justify-center items-center">
        <div className="flex gap-8">
          <input
            className=" outline-none border border-blue-500 px-4 py-2 w-[400px]"
            value={work}
            onChange={e => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">
            Content
          </h3>
          <ul>
            {todos?.map((item, index) => {
              return (
                <li key={index}
                  className=" flex gap-10 items-center"
                >
                  <span className="my-2 ">{item.job}</span>
                  <span onClick={() => handleDeleteJob(item.id)} className="my-2 cursor-pointer px-2 bg-blue-500 rounded-md text-white">X</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>

  );
}

export default App;
