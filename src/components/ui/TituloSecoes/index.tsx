interface TituloSecoesProps {
  titulo: string;
  destaque: string;
}

export default function TituloSecoes({ titulo, destaque }: TituloSecoesProps) {
  return (
    <h2 className="text-3xl font-bold text-center">
      {titulo} <span className="text-yellow-500">{destaque}</span>
    </h2>
  );
}
