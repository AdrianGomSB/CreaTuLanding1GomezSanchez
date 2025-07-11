import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="relative flex items-center gap-1 text-black">
      🛒
      <span className="text-sm bg-blue-600 text-white rounded-full px-2">
        {totalItems()}
      </span>
    </Link>
  );
};

export default CartWidget;
