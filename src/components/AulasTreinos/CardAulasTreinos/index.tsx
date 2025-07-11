import { TbClockHour3 } from "react-icons/tb";
import { RiBatteryChargeLine } from "react-icons/ri";

interface CardAulasTreinosProps {
  titulo: string;
  descricao: string;
  duracao: string;
  intensidade: string;
  imagem: string;
}

export default function CardAulasTreinos({
  titulo,
  descricao,
  duracao,
  intensidade,
  imagem,
}: CardAulasTreinosProps) {
  return (
    <div className="max-w-71 max-h-125 flex flex-col rounded-2xl shadow-xl border-2 border-transparent hover:border-amber-400 transition-all duration-500 ease-in-out">
      <img
        src={`/assets/${imagem}.webp`}
        alt=""
        className="rounded-t-2xl w-72 h-40"
      />
      <a
        href=""
        className="text-center bg-amber-400 p-2 font-semibold uppercase"
      >
        {titulo}
      </a>
      <div className="flex justify-between mx-7 p-4 border-b-1 border-zinc-400">
        <div className="flex flex-col items-center">
          <TbClockHour3 size={32} />
          <p className="font-bold text-sm">Duracao</p>
          <p className="text-sm">{duracao}</p>
        </div>
        <div className="flex flex-col items-center ">
          <RiBatteryChargeLine size={32} />
          <p className="font-bold text-sm">Intensidade</p>
          <p className="text-sm capitalize">{intensidade}</p>
        </div>
      </div>
      <p className="text-sm py-4 px-6">{descricao}</p>
      <a href="" className="text-center pb-4 font-semibold text-sm">
        Saiba mais
      </a>
    </div>
  );
}
