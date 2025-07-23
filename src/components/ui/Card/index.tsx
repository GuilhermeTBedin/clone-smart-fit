interface CardProps {
  imagem: string;
  descricao: string;
}

export default function Card({ imagem, descricao }: CardProps) {
  return (
    <figure className="w-75 h-70 rounded-2xl shadow-xl border-3 border-transparent hover:border-amber-400 transition-all duration-500 ease-in-out">
      <img
        src={`/assets/${imagem}.webp`}
        alt={descricao}
        className="rounded-t-2xl cover h-60"
      />
      <figcaption className="p-2 text-center text-sm font-medium">
        {descricao}
      </figcaption>
    </figure>
  );
}
