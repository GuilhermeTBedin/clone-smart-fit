import imagem from "/assets/banner.avif";

export default function BannerFranqueado() {
  return (
    <div className="bg-amber-400 flex justify-between items-center mb-10">
      <div className="px-32">
        <h1 className="font-extrabold text-5xl mb-5">
          Faça parte da maior rede de academias da América Latina{" "}
        </h1>
        <p className="text-xl">
          e da maior rede de franquias do segmento fitness do Brasil.
        </p>
      </div>
      <img src={imagem} alt="" />
    </div>
  );
}
