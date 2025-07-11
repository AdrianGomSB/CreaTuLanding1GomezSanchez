import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "" });
  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, clearCart } = useCart();

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return <h2>¡Gracias por tu compra! Tu número de orden es: {orderId}</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Datos del comprador</h2>
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={buyer.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={buyer.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={buyer.email}
        onChange={handleChange}
        required
      />
      <button type="submit">Finalizar compra</button>
    </form>
  );
};

export default CheckoutForm;
