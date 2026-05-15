import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/products/${id}`);

        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Produto não encontrado");
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Erro ao buscar produto:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400"></div>
          <p className="mt-2 text-gray-500">Carregando produto...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
          <Link to="/" className="mt-4 px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500">
            Voltar para home
          </Link>
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="text-center">
          <p>Produto não encontrado</p>
          <Link to="/" className="mt-4 px-4 py-2 bg-primary-400 text-white rounded-md hover:bg-primary-500">
            Voltar para home
          </Link>
        </div>
      </section>
    );
  }

  const installments = product.installments || 1;
  const installmentValue = (product.price / installments).toFixed(2);

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description || "Descrição não disponível"}</p>

              <div className="mb-4">
                <span className="text-xl font-semibold">R$ {product.price.toFixed(2)}</span>
                <p className="text-sm text-gray-500 mt-1">
                  ou até {installments}x de R$ {installmentValue}
                </p>
              </div>

              <div className="mb-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {product.collection || "Coleção"}
                </span>
              </div>

              <div className="mb-6">
                <button
                  className="w-full bg-primary-400 text-white font-bold py-2 px-4 rounded hover:bg-primary-500 transition-colors flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 3.8-2.2-3.8M5 13h14"></path>
                  </svg>
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-6 text-center">
          <Link to="/" className="text-primary-400 hover:text-primary-500">
            ← Voltar para a loja
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;