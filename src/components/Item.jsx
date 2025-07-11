import { Link } from "react-router-dom";

const Item = ({ id, titulo, precio, imagen }) => (
  <div className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
    <img
      src={imagen}
      alt={titulo}
      className="w-full h-48 object-contain bg-gray-100 p-2"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-800">{titulo}</h3>
      <p className="text-emerald-600 font-semibold">Precio: S/ {precio}</p>
      <Link to={`/item/${id}`} className="text-blue-500 text-sm hover:underline">
        Ver detalle
      </Link>
    </div>
  </div>
);

export default Item;
