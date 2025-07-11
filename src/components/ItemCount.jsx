import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={decrease}
          className="bg-gray-200 px-2 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="font-semibold">{count}</span>
        <button
          onClick={increase}
          className="bg-gray-200 px-2 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
      <button
        onClick={() => onAdd(count)}
        disabled={stock === 0}
        className={`${
          stock === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white px-4 py-1 rounded`}
      >
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
