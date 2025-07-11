import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, "products", itemId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No existe el producto");
        }
      } catch (error) {
        console.log("Error obteniendo producto:", error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;

  if (!product) return <p>Producto no encontrado 😢</p>;

  return (
    <ItemDetail
      id={product.id}
      titulo={product.titulo}
      precio={product.precio}
      imagen={product.imagen}
      descripcion={product.descripcion}
      stock={product.stock}
      categoria={product.categoria}
    />
  );
};

export default ItemDetailContainer;