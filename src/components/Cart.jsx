import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center text-xl mt-10">El carrito está vacío 😢</h2>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Tu carrito</h2>
      <div className="space-y-4">
        {cart.map((prod) => (
          <CartItem key={prod.id} {...prod} />
        ))}
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        <h3 className="text-xl font-semibold">Total: S/ {totalPrice()}</h3>
        <div className="flex gap-3">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Vaciar carrito
          </button>
          <Link to="/checkout">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
              Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
