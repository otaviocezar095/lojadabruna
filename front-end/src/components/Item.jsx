const Item = () => {
  return (
    <a href="/" className="flex-col gap-4">
      <img
        src="https://lojafarm.vtexassets.com/arquivos/ids/3658790-1743-2614/351174_53974_2-REGATA-LIRIO-TROPICAL-LENCO.jpg?v=638914000688500000"
        alt="imagem conjunto"
        className="aspect-3/4 rounded-2xl"
      />
      <div>
        <h3 className="text-xl font-semibold">Lírio Tropical</h3>
        <p className="text-gray-500">Coleção de verão</p>
      </div>
      <div>
        <p>
          <span className="font-semibold">R$ 160,30</span>até{" "}
          <span className="font-semibold">10x</span> de{" "}
          <span className="font-semibold">17,03</span>
        </p>
      </div>
    </a>
  );
};

export default Item;
