import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo_proyecto.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo Tienda" className="w-28 h-auto" />
          </Link>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:bg-mint-600 px-3 py-1 rounded transition">
            Inicio
          </Link>
          <Link to="/categoria/ropa" className="hover:bg-mint-600 px-3 py-1 rounded transition">
            Ropa
          </Link>
          <Link to="/categoria/calzado" className="hover:bg-mint-600 px-3 py-1 rounded transition">
            Calzado
          </Link>
          <Link to="/categoria/accesorios" className="hover:bg-mint-600 px-3 py-1 rounded transition">Accesorios</Link>
          <Link to="/categoria/tecnologia" className="hover:bg-mint-600 px-3 py-1 rounded transition">Tecnología</Link>
          <Link to="/categoria/muebles" className="hover:bg-mint-600 px-3 py-1 rounded transition">Muebles</Link>
        </div>

        <CartWidget />

        {/* Botón hamburguesa */}
        <button className="md:hidden ml-4" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-medium bg-mint-500 text-white">
          <Link to="/" className="hover:bg-mint-600 px-3 py-1 rounded transition">
            Inicio
          </Link>
          <Link to="/categoria/ropa" className="hover:bg-mint-600 px-3 py-1 rounded transition">
            Ropa
          </Link>
          <Link to="/categoria/calzado" className="hover:bg-mint-600 px-3 py-1 rounded transition">
            Calzado
          </Link>
          <Link to="/categoria/accesorios" className="hover:bg-mint-600 px-3 py-1 rounded transition">Accesorios</Link>
          <Link to="/categoria/tecnologia" className="hover:bg-mint-600 px-3 py-1 rounded transition">Tecnología</Link>
          <Link to="/categoria/muebles" className="hover:bg-mint-600 px-3 py-1 rounded transition">Muebles</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
