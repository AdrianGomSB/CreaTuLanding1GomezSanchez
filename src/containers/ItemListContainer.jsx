import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, "products");

    const q = categoriaId
      ? query(productsRef, where("categoria", "==", categoriaId))
      : productsRef;

    getDocs(q)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(items);
      })
      .catch((error) => {
        console.log("Error obteniendo productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaId]);

  if (loading) return <p>Cargando productos...</p>;

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
