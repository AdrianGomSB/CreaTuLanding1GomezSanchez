import { useState } from "react";

const CartWidget = () => {
  const [showCart, setShowCart] = useState(false);

  const productos = [
    { id: 1, nombre: "Camiseta Verde", cantidad: 1 },
    { id: 2, nombre: "Gorra Negra", cantidad: 2 },
  ];

  return (
    <div className="relative">
      <div
        onClick={() => setShowCart(!showCart)}
        className="cursor-pointer flex items-center gap-1 text-white"
      >
        🛒
        <span className="text-sm bg-blue-600 text-white rounded-full px-2">
          {productos.length}
        </span>
      </div>

      {/* Dropdown de productos */}
      {showCart && (
        <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded shadow-lg z-10">
          <div className="p-4 border-b font-semibold">Tu carrito:</div>
          <ul className="max-h-60 overflow-y-auto">
            {productos.map((item) => (
              <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                {item.nombre}{" "}
                <span className="text-sm text-gray-500">x{item.cantidad}</span>
              </li>
            ))}
          </ul>
          <div className="p-4 border-t text-right">
            <button className="text-blue-600 hover:underline text-sm">
              Ver carrito (Próximamente)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
