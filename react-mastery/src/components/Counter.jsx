import { useState } from "react";

function Counter(){
    const [count,setCount] = useState(0)

    return(
        <div className="bg-white rounded-xl shadow-md p-8 text-center w-72">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Counter</h2>
            <p className={`text-6xl font-bold mb-8 ${count > 0 ? 'text-green-500' : count < 0 ? 'text-red-500' : 'text-gray-800'}`}>
            {count}
            </p>
            <div className="flex gap-3 justify-center">
                <button
                onClick={()=>setCount(c=>c-1)}
                className="bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full text-2xl transition-all">
                    -
                </button>
                <button
                onClick={()=>setCount(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm transition-all"
                >
                    Reset
                </button>
                <button
                onClick={()=>setCount(c=>c+1)}
                className="bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full text-2xl transition-all"
                >
                    +
                </button>
            </div>

        </div>
    )
}

export default Counter