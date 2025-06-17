import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => setCount(c => Math.max(1, c - 1))}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(c => Math.min(stock, c + 1))}>+</button>
      <button onClick={() => onAdd(count)} className="bg-blue-500 text-white px-2 py-1 rounded">
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
