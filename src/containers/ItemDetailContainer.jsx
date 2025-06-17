import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    getProductById(itemId).then(setProducto);
  }, [itemId]);

  return producto ? <ItemDetail {...producto} /> : <p>Cargando...</p>;
};

export default ItemDetailContainer;
