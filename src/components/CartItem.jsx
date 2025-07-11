import { useCart } from "../context/CartContext";

const CartItem = ({ id, titulo, precio, quantity }) => {
  const { removeItem } = useCart();

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h4>{titulo}</h4>
      <p>Precio: S/ {precio}</p>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: S/ {precio * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};


export default CartItem;
