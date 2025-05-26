import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CartWidget from "./CartWidget";
import logo from "../assets/logo_proyecto.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-mint-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo grande */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo Tienda"
            className="w-28 h-auto" // aquí aumentamos el tamaño
          />
        </div>

        {/* Enlaces para escritorio */}
        <div className="hidden md:flex gap-6 font-medium">
          <a
            href="#"
            className="hover:bg-mint-600 px-3 py-1 rounded transition"
          >
            Inicio
          </a>
          <a
            href="#"
            className="hover:bg-mint-600 px-3 py-1 rounded transition"
          >
            Productos
          </a>
          <a
            href="#"
            className="hover:bg-mint-600 px-3 py-1 rounded transition"
          >
            Contacto
          </a>
        </div>

        <CartWidget />

        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 font-medium bg-mint-500 text-white">
          <a
            href="#"
            className="hover:bg-mint-600 px-3 py-1 rounded transition"
          >
            Inicio
          </a>
          <a
            href="#"
            className="hover:bg-mint-600 px-3 py-1 rounded transition"
          >
            Productos
          </a>
          <a
            href="#"
            className="hover:bg-mint-600 px-3 py-1 rounded transition"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
