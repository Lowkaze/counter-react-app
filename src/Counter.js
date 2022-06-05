import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(currCount => currCount + 1);
  }

  const decrementCount = () => {
    setCount(currCount => currCount - 1);
  }

  return (
    <div className="bg-zinc-900 w-full h-screen flex items-center justify-center gap-10 text-center">
      <button
        className="bg-white rounded text-zinc-900 text-9xl pb-7 h-36 w-36 flex items-center justify-center hover:bg-gray-200"
        onClick={incrementCount}
      >
        +
      </button>
      <span className="text-white text-9xl pb-3">{count}</span>
      <button
        className="bg-white rounded text-zinc-900 text-9xl pb-7 h-36 w-36 flex items-center justify-center hover:bg-gray-200"
        onClick={decrementCount}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
