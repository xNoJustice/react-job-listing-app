import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center mx-auto p-6 dark:text-white text-2xl font-bold">
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <button
        className="mt-5 bg-blue-500 border-blue-500 p-2 rounded-md"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
