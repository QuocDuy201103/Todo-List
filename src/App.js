import { useState } from "react";

function App() {
  const [work, setwork] = useState('')
  console.log(work);
  return (
    <div className="flex gap-8 h-screen justify-center items-center">
      <input
        className=" outline-none border border-blue-500 px-4 py-2 w-[400px]"
        value={work}
        onChange={e => setwork(e.target.value)}
      />
      <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
      >
        Add
      </button>
    </div>
  );
}

export default App;
