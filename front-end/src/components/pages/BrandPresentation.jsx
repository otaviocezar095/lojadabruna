import React from "react";
import { Link } from "react-router-dom";

const BrandPresentation = () => {
  return (
    <section className="py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Loja da Bruna</h1>
          <p className="text-xl mb-8">Moda feminina com estilo e qualidade</p>
          <Link to="/" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50/20">
            Coleções
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Nossa História</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            A Loja da Bruna nasceu do desejo de oferecer moda feminina que una conforto, estilo e qualidade.
            Cada peça é cuidadosamente selecionada para atender mulheres que buscam se sentir confiantes e
            belles em qualquer ocasião.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Trabalhamos com fornecedores confiáveis e materiais de primeira linha para garantir que você
            receba produtos que superem suas expectativas. Nosso compromisso é com a satisfação do cliente
            e com a moda sustentável.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Nossos Valores</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.029 9-11.622 0-1.556-.389-3.054-1.054-4.23z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold ml-3">Qualidade</h3>
              </div>
              <p className="text-gray-600">
                Selecionamos cuidadosamente cada peça, garantindo materiais duráveis e acabamentos impecáveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold ml-3">Estilo</h3>
              </div>
              <p className="text-gray-600">
                Tendências atualizadas com peças versáteis que se adaptam ao seu dia a dia e momentos especiais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-9 3a4 4 0 118 0v3a4 4 0 00-8 0V15zm14 2a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold ml-3">Compromisso</h3>
              </div>
              <p className="text-gray-600">
                Estamos aqui para você, desde a escolha da peça até o pós-venda, garantindo sua total satisfação.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Descubra nossa coleção</h2>
          <p className="text-gray-600 mb-8">
            Encontre o look perfeito para expressar sua personalidade e estilo único.
          </p>
          <Link to="/" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700">
            Ver produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandPresentation;