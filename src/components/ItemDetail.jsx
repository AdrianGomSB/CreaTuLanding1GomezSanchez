import ItemCount from "./ItemCount";

const ItemDetail = ({ nombre, precio, imagen }) => (
  <div className="flex flex-col md:flex-row gap-6 p-4 border rounded shadow bg-white">
    <img src={imagen} alt={nombre} className="w-full md:w-1/2 object-cover rounded" />
    <div>
      <h2 className="text-2xl font-bold mb-2">{nombre}</h2>
      <p className="text-xl text-emerald-600 mb-4">S/ {precio}</p>
      <ItemCount initial={1} stock={10} onAdd={(qty) => console.log(`Agregado: ${qty}`)} />
    </div>
  </div>
);


export default ItemDetail;
