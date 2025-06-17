import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProducts().then(data => {
      if (categoriaId) {
        setProductos(data.filter(p => p.categoria === categoriaId));
      } else {
        setProductos(data);
      }
    });
  }, [categoriaId]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {categoriaId ? `Categoría: ${categoriaId}` : "Catálogo completo"}
      </h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
