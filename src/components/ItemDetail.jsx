import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ItemDetail = ({ id, titulo, precio, imagen, descripcion, stock, categoria }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    const item = { id, titulo, precio, imagen, categoria };
    addItem(item, quantity);
    setAdded(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 border rounded shadow bg-white">
      <img src={imagen} alt={titulo} className="w-full md:w-1/2 object-cover rounded" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{titulo}</h2>
        <p className="text-gray-700 mb-4">{descripcion}</p>
        <p className="text-xl text-emerald-600 mb-4">S/ {precio}</p>
        {added ? (
          <p className="text-green-600 font-semibold">¡Producto agregado! ✅</p>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
