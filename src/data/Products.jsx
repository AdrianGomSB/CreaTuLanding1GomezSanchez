export const products = [
  { id: "1", nombre: "Camiseta deportiva", categoria: "ropa", precio: 30, imagen: "img/camiseta.jpg" },
  { id: "2", nombre: "Pantalón de vestir", categoria: "ropa", precio: 50, imagen: "img/pantalon.jpg" },
  { id: "3", nombre: "Zapatillas running", categoria: "calzado", precio: 80, imagen: "img/zapatillas.png" },
  { id: "4", nombre: "Sandalias playa", categoria: "calzado", precio: 40, imagen: "img/sandalias.jpg" },
  { id: "5", nombre: "Gorra casual", categoria: "accesorios", precio: 20, imagen: "img/gorra.jpg" },
  { id: "6", nombre: "Mochila", categoria: "accesorios", precio: 60, imagen: "img/mochila.jpg" },
  { id: "7", nombre: "Laptop Lenovo", categoria: "tecnologia", precio: 1200, imagen: "img/laptop.png" },
  { id: "8", nombre: "Smartphone Samsung", categoria: "tecnologia", precio: 999, imagen: "img/smartphone.png" },
  { id: "9", nombre: "Silla ergonómica", categoria: "muebles", precio: 300, imagen: "img/silla.png" },
  { id: "10", nombre: "Escritorio de madera", categoria: "muebles", precio: 500, imagen: "img/escritorio.jpg" },
];

export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getProductById = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 1000);
  });
};
