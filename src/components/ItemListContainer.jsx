const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="bg-white text-dark text-center py-10 px-4">
      <h1 className="text-2xl font-semibold">{mensaje}</h1>
      <p className="mt-2 text-gray-600">
        Muy pronto encontrarás aquí nuestros mejores productos 🌟
      </p>
    </div>
  );
};

export default ItemListContainer;
