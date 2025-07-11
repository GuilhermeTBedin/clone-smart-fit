import Button from "../../Button";
import { MdBlock } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

interface CardPlanosProps {
  nomePlano: string;
  descricao: string;
  precoPromocional: string;
  preco: string;
  fidelidade?: string;
  destaque?: boolean;
}

export default function CardPlanos({
  nomePlano,
  descricao,
  precoPromocional,
  preco,
  fidelidade,
  destaque = false,
}: CardPlanosProps) {
  const beneficiosComCondicao = [
    "Acesso ilimitado a +1.700 academias",
    "Leve 5 amigos por mes para treinar com voce",
    "Cadeira de massagem",
  ];

  const beneficiosFixos = ["Area de musculacao e aerobicos", "Smart Fit App"];

  return (
    <div
      className={`flex flex-col items-baseline justify-center gap-4 p-8 border border-gray-300 rounded-lg shadow-lg w-xs
      ${destaque ? "bg-zinc-800 text-white" : "bg-white"}`}
    >
      <h3 className="font-bold text-2xl">{nomePlano}</h3>
      <p className={`text-base ${destaque ? "text-white" : "text-gray-500"}`}>
        {descricao}
      </p>
      <p>
        A PARTIR DE <br /> <b className="text-2xl">R${precoPromocional}*</b>{" "}
        <br />{" "}
        <span className="text-sm">
          <b>no 1º mês,</b> depois R${preco}/mês
        </span>
      </p>
      <p className="text-gray-500 text-sm">{fidelidade}</p>
      <Button>{destaque ? "Contratar agora" : "Buscar academia"}</Button>
      <ul className="flex flex-col gap-2 text-sm">
        {beneficiosComCondicao.map((beneficio, index) => (
          <li key={index} className="flex items-center gap-1">
            {destaque ? (
              <>
                <IoCheckmarkDoneCircleOutline
                  className="flex-shrink-0"
                  color="green"
                  size={20}
                />
                <a className="text-base font-bold">{beneficio}</a>
              </>
            ) : (
              <>
                <MdBlock className="flex-shrink-0" size={20} />
                <a className="line-through text-gray-500 text-base">
                  {beneficio}
                </a>
              </>
            )}
          </li>
        ))}

        {beneficiosFixos.map((beneficio, index) => (
          <li key={`fixo-${index}`} className="flex items-center gap-1">
            <IoCheckmarkDoneCircleOutline
              className="flex-shrink-0"
              color="green"
              size={20}
            />
            <a className="text-base font-bold">{beneficio}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
