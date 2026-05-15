import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const installments = product.installments || 1;
  const installmentValue = (product.price / installments).toFixed(2);

  return (
    <Link to={`/product/${product._id || product.id}`} className="flex-col gap-4 block hover:shadow-lg transition-shadow duration-200">
      <img
        src={product.image}
        alt={product.name}
        className="aspect-3/4 rounded-2xl object-cover"
      />
      <div>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.collection || "Coleção"}</p>
      </div>
      <div>
        <p className="flex items-baseline">
          <span className="font-semibold mr-2">R$ {product.price.toFixed(2)}</span>
          <span className="text-gray-500">até </span>
          <span className="font-semibold">{installments}x</span>
          <span className="text-gray-500"> de </span>
          <span className="font-semibold">R$ {installmentValue}</span>
        </p>
      </div>
    </Link>
  );
};

export default Item;