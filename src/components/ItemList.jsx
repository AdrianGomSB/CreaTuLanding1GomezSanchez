import Item from "./Item";

const ItemList = ({ productos }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {productos.map(prod => (
      <Item key={prod.id} {...prod} />
    ))}
  </div>
);

export default ItemList;
